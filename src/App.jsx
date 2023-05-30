import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="En cartelera" />
    </div>
  );
}

export default App;
