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
            className={`${geistSans.variable} ${geistMono.variable} antialiased text-[var(--foreground)] bg-[#181207] relative`}
        >
        {/* Stronger gold radial gradient background (z-0) */}
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(ellipse 90% 70% at 50% 30%, #B8860B88 0%, #181207 80%)`,
                opacity: 1,
            }}
        />
        {/* Rich gold glow at lower right for depth (z-0) */}
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(ellipse 40% 20% at 80% 80%, #E6C20055 0%, #181207 100%)`,
                opacity: 0.8,
            }}
        />
        <div className="relative z-10">
            {children}
        </div>
        </body>
        </html>
    );
}