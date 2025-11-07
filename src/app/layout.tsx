import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "A²RM Dev Team",
    description: "Innovative Web Solutions from A²RM Devs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased text-[var(--foreground)] bg-[#0a0a0a] relative overflow-hidden`}
        >
        {/* Improved gold radial gradient background */}
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 30%, #E6C20033 0%, #0a0a0a 80%)`,
                opacity: 1,
            }}
        />
        {/* Subtle gold glow at lower right for depth */}
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(ellipse 40% 20% at 80% 80%, #B8860B22 0%, #0a0a0a 100%)`,
                opacity: 0.7,
            }}
        />
        {children}
        </body>
        </html>
    );
}