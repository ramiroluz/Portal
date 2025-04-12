import { defineMessages } from 'react-intl';

const messages = defineMessages({
  legislatura: {
    id: 'Legislatura',
    defaultMessage: 'Legislatura',
  },
  nome: {
    id: 'Nome',
    defaultMessage: 'Nome',
  },
});

export const schemaLegislaturas = ({ intl }) => ({
  title: 'Legislatura',
  titleField: 'nome',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['nome'],
    },
  ],
  properties: {
    nome: {
      title: 'Nome',
      required: true
    },
  },
  required: ['nome'],
});
