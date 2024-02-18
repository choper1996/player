import React from 'react';

import { MutableRefObject,  useEffect, useState } from 'react';

import { ProgressBar } from '../../ui/ProgressBar/ProgressBar';

import { IProps as RangeProps } from 'react-range/lib/types';

interface TimeProgressBar {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    isPlaying: boolean;
}

export const TimeProgressBar = (props: TimeProgressBar) => {
    const { audioRef, isPlaying } = props;

    const [timeProgress, setTimeProgress] = useState(0);

    const duration = audioRef.current?.duration;

    const onChangeTimeProgress = (values: RangeProps["values"]) => {
        const [value] = values;

        if (audioRef.current?.currentTime) {
            audioRef.current.currentTime = value;
            setTimeProgress(value)
        }
    }

    const updateTimeProgress = () => {
        if (!isPlaying) {
            return;
        }

        if (audioRef.current?.currentTime) {
            setTimeProgress(audioRef.current?.currentTime ?? 0)
        }

        setTimeout(() => {
            updateTimeProgress();
        }, 500);
    }

    useEffect(() => {
        updateTimeProgress();
    }, [isPlaying]);

    return (
        <ProgressBar
            step={1}
            min={0}
            max={duration ?? 100}
            values={[timeProgress ?? 0]}
            onChange={onChangeTimeProgress}
        />
    )
}