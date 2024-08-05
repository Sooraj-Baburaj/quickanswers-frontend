"use client";
import "./page.css";
import HomeBanner from "./components/HomeBanner";
import BannerSearch from "./components/BannerSearch";
import TopCreators from "./components/TopCreators";
import ItemsGrid from "./components/ItemsGrid";

export default function Home() {
  return (
    <main className="">
      <section>
        <HomeBanner />
        <BannerSearch />
        <TopCreators />
        <ItemsGrid />
      </section>
    </main>
  );
}
