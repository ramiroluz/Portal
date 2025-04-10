import PartidosControlPanel from './controlpanels/Partidos';

export default function applyConfig(config) {
  // Método garantido para Volto 18
  config.settings.controlPanels = {
    ...(config.settings.controlPanels || {}),
    partidos: {
      id: 'partidos',
      title: 'Partidos Políticos',
      group: 'Site',
      component: PartidosControlPanel,
    },
  };

  return config;
}
