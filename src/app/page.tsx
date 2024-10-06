"use client";
import { useEffect } from "react";
import Header from "@/components/Header";

import AboutSection from "@/components/sections/AboutSection";
import CollectionSection from "@/components/sections/CollectionSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import MainSection from "@/components/sections/MainSection";
import Popularity from "@/components/sections/Popularity";
import PromoSection from "@/components/sections/PromoSection";
import Animate from "@/components/Animate";
import { theme, APP_BODY_ID } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const routes = {
  home: "",
  about: "about",
  collection: "collections",
  faq: "faq",
  popular: "popular",
  features: "features",
  promo: "promotion",
  footer: "footer",
};
export const appLinks = Object.values(routes).map((r) => r);

const Components = [
  { El: Header, id: routes.home },
  { El: MainSection, id: routes.home },
  { El: Popularity, id: routes.popular },
  { El: AboutSection, id: routes.about },
  { El: FeaturesSection, id: routes.features },
  { El: CollectionSection, id: routes.collection },
  { El: FAQSection, id: routes.faq },
  { El: PromoSection, id: routes.promo },
  { El: FooterSection, id: routes.footer },
];

const HomePage = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
    theme.initiate();
  }, []);
  return (
    <main className="app-bg min-h-[100dvh] overflow-x-hidden max-w-full">
      <section className="max-w-6xl xl:px-0 px-4 flex center col mx-auto pb-8 md:gap-36 gap-12">
        <div id={APP_BODY_ID} className="fixed inset-0 light round-gradient" />
        {Components.map(({ El, id }, i) => (
          <Animate id={id} n={i + 1} key={id + i}>
            <El />
          </Animate>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
