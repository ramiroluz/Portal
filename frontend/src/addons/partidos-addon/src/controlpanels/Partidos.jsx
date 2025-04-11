import React, { useEffect, useState } from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { partidoSchema } from '../schema';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { Button } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { useDispatch, useSelector } from "react-redux";
import { GET_CONTROLPANEL, UPDATE_CONTROLPANEL } from "@plone/volto/constants/ActionTypes";
import { uploadFile } from '@plone/volto/actions';

const messages = defineMessages({
  title: {
    id: 'Partidos Políticos',
    defaultMessage: 'Partidos Políticos',
  },
  description: {
    id: 'Configurações dos partidos políticos',
    defaultMessage: 'Configurações dos partidos políticos',
  },
  add: {
    id: 'Adicionar partido',
    defaultMessage: 'Adicionar partido',
  },
  save: {
    id: 'Salvar',
    defaultMessage: 'Salvar',
  },
});

const get = (url) => {
  return {
    type: GET_CONTROLPANEL,
    request: {
      op: 'get',
      path: url,
    },
  };
}

const put = (url, data) => {
  return {
    type: UPDATE_CONTROLPANEL,
    request: {
      op: 'put',
      path: url,
      data
    },
  };
}

const PartidosControlPanel = (props) => {
  const { intl } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [formData, setFormData] = useState({ partidos: [] });
  const [uploading, setUploading] = useState(false);
  const partidos = state.controlpanels?.controlpanel?.items || [];

  console.log("partidos", partidos);

  const schema = {
    title: intl.formatMessage(messages.title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['partidos'],
      },
    ],
    properties: {
      partidos: {
        title: intl.formatMessage(messages.title),
        description: intl.formatMessage(messages.description),
        widget: 'object_list',
        schema: partidoSchema({ intl }),
      },
    },
    required: [],
  };

  const handleFileUpload = async (file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Falha no upload do arquivo');
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Erro no upload:', error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const onChangeField = async (id, value) => {
    console.log("Valor alterado:", value);

    // Se o valor for um arquivo, fazer upload
    if (id === 'partidos' && Array.isArray(value)) {
      const updatedPartidos = await Promise.all(
        value.map(async (partido) => {
          if (partido.logo && partido.logo instanceof File) {
            const logoUrl = await handleFileUpload(partido.logo);
            return { ...partido, logo: logoUrl };
          }
          return partido;
        })
      );

      setFormData({ ...formData, [id]: updatedPartidos });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const onSubmit = () => {
    console.log("Salvando dados:", formData);
    dispatch(
      put('++api++/@partidos', {
        items: formData.partidos || [],
      })
    );
  };

  useEffect(() => {
    dispatch(get('++api++/@partidos'));
  }, [dispatch]);

  // Atualizar o formData quando os partidos mudarem
  useEffect(() => {
    if (partidos.length > 0) {
      setFormData({ partidos });
    }
  }, [partidos]);

  return (
    <div className="container">
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={onChangeField}
        formData={formData}
      />
      <div className="form-buttons">
        <Button
          primary
          onClick={onSubmit}
          loading={uploading}
          disabled={uploading}
        >
          {intl.formatMessage(messages.save)}
        </Button>
      </div>
    </div>
  );
};

export default injectIntl(PartidosControlPanel);
