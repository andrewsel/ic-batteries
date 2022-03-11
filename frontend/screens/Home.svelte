<script>
  export let updateScreen
  export let screens

  import Battery from "../components/battery-components/Battery.svelte"
</script>

<div class="background" />
<section>
  <div class="battery-set">
    <div class="battery left">
      <Battery designOptions={"1221320"} />
    </div>
    <div class="battery middle">
      <Battery designOptions={"3413210"} />
    </div>
    <div class="battery right">
      <Battery designOptions={"5634130"} />
    </div>
  </div>
  <div class="next-action" on:click={() => updateScreen(screens.MINT)}>
    <button>Create IC Battery →</button>
    <p>Minting an IC Battery NFT costs 100 Bootcamp Tokens</p>
  </div>
</section>

<style lang="scss">
  .battery-set {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .battery {
    width: 20vw;

    &.left {
      margin-right: -14vw;
    }

    &.middle {
      width: 24vw;
      z-index: 2;
    }

    &.right {
      margin-left: -14vw;
    }
  }

  section {
    padding: 0 40px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }

  .next-action {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    background-color: #74ff75;
    border: 0;
    border-radius: 12px;
    width: 460px;
    max-width: 100%;
    font-weight: bold;
    font-size: 30px;
    padding: 12px 20px;
    &:hover {
      cursor: pointer;
    }
  }
</style>
