import ResourceForm from "./resourceForm";
import ResourceMap from "./resourceMap";
import "leaflet/dist/leaflet.css";

function App() {
  // You'll need to fetch or otherwise obtain your resources data and pass it to ResourceMap
  const resources = [];

  return (
    <div className="App">
      <ResourceForm />
      <ResourceMap resources={resources} />
    </div>
  );
}

export default App;
