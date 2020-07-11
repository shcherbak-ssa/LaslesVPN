'use strict';

/** imports */
import '@babel/polyfill';
import './styles/main.scss';

/** init */
document.addEventListener(
  'DOMContentLoaded',
  domContentLoadedHandler
);

/** load handler */
async function domContentLoadedHandler() {
  const launchSiteModules = (await import('./modules/launcher')).default;
  launchSiteModules();
}