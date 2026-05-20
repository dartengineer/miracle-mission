import { Image } from 'lucide-react';

export default function ImgPlaceholder({ className = '', label = '', aspectRatio = 'aspect-video', overlay }) {
  return (
    <div className={`${aspectRatio} relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-300 gap-2">
        <Image className="w-10 h-10" />
        {label && <span className="text-xs text-orange-400 font-medium text-center px-4">{label}</span>}
      </div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      )}
    </div>
  );
}
