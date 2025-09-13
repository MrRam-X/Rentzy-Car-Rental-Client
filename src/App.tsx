import {
  GlobalContextProvider,
} from "./context/GlobalContext";
import heroSectionImage from "./assets/images/HeroSection.jpg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroSectionImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </section>
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
