<script>
  import Body_1 from "./Body_1.svelte"
  import Body_2 from "./Body_2.svelte"
  import Body_3 from "./Body_3.svelte"

  export let colors = []
  export let optionNumber
  export let headColor
  export let bodyColor

  let head
  let body
  $: head = colors[parseInt(headColor) - 1]
  $: body = colors[parseInt(bodyColor) - 1]
</script>

<!-- Bodies -->
{#if optionNumber == 1}
  <Body_1 headColor={head} bodyColor={body} />
{:else if optionNumber == 2}
  <Body_2 headColor={head} bodyColor={body} />
{:else if optionNumber == 3}
  <Body_3 headColor={head} bodyColor={body} />
{/if}
