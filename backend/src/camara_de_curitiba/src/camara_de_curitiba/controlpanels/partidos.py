from plone.registry.interfaces import IRegistry
from zope.component import queryUtility
from zope.interface import Interface
from zope import schema
from plone.app.registry.browser.controlpanel import RegistryEditForm
from plone.app.registry.browser.controlpanel import ControlPanelFormWrapper

class IPartidosSettings(Interface):
    """Schema para configurações de partidos"""

    partidos = schema.List(
        title=u"Partidos Políticos",
        value_type=schema.Dict(
            title=u"Partido",
            value_type=schema.TextLine(),
            key_type=schema.TextLine()
        ),
        required=False,
        default=[],
    )

class PartidosEditForm(RegistryEditForm):
    schema = IPartidosSettings
    label = u"Configurações de Partidos Políticos"

class PartidosControlPanelView(ControlPanelFormWrapper):
    form = PartidosEditForm
