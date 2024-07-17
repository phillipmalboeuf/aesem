<script lang="ts">
  let open = $state<boolean>()
  let scrollY = $state(0)
</script>

<svelte:window bind:scrollY />

<aside class="flex" class:open={open || (open === undefined && scrollY <= 0)}>
  <button class="button--none col flex" onclick={() => open = (open === undefined && scrollY <= 0) ? false : !open}>Newsletter subscription</button>

  <form class="flex flex--gapped flex--column col col--9of12 padded" action="">

    <h5>Be among the first to be notified on availability.</h5>
    <p>FR: Soyez parmi les premiers à être informé sur les disponibilités.</p>
    <p>ES: Sea uno de los primeros en ser notado sobre la disponibilidad.</p>

    <hr>

    <div class="flex flex--gapped">
      <input class="col col--mobile--12of12" type="email" name="email" id="email" placeholder="name@email.com">
      <button class="col col--mobile--12of12" type="submit">✓</button>
    </div>
  </form>
</aside>

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
    transform: translateX(calc(100% - $s5 + $s1));

    @media (max-width: $mobile) {
      transform: translateX(calc(100% - $s5 - $s5));
      width: calc(50vw + $s5);
    }

    &.open {
      transform: translateX(0);
    }

    > button {
      width: $s5;
      padding: $s5 0 $s1;
      display: flex;
      height: 50vh;
      cursor: pointer;
      writing-mode: vertical-rl;
      text-orientation: mixed;

      color: $light;
      align-items: center;
      justify-content: flex-start;

      transform: rotate(180deg);

      @media (max-width: $mobile) {
        font-size: $s0;
        height: 33.3vh;
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