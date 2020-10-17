// @flow

import React, {type Node} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {routeMap} from '../const';
import {Home} from '../page/home/c-home';
import {Film} from '../page/film/c-film';
import {LocaleProvider} from '../provider/locale/c-locale-context';

export function App(): Node {
    return (
        <LocaleProvider>
            <HashRouter>
                <Switch>
                    <Route component={Home} exact path={routeMap.home.path}/>
                    <Route component={Film} exact path={routeMap.film.path}/>
                </Switch>
            </HashRouter>
        </LocaleProvider>
    );
}
