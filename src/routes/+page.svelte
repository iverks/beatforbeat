<script lang="ts">
	import type { BeatForBeat } from './Song';
	import _songs from './lyrics.json';
	import Game from './Game.svelte';

	const __songs: any = _songs; // Ugly type hack
	const songs: BeatForBeat = __songs;

	const keys = Object.keys(songs);
	const songName = keys[0];
	let opened = [false, false, false, false, false];
	const reds = [false, false, true, true, false];
	const finished = false;

	function handleOpenBoard(event: CustomEvent<{ idx: number }>) {
		const idx = event.detail.idx;
		opened[idx] = true;
		opened = opened;
	}
</script>

<h1 class="my-5 text-center text-8xl font-bold">Beat For Beat</h1>

<Game song={songs[songName]} {songName} {opened} {finished} {reds} on:open={handleOpenBoard} />
