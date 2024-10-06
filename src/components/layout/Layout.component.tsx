import { ReactNode } from "react";
import AppLogo from "../sub-components/AppLogo";
import Link from "next/link";
import { BodyLayout } from "./BodyLayout.component";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectWalletButton, DisconnectWalletButton } from "../ui";
import { truncateString } from "@/lib/turncateString";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { connected, publicKey, wallet } = useWallet();

  return (
    <div className="h-svh w-full flex p-[20px] text-[white]">
      <header className="flex flex-col w-full  basis-1/6 p-[20px]">
        <div className="flex flex-col gap-[10px] border-b border-[#B5B3B74D] pb-[14px]">
          <Link href={"/"}>
            <AppLogo />
          </Link>
          <span className="font-medium text-[12px]   w-3/4">
            Decentralized KYC verification with ZK proof
          </span>
        </div>
        <nav className="pt-20">
          <ul className="flex flex-col gap-5">
            <li>
              <Link href={"/app-home"}>Fill KYC</Link>
            </li>
            <li>
              <Link href={"/app-home/status"}>KYC Status</Link>
            </li>
            <li>
              <Link href={"/app-home/history"}>3rd Party Verification History</Link>
            </li>
            <li>
              <Link href={"/app-home"}>New KYC</Link>
            </li>
          </ul>
        </nav>

        <div className="pt-20">
          {connected && (
            <div className="flex flex-col gap-5">
              <div className="border px-4 py-2 rounded-xl cursor-pointer">
                Connected: {truncateString(publicKey?.toString(), 4, 4)}
              </div>
              <DisconnectWalletButton />
            </div>
          )}
          {!connected && (
            <>
              <ConnectWalletButton />
            </>
          )}
        </div>
      </header>
      <main className="basis-5/6">
        <BodyLayout>
          {!connected && (
            <main className="flex flex-col gap-5">
              <div className="text-black font-bold text-4xl">
                Please connect your wallet
              </div>
              <div className="flex gap-5">
                <ConnectWalletButton />
              </div>
            </main>
          )}
          {connected && children}
        </BodyLayout>
      </main>
    </div>
  );
};
