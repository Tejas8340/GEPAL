import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Career from "./components/Pages/Career/Career";
import Contact from "./components/Pages/Contact/Contact";
import Download from "./components/Pages/Download/Download";
import AboutUs from "./components/Pages/Overview/AboutUs";
import Milestones from "./components/Pages/Overview/Milestones";
import Overview from "./components/Pages/Overview/Overview";
import Quality from "./components/Pages/Overview/Quality";
import Products from "./components/Pages/Products/Products";
import BoomBarriers from "./components/Pages/Products/Product_Pages/BoomBarriers";
import CommercialDoors from "./components/Pages/Products/Product_Pages/CommercialDoors";
import Doors from "./components/Pages/Products/Product_Pages/Doors";
import FireRated from "./components/Pages/Products/Product_Pages/FireRated";
import Gates from "./components/Pages/Products/Product_Pages/Gates";
import HangerDoors from "./components/Pages/Products/Product_Pages/HangerDoors";
import HighSpeed from "./components/Pages/Products/Product_Pages/HighSpeed";
import LoadingBy from "./components/Pages/Products/Product_Pages/LoadingBy";
import RollingShutters from "./components/Pages/Products/Product_Pages/RollingShutters";
import Support from "./components/Pages/Support/Support";

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/products" element={<Products />} />
        <Route path="/boombarriers" element={<BoomBarriers />} />
        <Route path="/commercialdoors" element={<CommercialDoors />} />
        <Route path="/doors" element={<Doors />} />
        <Route path="/firerated" element={<FireRated />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/hangerdoors" element={<HangerDoors />} />
        <Route path="/highspeed" element={<HighSpeed />} />
        <Route path="/loadingby" element={<LoadingBy />} />
        <Route path="/rollingshutters" element={<RollingShutters />} />
        <Route path="/support" element={<Support />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

