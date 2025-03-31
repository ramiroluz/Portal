import { defineMessages } from 'react-intl';

const messages = defineMessages({
  bannerSliderBlock: {
    id: 'bannerSlider',
    defaultMessage: 'bannerSlider',
  },
  deckURL: {
    id: 'URL',
    defaultMessage: 'URL',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const bannerSliderSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.bannerSliderBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['href'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],
    properties: {
      href: {
        title: props.intl.formatMessage(messages.deckURL),
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
    },
    required: ['href'],
  };
};
