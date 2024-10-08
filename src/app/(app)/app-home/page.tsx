"use client";
import { KYCForm } from "@/components";
import { Button } from "antd";
import React, { useState } from "react";
import { getLightProtocolRpcConnection } from "@/lib/connection-provider";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  buildAndSignTx,
  defaultTestStateTreeAccounts,
  LightSystemProgram,
} from "@lightprotocol/stateless.js";
import { ComputeBudgetProgram, Transaction } from "@solana/web3.js";
const AppPage = () => {
  const { publicKey, signTransaction } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  async function start() {
    setIsLoading(true);
    const connection = getLightProtocolRpcConnection();

    const balances = await connection.getCompressedTokenBalancesByOwner(
      publicKey!
    );
    const slot = await connection.getSlot();
    const indexHealth = await connection.getIndexerHealth();

    /// Fetch latest blockhash
    const { blockhash } = await connection.getLatestBlockhash();

    /// Compress lamports to self
    const ix = await LightSystemProgram.compress({
      payer: publicKey!,
      toAddress: publicKey!,
      lamports: 1_000_000_000,
      outputStateTree: defaultTestStateTreeAccounts().merkleTree,
    });

    /// Create a VersionedTransaction and sign it
    // const tx = buildAndSignTx(
    //   [ComputeBudgetProgram.setComputeUnitLimit({ units: 1_200_000 }), ix],
    //   fromKeypair,
    //   blockhash,
    //   []
    // );

    const tx = new Transaction({
      feePayer: publicKey!,
      recentBlockhash: blockhash,
    });

    tx.add(ComputeBudgetProgram.setComputeUnitLimit({ units: 1_200_000 }), ix);
    if (!signTransaction) return;
    const signedTransaction = await signTransaction(tx);

    const txId = await connection.sendRawTransaction(
      signedTransaction.serialize()
    );
    await connection.confirmTransaction(txId);

    console.log("Transaction Signature:", txId);

    setIsLoading(false);
    console.log({
      slot,
      indexHealth,
    });
  }

  return (
    <main className="overflow-y-scroll h-full w-full">
      <KYCForm isLoading={isLoading} sendTransaction={start} />
    </main>
  );
};

export default AppPage;
