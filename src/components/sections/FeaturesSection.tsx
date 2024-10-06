import Heading from "../Heading";

const cards = [
  {
    id: 1,
    title: "Strong Security",
    desc: "Secure transactions with Zero-Knowledge Proofs",
  },
  {
    id: 2,
    title: "50% Lower Gas Fees",
    desc: "Significantly reduced transaction costs and enhanced throughput enabled by ZK compression.",
  },
  {
    id: 3,
    title: "10x Throughput",
    desc: "Experience high throughput with Solana's Proof of Stake architecture and zk-compression, ensuring efficient, low-cost transactions alongside fast and secure KYC verification.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full col center gap-4">
      <Heading
        heading="Key Features"
        subHeading="Access The Future"
        className="text-center"
      />
      <div className="row w-full justify-center gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
          >
            <img
              className="w-16 h-w-16"
              src={`/assets/${card.id}.png`}
              alt={card.title}
            />
            <h4 className="font-redzone text-2xl">{card.title}</h4>
            <span className="text-app_gray/70">{card.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
