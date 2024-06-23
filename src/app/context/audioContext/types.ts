import React from "react"

export type AudioContextProps = {
  children: React.ReactNode;
}

export type IAudioState = {
  play: () => void;
  pause: () => void;
  duration: number;
  volume: number;
  muted: boolean;
  paused: boolean;
}

export type handleAudioStateProps = {
  play?: () => void;
  pause?: () => void;
  duration?: any;
  volume?: any;
  muted?: boolean;
  paused?: boolean
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