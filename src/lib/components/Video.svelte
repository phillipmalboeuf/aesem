<script lang="ts">
  import { onMount } from 'svelte'

  let video = $state<HTMLVideoElement>()
  let currentTime = $state<number>()
  let duration = $state<number>()

  let { rect }: {
    rect: { y: number, h: number }
  } = $props()

  onMount(() => {
    video.load()
  })
</script>

<svelte:window onscroll={() => {
  if (!video || !duration || !rect) return
  const scroll = window.scrollY + window.innerHeight - rect.y
  if (scroll < 0) return
  const percentage = scroll / (rect.h + window.innerHeight)
  if (percentage > 1) return
  currentTime = percentage * duration
}} />

<!-- svelte-ignore a11y_media_has_caption -->
<video bind:this={video} bind:currentTime bind:duration preload="auto" loop playsinline muted controls={false}>
  <source src="https://videos.ctfassets.net/igsltvx7i8jl/5pebJjTSFrohXjAdT7Zlbo/23694393491efddae2c9b07d741e8ca8/video.mp4" type="video/mp4" />
  <source src="https://videos.ctfassets.net/igsltvx7i8jl/2iNsFK7xGAnrbIsvKRVh1v/dfe1bee3d4c620761f58a699e05919b6/Ajustement_au_timing.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

<style lang="scss">
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>