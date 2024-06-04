import Hero from "@/components/hero";
import Marquee from "@/components/marque";
// import Nav from "@/components/nav";
import Features from "@/components/feature";
import Ventures from "@/components/ventures";
import Tools from "@/components/tools";
// import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      {/* <Nav /> */}
      <div className="z-0 overflow-hidden pl-0 pt-[64px] lg:pl-[240px] lg:pt-0">
        <Hero />
        <Marquee />
        <Features />
        <Ventures />
        <Tools />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
