import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      <main>
        <Header />
        <section>
          <div className="w-full min-h-[580px] bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-center"></div>
        </section>
      </main>
    </>
  );
}

export default App;
