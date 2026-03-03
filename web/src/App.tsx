import { useState } from 'react'
import '@formbox/hs-theme/style.css'
import Renderer from '@formbox/renderer'
import { theme } from '@formbox/hs-theme'
import './App.css'
import './CarePlan.css'

import { Routes, Route, Navigate } from 'react-router-dom'

// Import the existing FHIR Questionnaires directly from the repo
import stanleyBrownQuestionnaire from '../../Stanley Brown Safety Plan/fhir/questionnaires/questionnaire.json'
import camsSectionA from '../../CAMS/fhir/questionnaires/SSF5_SectionA.json'
import camsSectionB from '../../CAMS/fhir/questionnaires/SSF5_SectionB.json'
import camsStabilizationPlan from '../../CAMS/fhir/questionnaires/Stabilization_Plan.json'
import camsTherapeuticWorksheet from '../../CAMS/fhir/questionnaires/Therapeutic_Worksheet.json'

import { Link, useLocation } from 'react-router-dom'
import { Home } from './Home'
import { generateCarePlan } from './carePlanMapper'
import type { GeneratedCarePlan } from './carePlanMapper'

function QuestionnaireView({ title, questionnaire }: { title: string, questionnaire: any }) {
  const [response, setResponse] = useState<any>(null)

  return (
    <div className="form-wrapper">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">← Back to Tools</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{title}</span>
      </nav>
      <div className="form-card">
        <Renderer
          fhirVersion="r4"
          questionnaire={questionnaire}
          theme={theme}
          onChange={(newResponse: any) => setResponse(newResponse)}
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

function CarePlanDisplay({ carePlan }: { carePlan: GeneratedCarePlan }) {
  const [showJson, setShowJson] = useState(false)

  function downloadJson() {
    const blob = new Blob([JSON.stringify(carePlan.resource, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `stanley-brown-careplan-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="careplan-container">
      <div className="careplan-header">
        <h3>Generated Safety Plan (FHIR CarePlan)</h3>
        <span className="careplan-badge">⚡ Generated</span>
      </div>

      <div className="careplan-demo-notice">
        <span className="notice-icon">⚠️</span>
        <span>
          <strong>Demo Only</strong> — This CarePlan was generated client-side for demonstration purposes.
          No patient data has been stored, transmitted, or persisted anywhere. Storing real patient data
          without proper safeguards would be a HIPAA violation.
        </span>
      </div>

      <div className="careplan-steps">
        {carePlan.activities.map((activity, idx) => (
          <div key={idx} className="careplan-step">
            <p className="careplan-step-title">
              {activity.stepTitle}
              <span className="careplan-step-loinc">LOINC: {activity.loincCode}</span>
            </p>
            <p className={`careplan-step-description ${activity.description.includes('No ') && activity.description.includes('provided')
              ? 'careplan-step-empty' : ''
              }`}>
              {activity.description}
            </p>
          </div>
        ))}
      </div>

      <div className="careplan-actions">
        <button className="careplan-download-btn" onClick={downloadJson}>
          <span className="btn-icon">📥</span> Download CarePlan JSON
        </button>
        <button className="careplan-json-toggle" onClick={() => setShowJson(!showJson)}>
          {showJson ? '🔼 Hide' : '🔽 View'} Raw FHIR JSON
        </button>
      </div>

      {showJson && (
        <div className="careplan-json-panel">
          <pre>{JSON.stringify(carePlan.resource, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

function StanleyBrownView() {
  const [response, setResponse] = useState<any>(null)
  const [carePlan, setCarePlan] = useState<GeneratedCarePlan | null>(null)

  function handleSubmit(submittedResponse: any) {
    const responseToUse = submittedResponse || response
    if (responseToUse) {
      const plan = generateCarePlan(responseToUse)
      setCarePlan(plan)
      // Scroll to the care plan after a brief delay for rendering
      setTimeout(() => {
        document.querySelector('.careplan-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <div className="form-wrapper">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">← Back to Tools</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">Stanley-Brown Safety Plan</span>
      </nav>
      <div className="form-card">
        <Renderer
          fhirVersion="r4"
          questionnaire={stanleyBrownQuestionnaire as any}
          theme={theme}
          onChange={(newResponse: any) => setResponse(newResponse)}
          onSubmit={handleSubmit}
        />
      </div>

      {carePlan && (
        <div className="form-card">
          <CarePlanDisplay carePlan={carePlan} />
        </div>
      )}

      {response && !carePlan && (
        <aside className="debug-sidebar">
          <h3>Live FHIR QuestionnaireResponse</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </aside>
      )}
    </div>
  )
}

function Navigation({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: "/", label: "Home" },
    { path: "/questionnaire/stanley-and-brown", label: "Stanley-Brown Safety Plan" },
    { path: "/questionnaire/cams-section-a", label: "CAMS: Section A" },
    { path: "/questionnaire/cams-section-b", label: "CAMS: Section B" },
    { path: "/questionnaire/cams-stabilization-plan", label: "Stabilization Plan" },
    { path: "/questionnaire/cams-therapeutic-worksheet", label: "Therapeutic Worksheet" },
  ];

  return (
    <>
      {isOpen && <div className="nav-overlay" onClick={onClose} />}
      <nav className={`app-nav ${isOpen ? 'app-nav--open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="header-brand">
            <h1>SPiER Clinical Diagnostics</h1>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={navOpen}
          >
            <span className={`hamburger ${navOpen ? 'hamburger--active' : ''}`} />
          </button>
        </div>
        <Navigation isOpen={navOpen} onClose={() => setNavOpen(false)} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Stanley-Brown uses its own view with CarePlan generation */}
          <Route path="/questionnaire/stanley-and-brown" element={
            <StanleyBrownView />
          } />
          {/* CAMS forms use the generic QuestionnaireView */}
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

      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-tech">
            Rendering native FHIR Questionnaires using <a href="https://www.npmjs.com/package/@formbox/renderer" target="_blank" rel="noopener noreferrer">formbox-renderer</a>
          </p>
          <p className="footer-copy">SPiER &mdash; Setting priorities for technology-enabled suicide-safer care</p>
        </div>
      </footer>
    </div>
  )
}

export default App
