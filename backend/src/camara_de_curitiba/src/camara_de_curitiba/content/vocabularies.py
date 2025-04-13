from ..controlpanels.partidos import IPartidosSettings
from ..controlpanels.legislaturas.controlpanel import ILegislaturasSettings
from plone.registry.interfaces import IRegistry
from zope.component import getUtility
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary
from plone.app.vocabularies.catalog import CatalogSource
from zope.interface import implementer
from plone import api
from Products.CMFCore.utils import getToolByName


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


@implementer(IVocabularyFactory)
class NewsItemsVocabulary(object):
    """Vocabulary factory for news items."""

    def __call__(self, context):
        catalog = getToolByName(context, 'portal_catalog')
        results = catalog(
            portal_type='News Item',
            review_state='published',
            sort_on='created',
            sort_order='reverse'
        )
        
        items = []
        for brain in results:
            items.append(
                SimpleVocabulary.createTerm(
                    brain.UID,
                    brain.UID,
                    brain.Title
                )
            )
        
        return SimpleVocabulary(items)

NewsItemsVocabularyFactory = NewsItemsVocabulary()
