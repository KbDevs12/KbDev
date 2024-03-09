import HeadMenu from "./components/HeadMenu/HeadMenu";
import Project from "./project/Project";
import About from "./about/about";

export default function Home() {
  return (
    <main>
      <div>
        <HeadMenu />
        <Project />
        <About />
      </div>
    </main>
  );
}
