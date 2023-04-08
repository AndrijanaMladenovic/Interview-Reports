import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CandidateDetails from "./components/CandidateDetails";
import { BrowserRouter } from "react-router-dom";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Main />} />
          <Route
            path="/:id"
            element={
              <>
                <CandidateDetails /> <Grid />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
