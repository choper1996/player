import React from 'react';

import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { Button } from '../../ui/Button/Button';

import IconPrev from '../../../assets/icons/prev.png';

interface PrevButtonProps {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    soundsCount: number;
    order: number;
    setOrder: Dispatch<SetStateAction<number>>;
}

export const PrevButton = (props: PrevButtonProps) => {
    const {
        audioRef,
        order,
        setOrder,
        soundsCount,
    } = props;

    const onClick = async () => {
        const isPlaying = !audioRef.current?.paused;

        if (order === 0) {
            setOrder(soundsCount - 1)
        } else {
            setOrder(prev => prev - 1);
        }

        if (isPlaying) {
            await audioRef.current?.onloadeddata
            await audioRef.current?.play()
        }
    }

    return (
        <div>
            <Button onClick={onClick}>
                <img src={IconPrev} alt="prev"/>
            </Button>
        </div>
    )
};