import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";

// Komponen Confetti untuk efek perayaan di atas
function Confetti() {
  return (
    <div className="absolute top-0 left-0 w-full h-24 overflow-hidden pointer-events-none">
      {/* Confetti pieces */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            backgroundColor: ['#4ade80', '#22c55e', '#16a34a', '#86efac', '#dcfce7'][Math.floor(Math.random() * 5)],
          }}
        />
      ))}
    </div>
  );
}

function SuccessAlert({
  isOpen = false,
  onClose,
  title = "Berhasil!",
  message = "Pemesanan Anda telah berhasil dikirim.",
  buttonText = "LANJUTKAN",
  className,
  ...props
}) {
  if (!isOpen) return null;

  // Menggunakan Portal untuk render langsung ke document.body
  // Ini memastikan overlay menutupi SELURUH tab browser
  return createPortal(
    <>
      {/* Full Page Backdrop with Strong Blur - Render di level body */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Full Page Alert Content */}
        <div
          className={cn(
            "relative w-full h-full flex flex-col items-center justify-center p-8 text-center transform animate-success-pop",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {/* Confetti Effect */}
          <Confetti />

          {/* Success Icon - Larger for full page */}
          <div className="relative z-10 flex justify-center mb-8">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-32 h-32 bg-green-400/30 rounded-full animate-ping-slow" />
              {/* Main circle */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                <Check className="w-16 h-16 text-white stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Title - Larger for full page */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h2>

          {/* Message - Larger for full page */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-md">
            {message}
          </p>

          {/* Continue Button - Larger for full page */}
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-green-500/40 flex items-center justify-center gap-3 uppercase tracking-wider text-lg"
          >
            {buttonText}
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          75%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-success-pop {
          animation: success-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0;
          animation: confetti-fall 1.5s ease-out forwards;
        }

        .confetti-piece:nth-child(odd) {
          border-radius: 50%;
        }

        .confetti-piece:nth-child(even) {
          border-radius: 2px;
          transform: rotate(45deg);
        }
      `}</style>
    </>,
    document.body
  );
}

export { SuccessAlert };
