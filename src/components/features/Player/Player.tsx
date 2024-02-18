import React from "react";

import { useState, useRef, useMemo } from "react";

import { PrevButton } from '../PrevButton/PrevButton';
import { PlayButton } from '../PlayButton/PlayButton'
import { NextButton } from '../NextButton/NextButton'
import { VolumeBar } from '../VolumeBar/VolumeBar'
import { TimeProgressBar } from '../TimeProgressBar/TimeProgressBar'
import { Cover } from '../Cover/Cover'

import { IconVolumeCross } from '../../ui/Icons/IconVolumeCross'
import { IconVolume } from '../../ui/Icons/IconVolume'

import { sounds } from "../../../shared/constants";

import './Player.styles.css';

export const Player = () => {
    const [order, setOrder] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrack = useMemo(() => sounds[order], [order])

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const soundsCount = sounds.length;

    return (
        <div className="player">
            <audio src={currentTrack.src} ref={audioRef} />

            <div className="player__tools-row">
                <PrevButton
                    audioRef={audioRef}
                    soundsCount={soundsCount}
                    order={order}
                    setOrder={setOrder}
                />

                <IconVolumeCross />

                <VolumeBar audioRef={audioRef} />

                <IconVolume />
            </div>

            <div className="player__tools-row">
                <PlayButton audioRef={audioRef} setIsPlaying={setIsPlaying} />

                <div className="sound-name">{sounds[order].name}</div>
            </div>

            <div className="player__tools-row">
                <NextButton
                    audioRef={audioRef}
                    soundsCount={soundsCount}
                    order={order}
                    setOrder={setOrder}
                />

                <TimeProgressBar audioRef={audioRef} isPlaying={isPlaying} />
            </div>

            <Cover src={sounds[order].cover} isPlaying={isPlaying} />
        </div>
    )
}