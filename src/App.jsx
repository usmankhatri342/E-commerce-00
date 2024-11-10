
import Banner from "./components/banner";
import Navbar from "./components/Navbar";
import OfferDate from "./components/OfferDate";
import ProductCard from "./components/productCard";
import Propartycont from "./components/Propartycont";



function App() {
 
  return (
    <>
    
     
      <Banner/>
      <Navbar/>
      <Propartycont/>
      <OfferDate/>
      <div className="flex gap-7">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
      
    </>
  );
}

export default App;