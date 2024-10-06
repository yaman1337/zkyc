import Card, { CardProps } from "../sub-components/Card";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiEasyeda, SiFastlane } from "react-icons/si";

const values = [
  { value: "5k+", label: "Transactions" },
  { value: "5000x", label: "Lower Gas Fees" },
  { value: "99%", label: "Uptime" },
];

const cards: CardProps[] = [
  {
    icon: <MdOutlineVerifiedUser size={44} color="#71dcf5" />,
    title: "Strong Security",
    description: "Secure transactions with Zero-Knowledge Proofs and 2FA",
  },
  {
    icon: <SiEasyeda size={44} color="#948fe8" />,
    title: "Easy verification",
    description:
      "Verify KYC with one click on other applications without re-submitting details.",
  },
  {
    icon: <SiFastlane size={44} color="#ea9bfa" />,
    title: "ZK-compression",
    description:
      "Significantly reduced transaction costs and enhanced throughput enabled by ZK compression.",
  },
];

export default function Popularity() {
  return (
    <section className="bg-white/10 rounded-3xl col w-full">
      <div className="px-4 row border-b-2 border-app_bg py-6 items-center justify-around gap-4">
        {values.map((it, i) => (
          <div key={i}>
            <span className="md:text-8xl text-6xl font-redzone flex-1">
              {it.value}
            </span>
            <br />
            <span className="text-xl pt-4">{it.label}</span>
          </div>
        ))}
      </div>
      <div className="px-4 row justify-center w-full">
        {cards.map((content, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[200px] ${
              i !== cards.length - 1 && "md:border-r-2 md:border-app_bg"
            }`}
          >
            <Card {...content} />
          </div>
        ))}
      </div>
    </section>
  );
}
