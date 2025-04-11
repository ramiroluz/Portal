import PartidosControlPanel from './controlpanels/Partidos';

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

  return config;
}

