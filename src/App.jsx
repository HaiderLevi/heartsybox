import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sale from "./components/Sale";
import Services from "./components/Services";
import Working from "./components/Working";
import ProductCategory from "./components/ProductCategory";
import Giftpack from "./components/Giftpack";
import GiftPicker from "./components/GiftPicker";
import CustomGiftbox from "./components/CustomGiftbox";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app-root-container">
        <Navbar />
        <Banner />
        <Services />
        <Working />
        <ProductCategory />
        <Giftpack />
        <Sale />
        <GiftPicker />
        <CustomGiftbox />
      </div>
      <Footer />
    </>
  );
}

export default App;
