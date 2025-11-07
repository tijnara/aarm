import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-[var(--background)] font-sans text-[var(--foreground)]">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/95 shadow-lg backdrop-blur-md">
                <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/aarm-logo.png"
                            alt="A²RM Logo"
                            width={200}
                            height={160}
                            priority
                            className="h-20 w-auto bg-transparent"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        <Link href="#services" className="text-[var(--gold)] font-medium transition-colors hover:text-white">
                            Services
                        </Link>
                        <Link href="#projects" className="text-[var(--gold)] font-medium transition-colors hover:text-white">
                            Projects
                        </Link>
                        <Link href="#team" className="text-[var(--gold)] font-medium transition-colors hover:text-white">
                            Team
                        </Link>
                        <Link href="#contact" className="text-[var(--gold)] font-medium transition-colors hover:text-white">
                            Contact
                        </Link>
                        <Link
                            href="#start"
                            className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-bold text-black shadow-lg transition-colors hover:bg-yellow-400"
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
                <section id="services" className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-40 flex items-center min-h-[60vh]">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Hero Text */}
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <h1 className="text-5xl font-extrabold tracking-tight text-[var(--gold)] sm:text-7xl drop-shadow-lg">
                                Building the Future of Web
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-yellow-200">
                                Innovative Solutions from A²RM Devs
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link href="#services" className="rounded-full bg-[var(--gold)] px-6 py-3 text-base font-bold text-black shadow-lg transition-colors hover:bg-yellow-400">
                                    Our Services
                                </Link>
                                <Link
                                    href="#projects"
                                    className="rounded-full border border-[var(--gold-text)] px-6 py-3 text-base font-bold text-[var(--gold-text)] bg-black/40 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </div>

                        {/* Logo image on the right side, styled to match the reference */}
                        <div className="flex h-64 items-center justify-center lg:h-96">
                            <div className="relative flex items-center justify-center w-full h-full">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-900/40 via-[#B89B74]/30 to-black/60 blur-2xl opacity-80"></div>
                                <Image
                                    src="/aarm-logo-transpa2.png"
                                    alt="A²RM Logo"
                                    width={450}
                                    height={450}
                                    className="relative z-10 drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold leading-8 text-[var(--gold)] mb-8">
                        Technologies We Master
                    </h2>
                    <div className="mt-10 grid grid-cols-2 gap-6 text-center text-yellow-300 md:grid-cols-4 lg:grid-cols-6 text-lg font-semibold">
                        <span>Html5</span>
                        <span>CSS3</span>
                        <span>Next.js</span>
                        <span>Node.js</span>
                        <span>React</span>
                        <span>TypeScript</span>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-900/40 to-black/60 px-6 py-20 shadow-2xl sm:py-24 lg:px-24">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)]/30 to-black/40 opacity-40"></div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--gold)] sm:text-5xl">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-yellow-200">
                                We turn ideas into fast, reliable, and modern web applications. Let&apos;s build something amazing together.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href="#contact" className="rounded-full bg-[var(--gold)] px-6 py-3 text-base font-bold text-black shadow-lg transition-colors hover:bg-yellow-400">
                                    Get a Quote
                                </Link>
                                <Link href="#contact" className="text-base font-bold leading-6 text-yellow-300 hover:text-yellow-400">
                                    Contact Us <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section Placeholder */}
                <section id="team" style={{display: 'none'}}></section>
                {/* Start Project Section Placeholder */}
                <section id="start" style={{display: 'none'}}></section>
            </main>

            {/* Footer (Simple) */}
            <footer className="container mx-auto max-w-7xl border-t border-white/10 px-8 py-8">
                <p className="text-center text-xs leading-5 text-yellow-300">
                    &copy; {new Date().getFullYear()} A²RM Development Team. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
