# ResumeForge 🚀

**AI-powered resume analysis platform for freshers.**  
Upload your resume, enter job details, and receive instant AI feedback with ATS scoring and actionable improvement suggestions.

---

## 📋 Overview

ResumeForge helps freshers and early-career professionals optimize their resumes for specific job applications using AI.  
The platform analyzes resumes across multiple dimensions and provides practical suggestions to improve job readiness.

### Analysis Categories
- **ATS Compatibility** – How well your resume passes Applicant Tracking Systems
- **Tone & Style** – Professional language and formatting consistency
- **Content Quality** – Strength and clarity of bullet points
- **Structure** – Organization and section hierarchy
- **Skills Matching** – Alignment with job requirements

---

## ✨ Features

- AI-powered resume analysis using **Claude 3.7 Sonnet**
- Job-specific feedback based on job descriptions
- Multi-dimensional scoring system
- ATS compatibility score
- Resume preview alongside feedback
- Resume history tracking
- Secure authentication via **Puter.js**
- Cloud storage for resumes and analysis results

---

## 🛠 Tech Stack

| Layer | Technology |
|------|-------------|
| Framework | React Router v7 |
| Language | TypeScript |
| Styling | TailwindCSS |
| State Management | Zustand |
| PDF Processing | pdfjs-dist |
| File Upload | react-dropzone |
| AI | Claude 3.7 Sonnet |
| Infrastructure | Puter.js |
| Deployment | Docker |

---

## ⚙️ How It Works

1. **Login** using Puter.js authentication  
2. **Upload Resume** and enter job details (company, title, description)  
3. **Processing** converts the PDF and uploads files  
4. **AI Analysis** compares the resume with the job description  
5. **Feedback** provides scores and improvement suggestions  
6. **History** stores resumes and analysis results for later use  

---

## 🚀 Installation

### Prerequisites
- Node.js 20+

### Setup

```bash
git clone https://github.com/natejacobs1/ai-resume-analyzer.git
cd ai-resume-analyzer
npm install
