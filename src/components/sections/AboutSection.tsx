import Heading from "../Heading";
import { SectionProps } from "../types";

const tags = [
    "Privacy-Preserving Verification",
    "Compliant Across Jurisdictions",
    "Secure & Scalable",
    "Instant Verification",
    "Less Gas Fees - ZK Compression"
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Private, Secure, and Seamless KYC Verification"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                Fast, secure, and privacy-focused KYC verification powered by zero-knowledge proofs. With zk-compression, enjoy significantly lower transaction fees and high throughput, empowering users and platforms with trustless, efficient verification.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/blockchain.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
