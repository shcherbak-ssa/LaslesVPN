'use strict';

/** imports */
import $ from './tools';
import events from './events';

import ImportModule from './import';
import ResizeModule from './resize';
import NavModule from './nav';
import PopupModule from './popup';
import ButtonsModule from './buttons';
import SubscribeModule from './subscribe';
import InputsModule from './inputs';
import SingModule from './sing';

/** constants */
const modules = [
  ImportModule,
  ResizeModule,
  NavModule,
  PopupModule,
  ButtonsModule,
  SubscribeModule,
  InputsModule,
  SingModule
];

/** launcher function */
function launchSiteModules() {
  modules.forEach((module) => module.init());
  events.emit('forse-resize');

  setTimeout(() => {
    $('#site').styles({ display: 'block' });
    $('#loader').remove();
  }, 1000);
}

/** export */
export default launchSiteModules;