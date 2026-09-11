export default function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white">
            <div className="container mx-auto px-6 py-10 sm:px-8 lg:py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-12">
                    <div>
                        <a href="#" className="inline-flex items-center gap-2 text-base font-bold text-slate-900">
                            <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-violet-500 to-pink-500 text-[10px] font-bold text-white">
                                DS
                            </span>
                            <span>
                                Dev <span className="text-pink-500">Stack</span>
                            </span>
                        </a>
                        <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="mt-5 flex gap-4 text-[11px] font-medium text-slate-600">
                            <a href="#" className="transition-colors hover:text-pink-500">GitHub</a>
                            <a href="#" className="transition-colors hover:text-pink-500">Twitter</a>
                            <a href="#" className="transition-colors hover:text-pink-500">LinkedIn</a>
                        </div>
                    </div>

                    <FooterColumn title="Product" links={["Home", "Technologies", "Projects"]} />
                    <FooterColumn title="Company" links={["About", "Contact", "Careers"]} />
                    <FooterColumn title="Legal" links={["Privacy Policy", "Terms of Service"]} />
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="transition-colors hover:text-slate-600">Privacy</a>
                        <a href="#" className="transition-colors hover:text-slate-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

interface FooterColumnProps {
    title: string;
    links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
    return (
        <div>
            <h2 className="text-[11px] font-bold uppercase text-slate-900">{title}</h2>
            <div className="mt-3 space-y-2">
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="block text-[11px] text-slate-500 transition-colors hover:text-pink-500"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}
