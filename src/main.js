'use strict';

import '@babel/polyfill';
import './styles/main.scss';

import events from './modules/events';

import ImportModule from './modules/import';
import ResizeModule from './modules/resize';
import Nav from './modules/nav';
import Popup from './modules/popup';
import Buttons from './modules/buttons';
import Subscribe from './modules/subscribe';
import Inputs from './modules/inputs';
import Sing from './modules/sing';

ImportModule.init();
ResizeModule.init();

const nav = new Nav();
nav.init();

const popup = new Popup();
popup.initEvents();

const buttons = new Buttons();
buttons.initEvents();

const subscribe = new Subscribe();
subscribe.initEvents();

const inputs = new Inputs();
inputs.initEvents();

const sing = new Sing();
sing.initEvents();

events.emit('forse-resize');