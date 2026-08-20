# CeLTS Survey — Language Policy Research Portal

**Centre for Languages and Translation Studies**  
Allama Iqbal Open University, Islamabad  
Dr Ghulam Ali · Director · +92 300 6550455

---

## Overview

A full-featured bilingual education survey application collecting language policy perspectives across Pakistan's six provinces. Built with React + Vite, featuring a beautiful light-theme editorial design.

## Project Structure

```
celts-survey/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              ← Entry point
    ├── App.jsx               ← Root router (Dashboard / Page1 / Page2 / Success)
    ├── styles.css            ← Global styles (Cormorant Garamond + DM Sans theme)
    ├── constants.js          ← All survey option arrays
    │
    ├── components/
    │   ├── Header.jsx        ← Sticky frosted-glass CeLTS header
    │   ├── RadioGroup.jsx    ← Chip-style single-select radio
    │   ├── Likert.jsx        ← 5-point Likert scale
    │   ├── FieldRow.jsx      ← Label + input wrapper
    │   ├── SectionHeader.jsx ← Badge + title + decorative rule
    │   └── TableSection.jsx  ← Section E matrix table (clickable circles)
    │
    └── pages/
        ├── Dashboard.jsx     ← Stats cards, submissions list, actions
        ├── SurveyPage1.jsx   ← Sections A, B, C
        ├── SurveyPage2.jsx   ← Sections D, E, F, G, H, I
        └── SuccessPage.jsx   ← Confirmation with animated checkmark
```

## Survey Sections

| Page | Sections | Content |
|------|----------|---------|
| 1    | A        | Demographic Profile (Province, Area, Category, Education, Medium, Mother Tongue) |
| 1    | B        | Language Use & Exposure (Home, Work, Social, Informal) |
| 1    | C        | Policy Orientation & Responsibility |
| 2    | D        | Medium of Instruction Preferences (Primary / Secondary / Higher) |
| 2    | E        | Learning, Cognition & Creativity (11-statement matrix table) |
| 2    | F        | Educational Outcomes & Equity |
| 2    | G        | Language, Identity & Inequality |
| 2    | H        | Policy Preferences & Future Direction |
| 2    | I        | Implementation Capacity |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design

- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Palette**: Warm ivory background · Deep teal primary · Amber/gold accents
- **Features**: Frosted-glass header · Animated progress bar · Hover micro-interactions · Responsive grid
