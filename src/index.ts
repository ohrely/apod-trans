import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the apod_trans extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'apod_trans:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension apod_trans is activated!');
  }
};

export default plugin;
