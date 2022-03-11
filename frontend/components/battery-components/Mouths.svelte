<script>
  import Mouth_1 from "./Mouth_1.svelte"
  import Mouth_2 from "./Mouth_2.svelte"
  import Mouth_3 from "./Mouth_3.svelte"
  import Mouth_4 from "./Mouth_4.svelte"
  import Mouth_5 from "./Mouth_5.svelte"

  export let optionNumber
</script>

<!-- MOUTH -->
{#if optionNumber == 1}
  <Mouth_1 />
{:else if optionNumber == 2}
  <Mouth_2 />
{:else if optionNumber == 3}
  <Mouth_3 />
{:else if optionNumber == 4}
  <Mouth_4 />
{:else if optionNumber == 5}
  <Mouth_5 />
{/if}
