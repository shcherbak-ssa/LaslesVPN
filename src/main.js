'use strict';

import './styles/main.scss';

import Header from './modules/header';
import Popup from './modules/popup';

const header = new Header();
header.init();

const popup = new Popup();
popup.initEvents();