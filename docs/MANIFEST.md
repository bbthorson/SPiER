# SPiER Project Asset Manifest

This manifest provides a computer-readable and human-readable index of the assets in the SPiER (Suicide Prevention in EHRs) project.

## Project Strategy & Education
*   **`PROJECT_OVERVIEW.md`**: Mission statement and technical roadmap.
*   **`STRATEGY_CONSENT.md`**: Architectural plan for cross-practice data sharing.
*   **`CONSENT_VS_DS4P.md`**: Educational guide on FHIR Consent and data segmentation standards.
*   **`VALIDATION_GUIDE.md`**: Instructions for technical and clinical validation of assets.

## Clinical Tool: Stanley-Brown Safety Plan
*   **Location:** `Stanley and Brown Safety Plan/`
*   **Implementation Guide:** `Stanley and Brown Safety Plan/README.md` (Includes Clinical Mapping Table).
*   **Key Assets:**
    *   `Stanley_Brown_FHIR_Questionnaire.json`: Data capture with LOINC coding.
    *   `Stanley_Brown_Hybrid_CarePlan_Template.json`: High-interoperability persistence model.
*   **Source:** `Stanley-Brown-Safety-Plan-8-6-21.pdf`

## Clinical Tool: CAMS (Collaborative Assessment and Management of Suicidality)
*   **Location:** `CAMS/`
*   **Implementation Guide:** `CAMS/README.md` (Manifest and Roadmap).
*   **Data Architecture:** `CAMS/CAMS_DATA_FLOW.md` (Explaining the Driver/Problem lifecycle).
*   **Key Assets:**
    *   `CAMS_SSF5_SectionA_Questionnaire.json`: Patient Assessment.
    *   `CAMS_SSF5_SectionB_Questionnaire.json`: Clinician Risk/Driver ID.
    *   `CAMS_Stabilization_Plan_Questionnaire.json`: Safety Planning.
    *   `CAMS_Stabilization_CarePlan_Template.json`: Persistence model.
    *   `CAMS_Therapeutic_Worksheet_Questionnaire.json`: Interim session tool.

## Other Assets
*   **Emergency Department:** `Emergency Department/` (Workflows and Vendor Guides).
*   **Evaluation:** `Evaluation/SPiER Evaluation Plan_12.23.2025.docx`.
*   **Branding/Flyers:** `Branding /` and `Informational Flyers/`.

---
*Last Updated: 2026-02-04*