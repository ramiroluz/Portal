import PartidosControlPanel from './controlpanels/Partidos';
import ObjectListWithTitleWidget from "./widgets/ObjectListWithTitleWidget";

export default function applyConfig(config) {

  // Add manage view to controlpanels
  config.settings.controlpanels = [
    ...(config.settings.controlpanels || []),
    {
      '@id': '/partidos',
      group: 'Content',
      title: 'Partidos políticos',
    },
  ];


  config.addonRoutes = [
    ...config.addonRoutes,
    {
      path: '/controlpanel/partidos',
      component: PartidosControlPanel,
    },
  ];

  config.widgets.widget.object_list_title = ObjectListWithTitleWidget;

  return config;
}

