<script>
  import Eyes from "./Eyes.svelte"
  import Hands from "./Hands.svelte"

  export let itemSet
  export let optionNumber
  export let selected
</script>

{#if itemSet == "Eyes"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="240 100 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Eyes {optionNumber} />
  </svg>
{/if}

{#if itemSet == "Hands"}
  <svg
    class={selected ? "selected" : ""}
    viewBox="50 50 900 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Hands {optionNumber} />
  </svg>
{/if}

<style lang="scss">
  svg {
    width: 100%;
    background-color: #555555; //#aaaaaa;;
    border-radius: 12px;
    border: 3px solid transparent;
    &.selected {
      border-color: #74ff75;
    }
  }
</style>
