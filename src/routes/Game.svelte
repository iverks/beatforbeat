<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Song } from './Song';

	export let song: Song;
	export let songName: string;
	export let opened: boolean[];
	export let reds: boolean[];
	export let finished: boolean;

	const dispatch = createEventDispatcher<{ open: { idx: number } }>();
	import { textfit } from 'svelte-textfit';
	const parents: HTMLButtonElement[] = [];
</script>

<section class="grid w-full grid-cols-1 lg:grid-cols-5">
	{#each song['lyrics'] as word, idx}
		<button
			class={`m-2 grid aspect-video basis-1/5 place-content-center border-8 ${
				!opened[idx] ? 'bg-sky-400' : reds[idx] ? 'bg-red-600' : 'bg-blue-600'
			}`}
			on:click={() => dispatch('open', { idx: idx })}
			bind:this={parents[idx]}
		>
			{#if opened[idx]}
				<span
					class="text-8xl font-semibold uppercase"
					use:textfit={{ mode: 'multi', parent: parents[idx] }}
				>
					{word}
				</span>
			{:else}
				<span
					class="text-8xl font-semibold uppercase"
					use:textfit={{ mode: 'multi', parent: parents[idx] }}
				>
					{idx + 1}
				</span>
			{/if}
		</button>
	{/each}

	{#if finished}
		<div class="bg-red-500">{songName}</div>
	{/if}
</section>
