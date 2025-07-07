import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";
import ProductItem from "./components/product-item";
import Services from "./components/services";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <section className="container min-h-[580px] bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-center"></section>
        <section className="container">
          <div className="container-wrapper py-8">
            <p>NEW ARRIVALS</p>
            <div className="flex justify-center">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </section>
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default App;
