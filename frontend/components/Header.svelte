<script>
  export let principalId
  export let handleConnectPlug
  export let updateScreen
  export let screens
  export let screen
  import Logo from "./Logo.svelte"
  import PlugButton from "./PlugButton.svelte"
</script>

<header>
  <Logo {screens} {updateScreen} />
  <nav>
    <div
      class="page-link {screen == screens.MINT ? 'selected' : ''}"
      on:click={() => updateScreen(screens.MINT)}
    >
      Mint
    </div>
    <div
      class="page-link {screen == screens.GALLERY ? 'selected' : ''}"
      on:click={() => updateScreen(screens.GALLERY)}
    >
      Gallery
    </div>
    <div
      class="page-link {screen == screens.VIP ? 'selected' : ''}"
      on:click={() => updateScreen(screens.VIP)}
    >
      VIPs
    </div>
    <div
      class="page-link {screen == screens.ABOUT ? 'selected' : ''}"
      on:click={() => updateScreen(screens.ABOUT)}
    >
      About
    </div>
  </nav>
  <div class="login-info">
    <PlugButton {handleConnectPlug} {principalId} />
  </div>
</header>

<style lang="scss">
  header {
    background-color: black;
    // padding: 40px;
    color: white;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 400px 1fr;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .page-link {
    font-weight: bold;
    padding: 10px;
    color: #cccccc;
    user-select: none;
    &.selected {
      color: #74ff75;
    }
    &:hover {
      &:not(.selected) {
        cursor: pointer;
        color: white;
      }
    }
  }

  .login-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
</style>
