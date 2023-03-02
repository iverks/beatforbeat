export interface Song {
  lyrics: string[5];
}

export interface BeatForBeat {
  [key: string]: Song;
}