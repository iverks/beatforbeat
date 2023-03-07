<script lang="ts">
	import Game from './Game.svelte';
	import { getBoard, nextBoard, openBoard, prevBoard } from './gameController';

	function handleOpenBoard(event: CustomEvent<{ idx: number }>) {
		const idx = event.detail.idx;
		openBoard(idx);
		song = getBoard();
	}

	function handlePrevSong() {
		prevBoard();
		song = getBoard();
	}

	function handleNextSong() {
		nextBoard();
		song = getBoard();
	}

	let song = getBoard();
</script>

<div class="h-screen">
	<h1 class="py-5 text-center text-8xl font-bold">Beat For Beat</h1>

	<div class="flex flex-col place-content-center">
		{#if song}
			<Game {song} songTitle={song.title} on:open={handleOpenBoard} />
		{:else}
			No Game
		{/if}
	</div>

	<div id="controls" class="absolute bottom-0 flex w-full place-content-center p-6">
		<button on:click={handlePrevSong}>Previous song</button>
		<span class="px-2">|</span>
		<button on:click={handleNextSong}>Next song</button>
	</div>
</div>
