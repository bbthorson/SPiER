# FHIR Validation Guide for SPiER Assets

Validation is the process of ensuring that our FHIR JSON files are technically correct, semantically meaningful, and compliant with specific Implementation Guides (like US Core).

## 1. Why Validate?
*   **Structure:** Ensures the JSON follows the FHIR schema (e.g., no typos in field names).
*   **Cardinality:** Ensures mandatory fields (like `status` or `intent`) are present.
*   **Terminology:** Checks if the LOINC or SNOMED codes we used are valid and active.
*   **Profiles:** Checks if our CarePlans meet the strict requirements of the **US Core** or **eCarePlan** standards.

---

## 2. Validation Tools

### Option A: The Official HL7 Java Validator (Best for Devs)
This is the "gold standard" used by the FHIR community.
*   **Source:** [HL7 Validator GitHub](https://github.com/hapifhir/org.hl7.fhir.core/releases)
*   **Command Example:**
    ```bash
    java -jar validator_cli.jar cams-ssf5-section-a.json -version 4.0.1 -ig hl7.fhir.us.core
    ```

### Option B: Online HTTP Validators (Easiest for Quick Checks)
*   **Inferno (HealthIT.gov):** [https://inferno.healthit.gov/validator/](https://inferno.healthit.gov/validator/) - Great for checking US Core compliance.
*   **Simplifier.io:** [https://simplifier.io/validate](https://simplifier.io/validate) - A very user-friendly web interface.
*   **HAPI FHIR:** [https://hapi.fhir.org/baseR4/Questionnaire/$validate](https://hapi.fhir.org/baseR4/Questionnaire/$validate) - Direct API validation.

---

## 3. Common Validation Issues to Watch For
*   **Reference Errors:** If a CarePlan points to a `Patient/example`, the validator will fail if it can't find that Patient resource.
*   **URL Context:** The `url` field in Questionnaires must be a valid URI (even if it's a placeholder).
*   **Extension URLs:** Ensure that SDC extensions (like `questionnaire-maxOccurs`) use the correct HL7 system URLs.

## 4. Validation Workflow for SPiER
1.  **Draft:** Create/Edit the JSON (Current state).
2.  **Schema Check:** Use a VS Code plugin (like "FHIR Tools") to catch basic syntax errors.
3.  **Profile Validation:** Upload the file to the **Inferno Validator** to ensure it meets US Core standards for sharing across health networks.
4.  **Audit:** Have a clinical informatics expert review the **Clinical Mapping Tables** in our READMEs to ensure the LOINC codes are used correctly in context.

---
*Created: 2026-02-04*
