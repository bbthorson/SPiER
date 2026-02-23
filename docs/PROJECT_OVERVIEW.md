# Project Overview: SPiER (Suicide Prevention in Electronic Health Records)

## Mission
The SPiER project is a non-profit initiative dedicated to translating research-validated suicide prevention tools from paper-based formats into structured, interoperable healthcare data standards (e.g., HL7 FHIR). The goal is to make these high-quality tools easily accessible to EHR vendors and healthcare systems to improve the identification, assessment, and management of suicide risk.

## Key Clinical Frameworks & Tools
1.  **CAMS (Collaborative Assessment and Management of Suicidality):**
    *   Developed by Dr. David Jobs.
    *   A clinical framework that emphasizes collaborative, empathic engagement with suicidal patients.
    *   Key components: Suicide Status Form (SSF), CAMS Stabilization Plan, and CAMS Therapeutic Worksheet.
    *   Phases: Initial assessment, interim care, and final disposition.
2.  **Stanley-Brown Safety Plan:**
    *   An evidence-based intervention to help patients identify coping strategies and resources to manage a suicidal crisis.
    *   Includes identification of warning signs, internal coping strategies, social contacts, and professional resources.
3.  **ASQ (Ask Suicide-Screening Questions):**
    *   A rapid screening tool used to identify individuals at risk for suicide, often in emergency departments or primary care settings.
4.  **CSS-RS (Columbia-Suicide Severity Rating Scale):**
    *   A widely used scale for assessing the severity of suicidal ideation and behavior.

## Technical Goals
*   **FHIR Standardization:** Convert clinical tools into FHIR Questionnaire, QuestionnaireResponse, CarePlan, and Consent resources.
*   **Workflow Integration:** Define "optimal EHR functionality," including:
    *   **Cues to Action:** Automated triggers and nudges for clinicians based on screening results.
    *   **Decision Support:** Logic to guide clinical pathways (e.g., from positive screen to full assessment).
    *   **Data Dashboards:** Generating structured data for performance improvement and population health monitoring.
*   **Interoperability:** Ensuring data can be shared across practice settings while maintaining patient consent and privacy.

## Project Phases
1.  **Indexing & Discovery:** Inventorying existing assets and documentation (See `MANIFEST.md`).
2.  **Strategic Alignment:** Defining the mission and technical architecture.
3.  **Asset Translation:** Ongoing development of FHIR-based versions of core tools.
4.  **Consent & Security:** Developing models for patient-controlled data sharing across health systems.

---
*Created: 2026-02-04*
