// Canister Ids
const bootcampCanisterId = "yeeiw-3qaaa-aaaah-qcvmq-cai"
const nftCanisterId = "rkp4c-7iaaa-aaaaa-aaaca-cai"

// Whitelist
const whitelist = [bootcampCanisterId, nftCanisterId]

export async function isWalletConnected() {
  // @ts-ignore
  return await window.ic.plug.isConnected()
}

export async function getPrincipal() {
  // @ts-ignore
  const response = await window.ic.plug.agent.getPrincipal()
  return response.toText()
}

export async function connectPlug() {
  try {
    // @ts-ignore
    const response = await window.ic.plug.requestConnect({
      whitelist,
    })
    return true
  } catch (e) {
    console.log(e)
    return false
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

export async function getTotalBootcampTokens() {
  // @ts-ignore
  const bootcampTokenActor = await window.ic.plug.createActor({
    canisterId: bootcampCanisterId,
    interfaceFactory: bootcampPartialInterfaceFactory,
  })
  const totalSupply = await bootcampTokenActor.total_supply_dfx({})
  return totalSupply
}

export async function sendBootcampTokens() {
  // @ts-ignore
  const bootcampTokenActor = await window.ic.plug.createActor({
    canisterId: bootcampCanisterId,
    interfaceFactory: bootcampPartialInterfaceFactory,
  })
  try {
    const response = await bootcampTokenActor.send_dfx({
      to: "f4891914bbffef0fd77003ce669b8f52c521063e293396014de928c085a28d08",
      fee: {
        e8s: 10000,
      },
      memo: 0,
      from_subaccount: [],
      created_at_time: [],
      amount: {
        e8s: 10000000000,
      },
    })
    console.log(response)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const nftPartialInterfaceFactory = ({ IDL }) => {
  const BlockHeight = IDL.Nat64
  const NFTs = IDL.Vec(
    IDL.Record({
      tokenId: IDL.Nat,
      principalId: IDL.Text,
    }),
  )
  const MintArgs = IDL.Record({
    tokenId: IDL.Nat,
    uri: IDL.Text,
  })
  return IDL.Service({
    allMinted: IDL.Func([], [NFTs], ["query"]),
    mint: IDL.Func([MintArgs], [BlockHeight], []),
  })
}

export async function mint() {
  // @ts-ignore
  const nftTokenActor = await window.ic.plug.createActor({
    canisterId: nftCanisterId,
    interfaceFactory: nftPartialInterfaceFactory,
  })
  try {
    await nftTokenActor.mint({
      tokenId: 22,
      uri: "http://localhost:3000?tokenid=22",
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export async function getAllMintedTokens() {
  // @ts-ignore
  const nftTokenActor = await window.ic.plug.createActor({
    canisterId: nftCanisterId,
    interfaceFactory: nftPartialInterfaceFactory,
  })
  const allTokens = await nftTokenActor.allMinted()
  return allTokens
}
