import defaultSongs from "./defaultSongs.json";

import type { Song } from "./Song";

let songs: Song[] = getDefaultSongs();
let currentIndex = 0;

function randInt(from: number, to: number): number {
  return Math.floor(from + Math.random() * (to - from));
}

function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function getDefaultSongs(): Song[] {
  const nonRandomFields = structuredClone(defaultSongs);
  const songs: Song[] = nonRandomFields.map((song) => {
    const numWords = song.lyrics.length;
    const firstRed = randInt(0, numWords);
    let secondRed = randInt(0, numWords);
    while (firstRed === secondRed) {
      secondRed = randInt(0, numWords);
    }
    return { ...song, openeds: Array(numWords).fill(false), reds: [firstRed, secondRed] };
  });
  shuffleArray(songs);
  return songs;
}

export function resetState() {
  songs = getDefaultSongs();
}

export function clearState() {
  songs = [];
}

export function getBoard(): Song | undefined {
  return songs[currentIndex];
}

export function openBoard(wordIndex: number) {
  songs[currentIndex].openeds[wordIndex] = true;
  // eslint-disable-next-line no-self-assign
  songs = songs;
}

export function nextBoard() {
  currentIndex = (currentIndex + 1) % songs.length;
}

export function prevBoard() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
}

