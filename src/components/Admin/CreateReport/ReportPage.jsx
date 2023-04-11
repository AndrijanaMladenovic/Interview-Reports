import React, { useState } from "react";
import Candidate from "./Candidate";
import Company from "./Company";
import ReportDetail from "./ReportDetail";

export default function ReportPage({
  selectedName,
  setName,
  companyName,
  setCompanyName,
  activeId,
  setActiveId,
}) {
  const [phase, setPhase] = useState(1);

  if (phase == 1) {
    return (
      <Candidate
        setPhase={setPhase}
        selectedName={selectedName}
        setName={setName}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    );
  } else if (phase == 2) {
    return (
      <Company
        setPhase={setPhase}
        selectedName={selectedName}
        companyName={companyName}
        setCompanyName={setCompanyName}
      />
    );
  } else if (phase == 3) {
    return (
      <ReportDetail
        companyName={companyName}
        selectedName={selectedName}
        setPhase={setPhase}
        activeId={activeId}
      />
    );
  }
}
