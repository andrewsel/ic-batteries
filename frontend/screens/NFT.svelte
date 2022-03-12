<script>
  import Battery from "../components/battery-components/Battery.svelte"

  export let icBatteryId = ""

  $: console.log(icBatteryId)
</script>

<div>
  <Battery designOptions={icBatteryId} />
</div>

<style lang="scss">
  div {
    margin: 0 auto;
    width: min(100%, 100vh);
  }
</style>
