import React from "react";

import { useEffect, useState } from 'react';

import './Cover.styles.css';

interface CoverProps {
    src: string;
    isPlaying: boolean;
}

export const Cover = (props: CoverProps) => {
    const { src, isPlaying } = props;

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (rotate >= 360) {
                setRotate(0);
            } else {
                setRotate(deg => deg + 1);
            }

        }, 1000);

        if (!isPlaying) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isPlaying]);

    return (
        <div className="cover" style={{ transform: `rotate(${rotate}deg)`}}>
            <img src={src} alt="sound-cover"  />
        </div>
    )
};