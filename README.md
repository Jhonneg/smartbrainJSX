# My Next.js App

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
[![Current tech stack](https://skillicons.dev/icons?i=react,tailwind,vite,bun)](https://skillicons.dev)


<img src="https://github.com/Jhonneg/SmartbrainJSX/blob/main/assets/Screenshot%20from%202024-05-04%2008-08-01.png" width="800">

<img src="https://github.com/Jhonneg/SmartbrainJSX/blob/main/assets/Screenshot%20from%202024-04-15%2017-30-09.png" width="800">

<img src="https://github.com/Jhonneg/SmartbrainJSX/blob/main/assets/Screenshot%20from%202024-05-04%2008-01-59.png" width="800">

[Screencast from 08-26-2024 05:19:09 AM.webm](https://github.com/user-attachments/assets/7bd3b2f7-c801-4c24-9d36-a0fc6e290271)
