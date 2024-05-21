import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TeamInfo from './components/TeamInfo';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-matches/:id" element={<TeamInfo />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
