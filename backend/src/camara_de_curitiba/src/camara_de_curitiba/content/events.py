from plone import api
from plone.dexterity.interfaces import IDexterityContent
from zope.component import adapter
from zope.interface import implementer
from zope.lifecycleevent.interfaces import IObjectAddedEvent


@implementer(IObjectAddedEvent)
@adapter(IDexterityContent)
def vereador_added(obj, event):
    """Evento disparado quando um vereador é criado"""
    if obj.portal_type != "vereador":
        return

    portal = api.portal.get()

    # Verifica se a página vereadores existe, se não, cria
    if "vereadores" not in portal:
        api.content.create(
            type="Document", title="Vereadores", id="vereadores", container=portal
        )

    # Se o vereador não estiver na página correta, move
    if obj.aq_parent != portal["vereadores"]:
        api.content.move(source=obj, target=portal["vereadores"], safe_id=True)
