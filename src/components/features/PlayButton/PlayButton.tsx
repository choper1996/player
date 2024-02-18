import React from "react";

import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { Button } from '../../ui/Button/Button';

import IconPlay from '../../../assets/icons/play.png';

interface PlayButtonProps {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

export const PlayButton = (props: PlayButtonProps) => {
    const { audioRef, setIsPlaying } = props;

    const onClick = async () => {
        const isPlaying = !audioRef.current?.paused;

        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            await audioRef.current?.play();
            setIsPlaying(true);
        }
    }

    return (
        <div>
            <Button onClick={onClick} additionalClasses="button--m">
                <img src={IconPlay} alt="play" />
            </Button>
        </div>
    )
};