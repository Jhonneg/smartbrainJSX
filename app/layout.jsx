import "./globals.css";

export const metadata = {
  title: "Face Recognition App",
  description: "A Next.js application for face recognition using Clarifai API",
  icons: "https://img.icons8.com/ios-filled/50/FFFFFF/source-code.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
