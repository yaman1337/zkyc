import { createRpc, Rpc } from "@lightprotocol/stateless.js";

export const  NEXT_PUBLIC_HELIUS_RPC_URL = process.env.NEXT_PUBLIC_HELIUS_RPC_URL ;
export function getLightProtocolRpcConnection(): Rpc {
  console.log("creating connection provider...")
  console.log(NEXT_PUBLIC_HELIUS_RPC_URL)
  return createRpc(NEXT_PUBLIC_HELIUS_RPC_URL, NEXT_PUBLIC_HELIUS_RPC_URL);
}
