import type { Metadata } from "next";
import localFont from "next/font/local";
 

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz Page",
  description: "Take the quiz and test your knowledge",
};

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-gray-100 md:max-w-[400px] mx-auto md:min-h-screen px-5`}
      >
        
        {children}
      </body>
    </html>
  );
}
