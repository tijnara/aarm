import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-[var(--background)] font-sans text-[var(--foreground)]">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-sm">
                <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/aarm-logo.png" // Using the new logo from /public
                            alt="A²RM Logo"
                            width={120}
                            height={99}
                            priority
                            className="h-10 w-auto" // Resize for navbar
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-6 md:flex">
                        <Link href="#services" className="text-gray-300 transition-colors hover:text-[var(--gold-text)]">
                            Services
                        </Link>
                        <Link href="#projects" className="text-gray-300 transition-colors hover:text-[var(--gold-text)]">
                            Projects
                        </Link>
                        <Link href="#team" className="text-gray-300 transition-colors hover:text-[var(--gold-text)]">
                            Team
                        </Link>
                        <Link href="#contact" className="text-gray-300 transition-colors hover:text-[var(--gold-text)]">
                            Contact
                        </Link>
                        <Link
                            href="#start"
                            className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-[var(--gold-dark)]"
                        >
                            Start Project
                        </Link>
                    </nav>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Hero Text */}
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Building the Future of Web
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Innovative Solutions from A²RM Devs
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    href="#services"
                                    className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-[var(--gold-dark)]"
                                >
                                    Our Services
                                </Link>
                                <Link
                                    href="#projects"
                                    className="rounded-full border border-[var(--gold-text)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </div>

                        {/* === PLACEHOLDER === */}
                        {/* Please provide the 3D hexagon graphic for this section */}
                        <div className="flex h-64 items-center justify-center rounded-lg bg-white/5 lg:h-96">
                            <span className="text-gray-400">Placeholder for 3D Graphic</span>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold leading-8 text-white">
                        Technologies We Master
                    </h2>
                    {/* === PLACEHOLDER === */}
                    {/* Replace these text placeholders with your tech icons/logos */}
                    <div className="mt-10 grid grid-cols-2 gap-6 text-center text-gray-400 md:grid-cols-4 lg:grid-cols-6">
                        <span>Html5</span>
                        <span>CSS3</span>
                        <span>Next.js</span>
                        <span>Node.js</span>
                        <span>React</span>
                        <span>TypeScript</span>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-zinc-900 px-6 py-20 shadow-2xl sm:py-24 lg:px-24">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)]/20 to-black/30 opacity-30"></div>

                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                We turn ideas into fast, reliable, and modern web applications. Let's build something amazing together.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="#contact"
                                    className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-[var(--gold-dark)]"
                                >
                                    Get a Quote
                                </Link>
                                <Link href="#contact" className="text-sm font-semibold leading-6 text-white">
                                    Contact Us <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer (Simple) */}
            <footer className="container mx-auto max-w-7xl border-t border-white/10 px-8 py-8">
                <p className="text-center text-xs leading-5 text-gray-400">
                    &copy; {new Date().getFullYear()} A²RM Development Team. All rights reserved.
                </p>
            </footer>
        </div>
    );
}