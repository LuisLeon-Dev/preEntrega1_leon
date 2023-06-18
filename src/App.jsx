import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
//Pages
import HomePage from "./pages/HomePage.jsx";
import MensClothingPage from "./pages/MensClothingPage.jsx";
import JeweleryPage from "./pages/JeweleryPage.jsx";
import ElectronicsPage from "./pages/ElectronicsPage.jsx";
import ItemDetailContainerPage from "./pages/ItemDetailContainerPage.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<MensClothingPage />} />
          <Route path="/" element={<JeweleryPage />} />
          <Route path="/" element={<ElectronicsPage />} />
          <Route path="/detail/:id" element={<ItemDetailContainerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
