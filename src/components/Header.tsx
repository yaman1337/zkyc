import { routes } from "@/constants";
import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import ThemeControl from "./sub-components/ThemeControl";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
      <div className="row items-center gap-2">
        <AppLogo
          onClick={() => window.location.assign("/")}
          className="cursor-pointer"
        />
        <div className="ml-24 hidden lg:flex flex-row flex-wrap gap-8">
          <a
            href={`#${routes.home}`}
            className={`uppercase font-redzone`}
          >
            Home
          </a>
          <a
            href={`#${routes.architecture}`}
            className={`uppercase font-redzone`}
          >
            Architecture
          </a>
          <a
            href={`#${routes.about}`}
            className={`uppercase font-redzone`}
          >
            About
          </a>
          <a
            href={`#${routes.features}`}
            className={`uppercase font-redzone`}
          >
            features
          </a>
          <a
            href={`#${routes.faq}`}
            className={`uppercase font-redzone`}
          >
            FAQs
          </a>
        </div>
      </div>
      <div className="row items-center gap-12">
        <ThemeControl />
        <Link className="hidden sm:block" href={"/app-home"}>
          <Button>Launch App</Button>
        </Link>
      </div>
    </header>
  );
}
