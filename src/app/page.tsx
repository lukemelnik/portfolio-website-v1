import About from "@/components/about";
import BackgroundSquares from "@/components/background-squares";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="mx-auto mt-32 flex flex-col items-center px-5 md:mt-44">
      <Intro />
      <BackgroundSquares />
      <Projects />
      <Contact />
    </main>
  );
}
