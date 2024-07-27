<script lang="ts">
  import { onMount } from 'svelte'

  let video = $state<HTMLVideoElement>()
  let currentTime = $state<number>()
  let duration = $state<number>()

  let { src, rect }: {
    src: string
    rect: { y: number, h: number }
  } = $props()

  onMount(() => {
    video.load()

    let height = window.innerHeight

    window.addEventListener("scroll", () => {
      if (!video || !duration || !rect) return
      const scroll = window.scrollY + height - rect.y
      if (scroll < 0) return
      const percentage = scroll / (rect.h + height)
      if (percentage > 1) return
      currentTime = percentage * duration
    }, { passive: true })
  })
</script>

<!-- <svelte:window onscroll={} /> -->

<!-- svelte-ignore a11y_media_has_caption -->
<video bind:this={video} bind:currentTime bind:duration preload="auto" {src} loop playsinline muted controls={false}>
  <!-- <source src type="video/mp4" /> -->
  <!-- <source src="https://videos.ctfassets.net/igsltvx7i8jl/2iNsFK7xGAnrbIsvKRVh1v/dfe1bee3d4c620761f58a699e05919b6/Ajustement_au_timing.webm" type="video/webm" /> -->
  Your browser does not support the video tag.
</video>

<style lang="scss">
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>