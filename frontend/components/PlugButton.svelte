<script>
  import PlugLogo from "./PlugLogo.svelte"

  export let handleConnectPlug
  export let principalId
</script>

<button on:click={handleConnectPlug}>
  <PlugLogo />

  <div>
    {#if principalId}
      Connected as <span>{principalId.slice(0, 11)}...</span>
    {:else}
      Connect plug wallet
    {/if}
  </div>
</button>

<style lang="scss">
  button {
    border: 3px solid white;
    color: white;
    font-weight: bold;
    background-color: transparent;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    padding: 12px 36px;
    &:hover {
      cursor: pointer;
    }
  }

  div {
    margin-left: 10px;
    span {
      color: #aaaaaa;
    }
  }
</style>
