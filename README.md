# RiskWise

RiskWise is a full-stack cybersecurity risk assessment platform designed to prioritize vulnerabilities using both technical severity and real-world context. Instead of relying solely on raw CVSS scores, RiskWise combines exploitability, exposure, attack complexity, and asset criticality to produce an explainable risk score that helps security teams decide what to fix first. All risk analysis and scoring is performed on the backend, making the system reliable, consistent, and suitable for real-world use.

---

## Project Overview

In many organizations, security teams are overwhelmed with vulnerability data but lack clear prioritization. RiskWise addresses this problem by acting as a decision-support system rather than a simple scanner. The platform evaluates vulnerability inputs, applies a rule-based risk scoring engine, and returns both a numerical risk score and human-readable reasoning behind the assessment.

The frontend is responsible only for collecting input and displaying results. The backend is the single source of truth for all business logic.

---

## Key Features

- Backend-driven risk scoring engine  
- Context-aware prioritization beyond raw CVSS  
- Explainable output with confidence drivers  
- React and TypeScript frontend  
- Node.js and Express backend  
- MongoDB for persistence  
- Clean separation of concerns  
- No client-side business logic or mock data  

---

## Architecture

Frontend (React + Vite)  
↓  
Backend API (Express)  
↓  
Risk Scoring Engine (Business Logic)  
↓  
MongoDB (Persistence)

### Design Principles

- All risk computation happens on the backend  
- Frontend contains no scoring or decision logic  
- Backend acts as the single source of truth  
- Clear separation between routes, controllers, services, and utilities  

---

## Risk Evaluation Inputs

RiskWise evaluates vulnerabilities using the following inputs:

- Vulnerability type (e.g., XSS, RCE)  
- CVSS score  
- OWASP category  
- Exploit availability  
- Internet exposure  
- Authentication requirement  
- Attack complexity  
- Asset business value  

### Output

- Risk score (0–100)  
- Risk level: LOW, MEDIUM, or HIGH  
- Confidence drivers explaining why the risk was assigned  

---

## Project Structure

RiskWise/  
├── backend/  
│   ├── src/  
│   │   ├── app.js  
│   │   ├── server.js  
│   │   ├── config/  
│   │   ├── models/  
│   │   ├── services/  
│   │   ├── controllers/  
│   │   ├── routes/  
│   │   └── utils/  
│   └── .env  
│  
├── frontend/  
│   ├── src/  
│   │   ├── app/  
│   │   ├── services/  
│   │   ├── types/  
│   │   └── styles/  
│   └── vite.config.ts  
│  
└── README.md  

---

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)  
- npm  
- MongoDB (local installation or running service)  
- Git  

---

## Backend Setup

1. Go to backend directory
cd backend


2. Install dependencies
npm install


3. Create environment file
Create a file named .env inside the backend folder and paste:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/riskwise


4. Start MongoDB
Make sure MongoDB is running locally.
You can verify using MongoDB Compass with:
mongodb://localhost:27017


5. Start backend server
npm run dev
Backend will run at:
http://localhost:5000


## Frontend Setup 

1. Go to frontend directory
cd frontend


2. Install dependencies
npm install


3. Start frontend development server
npm run dev

Frontend will run at:
http://localhost:5173



## Run Order 

Always start in this order:

1. MongoDB
2. Backend
3. Frontend


