import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar.jsx";
//Pages
import HomePage from "./pages/HomePage.jsx";
import ItemDetailContainerPage from "./pages/ItemDetailContainerPage.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<ItemDetailContainerPage />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
