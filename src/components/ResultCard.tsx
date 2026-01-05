"use client";

import { motion } from "framer-motion";
import { ConfidenceBar } from "./ConfidenceBar";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
    isAi: boolean;
    confidence: number;
}

export const ResultCard = ({ isAi, confidence }: ResultCardProps) => {
    const percentage = Math.round(confidence * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto mt-8 md:mt-12 border border-gray-200 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 bg-white shadow-xl shadow-gray-100/50"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "p-2 rounded-xl",
                        isAi ? "bg-red-50" : "bg-green-50"
                    )}>
                        {isAi ? (
                            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                        ) : (
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                        )}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 leading-none mb-1 text-sm md:text-base">
                            {isAi ? "Likely AI-Generated" : "Likely Real"}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500">
                            Analysis result
                        </p>
                    </div>
                </div>

                <div className={cn(
                    "px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider",
                    isAi ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                )}>
                    {isAi ? "AI Detected" : "Verified Real"}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-end justify-between">
                    <span className="text-2xl md:text-4xl font-bold text-gray-900">
                        {isAi ? "AI-Generated:" : "Real Image:"} {percentage}%
                    </span>
                </div>

                <ConfidenceBar percentage={percentage} isAi={isAi} />

                <p className="text-[10px] md:text-xs text-[#9ca3af] text-center font-medium mt-6 md:mt-10">
                    AI detection is probabilistic and may not be 100% accurate.
                </p>
            </div>
        </motion.div>
    );
};
