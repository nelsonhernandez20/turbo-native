const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Añade la ruta de tus paquetes a la configuración de Metro
config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, 'packages'),
  path.resolve(__dirname, 'node_modules')
];


module.exports = config;
