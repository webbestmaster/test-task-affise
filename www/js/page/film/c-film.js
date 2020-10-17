// @flow

import React, {type Node} from 'react';

type PropsType = {};

export function Film(props: PropsType): Node {
    return (
        <h1>
            Film
            {JSON.stringify(props)}
        </h1>
    );
}
