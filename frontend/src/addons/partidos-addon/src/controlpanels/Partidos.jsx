import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { partidoSchema } from '../schema';
import {Field, Form} from "@plone/volto/components/manage/Form";

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
});

const PartidosControlPanel = (props) => {
  const { intl } = props;

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
  };

  return (
    <Form
      schema={schema}
      title={intl.formatMessage(messages.title)}
      onSubmit={props.onSubmit}
    >
      Teste
    </Form>
  );
};

export default injectIntl(PartidosControlPanel);
