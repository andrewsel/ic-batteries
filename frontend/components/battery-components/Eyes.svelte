<script>
  import Eyes_2 from "./Eyes_2.svelte"
  import Eyes_1 from "./Eyes_1.svelte"

  export let selected
</script>

<!-- EYES -->
{#if selected == 1}
  <Eyes_1 />
{:else if selected == 2}
  <Eyes_2 />
{/if}
