import React from "react"

export type AudioContextProps = {
  children: React.ReactNode;
}

export type IAudioState = {
  play?: () => void;
  pause?: () => void;
  duration: number;
  volume: number;
}

export type IUseAudioState = {
  audioState: IAudioState;
  handleAudioState: (value: IAudioState) => void;
  currentTime: number;
  handleCurrentTime: (value:number) => void;
}