import React from 'react';

import { MutableRefObject, useEffect, useState } from 'react';

import { ProgressBar } from '../../ui/ProgressBar/ProgressBar';

import { IProps as RangeProps } from 'react-range/lib/types';

import './VolumeBars.styles.css';

interface VolumeBarProps {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
}

export const VolumeBar = (props: VolumeBarProps) => {
    const { audioRef } = props;

    const [volume, setVolume] = useState([1]);

    useEffect(() => {
        audioRef.current.volume = [volume];
    }, [volume]);

    const onChangeVolume = (values: RangeProps["values"]) => {
        setVolume(values);
    }

    return (
        <div className="volume-bar">
            <ProgressBar
                step={0.01}
                min={0}
                max={1}
                values={volume}
                onChange={onChangeVolume}
            />
        </div>
    )
}