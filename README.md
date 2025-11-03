# Face Recognition app

This is a Next.js application that implements a face recognition feature using the Clarifai API. The application allows users to input an image URL, and it will display the detected faces in the image.

## Project Structure

```
my-next-app
├── app
│   ├── globals.css         # Global CSS styles for the application
│   ├── layout.jsx          # Layout component wrapping around page components
│   └── page.jsx            # Main entry point for the application
├── components
│   ├── FaceRecongnition     # Component for displaying face recognition results
│   │   └── FaceRecongnition.jsx
│   ├── ImageLinkForm        # Component for inputting image URL
│   │   └── ImageLinkForm.jsx
│   └── Logo                 # Component for displaying the application logo
│       └── Logo.jsx
├── public                   # Directory for static assets
├── .eslintrc.json           # ESLint configuration file
├── .gitignore               # Git ignore file
├── jsconfig.json            # JavaScript project configuration
├── next.config.js           # Next.js configuration file
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-next-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- Enter an image URL in the input field and click the submit button to analyze the image.
- The application will display the detected faces with bounding boxes.

## Tech stack
[![Current tech stack](https://skillicons.dev/icons?i=nextjs,tailwind,vite,bun)](https://skillicons.dev)

<img width="1418" height="913" alt="screenshot-2025-11-03_05-27-12" src="https://github.com/user-attachments/assets/1134fb63-537c-49b3-ab7d-5e09f05812f3" />

[Screencast from 08-26-2024 05:19:09 AM.webm](https://github.com/user-attachments/assets/7bd3b2f7-c801-4c24-9d36-a0fc6e290271)

https://github.com/user-attachments/assets/08347c33-e4e7-41d3-a2e7-40389983aa1d



https://github.com/user-attachments/assets/5410d99f-a8e4-4612-8095-4543cb92d0dd


