import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arun Addagatla | AI Engineer & Founding Engineer",
  description:
    "Passionate AI Engineer specializing in GenAI, Agentic AI, and MLOps. Founding Engineer at Lamatic.ai building serverless AI infrastructure.",
  keywords: [
    "AI Engineer",
    "GenAI",
    "Agentic AI",
    "MLOps",
    "Machine Learning",
    "NLP",
    "Python",
    "Full Stack",
  ],
  authors: [{ name: "Arun Addagatla" }],
  creator: "Arun Addagatla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arun2728.github.io/arunaddagatla",
    title: "Arun Addagatla | AI Engineer & Founding Engineer",
    description:
      "Passionate AI Engineer specializing in GenAI, Agentic AI, and MLOps.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F172A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
