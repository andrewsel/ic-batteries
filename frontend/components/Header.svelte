<script>
  export let principalId
  export let handleConnectPlug
  import Logo from "./Logo.svelte"
  import PlugButton from "./PlugButton.svelte"
</script>

<header>
  <Logo />
  <nav>
    <div class="page-link selected">Mint</div>
    <div class="page-link">Gallery</div>
    <div class="page-link">VIPs</div>
    <div class="page-link">About</div>
  </nav>
  <div class="login-info">
    <PlugButton {handleConnectPlug} {principalId} />
  </div>
</header>

<style lang="scss">
  header {
    background-color: black;
    padding: 40px;
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
    &.selected {
      color: #74ff75;
    }
  }

  .login-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
</style>
