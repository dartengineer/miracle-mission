import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Send, Loader } from 'lucide-react';
import { validateVolunteerForm } from '../../utils/formValidation';

const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Nigeria',
    'Kenya',
    'Pakistan',
    'Ghana',
    'Uganda',
    'Cameroon',
    'Sierra Leone',
    'Liberia',
    'Other',
];

export default function VolunteerForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        inMinistry: '',
        purpose: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const validationErrors = validateVolunteerForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would send the form data to your backend
            console.log('Volunteer Form Submission:', formData);

            setSubmitted(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                country: '',
                inMinistry: '',
                purpose: '',
                message: '',
            });
            setErrors({});

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setErrors({ submit: 'An error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="flex justify-center mb-4"
                    >
                        <div className="bg-green-500 rounded-full p-4">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        Thank You for Your Interest!
                    </h3>
                    <p className="text-gray-600 mb-2">
                        Your volunteer application has been received successfully.
                    </p>
                    <p className="text-gray-500 text-sm">
                        We will review your information and contact you within 2-3 business days.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.submit && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-red-700 text-sm">{errors.submit}</p>
                        </motion.div>
                    )}

                    {/* Full Name */}
                    <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.fullName
                                    ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                    : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                }`}
                        />
                        {errors.fullName && (
                            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.fullName}
                            </p>
                        )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.email
                                        ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                        : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(404) 000-0000"
                                className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.phone
                                        ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                        : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                    }`}
                            />
                            {errors.phone && (
                                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Country and Ministry Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                Country *
                            </label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.country
                                        ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                        : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                    } text-gray-700`}
                            >
                                <option value="">Select your country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            {errors.country && (
                                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.country}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                Are you Currently in Ministry? *
                            </label>
                            <select
                                name="inMinistry"
                                value={formData.inMinistry}
                                onChange={handleChange}
                                className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.inMinistry
                                        ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                        : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                    } text-gray-700`}
                            >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            {errors.inMinistry && (
                                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.inMinistry}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Purpose for Joining */}
                    <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                            What is your Purpose for Joining? *
                        </label>
                        <textarea
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            placeholder="Tell us why you want to volunteer with us..."
                            rows={5}
                            className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors resize-none ${errors.purpose
                                    ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                    : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                }`}
                        />
                        {errors.purpose && (
                            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.purpose}
                            </p>
                        )}
                        <p className="text-gray-500 text-xs mt-1">Minimum 10 characters required</p>
                    </div>

                    {/* Additional Message */}
                    <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                            Optional Message / Additional Information
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share any additional details you'd like us to know..."
                            rows={3}
                            className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors resize-none ${errors.message
                                    ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                    : 'border-gray-200 focus:outline-none focus:border-orange-400'
                                }`}
                        />
                        {errors.message && (
                            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {loading ? (
                            <>
                                <Loader className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Submit Volunteer Application
                            </>
                        )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                        Required fields are marked with an asterisk (*)
                    </p>
                </form>
            )}
        </div>
    );
}
