# -*- coding: utf-8 -*-
from plone.app.content.interfaces import INameFromTitle
from plone.app.textfield import RichText
from plone.app.z3cform.widget import SelectFieldWidget
from plone.autoform import directives
from plone.dexterity.content import Container
from plone.dexterity.interfaces import IDexterityContent
from plone.namedfile import field as namedfile
from plone.supermodel import model
from plone.supermodel.directives import fieldset
from zope import schema
from zope.component import adapter
from zope.interface import implementer
from zope.interface import provider


@provider(INameFromTitle)
@adapter(IDexterityContent)
class NameFromTitle(object):
    def __init__(self, context):
        self.context = context

    @property
    def title(self):
        return self.context.title


class IVereador(model.Schema):
    """Marker interface and Dexterity Python Schema for Vereador"""

    fieldset(
        "dados_vereador",
        label="Perfil do Vereador",
        fields=[
            "partido",
            "legislatura",
            "mandato",
            "foto",
            "video_principal",
            "perfil_do_vereador",
            "trabalho_parlamentar",
            "contatos",
        ],
    )

    mandato = schema.TextLine(
        title="Mandato",
        description="Mandato",
        required=False,
    )

    partido = schema.Choice(
        title="Partido",
        required=True,
        vocabulary="camara_de_curitiba.partidos",
    )

    legislatura = schema.Choice(
        title="Legislatura",
        required=True,
        vocabulary="camara_de_curitiba.legislaturas",
    )

    foto = namedfile.NamedBlobImage(
        title="Foto",
        required=True,
    )

    perfil_do_vereador = RichText(
        title="Perfil do vereador",
        required=False,
    )

    trabalho_parlamentar = RichText(
        title="Trabalho Parlamentar",
        required=False,
    )

    contatos = RichText(
        title="Contatos",
        required=False,
    )

    video_principal = schema.TextLine(
        title="Vídeo principal",
        description="URL do vídeo principal do vereador",
        required=False,
    )

    directives.widget(partido=SelectFieldWidget)
    directives.widget(legislatura=SelectFieldWidget)

    # If you want, you can load a xml model created TTW here
    # and customize it in Python:

    # model.load('vereador.xml')

    # directives.widget(level=RadioFieldWidget)
    # level = schema.Choice(
    #     title=_(u'Sponsoring Level'),
    #     vocabulary=LevelVocabulary,
    #     required=True
    # )

    # text = RichText(
    #     title=_(u'Text'),
    #     required=False
    # )

    # url = schema.URI(
    #     title=_(u'Link'),
    #     required=False
    # )

    # fieldset('Images', fields=['logo', 'advertisement'])
    # logo = namedfile.NamedBlobImage(
    #     title=_(u'Logo'),
    #     required=False,
    # )

    # advertisement = namedfile.NamedBlobImage(
    #     title=_(u'Advertisement (Gold-sponsors and above)'),
    #     required=False,
    # )

    # directives.read_permission(notes='cmf.ManagePortal')
    # directives.write_permission(notes='cmf.ManagePortal')
    # notes = RichText(
    #     title=_(u'Secret Notes (only for site-admins)'),
    #     required=False
    # )


@implementer(IVereador)
class Vereador(Container):
    """Content-type class for IVereador"""
