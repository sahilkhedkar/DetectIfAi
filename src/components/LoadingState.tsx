"use client";

import { motion } from "framer-motion";

export const LoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm min-h-[300px]">
            <div className="relative w-16 h-16 mb-6">
                <motion.div
                    className="absolute inset-0 border-4 border-gray-100 rounded-full"
                    initial={false}
                />
                <motion.div
                    className="absolute inset-0 border-4 border-t-black rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Analyzing image…</h3>
            <p className="text-gray-500 text-sm">Identifying AI patterns and artifacts</p>
        </div>
    );
};
