<script>
  export let updateScreen
  export let screens
</script>

<section>
  <div class="next-action" on:click={() => updateScreen(screens.MINT)}>
    <button>Create IC Battery →</button>
    <p>Minting an IC Battery NFT costs 100 Bootcamp Tokens</p>
  </div>
</section>

<style lang="scss">
  section {
    padding: 40px;
    color: white;
  }

  .next-action {
    width: 100%;
    min-height: 50vh;
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
