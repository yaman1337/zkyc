"use client";
import {
  LightSystemProgram,
  Rpc,
  bn,
  buildTx,
  confirmTx,
  createRpc,
  defaultTestStateTreeAccounts,
  selectMinCompressedSolAccountsForTransfer,
} from "@lightprotocol/stateless.js";
import {
  ComputeBudgetProgram,
  Keypair,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import React, { useMemo, ReactNode } from "react";
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-unsafe-burner";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Layout } from "@/components";
import { ConnectWalletButton, DisconnectWalletButton } from "@/components/ui";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const layout = ({ children }: { children: ReactNode }) => {
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);
  const endpoint = process.env.NEXT_PUBLIC_HELIUS_RPC_URL as string;

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Layout>
            {children}
          </Layout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default layout;
