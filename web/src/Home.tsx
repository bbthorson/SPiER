import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h2 className="spier-title">Clinical Assessment Tools</h2>
                <div className="accent-line"></div>
                <p className="spier-description">
                    Select a clinical tool below to begin an interactive, FHIR-native screening or safety planning session.
                </p>
            </div>

            <div className="tools-grid">
                <div className="tool-card">
                    <div className="card-badge card-badge--safety">Safety Plan</div>
                    <h3>Stanley-Brown Safety Plan</h3>
                    <p>A brief intervention to help individuals manage suicidal crises and reduce access to lethal means.</p>
                    <Link to="/questionnaire/stanley-and-brown" className="btn-primary">Launch Safety Plan</Link>
                </div>

                <div className="tool-card">
                    <div className="card-badge card-badge--cams">CAMS Framework</div>
                    <h3>Collaborative Assessment &amp; Management of Suicidality</h3>
                    <p>A therapeutic framework for suicide-specific assessment and treatment planning.</p>
                    <div className="cams-links">
                        <Link to="/questionnaire/cams-section-a" className="btn-secondary">
                            <span className="btn-icon">📋</span> SSF-5 Section A <span className="btn-meta">Patient</span>
                        </Link>
                        <Link to="/questionnaire/cams-section-b" className="btn-secondary">
                            <span className="btn-icon">📋</span> SSF-5 Section B <span className="btn-meta">Clinician</span>
                        </Link>
                        <Link to="/questionnaire/cams-stabilization-plan" className="btn-secondary">
                            <span className="btn-icon">🛡️</span> Stabilization Plan
                        </Link>
                        <Link to="/questionnaire/cams-therapeutic-worksheet" className="btn-secondary">
                            <span className="btn-icon">📝</span> Therapeutic Worksheet
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
