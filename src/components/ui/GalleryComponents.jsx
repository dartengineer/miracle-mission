import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useState } from 'react';

export function ImageLightbox({ image, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }) {
    if (!isOpen || !image) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                    />

                    {/* Lightbox Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <div
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image */}
                            <motion.img
                                key={image.src}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                src={image.src}
                                alt={image.alt || 'Gallery Image'}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                            />

                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Previous Button */}
                            {hasPrev && (
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                            )}

                            {/* Next Button */}
                            {hasNext && (
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </motion.button>
                            )}

                            {/* Image Info */}
                            {image.title && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm"
                                >
                                    <p className="font-semibold text-lg">{image.title}</p>
                                    {image.description && (
                                        <p className="text-sm text-gray-200 mt-1">{image.description}</p>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function GalleryGrid({ items, onImageClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`
            relative group cursor-pointer rounded-xl overflow-hidden
            ${item.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}
            ${item.size === 'wide' ? 'sm:col-span-2' : ''}
          `}
                    onClick={() => onImageClick(item, index)}
                >
                    {/* Image Container */}
                    <div className="aspect-square sm:aspect-auto h-64 sm:h-auto relative bg-gray-200">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.alt || 'Gallery image'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                            </div>
                        )}
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 backdrop-blur-sm"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="bg-white/20 p-3 rounded-full backdrop-blur-sm"
                        >
                            <ZoomIn className="w-6 h-6 text-white" />
                        </motion.div>
                        {item.category && (
                            <span className="text-white text-sm font-semibold">{item.category}</span>
                        )}
                    </motion.div>

                    {/* Badge */}
                    {item.category && (
                        <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.category}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

export function GalleryMasonry({ items, onImageClick }) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer rounded-xl overflow-hidden break-inside-avoid"
                    onClick={() => onImageClick(item, index)}
                >
                    {/* Image Container */}
                    <div className="relative bg-gray-200">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.alt || 'Gallery image'}
                                className="w-full h-auto object-cover display-block"
                            />
                        ) : (
                            <div className="w-full aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                <span className="text-gray-600 text-sm font-medium text-center px-4">{item.label}</span>
                            </div>
                        )}
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 backdrop-blur-sm"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="bg-white/20 p-3 rounded-full backdrop-blur-sm"
                        >
                            <ZoomIn className="w-6 h-6 text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Title Overlay */}
                    {item.title && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                        >
                            <p className="text-white font-semibold text-sm">{item.title}</p>
                            {item.category && (
                                <p className="text-orange-300 text-xs mt-1">{item.category}</p>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
