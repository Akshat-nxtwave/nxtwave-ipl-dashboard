import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TeamInfo from './components/TeamInfo';
import Home from './components/Home';

function App() {
  console.log(window.location);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="team-matches/:id" element={<TeamInfo />} /> 
          <Route path="nxtwave-ipl-dashboard" element={<Home />} />
          {/*<Route path="nxtwave-ipl-dashboard/team-matches/:id" element={<TeamInfo />} /> */}
          <Route path="*" element={<div>404</div>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
