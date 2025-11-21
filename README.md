# ResumeForge 🚀

**AI-powered resume analysis platform for freshers** - Get instant, job-specific feedback on your resume with ATS scoring, multi-dimensional analysis, and actionable improvement tips.

---

## 📋 Overview

ResumeForge helps freshers and early-career professionals optimize their resumes for specific job applications. Upload your resume, enter job details, and get AI-powered feedback across 5 key dimensions:

- **ATS Compatibility** - How well your resume passes Applicant Tracking Systems
- **Tone & Style** - Professional language and formatting consistency
- **Content Quality** - Impact and clarity of your bullet points
- **Structure** - Organization and section hierarchy
- **Skills Matching** - Alignment with job requirements

---

## ✨ Key Features

### 🎯 Core Features
- ✅ **AI-Powered Resume Analysis** - Claude 3.7 Sonnet provides detailed feedback
- ✅ **Job-Contextualized Feedback** - Analysis tailored to specific job descriptions
- ✅ **Multi-Dimensional Scoring** - 5 comprehensive evaluation categories
- ✅ **ATS Score** - Understand how ATSs will parse your resume
- ✅ **Visual Resume Preview** - See your PDF alongside feedback
- ✅ **Resume History** - Track multiple resume versions and applications
- ✅ **User Authentication** - Secure login via Puter.js
- ✅ **Cloud Storage** - Automatic resume and feedback backup

### 🏗️ Technical Highlights
- 🚀 Serverless architecture (no backend management required)
- ⚡️ Full-stack TypeScript with React Router
- 📱 Responsive design with TailwindCSS
- 🔒 Type-safe with comprehensive type definitions
- 🐳 Docker-ready for quick deployment
- 🔌 Puter.js integration for cloud infrastructure

---

## 🎯 Target Users

**Freshers & Early-Career Professionals** who are:
- Starting their job search journey
- Applying to multiple positions
- Looking to understand ATS requirements
- Seeking data-driven resume improvement

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/natejacobs1/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

Your application will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the application
npm run build

# Type checking
npm run typecheck

# Start production server
npm start
```

---

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── routes/              # Page components
│   │   ├── home.tsx        # Resume dashboard
│   │   ├── upload.tsx      # Upload & analysis page
│   │   ├── resume.tsx      # Resume review page
│   │   ├── auth.tsx        # Authentication
│   │   └── wipe.tsx        # Data cleanup
│   ├── components/          # Reusable UI components
│   │   ├── FileUploader.tsx # PDF drag-drop
│   │   ├── Summary.tsx      # Score summary
│   │   ├── ATS.tsx         # ATS feedback
│   │   ├── Details.tsx     # Detailed analysis
│   │   └── ...
│   ├── lib/                 # Utilities
│   │   ├── puter.ts        # Puter.js integration (Zustand store)
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── utils.ts        # Helper functions
│   └── app.css             # Global styles
├── constants/               # AI prompts & templates
├── types/                   # TypeScript definitions
├── public/                  # Static assets
└── Dockerfile              # Container configuration
```

---

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React Router v7 | Full-stack SSR |
| **Language** | TypeScript 5.9 | Type safety |
| **Styling** | TailwindCSS v4 | Utility-first CSS |
| **State** | Zustand v5 | Global state management |
| **PDF** | pdfjs-dist v5.3 | PDF processing |
| **Upload** | react-dropzone v14 | File upload handling |
| **AI** | Claude 3.7 Sonnet | LLM analysis |
| **Infrastructure** | Puter.js | Auth, Storage, AI APIs |
| **Container** | Docker (Alpine) | Deployment |

---

## 🔌 External Integrations

### Puter.js Cloud OS
The app leverages Puter.js for:
- **Authentication** - User sign-in/out
- **File System** - Cloud storage for PDFs and images
- **AI Services** - Claude 3.7 Sonnet integration
- **Key-Value Store** - Persistent data storage

No backend server needed - everything runs serverless!

---

## 📊 How It Works

1. **Authenticate** - User logs in via Puter.js
2. **Upload Resume** - User drops PDF and enters job details
   - Company name
   - Job title
   - Job description
3. **Processing** - App converts PDF to image and uploads both
4. **AI Analysis** - Claude analyzes resume against job description
5. **Feedback** - User receives structured feedback with actionable tips
6. **History** - Resume and feedback saved for future reference

---

## 🐳 Docker Deployment

### Build Image
```bash
docker build -t resume-forge:latest .
```

