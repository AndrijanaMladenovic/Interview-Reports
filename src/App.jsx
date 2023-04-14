import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Modal from "react-modal";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CandidateDetails from "./components/CandidateDetails";
import { BrowserRouter } from "react-router-dom";
import Grid from "./components/Grid";
import ReportPage from "./components/Admin/CreateReport/ReportPage";
import Reports from "./components/Admin/Reports/Reports";
Modal.setAppElement("#root");

function App() {
  const [selectedName, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [activeId, setActiveId] = useState(null);
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
          <Route
            path="/create.report"
            element={
              <ReportPage
                selectedName={selectedName}
                setName={setName}
                companyName={companyName}
                setCompanyName={setCompanyName}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            }
          />
          <Route path="/reports" element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
