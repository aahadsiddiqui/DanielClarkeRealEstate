import CostlyMistakes from "@/components/CostlyMistakes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CostlyMistakesPage() {
    return (
        <main className="min-h-screen bg-midnight text-silver">
            <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
            <CostlyMistakes />
        </main>
    );
}
