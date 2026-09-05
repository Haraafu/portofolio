import type { Metadata } from "next";
import "./globals.css";
import SystemShell from "@/components/SystemShell";
export const metadata: Metadata = {
  title: "Falah Andhesryo | Portfolio",
  description:
    "Computer Engineering student at University of Indonesia. Software Engineer passionate about AI, IoT, and system development.",
  keywords: [
    "Falah Andhesryo",
    "Portfolio",
    "Software Engineer",
    "Computer Engineering",
    "University of Indonesia",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('falah-theme')==='dark'?'dark':'light'}catch(e){}",
          }}
        />
      </head>
      <body>
        <SystemShell>{children}</SystemShell>
      </body>
    </html>
  );
}
