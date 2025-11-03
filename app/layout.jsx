import "./globals.css";

export const metadata = {
  title: "Face Recognition App",
  description: "A Next.js application for face recognition using Clarifai API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
