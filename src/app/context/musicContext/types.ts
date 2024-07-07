import React from "react";

export type MusicContextProps = {
  title: string;
  author: string;
  archive: string;
  thumb: string;
}

export type PlaylistProps = {
  title: string;
  musics: MusicContextProps[];
}

export type IMusicContextProvider = {
  children: React.ReactNode;
}

export type IMusicContextHook = [
  MusicReducerStateProps,
  (reduce: MusicReducerActionProps) => void,
]

export enum ReducerActionsTypes {
  NEXT= 'NEXT',
  PREV= 'PREV',
  SETPLAYLIST= 'SETPLAYLIST',
  SETPLAYLISTPOS= 'SETPLAYLISTPOS',
}
1
export type MusicReducerActionProps = {
  type: 'NEXT' | 'PREV' | 'SETPLAYLIST' | 'SETPLAYLISTPOS';
  payload?: number | MusicContextProps[] | null | undefined;
}

export type MusicReducerStateProps = {
  playlist: MusicContextProps[],
  playlistPos: number,
}