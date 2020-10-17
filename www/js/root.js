// @flow

/* global document */

import React from 'react';
import {render} from 'react-dom';

import {App} from './app/c-app';
import {selector} from './const';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper) {
    render(<App/>, nodeWrapper);
} else {
    console.error(`Can not find nodeWrapper by selector + ${selector.appWrapper}`);
}
