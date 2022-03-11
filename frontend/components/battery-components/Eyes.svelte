<script>
  import Eyes_1 from "./Eyes_1.svelte"
  import Eyes_2 from "./Eyes_2.svelte"
  import Eyes_3 from "./Eyes_3.svelte"
  import Eyes_4 from "./Eyes_4.svelte"
  import Eyes_5 from "./Eyes_5.svelte"

  export let optionNumber
</script>

<!-- EYES -->
{#if optionNumber == 1}
  <Eyes_1 />
{:else if optionNumber == 2}
  <Eyes_2 />
{:else if optionNumber == 3}
  <Eyes_3 />
{:else if optionNumber == 4}
  <Eyes_4 />
{:else if optionNumber == 5}
  <Eyes_5 />
{/if}
