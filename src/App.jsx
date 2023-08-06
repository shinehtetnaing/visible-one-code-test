import RootLayout from "./Layouts/RootLayout";
import About from "./components/About";
import Challenge from "./components/Challenge";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SwitchSection from "./components/SwitchSection";

function App() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Challenge />
      <SwitchSection />
    </RootLayout>
  );
}

export default App;
