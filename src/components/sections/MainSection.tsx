import Link from "next/link";
import Button from "../Button";

export default function MainSection() {
  return (
    <section className="w-full flex flex-col md:flex-row center gap-8">
      <div className="text md:w-1/2 col gap-8">
        <h1 className="text-5xl font-redzone">
          Effortless, Privacy-Focused KYC Solution for Web3
        </h1>
        <span className="text-app_gray leading-8 text-xl">
          Verify users with Zero Knowledge Proofs (ZKPs). Ensure privacy and
          seamless KYC compliance across platforms, all without exposing
          personal data.
        </span>
        <div className="row gap-4">
          <Link href={"/app-home"}>
            <Button>Get Started</Button>
          </Link>
          <Button outline={true} onClick={() => alert("Coming soon")}>
            Join Discord
          </Button>
        </div>
      </div>
      <div className="relative md:w-1/2 col gap-4 center">
        <img
          src="/assets/solana.png"
          alt="etherum_logo"
          className="w-[86%] h-[70%] object-contain"
        />
      </div>
    </section>
  );
}
