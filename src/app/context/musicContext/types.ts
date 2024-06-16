import React from "react";

export type MusicContextProps = {
  title: string;
  author: string;
  archive: string;
  thumb: string;
}

export type Playlist = MusicContextProps[]

export type IMusicContextProvider = {
  children: React.ReactNode;
}