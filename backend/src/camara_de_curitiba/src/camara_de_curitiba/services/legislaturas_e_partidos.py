from ..controlpanels.legislaturas.controlpanel import ILegislaturasSettings
from ..controlpanels.partidos import IPartidosSettings
from plone.registry.interfaces import IRegistry
from plone.restapi.services import Service
from zope.component import getUtility
from zope.interface import implementer
from zope.publisher.interfaces import IPublishTraverse
import uuid


@implementer(IPublishTraverse)
class LegislaturasEVereadoresGet(Service):
    def __init__(self, context, request):
        super(LegislaturasEVereadoresGet, self).__init__(context, request)

    def reply(self):
        registry = getUtility(IRegistry)
        
        # Obtém legislaturas
        settings_legislaturas = registry.forInterface(ILegislaturasSettings)
        legislaturas = []
        for item in settings_legislaturas.legislaturas:
            new_item = item.copy()
            if "@id" not in new_item:
                new_item["@id"] = str(uuid.uuid4())
            legislaturas.append(new_item)

        # Obtém partidos
        settings_partidos = registry.forInterface(IPartidosSettings)
        partidos = []
        for item in settings_partidos.partidos:
            new_item = item.copy()
            if "@id" not in new_item:
                new_item["@id"] = str(uuid.uuid4())
            partidos.append(new_item)

        return {
            "@id": f"{self.context.absolute_url()}/legislaturas-e-partidos",
            "legislaturas": legislaturas,
            "partidos": partidos
        } 