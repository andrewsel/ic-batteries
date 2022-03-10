<script>
  import Hands_1 from "./Hands_1.svelte"
  import Hands_2 from "./Hands_2.svelte"
  import Hands_3 from "./Hands_3.svelte"

  export let optionNumber
</script>

<!-- Hands -->
{#if optionNumber == 1}
  <Hands_1 />
{:else if optionNumber == 2}
  <Hands_2 />
{:else if optionNumber == 3}
  <Hands_3 />
{/if}
