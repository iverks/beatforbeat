<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Song } from './Song';

	export let songTitle: string; // for updating text sizes
	export let song: Song;

	const dispatch = createEventDispatcher<{ open: { idx: number } }>();
	import { textfit } from 'svelte-textfit';
	const parents: HTMLButtonElement[] = [];
</script>

<section class="flex w-full">
	{#each song['lyrics'] as word, idx}
		<button
			class={`m-2 grid aspect-video w-0 basis-1/5 place-content-center border-8 lg:flex-1 ${
				!song.openeds[idx] ? 'bg-sky-400' : song.reds.includes(idx) ? 'bg-red-600' : 'bg-blue-600'
			}`}
			on:click={() => dispatch('open', { idx: idx })}
			bind:this={parents[idx]}
		>
			{#if song.openeds[idx]}
				<span
					class="text-8xl font-semibold uppercase"
					use:textfit={{ mode: 'multi', parent: parents[idx], update: songTitle }}
				>
					{word}
				</span>
			{:else}
				<span
					class="text-8xl font-semibold uppercase"
					use:textfit={{ mode: 'multi', parent: parents[idx], update: songTitle }}
				>
					{idx + 1}
				</span>
			{/if}
		</button>
	{/each}
</section>
