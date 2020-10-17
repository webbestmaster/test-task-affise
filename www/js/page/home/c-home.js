// @flow

import React, {type Node} from 'react';

import {Locale} from '../../provider/locale/c-locale';

export function Home(): Node {
    return (
        <div>
            <h1>
                <Locale stringKey="META__LANGUAGE_NAME"/>
            </h1>
            <h1>home</h1>
        </div>
    );
}
