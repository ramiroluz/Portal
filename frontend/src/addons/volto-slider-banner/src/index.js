import { cloneDeep } from 'lodash';

// Block
import BannerSliderEdit from './components/Blocks/BannerSlider/Edit';
import BannerSliderView from './components/Blocks/BannerSlider/View';
import speakerdeckIcon from './icons/speakerdeck.svg';

const applyConfig = (config) => {
  // Set default Cors Proxy
  config.blocks.blocksConfig.bannerSliderBlock = {
    id: 'bannerSliderBlock',
    title: 'Banner Slider',
    group: 'common',
    icon: speakerdeckIcon,
    view: BannerSliderView,
    edit: BannerSliderEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };
  // Add block to grid
  // Array of local blocks ids
  const localBlocks = ['bannerSliderBlock'];

  // Add Blocks to gridBlock and accordionBlock
  // It's important to maintain the chain, and do not introduce pass by reference in
  // the internal `blocksConfig` object, so we clone the object to avoid this.
  ['gridBlock'].forEach((blockId) => {
    const block = config.blocks.blocksConfig[blockId];
    if (
      block !== undefined &&
      block.allowedBlocks !== undefined &&
      block.blocksConfig !== undefined
    ) {
      block.allowedBlocks = [...block.allowedBlocks, ...localBlocks];
      localBlocks.forEach((blockId) => {
        block.blocksConfig[blockId] = cloneDeep(
          config.blocks.blocksConfig[blockId],
        );
      });
    }
  });

  return config;
};
export default applyConfig;
