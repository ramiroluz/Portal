# -*- coding: utf-8 -*-
from camara_de_curitiba.content.vereador import IVereador  # NOQA E501
from camara_de_curitiba.testing import CAMARA_DE_CURITIBA_INTEGRATION_TESTING  # noqa
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.dexterity.interfaces import IDexterityFTI
from zope.component import createObject
from zope.component import queryUtility

import unittest


class VereadorIntegrationTest(unittest.TestCase):

    layer = CAMARA_DE_CURITIBA_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        setRoles(self.portal, TEST_USER_ID, ["Manager"])
        self.parent = self.portal

    def test_ct_vereador_schema(self):
        fti = queryUtility(IDexterityFTI, name="vereador")
        schema = fti.lookupSchema()
        self.assertEqual(IVereador, schema)

    def test_ct_vereador_fti(self):
        fti = queryUtility(IDexterityFTI, name="vereador")
        self.assertTrue(fti)

    def test_ct_vereador_factory(self):
        fti = queryUtility(IDexterityFTI, name="vereador")
        factory = fti.factory
        obj = createObject(factory)

        self.assertTrue(
            IVereador.providedBy(obj),
            "IVereador not provided by {0}!".format(
                obj,
            ),
        )

    def test_ct_vereador_adding(self):
        setRoles(self.portal, TEST_USER_ID, ["Contributor"])
        obj = api.content.create(
            container=self.portal,
            type="vereador",
            id="vereador",
        )

        self.assertTrue(
            IVereador.providedBy(obj),
            "IVereador not provided by {0}!".format(
                obj.id,
            ),
        )

        parent = obj.__parent__
        self.assertIn("vereador", parent.objectIds())

        # check that deleting the object works too
        api.content.delete(obj=obj)
        self.assertNotIn("vereador", parent.objectIds())

    def test_ct_vereador_globally_addable(self):
        setRoles(self.portal, TEST_USER_ID, ["Contributor"])
        fti = queryUtility(IDexterityFTI, name="vereador")
        self.assertTrue(fti.global_allow, "{0} is not globally addable!".format(fti.id))

    def test_ct_vereador_filter_content_type_false(self):
        setRoles(self.portal, TEST_USER_ID, ["Contributor"])
        fti = queryUtility(IDexterityFTI, name="vereador")
        portal_types = self.portal.portal_types
        parent_id = portal_types.constructContent(
            fti.id,
            self.portal,
            "vereador_id",
            title="vereador container",
        )
        self.parent = self.portal[parent_id]
        obj = api.content.create(
            container=self.parent,
            type="Document",
            title="My Content",
        )
        self.assertTrue(obj, "Cannot add {0} to {1} container!".format(obj.id, fti.id))
