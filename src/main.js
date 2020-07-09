'use strict';

import './styles/main.scss';

import Header from './modules/header';
import Popup from './modules/popup';
import Buttons from './modules/buttons';

const header = new Header();
header.init();

const popup = new Popup();
popup.initEvents();

const buttons = new Buttons();
buttons.initEvents();