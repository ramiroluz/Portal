import React from 'react';
import bannerSliderView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

const bannerSliderOembed = {
  author_name: 'Érico Andrei',
  author_url: 'https://bannerSlider.com/ericof',
  height: 399,
  html: '<iframe id="talk_frame_1101673" class="bannerSlider-iframe" src="//bannerSlider.com/player/20f4753178b54bdb9d6990961d9f551c" width="710" height="399" style="aspect-ratio:710/399; border:0; padding:0; margin:0; background:transparent;" frameborder="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe>\n',
  provider_name: 'Speaker Deck',
  provider_url: 'https://bannerSlider.com/',
  ratio: 1.7777777777777777,
  title: 'Nem tudo é código',
  type: 'rich',
  version: 1,
  width: 710,
};

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '1000px' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/Blocks/bannerSliderBlock',
  component: bannerSliderView,
  decorators: [withWrapper],
  argTypes: {
    href: {
      name: 'URL',
      control: 'text',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
  args: {
    href: 'https://bannerSlider.com/ericof/nem-tudo-e-codigo',
    align: 'center',
    size: 'l',
    bannerSliderOembed: bannerSliderOembed,
  },
};

export const Small = {
  args: {
    size: 's',
  },
};
export const Medium = {
  args: {
    size: 'm',
  },
};
export const Large = {
  args: {
    size: 'l',
  },
};
export const AlignLeft = {
  args: {
    align: 'left',
    size: 'l',
  },
};
export const AlignCenter = {
  args: {
    align: 'left',
    size: 'l',
  },
};
export const AlignRight = {
  args: {
    align: 'right',
    size: 'l',
  },
};
