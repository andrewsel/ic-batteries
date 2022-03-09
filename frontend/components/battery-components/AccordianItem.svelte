<script>
  import Eyes_1 from "./Eyes_1.svelte"
  import Eyes_2 from "./Eyes_2.svelte"

  export let itemSet
  export let index
  export let selected
</script>

<svg
  class={selected ? "selected" : ""}
  viewBox="0 0 1000 1000"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {#if itemSet == "Eyes" && index == 1}
    <Eyes_1 />
  {:else if itemSet == "Eyes" && index == 2}
    <Eyes_2 />
  {/if}
</svg>

<style lang="scss">
  svg {
    width: 100%;
    background-color: #aaaaaa;
    border-radius: 12px;
    border: 3px solid transparent;
    &.selected {
      border-color: #74ff75;
    }
  }
</style>
