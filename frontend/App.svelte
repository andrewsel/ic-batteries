<script>
  import { onMount } from "svelte"
  // @ts-ignore
  import { nft } from "canisters/nft"
  import Designer from "./Designer.svelte"
  // @ts-ignore
  const plug = window.ic.plug

  let welcome = "loading..."
  let principalId = "Not Logged in yet..."
  let isConnected = false

  // const sayHello = async () => {
  //   const res = await nft.sayHello()
  //   welcome = res.toString()
  // }

  // Canister Ids
  const bootcampCanisterId = "yeeiw-3qaaa-aaaah-qcvmq-cai"

  // Whitelist
  const whitelist = [bootcampCanisterId]

  async function getPrincipal() {
    const response = await plug.agent.getPrincipal()
    principalId = response.toText()
  }

  const connectPlug = async () => {
    try {
      await plug.requestConnect({
        whitelist,
      })
      isConnected = true
      await getPrincipal()
    } catch (e) {
      console.log(e)
    }
  }

  const bootcampPartialInterfaceFactory = ({ IDL }) => {
    const TotalSupplyArgs = IDL.Record()
    const ICPTs = IDL.Record({ e8s: IDL.Nat64 })
    const BlockHeight = IDL.Nat64
    const AccountIdentifier = IDL.Text
    const SubAccount = IDL.Vec(IDL.Nat8)
    const Memo = IDL.Nat64
    const TimeStamp = IDL.Record({ timestamp_nanos: IDL.Nat64 })
    const SendArgs = IDL.Record({
      to: AccountIdentifier,
      fee: ICPTs,
      memo: Memo,
      from_subaccount: IDL.Opt(SubAccount),
      created_at_time: IDL.Opt(TimeStamp),
      amount: ICPTs,
    })
    return IDL.Service({
      total_supply_dfx: IDL.Func([TotalSupplyArgs], [ICPTs], ["query"]),
      send_dfx: IDL.Func([SendArgs], [BlockHeight], []),
    })
  }

  async function getTotalBootcampTokens() {
    const bootcampTokenActor = await plug.createActor({
      canisterId: bootcampCanisterId,
      interfaceFactory: bootcampPartialInterfaceFactory,
    })

    const totalSupply = await bootcampTokenActor.total_supply_dfx({})
    console.log("TOTAL SUPPLY: ", totalSupply)
  }

  async function sendBootcampTokens() {
    const bootcampTokenActor = await plug.createActor({
      canisterId: bootcampCanisterId,
      interfaceFactory: bootcampPartialInterfaceFactory,
    })
    const sendResponse = await bootcampTokenActor.send_dfx({
      to: "f4891914bbffef0fd77003ce669b8f52c521063e293396014de928c085a28d08",
      fee: {
        e8s: 10000,
      },
      memo: 0,
      from_subaccount: [],
      created_at_time: [],
      amount: {
        e8s: 200000000,
      },
    })
    console.log("SEND RESPONSE", sendResponse)
  }

  const checkIfWalletConnected = async () => {
    isConnected = await plug.isConnected()
  }

  onMount(checkIfWalletConnected)
</script>

<header class="App-header">
  <p>
    Plug Wallet Connected: {isConnected}
  </p>
  <p>
    Logged in as: {principalId}
  </p>
  <button on:click={connectPlug}> Connect Plug Wallet </button>
  <button on:click={getTotalBootcampTokens}> Get Total </button>
  <button on:click={sendBootcampTokens}> Send Tokens </button>
</header>
<main>
  <!-- <Designer /> -->
</main>

<style>
</style>
