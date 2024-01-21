
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
