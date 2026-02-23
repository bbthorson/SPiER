# SPiER (Suicide Prevention in Electronic Health Records)

## Mission
The SPiER project is a non-profit initiative dedicated to translating research-validated suicide prevention tools from paper-based formats into structured, interoperable healthcare data standards (e.g., HL7 FHIR). The goal is to make these high-quality tools easily accessible to EHR vendors and healthcare systems.

## Repository Structure

The repository is organized by clinical framework to keep all related assets grouped together:

*   **`CAMS/`**: 
    *   `fhir/`: FHIR resources (Questionnaires, CarePlans).
    *   `docs/`: Implementation documentation (Data flows, mappings).
    *   `references/`: Original PDFs and spreadsheets.
*   **`Stanley Brown Safety Plan/`**: Same sub-directory structure for the Stanley-Brown framework.
*   **`docs/`**: Global, human-readable documentation.
    *   `docs/best-practices/`: Implementation guides and strategy documents.

## Getting Started

See [docs/README.md](docs/README.md) for a guide to the documentation.

## Key Clinical Frameworks
1.  **CAMS (Collaborative Assessment and Management of Suicidality)**
2.  **Stanley-Brown Safety Plan**
3.  **ASQ (Ask Suicide-Screening Questions)**
4.  **CSS-RS (Columbia-Suicide Severity Rating Scale)**

## Contributing
This repository contains the canonical source for SPiER's technical and clinical definitions.
