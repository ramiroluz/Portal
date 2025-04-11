from plone.restapi.services import Service
from zope.interface import implementer
from zope.publisher.interfaces import IPublishTraverse
from plone.registry.interfaces import IRegistry
from zope.component import getUtility
from ..controlpanels.partidos import IPartidosSettings
from plone.restapi.deserializer import json_body

@implementer(IPublishTraverse)
class PartidosGet(Service):
    def __init__(self, context, request):
        super(PartidosGet, self).__init__(context, request)

    def reply(self):
        registry = getUtility(IRegistry)
        settings = registry.forInterface(IPartidosSettings)
        return {
            '@id': f"{self.context.absolute_url()}/partidos",
            'items': settings.partidos
        }

@implementer(IPublishTraverse)
class PartidosPut(Service):
    def __init__(self, context, request):
        super(PartidosPut, self).__init__(context, request)

    def reply(self):
        data = json_body(self.request)
        if 'items' not in data:
            self.request.response.setStatus(400)
            return {'error': 'O campo "items" é obrigatório'}

        registry = getUtility(IRegistry)
        settings = registry.forInterface(IPartidosSettings)
        settings.partidos = data['items']

        return {
            '@id': f"{self.context.absolute_url()}/partidos",
            'items': settings.partidos
        } 