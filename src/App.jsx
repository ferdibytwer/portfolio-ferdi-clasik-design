// Import tailwind css
import "./App.css";
// Import lib untuk route
import { Link, Route } from "wouter";
// Import compenents
import Button from "./compenents/Button";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// Import data
import { personal } from "./data/personal.js";
import { projects } from "./data/projects.js";
import { testimonials } from "./data/testimonials.js";
import { posts } from "./data/posts.js";
import { sertifs } from "./data/sertifs.js";

function App() {
  return (
    <>
      {/* Header */}
      <Header Link={Link} />

      {/* Main */}
      <Route path="/">
        <Home
          ButtonCompenent={Button}
          dataPersonal={personal}
          dataProjects={projects}
          dataTestimonials={testimonials}
        />
      </Route>
      <Route path="/about">
        <About
          dataSertifs={sertifs}
          dataPersonal={personal}
          dataPosts={posts}
          ButtonCompenent={Button}
        />
      </Route>
      <Route path="/projects">
        <Projects projects={projects} ButtonCompenent={Button} />
      </Route>
      <Route path="/contact">
        <Contact ButtonCompenent={Button} />
      </Route>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
