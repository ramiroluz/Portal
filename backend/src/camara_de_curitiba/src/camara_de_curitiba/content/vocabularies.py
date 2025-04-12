from ..controlpanels.partidos import IPartidosSettings
from ..controlpanels.legislaturas.controlpanel import ILegislaturasSettings
from plone.registry.interfaces import IRegistry
from zope.component import getUtility
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


@provider(IVocabularyFactory)
def partidos_vocabulary(context):
    registry = getUtility(IRegistry)
    settings = registry.forInterface(IPartidosSettings)
    terms = []
    for partido in settings.partidos:
        id = partido.get("@id", "")
        sigla = partido.get("sigla", "")
        nome = partido.get("nome", "")
        terms.append(SimpleTerm(value=id, token=id, title=f"{sigla} - {nome}"))
    return SimpleVocabulary(terms)


@provider(IVocabularyFactory)
def legislaturas_vocabulary(context):
    registry = getUtility(IRegistry)
    settings = registry.forInterface(ILegislaturasSettings)
    terms = []
    for legislatura in settings.legislaturas:
        id = legislatura.get("@id", "")
        nome = legislatura.get("nome", "")
        terms.append(SimpleTerm(value=id, token=id, title=nome))
    return SimpleVocabulary(terms)
