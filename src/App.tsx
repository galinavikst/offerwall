import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NAV } from "./constants";
import { INavItem } from "./types";

function App() {
  const [nav, setNav] = useState<INavItem[]>(NAV);

  const handleNav = (selected: INavItem) => {
    const updatedNav = nav.map((el) =>
      el.id === selected.id
        ? { ...el, isActive: true }
        : { ...el, isActive: false }
    );
    setNav(updatedNav);
  };

  const ActiveSection = nav.find((el) => el.isActive)?.component;

  return (
    <>
      {nav && <Header nav={nav} setNav={handleNav} />}
      <main className="grow bg-bg-light py-16 lg:py-36 px-14">
        {ActiveSection && <ActiveSection />}
      </main>
      <Footer />
    </>
  );
}

export default App;
