import logo from '../../assets/logo-text.png'
export default function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white">
            <div className="container mx-auto px-6 py-10 sm:px-8 lg:py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-12">
                    <div>
                        <div className="inline-flex items-center gap-2 text-base font-bold text-slate-900">

                            <span>
                                <a href=""> <img src={logo} alt="#" /> </a>
                            </span>
                        </div>
                        <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="mt-5 flex gap-4 text-[11px] font-medium text-slate-600">
                            <a href="#" className=' hover:text-pink-500 transition'>GitHub</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Twitter</a>
                            <a href="#" className=' hover:text-pink-500 transition'>LinkedIn</a>

                        </div>
                    </div>

                    <div>
                        <h2 className="text-[11px] font-bold uppercase text-slate-900">Product</h2>
                        <div className="mt-3 space-y-2 text-[11px] text-slate-500 flex flex-col">
                            <a href="#" className=' hover:text-pink-500 transition'>Home</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Technologies</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Projects</a>

                        </div>
                    </div>
                    <div>
                        <h2 className="text-[11px] font-bold uppercase text-slate-900">Company</h2>
                        <div className="mt-3 space-y-2 text-[11px] text-slate-500 flex flex-col">

                            <a href="#" className=' hover:text-pink-500 transition'>About</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Contact</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Careers</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[11px] font-bold uppercase text-slate-900">Legal</h2>
                        <div className="mt-3 space-y-2 text-[11px] text-slate-500 flex flex-col">
                            <a href="#" className=' hover:text-pink-500 transition'>Privacy Policy</a>
                            <a href="#" className=' hover:text-pink-500 transition'>Terms of Service</a>

                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
