<script lang="ts">
  import type { Asset } from 'contentful'

  import Icon from '$lib/components/Icon.svelte'
  import Media from '$lib/components/Media.svelte'
  import NewsletterForm from '$lib/components/NewsletterForm.svelte'
  import Slider from '$lib/components/Slider.svelte'
  import Video from '$lib/components/Video.svelte'

  let container = $state<HTMLElement>()
  let rect = $derived<{ y: number, h: number }>(container ? { y: container.offsetTop, h: container.clientHeight } : undefined)

  let sliderContainer = $state<HTMLElement>()
  let sliderRect = $derived<{ y: number, h: number }>(sliderContainer ? { y: sliderContainer.offsetTop, h: sliderContainer.clientHeight } : undefined)
</script>



<header class="flex flex--gapped">
  <figure class="col col--12of12 first">
    <Media media={{ fields: { file: {
      url: 'https://images.ctfassets.net/igsltvx7i8jl/4SJ26TMFfcQ8RTOvkqKYYQ/55abc87cb2939cb94e926c113f86e73f/Capture_d__cran__le_2024-03-05___16.14.01.png',
      contentType: 'image/png',
      details: {
        image: {
          width: 1140,
          height: 1326
        }
      }
    } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
  </figure>

  <hr>
  <hr>

  <figure class="col col--12of12 video">
    <Video {rect} />
  </figure>

  <h5 class="flex flex--thick_gapped vertical" bind:this={container}><strong>Limited edition coming soon.</strong><strong>Bientôt disponible en édition limité.</strong> <strong>Pronto disponible en edición limitada.</strong></h5>

  <nav class="flex flex--spaced flex--bottom">
    <a href="/" class="col col--1of12 col--mobile--2of12"><Icon i="logo" label="æ" /></a>
    <a href="/"><h5>æsem athletica</h5></a>
  </nav>
</header>

<section class="flex flex--gapped">
  <h1 class="col col--12of12 last">æsem athletica</h1>

  <hr>
  <center class="col col--12of12"><h1>Harmony at play</h1></center>
  <hr>
  <figure class="col col--12of12 horizontal" bind:this={sliderContainer}>
    <Slider slidesPerView={2} gapped free={sliderRect}>
      <ol class="list--nostyle slider__container">
        <li class="slide">
          <figure>
            <Media media={{ fields: { file: {
              url: 'https://images.ctfassets.net/igsltvx7i8jl/1RmyB9y0gKWbUjy7pb4wKM/114fed193b4e8865c8dbad7cde0409ec/Capture_d__cran__le_2024-03-05___16.14.39.png',
              contentType: 'image/png',
              details: {
                image: {
                  width: 1418,
                  height: 976
                }
              }
            } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
          </figure>
        </li>
        <li class="slide">
          <figure>
            <Media media={{ fields: { file: {
              url: 'https://images.ctfassets.net/igsltvx7i8jl/4g6pYgAy4tRgUaDLlDoEaB/9331963c94904428dc442541f695b380/454346768jpg.jpg',
              contentType: 'image/jpeg',
              details: {
                image: {
                  width: 1200,
                  height: 810
                }
              }
            } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
          </figure>
        </li>
        <li class="slide">
          <figure>
            <Media media={{ fields: { file: {
              url: 'https://images.ctfassets.net/igsltvx7i8jl/1RmyB9y0gKWbUjy7pb4wKM/114fed193b4e8865c8dbad7cde0409ec/Capture_d__cran__le_2024-03-05___16.14.39.png',
              contentType: 'image/png',
              details: {
                image: {
                  width: 1418,
                  height: 976
                }
              }
            } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
          </figure>
        </li>
        <li class="slide">
          <figure>
            <Media media={{ fields: { file: {
              url: 'https://images.ctfassets.net/igsltvx7i8jl/4g6pYgAy4tRgUaDLlDoEaB/9331963c94904428dc442541f695b380/454346768jpg.jpg',
              contentType: 'image/jpeg',
              details: {
                image: {
                  width: 1200,
                  height: 810
                }
              }
            } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
          </figure>
        </li>
      </ol>
    </Slider>
  </figure>

  <p class="col col--4of12 col--mobile--12of12 col--middle">EN.
  We are working on the production of a new tennis shoe that is tailormade to fit the lifestyle of the new generation of athletes. Made in collaboration with Leylah Fernandez, we aim to add artistry to the technology, performance, and enginering checklist.

  FR.
  Nous travaillons sur la production d’un nouveau soulier de tennis qui est fait sur mesure pour le style de vie de la nouvelle génération d’athlètes. Fait en collaboration avec Leylah Fernandez, nous souhaitons ajouter la notion d’art aux critères de technologie, performance et ingénierie.

  ES.
  Estamos trabajando en la producción de una nueva zapatilla de tenis hecha a medida para el estilo de vida de la nueva generación de deportistas. Realizado en colaboración con Leylah Fernández, queremos agregar la noción de arte a la lista de tecnología, performance e ingeniería.</p>

  <div class="col col--1of12"></div>

  <figure class="col col--7of12 col--mobile--12of12 col--right">
    <Media media={{ fields: { file: {
      url: 'https://images.ctfassets.net/igsltvx7i8jl/1RmyB9y0gKWbUjy7pb4wKM/114fed193b4e8865c8dbad7cde0409ec/Capture_d__cran__le_2024-03-05___16.14.39.png',
      contentType: 'image/png',
      details: {
        image: {
          width: 1418,
          height: 976
        }
      }
    } }} as any as Asset<"WITHOUT_UNRESOLVABLE_LINKS">} />
  </figure>
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

          --view: 62;

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
      padding-bottom: calc($s3);
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

      strong {
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