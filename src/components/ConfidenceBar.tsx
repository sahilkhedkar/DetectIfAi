import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ConfidenceBarProps {
  percentage: number;
  isAi: boolean;
  className?: string;
}

export const ConfidenceBar = ({ percentage, isAi, className }: ConfidenceBarProps) => {
  return (
    <div className={cn("w-full h-3 bg-gray-100 rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn(
          "h-full rounded-full",
          isAi ? "bg-red-500" : "bg-green-500"
        )}
      />
    </div>
  );
};
