import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Send, Loader, Calendar, Clock } from 'lucide-react';
import { validateAppointmentForm } from '../../utils/formValidation';

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

const appointmentTypes = [
    'Marriage Counseling',
    'Spiritual Guidance',
    'Family Counseling',
    'Prayer Session',
    'Mentorship',
    'Other',
];

const meetingPreferences = [
    { value: 'zoom', label: 'Zoom (Video Call)' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'inperson', label: 'In-Person' },
];

// Generate available time slots (30-minute intervals)
const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            slots.push(timeStr);
        }
    }
    return slots;
};

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        preferredDate: '',
        preferredTime: '',
        appointmentType: '',
        meetingPreference: 'zoom',
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
        // Clear error for this field
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
        const validationErrors = validateAppointmentForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would send the form data to your backend
            console.log('Appointment Form Submission:', formData);

            setSubmitted(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                country: '',
                preferredDate: '',
                preferredTime: '',
                appointmentType: '',
                meetingPreference: 'zoom',
                message: '',
            });
            setErrors({});

            // Reset after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setErrors({ submit: 'An error occurred. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const timeSlots = generateTimeSlots();

    return (
        <div className="w-full">
            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="flex justify-center mb-4"
                    >
                        <div className="bg-blue-500 rounded-full p-4">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                        Appointment Booked Successfully!
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Thank you for scheduling an appointment with us.
                    </p>
                    <div className="bg-white rounded-xl p-4 mb-4 border border-blue-100">
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Confirmation email will be sent to:</strong> {formData.email}
                        </p>
                        <p className="text-sm text-gray-600">
                            Please check your email for appointment details and meeting link (if applicable).
                        </p>
                    </div>
                    <p className="text-gray-500 text-sm">
                        We look forward to meeting with you.
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

                    {/* Personal Information */}
                    <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                            Personal Information
                        </h3>

                        <div className="space-y-4">
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
                                            : 'border-gray-200 focus:outline-none focus:border-blue-400'
                                        }`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                                : 'border-gray-200 focus:outline-none focus:border-blue-400'
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
                                                : 'border-gray-200 focus:outline-none focus:border-blue-400'
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

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
                                            : 'border-gray-200 focus:outline-none focus:border-blue-400'
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
                        </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                            Appointment Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                    Appointment Type *
                                </label>
                                <select
                                    name="appointmentType"
                                    value={formData.appointmentType}
                                    onChange={handleChange}
                                    className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors ${errors.appointmentType
                                            ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                            : 'border-gray-200 focus:outline-none focus:border-purple-400'
                                        } text-gray-700`}
                                >
                                    <option value="">Select appointment type</option>
                                    {appointmentTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                {errors.appointmentType && (
                                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {errors.appointmentType}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                        Preferred Date *
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className={`w-full border-2 rounded-xl py-3 pl-12 pr-4 text-sm transition-colors ${errors.preferredDate
                                                    ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                                    : 'border-gray-200 focus:outline-none focus:border-purple-400'
                                                }`}
                                        />
                                    </div>
                                    {errors.preferredDate && (
                                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                        Preferred Time *
                                    </label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className={`w-full border-2 rounded-xl py-3 pl-12 pr-4 text-sm transition-colors ${errors.preferredTime
                                                    ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                                    : 'border-gray-200 focus:outline-none focus:border-purple-400'
                                                } text-gray-700`}
                                        >
                                            <option value="">Select time slot</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.preferredTime && (
                                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.preferredTime}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 block">
                                    Meeting Preference *
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {meetingPreferences.map((pref) => (
                                        <label
                                            key={pref.value}
                                            className="flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all"
                                            style={{
                                                borderColor: formData.meetingPreference === pref.value ? '#a855f7' : '#e5e7eb',
                                                backgroundColor: formData.meetingPreference === pref.value ? '#f3e8ff' : 'transparent',
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="meetingPreference"
                                                value={pref.value}
                                                checked={formData.meetingPreference === pref.value}
                                                onChange={handleChange}
                                                className="w-4 h-4"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700">{pref.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="bg-amber-50/50 rounded-xl p-6 border border-amber-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                            Message
                        </h3>

                        <div>
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 block">
                                Prayer Request / Message (Optional)
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Share any prayer requests, specific concerns, or additional information..."
                                rows={4}
                                className={`w-full border-2 rounded-xl py-3 px-4 text-sm transition-colors resize-none ${errors.message
                                        ? 'border-red-300 bg-red-50 focus:outline-none focus:border-red-500'
                                        : 'border-gray-200 focus:outline-none focus:border-amber-400'
                                    }`}
                            />
                            {errors.message && (
                                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.message}
                                </p>
                            )}
                        </div>
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
                                Booking Appointment...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Book Appointment
                            </>
                        )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                        Required fields are marked with an asterisk (*). You will receive a confirmation email with appointment details.
                    </p>
                </form>
            )}
        </div>
    );
}
