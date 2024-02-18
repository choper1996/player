import React from 'react';

import { IRenderThumbParams } from 'react-range/lib/types';

import './Thumb.styles.css'

export const Thumb = (params: IRenderThumbParams) => {
    const { props } = params;

    return (
        <div {...props} className="thumb">
            <div className="thumb__marker" />
        </div>
    )
}