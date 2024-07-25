<script lang="ts">
  import type { Asset } from 'contentful'

  import Icon from '$lib/components/Icon.svelte'
  import Media from '$lib/components/Media.svelte'
  import NewsletterForm from '$lib/components/NewsletterForm.svelte'
  import Slider from '$lib/components/Slider.svelte'
  import Video from '$lib/components/Video.svelte'
  
  import type { PageData } from './$types'
  import Rich from '$lib/components/Rich.svelte';
  let { data }: {
		data: PageData
	} = $props()

  let container = $state<HTMLElement>()
  let rect = $derived<{ y: number, h: number }>(container ? { y: container.offsetTop, h: container.clientHeight } : undefined)

  let sliderContainer = $state<HTMLElement>()
  let sliderRect = $derived<{ y: number, h: number }>(sliderContainer ? { y: sliderContainer.offsetTop, h: sliderContainer.clientHeight } : undefined)
</script>


<header class="flex flex--gapped">
  <figure class="col col--12of12 first">
    <Media media={data.page.fields.hero} />
  </figure>

  <hr>
  <hr>

  <figure class="col col--12of12 video">
    <Video {rect} src={data.page.fields.video.fields.file.url} />
  </figure>

  <h5 class="flex flex--thick_gapped vertical" bind:this={container}>{@html data.page.fields.videoCaption}</h5>

  <nav class="flex flex--spaced flex--bottom">
    <a href="/" class="col col--1of12 col--mobile--2of12"><Icon i="logo" label="æ" /></a>
    <a href="/"><h5>æsem athletica</h5></a>
  </nav>
</header>

<section class="flex flex--gapped">
  <h1 class="col col--10of12 last">{data.page.fields.title}</h1>

  <hr>
  <center class="col col--12of12"><h1>{data.page.fields.tagline}</h1></center>
  <hr>
  <figure class="col col--12of12 horizontal" bind:this={sliderContainer}>
    <Slider slidesPerView={2} gapped free={sliderRect}>
      <ol class="list--nostyle slider__container">
        {#each data.page.fields.gallery as media}
        <li class="slide">
          <figure>
            <Media {media} />
          </figure>
        </li>
        {/each}
      </ol>
    </Slider>
  </figure>

  <div class="col col--4of12 col--mobile--10of12 col--middle">
    <Rich body={data.page.fields.text} />
  </div>

  <div class="col col--1of12"></div>

  <figure class="col col--7of12 col--mobile--12of12 col--right">
    <Media media={data.page.fields.footerHero} />
  </figure>

  <nav class="col col--2of12 col--mobile--12of12 last">
    <small>{data.page.fields.copyright}</small><br>
    <div class="flex flex--tight_gapped">
      {#if data.page.fields.facebook}
      <a href={data.page.fields.facebook} rel="external" target="_blank"><Icon label="Facebook" i="facebook" /></a>
      {/if}
      {#if data.page.fields.instagram}
      <a href={data.page.fields.instagram} rel="external" target="_blank"><Icon label="Instagram" i="instagram" /></a>
      {/if}
    </div>
  </nav>
</section>


<style lang="scss">

  figure {
    background-color: $grey;
    border-radius: $radius;

    :global(img),
    :global(video) {
      height: calc(75lvh - $s1);
      object-fit: cover;
      border-radius: $radius;
    }

    @media (max-width: $mobile) {
      :global(img),
      :global(video) {
        height: calc(50lvh - $s1);
      }
    }

    &.col--12of12 {
      margin: 0 calc(($s5 * -1) + $s1);
      width: calc(100% + ($s5 + $s1));
    }

    &.col--right {
      margin-right: calc(($s5 * -1) + $s1);
      width: calc(var(--width) + ($s5) - $s1);
    }

    @media (max-width: $mobile) {
      &.col--mobile--12of12 {
        margin: 0 calc(($s5 * -1) + $s1);
        width: calc(100% + ($s5 + $s1));
      }
    }

    &.first {
      @media (max-width: $mobile) {
        :global(img),
        :global(video) {
          height: 72lvh;
        }
      }
    }

    &.video {
      border-radius: 0;
      margin: 0 calc(($s5 * -1));
      width: calc(100% + ($s5 * 2));
      height: 100lvh;

      :global(video) {
        height: 100lvh;
        border-radius: 0;
      }
    }

    &.horizontal {
      background-color: transparent;
      height: calc(300vh);
      margin: 0 calc($s5 * -1);
      width: calc(100% + ($s5 * 2));

      :global(.slider) {
        position: sticky;
        top: $s1;
        pointer-events: none;
      }

      ol {
        // position: sticky;
        // top: $s1;
        

        li {
          // margin: 0 calc($s1 / 2);
          &:first-child {
            margin-left: $s1;
          }

          &:last-child {
            margin-right: $s1;
          }

          & {
            --view: 62;
          }

          :global(img),
          :global(video) {
            height: calc(66lvh - $s1);
          }

          &:nth-child(2n) {
            --view: 34;

            figure {
              height: calc(100vh - ($s1 * 2));

              :global(img),
              :global(video) {
                height: calc(100vh - ($s1 * 2));
              }
            }
          }
        }
      }
    }
  }

  .last {
    order: 99;
    margin: $s1 0;

    @media (max-width: $mobile) {
      // font-size: 10vw;
      margin: $s2 0 $s1;
      padding-bottom: calc($s3);
    }
  }

  nav.last {
    @media (min-width: $mobile) {
      align-self: flex-end;
      text-align: right;
    }

    @media (max-width: $mobile) {
      display: flex;
      align-items: center;

      small {
        width: 50%;
      }
    }

    div {
      justify-content: flex-end;

      @media (min-width: $mobile) {
        margin: $s0 0;
      }
    }
    
    a {
      :global(svg) {
        width: $s2;
        height: $s2;

        @media (max-width: $mobile) {
          width: 8vw;
          height: $s3;
        }
      }
    }
  }

  center {
    @media (max-width: $mobile) {
      padding: 0 $s3;
    }
  }

  hr {
    width: 100%;
    height: 0;
    margin: $s3 0;
  }

  header {



    .vertical {
      margin-top: -100vh;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      -webkit-text-orientation: mixed;
      text-orientation: mixed;
      height: 300vh;
      
      align-items: center;
      justify-content: center;

      :global(strong) {
        text-transform: uppercase;
        font-weight: normal;
      }
    }
    
    .video {
      position: sticky;
      top: 0;
      z-index: -1;
    }

    nav {
      position: sticky;
      bottom: 0;
      padding-bottom: calc($s4);

      @media (max-width: $mobile) {
        padding-bottom: calc($s5);
        
        h5 {
          font-size: $s2;
        }
      }
    }
  }

  .col--middle {
    @media (max-width: $mobile) {
      margin: $s5 0;
    }
  }
</style>