import dynamic from "next/dynamic";
import React from "react";

const WalletDisconnectButton = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);

export const DisconnectWalletButton = () => {
  return <WalletDisconnectButton />;
};
