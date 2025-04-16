from plone.autoform.interfaces import IFormFieldProvider
from plone.supermodel import model
from zope import schema
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleVocabulary
from zope.interface import implementer
from plone import api
from plone.autoform import directives
from z3c.form.interfaces import IEditForm, IAddForm


@implementer(IVocabularyFactory)
class EditoriasVocabularyFactory:
    """Vocabulário de editorias disponíveis"""

    def __call__(self, context):
        portal = api.portal.get()
        
        # Se a pasta noticias não existir, retorna vocabulário vazio
        if "noticias" not in portal:
            return SimpleVocabulary([])

        # Busca todas as editorias
        editorias = api.content.find(
            portal_type="Editoria",
            context=portal["noticias"]
        )

        # Cria o vocabulário
        terms = []
        for editoria in editorias:
            obj = editoria.getObject()
            terms.append(
                SimpleVocabulary.createTerm(
                    obj.UID(),  # value
                    obj.UID(),  # token
                    obj.title   # title
                )
            )
        
        return SimpleVocabulary(terms)


EditoriasVocabulary = EditoriasVocabularyFactory()


@provider(IFormFieldProvider)
class IEditoriaBehavior(model.Schema):
    """Behavior para adicionar campo de editoria"""

    directives.order_before(editoria='*')
    editoria = schema.Choice(
        title=u"Editoria",
        description=u"Selecione a editoria desta notícia",
        required=False,
        vocabulary="camara_de_curitiba.editorias",
    ) 