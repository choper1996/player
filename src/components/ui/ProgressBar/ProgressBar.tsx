import React from 'react';

import { useCallback } from 'react';

import { Range } from 'react-range';

import { Thumb } from './components/Thumb/Thumb';
import { Track } from './components/Track/Track';

import { IRenderTrackParams, IRenderThumbParams, IProps as RangeProps } from 'react-range/lib/types';

import './ProgressBar.styles.css'

interface ProgressBarProps extends Pick<RangeProps, 'step' | 'min' | 'max' | 'values' | 'onChange'>{}

export const ProgressBar = (props: ProgressBarProps) => {

    const {
        step,
        values,
        max,
        min,
        onChange
    } = props;

    const renderThumb = (params: IRenderThumbParams) => <Thumb {...params} />

    const renderTrack = useCallback((params: IRenderTrackParams) => {
        const { children } = params;

        return <Track {...params} values={values} min={min} max={max}>{children}</Track>
    }, [values, min, max]);

    return (
        <div className="progress-bar">
            <Range
                values={values}
                step={step}
                min={min}
                max={max}
                onChange={onChange}
                renderTrack={renderTrack}
                renderThumb={renderThumb}
            />
        </div>
    )
};