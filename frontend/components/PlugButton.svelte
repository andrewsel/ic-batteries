<script>
  import PlugLogo from "./PlugLogo.svelte"

  export let handleConnectPlug
  export let principalId
</script>

<button on:click={handleConnectPlug}>
  <PlugLogo />

  <div>
    {#if principalId}
      <p>
        Connected<span class="mobile-hide">
          &nbsp;as <span id="pid">{principalId.slice(0, 11)}...</span></span
        >
      </p>
    {:else}
      Connect<span class="mobile-hide">&nbsp;plug wallet</span>
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
    cursor: pointer;
  }

  div {
    margin-left: 10px;
    span#id {
      color: #aaaaaa;
    }
  }

  @media (max-width: 1190px) {
    .mobile-hide {
      display: none;
    }
  }
</style>
