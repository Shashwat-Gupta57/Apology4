/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Promises from "./pages/Promises";
import Memories from "./pages/Memories";
import { FloatingSparkles } from "./components/FloatingSparkles";
import { Navigation } from "./components/Navigation";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream overflow-hidden selection:bg-rose/20 selection:text-raspberry font-serif">
        <FloatingSparkles>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promises" element={<Promises />} />
            <Route path="/memories" element={<Memories />} />
          </Routes>
        </FloatingSparkles>
        <Navigation />
      </div>
    </HashRouter>
  );
}
