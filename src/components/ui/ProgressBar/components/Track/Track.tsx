import React from 'react';

import { IRenderTrackParams, IProps as RangeProps } from 'react-range/lib/types';
import { getTrackBackground } from 'react-range';

import './Track.styles.css';

type ThumbValuesProps = Pick<RangeProps, 'min' | 'max' | 'values'>;

interface ThumbProps extends ThumbValuesProps, IRenderTrackParams {}

export const Track = (params: ThumbProps) => {
    const { props, children, values, min, max } = params;
    
    return (
        <div className="progress-bar__track-container" style={props.style} >
            <div
                className="track"
                ref={props.ref}
                style={{
                    background: getTrackBackground({
                        values,
                        min,
                        max,
                        colors: ["#05AC6A", "#C5C6C5"],
                    }),
                }}
            >
                {children}
            </div>
        </div>
    )
};