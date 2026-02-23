# SPiER (Suicide Prevention in Electronic Health Records)

## Mission
The SPiER project is a non-profit initiative dedicated to translating research-validated suicide prevention tools from paper-based formats into structured, interoperable healthcare data standards (e.g., HL7 FHIR). The goal is to make these high-quality tools easily accessible to EHR vendors and healthcare systems.

## Repository Structure

*   **`src/`**: Computer-readable assets (FHIR Questionnaires, CarePlans).
    *   `src/fhir/questionnaires/`: FHIR Questionnaire resources.
    *   `src/fhir/careplans/`: FHIR CarePlan and protocol definitions.
*   **`docs/`**: Human-readable documentation.
    *   `docs/best-practices/`: Implementation guides and strategy documents.
    *   `docs/clinical-frameworks/`: Deep dives into specific tools like CAMS.
*   **`references/`**: Original source materials (PDFs, Excel specs).

## Getting Started

See [docs/README.md](docs/README.md) for a guide to the documentation.

## Key Clinical Frameworks
1.  **CAMS (Collaborative Assessment and Management of Suicidality)**
2.  **Stanley-Brown Safety Plan**
3.  **ASQ (Ask Suicide-Screening Questions)**
4.  **CSS-RS (Columbia-Suicide Severity Rating Scale)**

## Contributing
This repository contains the canonical source for SPiER's technical and clinical definitions.
