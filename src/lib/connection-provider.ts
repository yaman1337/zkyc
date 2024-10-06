import { createRpc, Rpc } from "@lightprotocol/stateless.js";

interface IEnvironmentVariables {
    NEXT_PUBLIC_HELIUS_RPC_URL: string
    NEXT_PUBLIC_HELIUS_RPC_API_KEY: string
}

export const { NEXT_PUBLIC_HELIUS_RPC_URL } = (process.env as unknown) as IEnvironmentVariables;

export function getLightProtocolRpcConnection(): Rpc {
  return createRpc(NEXT_PUBLIC_HELIUS_RPC_URL, NEXT_PUBLIC_HELIUS_RPC_URL);
}
