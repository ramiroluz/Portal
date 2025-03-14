import {cloneDeep} from "lodash";
import speakerdeckIcon from "../../volto-slider-banner/src/icons/speakerdeck.svg";
import View from "./components/GridBlock/View";
import GridBlockEdit from "./components/GridBlock/Edit";

import LiveBlockView from "./components/LiveBlock/View";
import LiveBlockEdit from "./components/LiveBlock/Edit";

import CategoryBlockView from "./components/CategoryBlock/View";
import CategoryBlockEdit from "./components/CategoryBlock/Edit";

import BannersBlockView from "./components/BannersBlock/View";
import BannersBlockEdit from "./components/BannersBlock/Edit";

import NewsHomeBlockView from "./components/NewsHomeBlock/View";
import NewsHomeBlockEdit from "./components/NewsHomeBlock/Edit";

import MidiaBlockView from "./components/MidiaBlock/View";
import MidiaBlockEdit from "./components/MidiaBlock/Edit";

import CardsBlockView from "./components/CardsBlock/View";
import CardsBlockEdit from "./components/CardsBlock/Edit";

import CardsBackBlockView from "./components/CardsWithBackgroundBlock/View";
import CardsBackBlockEdit from "./components/CardsWithBackgroundBlock/Edit";

import DestaquesBlockView from "./components/DestaquesBlock/View";
import DestaquesBlockEdit from "./components/DestaquesBlock/Edit";

import AgendaBlockView from "./components/AgendaBlock/View";
import AgendaBlockEdit from "./components/AgendaBlock/Edit";

import DestaquesNoticiasView from "./components/DestaquesNoticiasBlock/View";
import DestaquesNoticiasEdit from "./components/DestaquesNoticiasBlock/Edit";

import CategoriasView from "./components/CategoriasBlock/View";
import CategoriasEdit from "./components/CategoriasBlock/Edit";

import TodasBlockView from "./components/TodasAsNoticiasBlock/View";
import TodasBlockEdit from "./components/TodasAsNoticiasBlock/Edit";

import TodasNoticiasCategoriaBlockView from "./components/NoticiasCategoriaBlock/View";
import TodasNoticiasCategoriaBlockEdit from "./components/NoticiasCategoriaBlock/Edit";

import CardsSubHomesBlockView from "./components/CardsSubHomesBlock/View";
import CardsSubHomesBlockEdit from "./components/CardsSubHomesBlock/Edit";


const applyConfig = (config) => {
  config.blocks.blocksConfig.gridMuiBlock = {
    id: 'gridMuiBlock',
    title: 'Grid View',
    group: 'common',
    icon: speakerdeckIcon,
    view: View,
    edit: GridBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.liveBlock = {
    id: 'liveBlock',
    title: 'Ao vivo',
    group: 'common',
    icon: speakerdeckIcon,
    view: LiveBlockView,
    edit: LiveBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.categoryBlock = {
    id: 'categoryBlock',
    title: 'Lista de Categorias',
    group: 'common',
    icon: speakerdeckIcon,
    view: CategoryBlockView,
    edit: CategoryBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.bannersBlock = {
    id: 'bannersBlock',
    title: 'Banners sidebar',
    group: 'common',
    icon: speakerdeckIcon,
    view: BannersBlockView,
    edit: BannersBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };
  config.blocks.blocksConfig.newsHomeBlock = {
    id: 'newsHomeBlock',
    title: 'News home',
    group: 'common',
    icon: speakerdeckIcon,
    view: NewsHomeBlockView,
    edit: NewsHomeBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };
  config.blocks.blocksConfig.midiaBlock = {
    id: 'midiaBlock',
    title: 'Mídia home',
    group: 'common',
    icon: speakerdeckIcon,
    view: MidiaBlockView,
    edit: MidiaBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.cardsBlock = {
    id: 'cardsBlock',
    title: 'Cards Institucionais',
    group: 'common',
    icon: speakerdeckIcon,
    view: CardsBlockView,
    edit: CardsBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.destaquesBlock = {
    id: 'destaquesBlock',
    title: 'Destaques da Home',
    group: 'common',
    icon: speakerdeckIcon,
    view: DestaquesBlockView,
    edit: DestaquesBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.cardsBackBlock = {
    id: 'cardsBackBlock',
    title: 'Cards com Background',
    group: 'common',
    icon: speakerdeckIcon,
    view: CardsBackBlockView,
    edit: CardsBackBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.agendaBlock = {
    id: 'agendaBlock',
    title: 'Agenda',
    group: 'common',
    icon: speakerdeckIcon,
    view: AgendaBlockView,
    edit: AgendaBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.destaquesNoticiasBlock = {
    id: 'destaquesNoticiasBlock',
    title: 'Destaques noticias',
    group: 'common',
    icon: speakerdeckIcon,
    view: DestaquesNoticiasView,
    edit: DestaquesNoticiasEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.categoriasBlock = {
    id: 'categoriasBlock',
    title: 'Todas as categorias',
    group: 'common',
    icon: speakerdeckIcon,
    view: CategoriasView,
    edit: CategoriasEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

  config.blocks.blocksConfig.todasnoticiasBlock = {
    id: 'todasnoticiasBlock',
    title: 'Todas as notícias',
    group: 'common',
    icon: speakerdeckIcon,
    view: TodasBlockView,
    edit: TodasBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };


   config.blocks.blocksConfig.noticiasCategoriaBlock = {
    id: 'noticiasCategoriaBlock',
    title: 'Todas as notícias da categoria',
    group: 'common',
    icon: speakerdeckIcon,
    view: TodasNoticiasCategoriaBlockView,
    edit: TodasNoticiasCategoriaBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };

   config.blocks.blocksConfig.cardsSubHomeBlock = {
    id: 'cardsSubHomeBlock',
    title: 'Cards da SubHomes',
    group: 'common',
    icon: speakerdeckIcon,
    view: CardsSubHomesBlockView,
    edit: CardsSubHomesBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockHasOwnFocusManagement: false,
  };


  // Add block to grid
  // Array of local blocks ids
  const localBlocks = ['gridMuiBlock', 'liveBlock', 'categoryBlock', 'bannersBlock', 'newsHomeBlock', 'midiaBlock', 'cardsBlock', 'destaquesBlock', 'cardsBackBlock', 'agendaBlock', 'destaquesNoticiasBlock', 'categoriasBlock', 'todasnoticiasBlock', 'noticiasCategoriaBlock', 'cardsSubHomeBlock'];

  // Add Blocks to gridBlock and accordionBlock
  // It's important to maintain the chain, and do not introduce pass by reference in
  // the internal `blocksConfig` object, so we clone the object to avoid this.
  ['gridMuiBlock', 'liveBlock', 'categoryBlock', 'bannersBlock', 'newsHomeBlock', 'midiaBlock', 'cardsBlock', 'destaquesBlock', 'cardsBackBlock', 'agendaBlock', 'destaquesNoticiasBlock', 'categoriasBlock', 'todasnoticiasBlock', 'noticiasCategoriaBlock', 'cardsSubHomeBlock'].forEach((blockId) => {
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
