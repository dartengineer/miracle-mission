import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, bgImage, breadcrumb }) {
  return (
    <div
      className="relative min-h-[40vh] md:min-h-[50vh] flex items-end pb-16 pt-28 px-4"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover`
          : 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative max-w-7xl mx-auto w-full">
        {breadcrumb && (
          <p className="text-orange-300 text-sm mb-3 font-medium">{breadcrumb}</p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg mt-4 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
