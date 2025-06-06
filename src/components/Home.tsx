import { MoveRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cobraGifImage from "../assets/cobra-index.gif";
import scribblyGifImage from "../assets/scribbly-welcome.gif";
import colmarImage from "../assets/colmar-layout-preview.png";
import reactAsImage from "../assets/react-assessment-preview.png";
import ProjectCard from "./common/ProjectCard";
import { TextAnimate } from "@/components/magicui/text-animate";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="bg-gradient-to-r from-background to-chart-3 flex flex-col justify-center p-4"
      >
        <h1 className="font-atma text-6xl font-bold">
          <span className="inline">Hello, I'm </span>
          <TextAnimate animation="blurInUp" by="word" className="inline">
            Tammy K.
          </TextAnimate>
        </h1>
        <div className="pt-18 space-x-2">
          <span className="text-3xl pt-8">Currently</span>
          <MoveRight className="inline" />
          <span className="text-2xl">Junior Software Developer Bootcamp</span>
          <p className="pt-4">
            I’ve spent the past few years leveling up through hands-on game dev
            and passion projects
          </p>
          <p>
            — learning by building and breaking{" "}
            <i>(and occasionally debugging after midnight)</i>.
          </p>
          <p>My background in design means I think in both pixels and logic.</p>
          <p>
            I love solving problems with a user-first mindset and a drip of
            imagination.
          </p>
          <p>
            I’m excited to keep growing, deliver cool things, and learn from
            folks who are just as nerdy about tech as I am.
          </p>
        </div>
      </div>
      <div id="work" className="mt-8 p-4">
        <h2 className="text-4xl font-bold font-atma">Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 pt-8 px-2 md:px-8 items-stretch">
          <ProjectCard
            title="Cobra Game"
            description="E-Commerce App"
            imageSrc={cobraGifImage}
            imageAlt="E-Commerce Cobra Game"
            linkTo="/work/cobra"
          >
            <p className="pt-4 text-muted-foreground text-justify">
              Bootcamp capstone with a 5-person crew, all new to MERN. I kinda
              became the unofficial lead — ran the repo, built major backend
              routes, wrangled pull requests, and kept the chaos (mostly)
              organised.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Scribbly"
            description="Note-Taking App"
            imageSrc={scribblyGifImage}
            imageAlt="Scribbly"
            linkTo="/work/scribbly"
          >
            <p className="pt-4 text-muted-foreground text-justify">
              A rose-themed note app built with MERN, solo-style. It started as
              a backend sandbox and turned into a fully working app with auth,
              tags, and way too much bubblegum energy. Switched from SQL to
              MongoDB mid-build, just for the plot.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Colmar"
            description="Pixel-Perfect Static Page"
            imageSrc={colmarImage}
            imageAlt="Colmar"
            linkTo="https://32-tammy-colmar.vercel.app/"
          >
            <p className="pt-4 text-muted-foreground text-justify">
              Pure HTML + TailwindCSS, no JS. Recreated a sample UI down to the
              last pixel — fully responsive, deeply parent-child-core-memory
              unlocked. Looked simple, turned out to be an optical illusion.
            </p>
          </ProjectCard>
          <ProjectCard
            title="React Assessment"
            description="Basic React CRUD"
            imageSrc={reactAsImage}
            imageAlt="Colmar"
            linkTo="https://32-tammy-react-assessment.vercel.app/"
          >
            <p className="pt-4 text-muted-foreground text-justify">
              My first real React experience. Followed along with React docs
              like it was a cooking show — line by line, hoping nothing burns.
              Basic backend felt like a breeze compared to juggling states,
              props, and racing the clock.
            </p>
          </ProjectCard>
        </div>
      </div>
    </>
  );
}

export default Home;
