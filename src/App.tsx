import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,

  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { useEffect, lazy, Suspense } from "react";
import { config } from "./constants/config";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />

        <div className="relative z-0">
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
