'use strict';

import './styles/main.scss';

import Header from './modules/header';
import Nav from './modules/nav';
import Popup from './modules/popup';
import Buttons from './modules/buttons';
import Subscribe from './modules/subscribe';
import Inputs from './modules/inputs';
import Slider from './modules/slider';
import Sing from './modules/sing';

const header = new Header();
header.init();

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

const slider = new Slider();
slider.init();

const sing = new Sing();
sing.initEvents();