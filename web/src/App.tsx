import { useState } from 'react'
import '@formbox/hs-theme/style.css'
import Renderer from '@formbox/renderer'
import { theme } from '@formbox/hs-theme'
import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'

// Import the existing FHIR Questionnaires directly from the repo
import stanleyBrownQuestionnaire from '../../Stanley Brown Safety Plan/fhir/questionnaires/questionnaire.json'
import camsSectionA from '../../CAMS/fhir/questionnaires/SSF5_SectionA.json'
import camsSectionB from '../../CAMS/fhir/questionnaires/SSF5_SectionB.json'
import camsStabilizationPlan from '../../CAMS/fhir/questionnaires/Stabilization_Plan.json'
import camsTherapeuticWorksheet from '../../CAMS/fhir/questionnaires/Therapeutic_Worksheet.json'

import { Link, useLocation } from 'react-router-dom'
import { Home } from './Home'

function QuestionnaireView({ title, questionnaire }: { title: string, questionnaire: any }) {
  const [response, setResponse] = useState<any>(null)

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>{title}</h2>
        <Renderer
          fhirVersion="r4"
          questionnaire={questionnaire}
          theme={theme}
          /* @ts-ignore - The formbox types are slightly outdated compared to the actual library props */
          onResponseChange={(newResponse: any) => setResponse(newResponse)}
        />
      </div>

      {response && (
        <aside className="debug-sidebar">
          <h3>Live FHIR QuestionnaireResponse</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </aside>
      )}
    </div>
  )
}

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: "/", label: "Home" },
    { path: "/questionnaire/stanley-and-brown", label: "Stanley-Brown Safety Plan" },
    { path: "/questionnaire/cams-section-a", label: "CAMS: Section A" },
    { path: "/questionnaire/cams-section-b", label: "CAMS: Section B" },
    { path: "/questionnaire/cams-stabilization-plan", label: "CAMS: Stabilization Plan" },
    { path: "/questionnaire/cams-therapeutic-worksheet", label: "CAMS: Therapeutic Worksheet" },
  ];

  return (
    <nav className="app-nav">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SPiER Clinical Diagnostics Viewer</h1>
        <p>Rendering native FHIR Questionnaires using formbox-renderer</p>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Main Routing for forms */}
          <Route path="/questionnaire/stanley-and-brown" element={
            <QuestionnaireView title="Stanley-Brown Safety Plan" questionnaire={stanleyBrownQuestionnaire} />
          } />
          <Route path="/questionnaire/cams-section-a" element={
            <QuestionnaireView title="CAMS SSF-5: Section A" questionnaire={camsSectionA} />
          } />
          <Route path="/questionnaire/cams-section-b" element={
            <QuestionnaireView title="CAMS SSF-5: Section B" questionnaire={camsSectionB} />
          } />
          <Route path="/questionnaire/cams-stabilization-plan" element={
            <QuestionnaireView title="CAMS: Stabilization Plan" questionnaire={camsStabilizationPlan} />
          } />
          <Route path="/questionnaire/cams-therapeutic-worksheet" element={
            <QuestionnaireView title="CAMS: Therapeutic Worksheet" questionnaire={camsTherapeuticWorksheet} />
          } />

          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
