<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'
  import NewsletterForm from '$lib/components/NewsletterForm.svelte'
  import Slider from '$lib/components/Slider.svelte'
  import Video from '$lib/components/Video.svelte'

  let container = $state<HTMLElement>()
  let rect = $derived<{ y: number, h: number }>(container ? { y: container.offsetTop, h: container.clientHeight } : undefined)

  let sliderContainer = $state<HTMLElement>()
  let sliderRect = $derived<{ y: number, h: number }>(sliderContainer ? { y: sliderContainer.offsetTop, h: sliderContainer.clientHeight } : undefined)
</script>



<header class="flex flex--gapped">
  <figure class="col col--12of12"></figure>

  <hr>

  <figure class="col col--12of12 video">
    <Video {rect} />
  </figure>

  <h5 class="flex flex--thick_gapped vertical" bind:this={container}><strong>Limited edition coming soon.</strong><strong>Bientôt disponible en édition limité.</strong> <strong>Pronto disponible en edición limitada.</strong></h5>

  <nav class="flex flex--spaced flex--bottom">
    <a href="/" class="col col--1of12"><Icon i="logo" label="æ" /></a>
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
        <li class="slide"><figure></figure></li>
        <li class="slide"><figure></figure></li>
        <li class="slide"><figure></figure></li>
        <li class="slide"><figure></figure></li>
      </ol>
    </Slider>
  </figure>

  <p class="col col--4of12 col--middle">EN.
  We are working on the production of a new tennis shoe that is tailormade to fit the lifestyle of the new generation of athletes. Made in collaboration with Leylah Fernandez, we aim to add artistry to the technology, performance, and enginering checklist.

  FR.
  Nous travaillons sur la production d’un nouveau soulier de tennis qui est fait sur mesure pour le style de vie de la nouvelle génération d’athlètes. Fait en collaboration avec Leylah Fernandez, nous souhaitons ajouter la notion d’art aux critères de technologie, performance et ingénierie.

  ES.
  Estamos trabajando en la producción de una nueva zapatilla de tenis hecha a medida para el estilo de vida de la nueva generación de deportistas. Realizado en colaboración con Leylah Fernández, queremos agregar la noción de arte a la lista de tecnología, performance e ingeniería.</p>

  <div class="col col--1of12"></div>

  <figure class="col col--7of12 col--right"></figure>
</section>


<style lang="scss">

  figure {
    height: 66vh;
    background-color: $grey;
    border-radius: $radius;

    &.col--12of12 {
      margin: 0 calc(($s5 * -1) + $s1);
      width: calc(100% + ($s5 + $s1));
    }

    &.col--right {
      margin-right: calc(($s5 * -1) + $s1);
      width: calc(var(--width) + ($s5) - $s1);
    }

    &.video {
      border-radius: 0;
      margin: 0 calc(($s5 * -1));
      width: calc(100% + ($s5 * 2));
      height: 100lvh;
    }

    &.horizontal {
      background-color: transparent;
      height: calc(200vh - ($s1 * 2));

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
            margin-left: 0;
          }

          &:nth-child(2n) {
            figure {
              height: calc(100vh - ($s1 * 2));
            }
          }
        }
      }
    }
  }

  .last {
    order: 99;
  }

  hr {
    width: 100%;
    height: 0;
    margin: $s3 0;
  }

  header {



    .vertical {
      margin-top: -100vh;
      writing-mode: vertical-rl;
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
      padding-bottom: $s1;
    }
  }
</style>