### Run Locally
```bash
docker run -p 3000:3000 resume-forge:latest
```

### Deploy to Cloud
The Dockerfile supports deployment to:
- **AWS ECS** - Elastic Container Service
- **Google Cloud Run** - Serverless containers
- **Azure Container Apps** - Managed containers
- **DigitalOcean App Platform** - App deployment
- **Fly.io** - Container deployment
- **Railway** - Platform as a service

---

## 📈 Future Roadmap

Planned features to enhance the platform:
- 📋 Resume template library with ATS-friendly designs
- 💼 Job board integration (Indeed, LinkedIn, AngelList)
- 🔄 Resume versioning & A/B testing
- 📝 AI-generated cover letters
- 📊 Application tracking dashboard
- 🎯 Interview preparation & mock Q&A
- 👥 Peer resume review system
- 🎓 Skills gap analysis & learning resources

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙋 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the codebase for implementation details

---

**Built with ❤️ for freshers starting their tech career journey.**

## Getting Started

### Prerequisites
- Node.js 20+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/natejacobs1/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

Your application will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the application
npm run build

# Type checking
npm run typecheck

# Start production server
npm start
```

---

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── routes/              # Page components
│   │   ├── home.tsx        # Resume dashboard
│   │   ├── upload.tsx      # Upload & analysis page
│   │   ├── resume.tsx      # Resume review page
│   │   ├── auth.tsx        # Authentication
│   │   └── wipe.tsx        # Data cleanup
│   ├── components/          # Reusable UI components
│   │   ├── FileUploader.tsx # PDF drag-drop
│   │   ├── Summary.tsx      # Score summary
│   │   ├── ATS.tsx         # ATS feedback
│   │   ├── Details.tsx     # Detailed analysis
│   │   └── ...
│   ├── lib/                 # Utilities
│   │   ├── puter.ts        # Puter.js integration (Zustand store)
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── utils.ts        # Helper functions
│   └── app.css             # Global styles
├── constants/               # AI prompts & templates
├── types/                   # TypeScript definitions
├── public/                  # Static assets
└── Dockerfile              # Container configuration
```

---

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React Router v7 | Full-stack SSR |
| **Language** | TypeScript 5.9 | Type safety |
| **Styling** | TailwindCSS v4 | Utility-first CSS |
| **State** | Zustand v5 | Global state management |
| **PDF** | pdfjs-dist v5.3 | PDF processing |
| **Upload** | react-dropzone v14 | File upload handling |
| **AI** | Claude 3.7 Sonnet | LLM analysis |
| **Infrastructure** | Puter.js | Auth, Storage, AI APIs |
| **Container** | Docker (Alpine) | Deployment |

---

## 🔌 External Integrations

### Puter.js Cloud OS
The app leverages Puter.js for:
- **Authentication** - User sign-in/out
- **File System** - Cloud storage for PDFs and images
- **AI Services** - Claude 3.7 Sonnet integration
- **Key-Value Store** - Persistent data storage

No backend server needed - everything runs serverless!

---

## 📊 How It Works

1. **Authenticate** - User logs in via Puter.js
2. **Upload Resume** - User drops PDF and enters job details
   - Company name
   - Job title
   - Job description
3. **Processing** - App converts PDF to image and uploads both
4. **AI Analysis** - Claude analyzes resume against job description
5. **Feedback** - User receives structured feedback with actionable tips
6. **History** - Resume and feedback saved for future reference

---

## 🐳 Docker Deployment

### Build Image
```bash
docker build -t resume-forge:latest .
```

### Run Locally
```bash
docker run -p 3000:3000 resume-forge:latest
```

### Deploy to Cloud
The Dockerfile supports deployment to:
- **AWS ECS** - Elastic Container Service
- **Google Cloud Run** - Serverless containers
- **Azure Container Apps** - Managed containers
- **DigitalOcean App Platform** - App deployment
- **Fly.io** - Container deployment
- **Railway** - Platform as a service

---

## 📈 Future Roadmap

Planned features to enhance the platform:
- 📋 Resume template library with ATS-friendly designs
- 💼 Job board integration (Indeed, LinkedIn, AngelList)
- 🔄 Resume versioning & A/B testing
- 📝 AI-generated cover letters
- 📊 Application tracking dashboard
- 🎯 Interview preparation & mock Q&A
- 👥 Peer resume review system
- 🎓 Skills gap analysis & learning resources

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙋 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing documentation
- Review the codebase for implementation details

---

**Built with ❤️ for freshers starting their tech career journey.**
