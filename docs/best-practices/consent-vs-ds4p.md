# Educational Guide: FHIR Consent vs. HL7 DS4P

This document clarifies the relationship and differences between the FHIR Consent resource and the Data Segmentation for Privacy (DS4P) standard. Understanding this distinction is critical for implementing granular privacy in the SPiER project.

## 1. Executive Summary
*   **FHIR Consent** is a **Resource**: It is a digital "contract" or record of a patient’s preference (e.g., "I allow Dr. Smith to see my mental health records").
*   **DS4P (Data Segmentation for Privacy)** is a **Standard/Framework**: It is a set of rules (an Implementation Guide) that defines how to **tag** data with sensitivity labels and how systems should **enforce** the rules found in a Consent resource.

**Analogy:** If you are entering a high-security building, the **Consent Resource** is your ID badge (the proof you are allowed in), and **DS4P** is the security protocol followed by the guards (how they check your badge against the restricted areas).

---

## 2. Deep Dive: FHIR Consent
The `Consent` resource is part of the FHIR core specification. It is primarily used to track:
*   **Privacy Consent:** Permission to share data.
*   **Medical Treatment Consent:** Permission for a procedure.
*   **Research Consent:** Permission to use data in a study.

### Key Fields in FHIR Consent:
*   **`status`**: Active, inactive, or proposed.
*   **`scope`**: Usually `patient-privacy`.
*   **`category`**: Defines the type of consent (e.g., "Privacy Policy").
*   **`provision`**: The meat of the resource. It contains the **permit** or **deny** rules, the actors (who), and the actions (what).

---

## 3. Deep Dive: DS4P (Data Segmentation for Privacy)
DS4P is an HL7 Implementation Guide (IG) that adds "granularity" to healthcare data. Without DS4P, an EHR usually shares "all or nothing." With DS4P, we can share a physical health record while hiding a specific CAMS form.

### The Two Pillars of DS4P:
1.  **Security Labeling:** DS4P requires that clinical resources (like our CAMS CarePlan) be "tagged" in the `meta.security` field.
    *   *Example Tags:* `MH` (Mental Health), `SUD` (Substance Use Disorder), `ETH` (Ethical/Sensitivity).
2.  **Enforcement Logic:** It defines the technical "handshake" between a requesting system and a holding system. It tells the EHR: "If the data is tagged `MH`, stop and check the `Consent` resources before releasing."

---

## 4. Comparison Table

| Feature | FHIR Consent Resource | HL7 DS4P Standard |
| :--- | :--- | :--- |
| **Nature** | A data object (JSON/XML). | A technical protocol/standard. |
| **Role** | Stores the patient's choice. | Defines how to tag and hide data. |
| **Location** | Stored in a "Consent Repository." | Integrated into every Clinical Resource. |
| **Complexity** | Relatively simple to create. | Complex to enforce in EHR logic. |
| **SPiER Use Case** | Used to record that a patient wants their Safety Plan shared. | Used to "tag" the Safety Plan so it's handled with extra care. |

---

## 5. How SPiER Uses Them Together (The Workflow)

1.  **The Tagging (DS4P):** We add a security label of `MH` (Mental Health) and `R` (Restricted) to the `meta` section of the CAMS and Stanley-Brown JSON files.
2.  **The Permission (Consent):** The patient uses a "Consent App" to generate a FHIR `Consent` resource that says: *"I permit any Emergency Department to access resources tagged `MH` and `R` for the purpose of suicide prevention."*
3.  **The Exchange:** When an ED doctor queries the patient's records, the EHR sees the `MH` tag, finds the matching `Consent` resource, and allows the CAMS form to be decrypted/displayed.

---

## 6. Research Keywords for the Team
To dive deeper, the team should research:
*   **"HL7 DS4P Implementation Guide"**: For the technical tagging specifications.
*   **"FHIR Security Labels"**: To understand the `meta.security` field.
*   **"LEAP (Leading Edge Acceleration Projects) Consent"**: For modern US government-funded projects on digital consent.

---
*Created: 2026-02-04*
