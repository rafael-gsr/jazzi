import React from "react"

export type AudioContextProps = {
  children: React.ReactNode;
}

export type IAudioState = {
  duration: number;
  volume: number;
}

export type handleAudioStateProps = {
  duration?: any;
  volume?: any;
}

export type IUseAudioState = [
  {
    duration: number;
    muted: boolean;
    volume: number;
    paused: boolean;
    currentTime: number;
  },
  {
    handlePlayPause: (toPause?: boolean ) => void
    handleMuted: (muted: boolean) => void;
    handleVolume: (volume: number) => void;
    handleCurrentTime: (time: number, onlyVisual?: boolean) => void;
  },
]

export enum TouchStates {
  START = 'touchstart',
  MOVE = 'touchmove',
  END = 'touchend',
}

export enum MouseStates {
  START = 'mousedown',
  MOVE = 'mousemove',
  END = 'mouseup',
}

export enum TimeBarInteractions {
  START = 'start',
  MOVE = 'move',
  END = 'end',
}
