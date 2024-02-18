import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface PlayerOrderButton {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    soundsCount: number;
    order: number;
    setOrder: Dispatch<SetStateAction<number>>;
}