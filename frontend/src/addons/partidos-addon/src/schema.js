import { defineMessages } from 'react-intl';

const messages = defineMessages({
  partido_politico: {
    id: 'Partido Político',
    defaultMessage: 'Partido Político',
  },
  nome: {
    id: 'Nome',
    defaultMessage: 'Nome',
  },
  abreviacao: {
    id: 'Abreviação',
    defaultMessage: 'Abreviação',
  },
  logo: {
    id: 'Logo',
    defaultMessage: 'Logo',
  },
});

export const partidoSchema = ({ intl }) => ({
  title: 'Partido Político',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['nome', 'abreviacao', 'logo'],
    },
  ],
  properties: {
    nome: {
      title: intl.formatMessage(messages.nome),
    },
    abreviacao: {
      title: intl.formatMessage(messages.abreviacao),
    },
    logo: {
      title: intl.formatMessage(messages.logo),
      widget: 'file',
    },
  },
  required: ['nome', 'abreviacao'],
});
