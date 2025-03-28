import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects"
import {navItems} from "@/data"
/* import Clients from "../components/Clients" */
import Experience from "../components/Experience"
/* import Approach from "../components/Approach" */
import FooterBar from "../components/Footer"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div>
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
       {/*  <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <FooterBar />
      </div>
    </main>
  );
}
