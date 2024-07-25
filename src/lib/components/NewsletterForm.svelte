<script lang="ts">
  import type { TypeFormSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import Rich from './Rich.svelte';

  let { form }: {
		form: Entry<TypeFormSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">,
	} = $props()

  let open = $state<boolean>()
  let scrollY = $state(0)
</script>

<svelte:window bind:scrollY />

{#if form}
<aside class="flex" class:open={open || (open === undefined && scrollY <= 0)}>
  <button class="button--none col flex" onclick={() => open = (open === undefined && scrollY <= 0) ? false : !open}>{@html form.fields.title}</button>

  <form class="flex flex--gapped flex--column col col--9of12 padded" action={form.fields.action} method="post" target="_blank">

    <!-- <h5>Be among the first to be notified on availability.</h5>
    <p>FR: Soyez parmi les premiers à être informé sur les disponibilités.</p>
    <p>ES: Sea uno de los primeros en ser notado sobre la disponibilidad.</p> -->
    <Rich body={form.fields.text} />

    <hr>

    <div class="flex flex--gapped">
      <input class="col col--mobile--12of12" type="email" name="EMAIL" id="email" placeholder={form.fields.email}>
      <button class="col col--mobile--12of12" type="submit">{form.fields.button}</button>
    </div>
  </form>
</aside>
{/if}

<style lang="scss">
  aside {
    position: fixed;
    top: $s5;
    right: 0;
    z-index: 10;
    background-color: $gold;
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;

    align-items: stretch;

    width: 33.3vw;
    transition: transform 666ms;
    transform: translateX(calc(100% - $s5 + ($s1 / 2)));

    @media (max-width: $mobile) {
      transform: translateX(calc(100% - $s5 - $s5));
      width: calc(50vw + $s5);
    }

    &.open {
      transform: translateX(0);
    }

    > button {
      width: $s5;
      padding: $s5 $s2 $s1 0;
      display: flex;
      height: 50lvh;
      cursor: pointer;
      writing-mode: vertical-rl;
      text-orientation: mixed;

      color: $light;
      align-items: center;
      justify-content: flex-start;

      transform: rotate(180deg);

      @media (max-width: $mobile) {
        font-size: $s0;
        padding: $s5 $s1 $s1 0;
        height: 45lvh;
      }
    }

    form {
      // display: inline-flex;
      // align-items: flex-start;
      padding-top: $s5;
      padding-bottom: $s5;

      hr {
        margin: auto 0;
        width: 100%;
        background-color: transparent;
      }

      input {
        flex: 1;
      }

      button {
        // border-radius: 50%;
        @media (min-width: $mobile) {
          width: auto;
        }
      }
    }
  }
</style>