<script>
  import Body from "../components/battery-components/Body.svelte"
  import Eyes from "../components/battery-components/Eyes.svelte"
  import Hands from "../components/battery-components/Hands.svelte"

  export let tokenId = ""

  $: console.log(tokenId)
</script>

<div>
  <Body>
    <Eyes optionNumber={parseInt(tokenId[0])} />
    <Hands optionNumber={parseInt(tokenId[1])} />
  </Body>
</div>

<style lang="scss">
  div {
    margin: 0 auto;
    width: min(100%, 100vh);
  }
</style>
