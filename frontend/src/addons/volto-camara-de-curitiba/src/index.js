import {CategoriaView} from "./components";
import VereadoresListView from "./components/VereadoresView/VereadoresListView";
import VereadorItemView from "./components/VereadoresView/VereadorItemView";

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
  };

  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    vereadores: VereadorItemView, // Associa a visualização ao novo tipo de conteúdo
  };

  config.addonRoutes = [
    {
      path: '/vereadores/conheca-os-vereadores', // URL onde a página será acessível
      component: VereadoresListView,
    },
  ];

  console.log(config);

  return config;

};

export default applyConfig;
