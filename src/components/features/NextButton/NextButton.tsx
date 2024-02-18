import React from "react";

import { Button } from '../../ui/Button/Button';

import { PlayerOrderButton } from '../types';

import IconNext from '../../../assets/icons/next.png';

export const NextButton = (props: PlayerOrderButton) => {

    const {
        audioRef,
        order,
        setOrder,
        soundsCount,
    } = props;

    const onClick = async () => {
        const isPlaying = !audioRef.current?.paused;

        if (order === soundsCount - 1) {
            setOrder(0)
        } else {
            setOrder(prev => prev + 1);
        }

        if (isPlaying) {
            await audioRef.current?.onloadeddata
            await audioRef.current?.play()
        }
    }

    return (
        <div>
            <Button onClick={onClick}>
                <img src={IconNext} alt="next" />
            </Button>
        </div>
    )
};