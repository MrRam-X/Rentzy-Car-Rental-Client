import {
  GlobalContextProvider,
} from "./context/GlobalContext";
import heroSectionImage from "./assets/images/HeroSection.jpg";
import Header from "./components/Header/Header";

function App() {
  return (
    <GlobalContextProvider>
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroSectionImage})` }}
      >
      <Header />
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl text-center text-white">Test</h1>
        </div>
      </section>
    </GlobalContextProvider>
  );
}

export default App;
