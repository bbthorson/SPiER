# SPiER Project Asset Manifest

This manifest provides a computer-readable and human-readable index of the assets in the SPiER (Suicide Prevention in EHRs) project.

## Project Strategy & Education
*   **`docs/PROJECT_OVERVIEW.md`**: Mission statement and technical roadmap.
*   **`docs/best-practices/strategy-consent.md`**: Architectural plan for cross-practice data sharing.
*   **`docs/best-practices/consent-vs-ds4p.md`**: Educational guide on FHIR Consent and data segmentation standards.
*   **`docs/best-practices/validation-guide.md`**: Instructions for technical and clinical validation of assets.

## Clinical Tool: Stanley-Brown Safety Plan
*   **Location:** `Stanley Brown Safety Plan/`
*   **Implementation Guide:** `Stanley Brown Safety Plan/README.md` (Includes Clinical Mapping Table).
*   **Key Assets:**
    *   `Stanley Brown Safety Plan/fhir/questionnaires/questionnaire.json`: Data capture with LOINC coding.
    *   `Stanley Brown Safety Plan/fhir/careplans/Hybrid_CarePlan.json`: High-interoperability persistence model.
*   **Source:** `Stanley Brown Safety Plan/references/original-forms/Stanley-Brown-Safety-Plan-8-6-21.pdf`

## Clinical Tool: CAMS (Collaborative Assessment and Management of Suicidality)
*   **Location:** `CAMS/`
*   **Implementation Guide:** `CAMS/README.md` (Explaining the Driver/Problem lifecycle).
*   **Key Assets:**
    *   `CAMS/fhir/questionnaires/SSF5_SectionA.json`: Patient Assessment.
    *   `CAMS/fhir/questionnaires/SSF5_SectionB.json`: Clinician Risk/Driver ID.
    *   `CAMS/fhir/questionnaires/Stabilization_Plan.json`: Safety Planning.
    *   `CAMS/fhir/careplans/Stabilization_CarePlan_Template.json`: Persistence model.
    *   `CAMS/fhir/questionnaires/Therapeutic_Worksheet.json`: Interim session tool.

## Other Clinical Frameworks
*   **ASQ (Ask Suicide-Screening Questions):** In progress.
*   **CSS-RS (Columbia-Suicide Severity Rating Scale):** In progress.

## Evaluation
*   **Evaluation:** `Evaluation/SPiER Evaluation Plan_12.23.2025.docx` (Placeholders - pending addition).

---
*Last Updated: 2026-02-22*