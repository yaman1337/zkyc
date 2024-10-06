import Heading from "../Heading";
import QAComponent, { QAProps } from "../Q&A";

const questions: QAProps[] = [
  {
    question: "What is zkYC?",
    answer:
      "zkYC is a privacy-focused KYC verification solution that leverages zero-knowledge proofs to ensure secure and efficient identity verification without exposing personal information.",
  },
  {
    question: "How does zkYC ensure user privacy?",
    answer:
      "zkYC uses zero-knowledge proofs to allow users to verify their identity without sharing sensitive data. This means that platforms can confirm users' identities while keeping their personal information confidential.",
  },
  {
    question: "What benefits does zkYC offer to users?",
    answer:
      "Users benefit from fast, secure, and trustless verification processes. With zkYC, they can participate in platforms without compromising their privacy.",
  },
  {
    question: "How does zkYC achieve lower transaction fees?",
    answer:
      "By utilizing zk-compression techniques, zkYC reduces the amount of data that needs to be processed, leading to significantly lower transaction fees compared to traditional KYC solutions.",
  },
  {
    question: "What technology powers zkYC?",
    answer:
      "zkYC is powered by Solana's Proof of Stake architecture, which supports high throughput and enables fast, secure transactions while minimizing costs.",
  },
  {
    question: "How does zkYC enhance platform trustworthiness?",
    answer:
      "With its trustless verification process, zkYC empowers platforms to onboard users confidently, knowing that their identities are verified without exposing sensitive information.",
  },
  {
    question: "What types of platforms can benefit from zkYC?",
    answer:
      "zkYC is designed for a variety of platforms, including financial services, gaming, and NFT marketplaces, where secure and efficient KYC verification is essential.",
  },
  {
    question: "Is zkYC compliant with regulatory standards?",
    answer:
      "Yes, zkYC is designed to comply with relevant regulations while maintaining user privacy, making it suitable for use in regulated industries.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full col gap-4">
      <Heading
        className="text-center"
        heading="FAQs"
        subHeading="Frequently asked Questions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
        {questions.map((prop, i) => (
          <QAComponent key={i} {...prop} />
        ))}
      </div>

      {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
    </section>
  );
}
