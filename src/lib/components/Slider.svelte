<script lang="ts">
  import { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay'
  import Autoheight from 'embla-carousel-auto-height'
  import { onDestroy, onMount, type Snippet } from 'svelte'
  import { on } from 'svelte/events'

  let { slider = $bindable(), active = $bindable(0), disabled, free, gapped, buttons, autoheight, autoplay, dots, slidesPerView, children }: {
    slider?: EmblaCarouselType
    active?: number
    disabled?: boolean
    free?: { y: number, h: number }
    gapped?: boolean
    buttons?: boolean
    autoheight?: boolean
    autoplay?: boolean
    dots?: number
    slidesPerView?: number
    children: Snippet
  } = $props()

  let figure = $state<HTMLElement>()
  let previous: number

  const plugins = [
    ...autoplay ? [Autoplay({ delay: 2666, stopOnFocusIn: true, stopOnMouseEnter: false, stopOnInteraction: true })] : [],
    ...autoheight ? [Autoheight()] : []
  ]

  onMount(() => {
    // if (figure) {
    //   const off = on(figure, 'emblaInit', event => {
    //     // @ts-ignore
    //     slider = event.detail
    //     slider.on("select", () => active = slider.selectedScrollSnap())
    //     console.log(slider)
    //   })
      
    //   return off()
    // }
  })

  onDestroy(() => {
    slider?.destroy()
  })
</script>

<svelte:window onscroll={(event) => {
  if (!free || !slider) return
  const scroll = window.scrollY - free.y
  if (scroll < 0) {
    previous = 0
    return
  }
  const percentage = scroll / (free.h - window.innerHeight)
  if (percentage > 1) {
    previous = 1
    return
  }
  if (previous) {
    slider.internalEngine().scrollTo.distance((percentage - previous) * free.h * -1, false)
  }

  previous = percentage
}} />

{#if !disabled}
<figure class="slider" class:gapped style:--view={100 / slidesPerView} bind:this={figure}
  onemblaInit={(event) => {
    slider = event.detail
    slider.on("select", () => active = slider.selectedScrollSnap())
  }}
  use:emblaCarouselSvelte={{ options: {
    dragFree: !!free,
    loop: !free,
    skipSnaps: true,
    ...slidesPerView > 1 ? {
      align: 'start'
    } : {}
  }, plugins }}>
  {@render children()}
</figure>

{#if buttons}
<nav>
  <button class="previous" onclick={(e) => {
    e.preventDefault()
    slider.scrollPrev()
  }}><svg width="20" height="20" viewBox="0 0 13 23"><path d="M12 1L2 11.5L12 22" stroke="currentColor" stroke-width="2"/></svg></button>
  <button class="next" onclick={(e) => {
    e.preventDefault()
    slider.scrollNext()
  }}><svg width="20" height="20" viewBox="0 0 13 23"><path d="M1 22L11 11.5L0.999999 1" stroke="currentColor" stroke-width="2"/></svg></button>
</nav>
{/if}

{#if dots}
<nav class="dots">
  {#each Array(dots) as d, i}
  <button class="dot" class:active={active === i} onclick={() => {
    slider.scrollTo(i)
    // @ts-ignore
    slider.plugins().autoplay.reset()
  }}>{i}</button>
  {/each}
</nav>
{/if}
{:else}
<figure class="slider" style:--view={`${100 / slidesPerView}%`}>
  {@render children()}
</figure>
{/if}

<style lang="scss">
.slider {
  overflow: hidden;
  // cursor: ew-resize;
  position: relative;
  user-select: none;

  :global(.slider__container) {
    list-style: none;
    display: flex;
    align-items: flex-start;
    // transition: height 333ms;
    padding: 0;
    will-change: transform;
  }
    
    :global(.slide) {
      flex: 0 0 calc(var(--view) * 1%);
      min-width: 0;

      @media (max-width: $mobile) {
        --view: 90 !important;
      }

      // @media (max-width: $mobile) {
      //   flex: 0 0 90%;
      // }
    }

  &.gapped {
    :global(.slider__container) {
      --gap: #{$s0};
      gap: var(--gap);

      :global(.slide) {
        $adjust: calc(var(--gap) / (100 / var(--view)));
        --width: calc((var(--view) * 1%) - var(--gap) + #{$adjust});
        flex: 0 0 var(--width);
      }
    }    
  }
} 

nav {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: $base;
  right: $base;
  transform: translateY(-50%);
  pointer-events: none;

  display: flex;
  justify-content: space-between;

  // @media (max-width: $mobile) {
  //   &:not(.dots) {
  //     position: static;
  //     gap: $mobile_base;
  //   }
  // }

  button {
    pointer-events: auto;
    // width: 0;
    display: inline-flex;
    justify-content: center;
    border-radius: 50%;
    padding: $base * 0.5;
  }

  &.dots {
    top: auto;
    left: auto;
    bottom: calc(100% + ($base * 0.5));
    right: $base * 0.5;
    transform: none;

    gap: $base * 0.333;

    button.dot {
      font-size: 0;
      padding: $base * 0.25;
      background-color: $light;

      &.active {
        background-color: $dark;
      }
    }
  }
}
</style>