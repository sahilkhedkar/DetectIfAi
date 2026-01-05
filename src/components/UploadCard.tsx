"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface UploadCardProps {
    onUpload: (file: File) => void;
    disabled?: boolean;
}

export const UploadCard = ({ onUpload, disabled }: UploadCardProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
        (file: File) => {
            if (!file.type.startsWith("image/")) return;

            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target?.result as string);
            reader.readAsDataURL(file);

            onUpload(file);
        },
        [onUpload]
    );

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (disabled) return;
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (disabled) return;
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    };

    const reset = () => {
        setPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
                {!preview ? (
                    <motion.div
                        key="upload"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        onClick={() => !disabled && fileInputRef.current?.click()}
                        className={cn(
                            "relative group cursor-pointer border border-gray-200 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-24 flex flex-col items-center justify-center transition-all duration-300 min-h-[300px] md:min-h-[400px] shadow-sm hover:shadow-md",
                            isDragging
                                ? "border-black bg-gray-50 scale-[1.01]"
                                : "bg-white hover:bg-gray-50/50 hover:border-gray-300",
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={onFileChange}
                            accept="image/*"
                            className="hidden"
                            disabled={disabled}
                        />

                        <div className="flex flex-col items-center text-center">
                            <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-gray-50 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-100 shadow-sm">
                                <Upload className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-[#0f172a] transition-colors" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2 md:mb-3 tracking-tight">
                                Drop image here or click to upload
                            </h3>
                            <p className="text-[#9ca3af] text-xs md:text-sm font-medium">
                                Supports JPG, PNG and WEBP (max 5MB)
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-md"
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    reset();
                                }}
                                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white text-gray-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-gray-50">
                                    <ImageIcon className="w-4 h-4 text-gray-400" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Image selected</span>
                            </div>
                            <button
                                onClick={() => !disabled && fileInputRef.current?.click()}
                                disabled={disabled}
                                className="text-sm text-gray-500 hover:text-black font-medium transition-colors disabled:opacity-50"
                            >
                                Change image
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
