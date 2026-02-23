# Strategy: Patient Consent for Shared Suicide Prevention Data

## Objective
To define a standard, FHIR-based approach for patients to grant, manage, and revoke consent for sharing their suicide prevention assets (e.g., Safety Plans, CAMS forms) across different healthcare providers and practice settings.

## Core Components

### 1. The FHIR Consent Resource
We will use the **FHIR Consent** resource as the primary vehicle for recording permissions.
*   **Status:** `active`, `inactive`, or `proposed`.
*   **Scope:** `patient-privacy`.
*   **Category:** `directory` (for sharing across systems).
*   **Provisions:**
    *   `type`: `permit` or `deny`.
    *   `actor`: Specific organizations or practitioner roles allowed to access the data.
    *   `action`: `access`, `collect`, `use`.
    *   `period`: Start and end date for the consent.

### 2. SMART on FHIR Integration
To enable patient-facing consent management:
*   **Scopes:** Define specific scopes (e.g., `patient/Consent.write`, `patient/CarePlan.read`) that apps must request.
*   **User Interface:** A simple "Consent Manager" app where patients can see who has access to their Safety Plan and toggle permissions.

### 3. Data Segmentation (Security Labels)
Suicide prevention data is highly sensitive. We will explore using **HL7 Healthcare Privacy and Security Classification System (HCS)** labels:
*   `DS` (Disclose): Labeling resources to ensure they are only shared when specific consent is present.
*   `MH` (Mental Health): Identifying the clinical domain.

### 4. Cross-System Sharing Workflows
*   **Push Model:** When a safety plan is updated, the patient is prompted to "push" it to other systems in their care circle.
*   **Pull Model (Discovery):** A provider at an ED queries a Centralized Consent Repository or a Health Information Exchange (HIE) to check for a valid safety plan and the patient's permission to view it.

## Next Steps
1.  **Draft a Sample Consent Resource:** Create a JSON example of a Consent resource for the Stanley-Brown Safety Plan.
2.  **Define Actor Roles:** Identify the typical actors (ED Physician, PCP, Behavioral Health Specialist, Family Member).
3.  **Cross-Walk with Legal:** Align the technical model with HIPAA and 42 CFR Part 2 requirements (if applicable).

---
*Created: 2026-02-04*
