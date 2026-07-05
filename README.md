# 🎨 DeepGreen - AI-Powered Satellite Auditing Platform

DeepGreen is a cutting-edge, award-worthy web landing page and interactive simulator designed to audit corporate sustainability reports. By cross-referencing paper claims against real-world satellite ground truth, DeepGreen ends the era of **'Phantom Forests'** (forests that only exist on paper to claim tax cuts and boost brand image).

This project features a high-end, Awwwards-inspired motion design built with HTML5, CSS3, Vite, and GSAP animations, backed by smooth scrolling integration.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [How It Works (System Pipeline)](#-how-it-works-system-pipeline)
- [Tech Stack](#-tech-stack)
- [Animation & Visual Architecture](#-animation--visual-architecture)
- [Installation & Setup](#-installation--setup)
- [Geospatial Audit Simulator](#-geospatial-audit-simulator)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Project Overview
Sustainability reporting today has a severe trust deficit. Large corporations claim to plant thousands of trees, but verifying these claims manually takes regulators 3–6 months. DeepGreen automates this verification down to a few minutes using **Multimodal RAG** and **Satellite Computer Vision (NDVI Index)**.

---

## ✨ Key Features

### 📡 No Hardware Required
DeepGreen is 100% software-based. By retrieving telemetry directly from open-source satellite networks, it does away with expensive ground-based IoT sensor grids.

### 📊 Confidence Scoring Engine
Accounting for noise like cloud cover and seasonal vegetation change, our engine calculates a Deforestation Confidence Score (0–100%) so that regulators only act on high-certainty violations.

### 📈 Multi-Year Trend Analysis
Uses 3–5 year historical NDVI (Normalized Difference Vegetation Index) trends to distinguish natural seasonal cycles from genuine deforestation anomalies.

### 🔍 Explainability & Citations
Matches parsed claims directly with highlighted paragraphs and pages in the original CSR report, providing full transparency on how the AI reached its audit conclusion.

### 🚨 Proactive compliance alerts
If a discrepancy is detected, the system immediately pulls environmental clauses, drafts a legal notice PDF, and sends alert warnings to regulators.

---

## ⚙️ How It Works (System Pipeline)

1.  **Step 1: Intake** ➔ Auditor uploads the target company's Annual Sustainability Report.
2.  **Step 2: Insight** ➔ Multimodal RAG parsing extracts location claims, coordinates, and tree counts.
3.  **Step 3: Check** ➔ Platform fetches live Copernicus Sentinel-2 satellite imagery of the coordinates.
4.  **Step 4: Action** ➔ AI evaluates green canopy indices and instantly triggers alerts if fraud is caught.

---

## 🛠 Tech Stack

*   **Frontend Core**: HTML5, CSS3, JavaScript (ES6+), Vite
*   **Animations**: GSAP (GreenSock), ScrollTrigger
*   **Smooth Scroll**: Lenis (Smooth Scroll)
*   **Geospatial (Mocked)**: Copernicus Sentinel-2 database simulation, NDVI index mappings
*   **RAG Engine (Mocked)**: PDF coordinates scanner simulation

---

## 🎭 Animation & Visual Architecture

### 🌀 Page Transitions
A staggered, 5-layer vertical scale overlay handles transitions between the landing page and the auditor simulator.

### 🌊 Dynamic Mouse Trails
Mouse movement on the auditor page generates image trails showcasing the visual assets of the verification engine.

### 🥞 Layered Differentiator Stack
Key differentiators stack as layered cards on scroll, translating vertically and pinning in place for a smooth 3D overlap effect.

### 💥 Interactive Footer Explosion
Reaching the bottom of the page triggers a physics-based particle explosion of satellite visuals in the footer.

---

## 🚀 Installation & Setup

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn package manager

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/deepanshutri8033/deepGreenNew.git
   cd deepGreenNew
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🖥 Geospatial Audit Simulator
Navigate to the **Try Auditor** section (`/contact`) to experience the simulator.
*   Input a custom company name and select a region (e.g. Amazon, Congo Basin, Sumatra, or Siberia).
*   Watch the engine progress through data parsing, satellite fetching, and CV analysis in real-time.
*   Get a customized audit alert with a Deforestation Confidence Score and compliance dispatch notices.

---

## 📄 License
This project is licensed under the MIT License.