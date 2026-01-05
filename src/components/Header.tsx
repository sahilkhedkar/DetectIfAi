import { ShieldCheck } from "lucide-react";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-start">
                <div className="flex items-center gap-2 md:gap-3">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-[#0f172a]" strokeWidth={2.5} />
                    <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-[#0f172a]">
                        DetectIfAI
                    </span>
                </div>
            </div>
        </header>
    );
};
