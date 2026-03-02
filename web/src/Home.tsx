import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="spier-title">SPiER Clinical Diagnostics</h1>
                <div className="accent-line"></div>
                <p className="spier-subtitle">Setting priorities for technology-enabled suicide-safer care</p>
                <p className="spier-description">
                    Welcome to the SPiER digital assessment platform. Select a clinical tool below to begin an interactive, FHIR-native screening or safety planning session.
                </p>
            </div>

            <div className="tools-grid">
                <div className="tool-card">
                    <h3>Stanley-Brown Safety Plan</h3>
                    <p>A brief intervention to help individuals manage suicidal crises and reduce access to lethal means.</p>
                    <Link to="/questionnaire/stanley-and-brown" className="btn-primary">Launch Safety Plan</Link>
                </div>

                <div className="tool-card">
                    <h3>CAMS Framework</h3>
                    <p>Collaborative Assessment and Management of Suicidality. A therapeutic framework for suicide-specific assessment and treatment.</p>
                    <div className="cams-links">
                        <Link to="/questionnaire/cams-section-a" className="btn-secondary">SSF-5 Section A (Patient)</Link>
                        <Link to="/questionnaire/cams-section-b" className="btn-secondary">SSF-5 Section B (Clinician)</Link>
                        <Link to="/questionnaire/cams-stabilization-plan" className="btn-secondary">Stabilization Plan</Link>
                        <Link to="/questionnaire/cams-therapeutic-worksheet" className="btn-secondary">Therapeutic Worksheet</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
