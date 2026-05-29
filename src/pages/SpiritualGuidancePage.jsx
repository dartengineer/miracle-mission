import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import AppointmentForm from '../components/ui/AppointmentForm';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, MessageSquare, Clock, CheckCircle, Zap, Shield, Smile } from 'lucide-react';

const services = [
    {
        icon: Heart,
        title: 'Marriage Counseling',
        description:
            'Godly guidance for couples seeking to strengthen their marriage bonds based on faith, love, and biblical principles.',
        color: 'from-red-500 to-pink-500',
    },
    {
        icon: Users,
        title: 'Family Counseling',
        description:
            'Support for families navigating challenges, building stronger relationships, and creating healthier dynamics.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Zap,
        title: 'Spiritual Guidance',
        description:
            'Personalized spiritual direction for personal growth, faith development, and deeper connection with your purpose.',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        icon: Smile,
        title: 'Prayer Sessions',
        description:
            'Dedicated time for prayer, meditation, and spiritual renewal in a peaceful, supportive environment.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: MessageSquare,
        title: 'Mentorship',
        description:
            'One-on-one mentoring relationships to help you navigate life challenges with wisdom and faith-based perspective.',
        color: 'from-green-500 to-teal-500',
    },
    {
        icon: Shield,
        title: 'Specialized Counseling',
        description:
            'Tailored counseling addressing specific concerns including relationship issues, grief, transitions, and spiritual crises.',
        color: 'from-indigo-500 to-blue-500',
    },
];

const benefits = [
    'Professional spiritual counselor with 25+ years of experience',
    'Bible-based and faith-centered approach to all counseling',
    'Confidential and safe environment for open dialogue',
    'Flexible scheduling with multiple time slots available',
    'Virtual and in-person options for your convenience',
    'Follow-up support and resources provided',
];

const testimonials = [
    {
        quote: 'Marlene\'s spiritual guidance helped us reconnect as a couple and strengthen our faith journey together.',
        author: 'Michael & Jennifer T.',
        relation: 'Marriage Counseling Clients',
    },
    {
        quote: 'Her wisdom and compassion made me feel understood and supported during my most challenging time.',
        author: 'Sarah M.',
        relation: 'Spiritual Guidance Client',
    },
    {
        quote: 'The prayer sessions with Marlene brought peace and clarity to my life that I didn\'t think was possible.',
        author: 'David P.',
        relation: 'Prayer Session Participant',
    },
];

function ServiceCard({ service, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const Icon = service.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -8 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

            {/* Content */}
            <div className="relative bg-white p-8 h-full flex flex-col">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                    <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>

                <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-2"
                >
                    Learn more →
                </motion.button>
            </div>

            {/* Border accent */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 pointer-events-none`} />
        </motion.div>
    );
}

function BenefitItem({ benefit, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="flex items-start gap-3"
        >
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1"
            >
                <CheckCircle className="w-4 h-4 text-white" />
            </motion.div>
            <p className="text-gray-700 font-medium">{benefit}</p>
        </motion.div>
    );
}

function TestimonialCard({ testimonial, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -5 }}
            className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-t-orange-500"
        >
            <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
            <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-orange-600">{testimonial.relation}</p>
            </div>
        </motion.div>
    );
}

export default function SpiritualGuidancePage() {
    return (
        <>
            <Helmet>
                <title>Spiritual Guidance & Marriage Counseling - Miracle Mission</title>
                <meta
                    name="description"
                    content="Spiritual counseling and marriage counseling services with Evangelist Marlene Garrett Lemons. Book an appointment for guidance, prayer, and faith-based support."
                />
                <meta name="keywords" content="spiritual counseling, marriage counseling, prayer session, mentorship, faith-based therapy" />
            </Helmet>

            <PageHeader
                title="Spiritual Guidance & Marriage Counseling"
                subtitle="Strengthen Your Faith, Marriage & Spiritual Journey with Godly Counsel"
                breadcrumb="Home > Services > Counseling"
            />

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">Our Services</span>
                            <h2 className="section-title mb-6">Find Peace, Strength & Direction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                With over 25 years of experience in spiritual counseling, Evangelist Marlene Garrett Lemons provides
                                compassionate, faith-based guidance for those seeking to strengthen their marriage, deepen their spiritual
                                journey, and navigate life's challenges with biblical wisdom.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a safe, confidential environment, you'll receive personalized counsel rooted in love, faith, and the
                                principles of Scripture. Whether you're seeking marriage counseling, spiritual direction, or prayer support,
                                we're here to help you find clarity, healing, and renewed purpose.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg p-6 border-l-4 border-l-blue-500 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Our Approach</p>
                                        <p className="text-sm text-gray-600">
                                            We believe in the power of faith, hope, and love. Every counseling session is tailored to your unique
                                            situation with biblical wisdom and practical guidance.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                                <p className="text-sm font-semibold text-gray-700">Years of Experience</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                                <p className="text-sm font-semibold text-gray-700">People Served</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl border border-pink-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
                                <p className="text-sm font-semibold text-gray-700">Confidential</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                                <p className="text-sm font-semibold text-gray-700">Prayer Support</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">What We Offer</span>
                        <h2 className="section-title mb-4">Our Counseling Services</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mb-12">
                            Each service is tailored to your specific needs and provided with compassion, wisdom, and biblical foundation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                <Users className="w-24 h-24 text-white/30" />
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Benefits</span>
                            <h2 className="section-title mb-8">Why Choose Our Counseling Services</h2>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <BenefitItem key={index} benefit={benefit} index={index} />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 btn-primary"
                            >
                                Book Your Session Today
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block text-center">
                            Book Now
                        </span>
                        <h2 className="section-title text-center mb-4">Schedule Your Appointment</h2>
                        <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
                            Take the first step towards spiritual growth and healing. Fill out the form below to book your appointment
                            with Evangelist Marlene Garrett Lemons.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
                    >
                        <AppointmentForm />
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block text-center">
                            Testimonials
                        </span>
                        <h2 className="section-title text-center mb-12">What Our Clients Say</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'Is counseling confidential?',
                                a: 'Yes, all counseling sessions are completely confidential and protected. We maintain strict privacy standards.',
                            },
                            {
                                q: 'Do you offer virtual or in-person sessions?',
                                a: 'We offer both! You can choose from Zoom video calls, phone calls, or in-person sessions at your convenience.',
                            },
                            {
                                q: 'How long is each session?',
                                a: 'Sessions are typically 60 minutes, though this can be adjusted based on your needs.',
                            },
                            {
                                q: 'What is your cancellation policy?',
                                a: 'We ask for at least 24 hours notice for cancellations. Cancellations made with less notice may incur a fee.',
                            },
                            {
                                q: 'Do you work with couples and individuals?',
                                a: 'Yes, we work with individuals, couples, and families. All sessions are tailored to your specific situation.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600 text-sm">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                            Ready to Start Your Spiritual Journey?
                        </h2>
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                            Don't let another day pass. Book your appointment today and take the first step toward healing and transformation.
                        </p>
                        <motion.a
                            href="#booking"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
                        >
                            Book an Appointment →
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
