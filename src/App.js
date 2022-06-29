import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const countries = ["Argentina", "France", "Brazil", "China", "Greece"];

  return (
    <div className="App">
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <Link to={`/country/${country}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
