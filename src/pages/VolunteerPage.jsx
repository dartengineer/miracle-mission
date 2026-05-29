import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import VolunteerForm from '../components/ui/VolunteerForm';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Zap, Globe, Award, Smile } from 'lucide-react';

const volunteerBenefits = [
    {
        icon: Heart,
        title: 'Make a Real Impact',
        description: 'Your service directly transforms lives and strengthens our community with immediate, measurable results.',
    },
    {
        icon: Users,
        title: 'Join Our Family',
        description: 'Connect with passionate individuals who share your values and commitment to service.',
    },
    {
        icon: Zap,
        title: 'Develop Skills',
        description: 'Gain valuable experience, build your resume, and develop skills in community service.',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Participate in international outreach programs across Africa, Pakistan, and the Caribbean.',
    },
    {
        icon: Award,
        title: 'Recognition',
        description: 'Your contributions are recognized and celebrated by our community and leadership.',
    },
    {
        icon: Smile,
        title: 'Personal Growth',
        description: 'Experience spiritual growth and personal fulfillment through meaningful service.',
    },
];

const opportunities = [
    {
        title: 'Food Pantry Assistant',
        description: 'Help sort, organize, and distribute food items to families in need every Thursday and Friday.',
        time: 'Flexible Hours (Thu-Fri, 9am-3pm)',
    },
    {
        title: 'Clothing Closet Coordinator',
        description: 'Assist with organizing, pricing, and helping clients find appropriate clothing items.',
        time: 'Flexible Hours (Thu-Fri, 10am-2pm)',
    },
    {
        title: 'Outreach Program Coordinator',
        description: 'Help organize community events, feeding programs, and outreach initiatives.',
        time: 'Varies by Program',
    },
    {
        title: 'Administrative Support',
        description: 'Assist with office tasks, data entry, event planning, and communication support.',
        time: 'Flexible Hours',
    },
    {
        title: 'Community Event Volunteer',
        description: 'Participate in special events, fundraisers, and community celebrations throughout the year.',
        time: 'Event Dates',
    },
    {
        title: 'International Outreach Team',
        description: 'Join our mission teams for international outreach in Africa, Pakistan, and other regions.',
        time: 'Seasonal/Annual Trips',
    },
];

function BenefitCard({ benefit, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const Icon = benefit.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -8 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:border-orange-300 transition-all"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 shadow-lg"
            >
                <Icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
        </motion.div>
    );
}

function OpportunityCard({ opportunity, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -5 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-orange-500"
        >
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{opportunity.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{opportunity.description}</p>
            <div className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-2 rounded-full inline-block">
                {opportunity.time}
            </div>
        </motion.div>
    );
}

export default function VolunteerPage() {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <Helmet>
                <title>Volunteer With Us - Miracle Mission International Outreach Inc</title>
                <meta name="description" content="Join our volunteer team and make a difference in the community. Apply now for food pantry, outreach, and community service opportunities." />
                <meta name="keywords" content="volunteer, community service, volunteer opportunities, charity work, nonprofit" />
            </Helmet>

            <PageHeader
                title="Volunteer With Us"
                subtitle="Make a Difference in Your Community — Be Part of Our Mission"
                breadcrumb="Home > Volunteer"
            />

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, x: -50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        >
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">Join Us</span>
                            <h2 className="section-title mb-6">Change Lives Through Service</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Volunteering with Miracle Mission International Outreach Inc is more than just helping — it's about becoming
                                part of a movement to transform our community. Whether you have a few hours a month or want to dedicate
                                significant time, there's a volunteer opportunity for you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our volunteers are the heart of our mission. They come from all walks of life, united by a shared commitment
                                to service, compassion, and creating positive change. Join us and discover the profound joy that comes from
                                giving back.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg p-6 border-l-4 border-l-blue-500 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Why Volunteer?</p>
                                        <p className="text-sm text-gray-600">
                                            Make immediate impact in people's lives, build meaningful relationships, develop skills, and experience
                                            the fulfillment of serving others with purpose and faith.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
                                <p className="text-sm font-semibold text-gray-700">Years of Impact</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                                <p className="text-sm font-semibold text-gray-700">Active Volunteers</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
                                <p className="text-sm font-semibold text-gray-700">Lives Impacted</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ translateY: -8 }}
                                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-purple-600 mb-2">Global</div>
                                <p className="text-sm font-semibold text-gray-700">Reach</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Benefits</span>
                        <h2 className="section-title mb-4">Why Our Volunteers Love What They Do</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mb-12">
                            When you volunteer with us, you're investing in more than just your community — you're investing in yourself.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {volunteerBenefits.map((benefit, index) => (
                            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Opportunities Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Positions</span>
                        <h2 className="section-title mb-4">Available Volunteer Opportunities</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mb-12">
                            Whether you want to help locally or globally, we have opportunities that match your skills, interests, and
                            availability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {opportunities.map((opportunity, index) => (
                            <OpportunityCard key={opportunity.title} opportunity={opportunity} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block text-center">
                            Apply Now
                        </span>
                        <h2 className="section-title text-center mb-4">Ready to Make a Difference?</h2>
                        <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
                            Fill out the application below and our volunteer coordinator will contact you within 2-3 business days with
                            more information about available positions and next steps.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200"
                    >
                        <VolunteerForm />
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'Do I need any experience to volunteer?',
                                a: 'No, we welcome volunteers of all experience levels! We provide training and support for all positions.',
                            },
                            {
                                q: 'How much time do I need to commit?',
                                a: 'It depends on you. Some volunteers help a few hours a month, while others volunteer regularly. We work with your schedule.',
                            },
                            {
                                q: 'What is the minimum age requirement?',
                                a: 'Our minimum age is 14 for most programs. For special events, we welcome younger family volunteers with adult supervision.',
                            },
                            {
                                q: 'Is there an application process?',
                                a: 'Yes, we ask all volunteers to complete a simple application and brief background check for safety reasons.',
                            },
                            {
                                q: 'Do you offer training?',
                                a: 'Absolutely! We provide comprehensive training and ongoing support for all volunteer positions.',
                            },
                            {
                                q: 'Can I volunteer if I cannot attend in person?',
                                a: 'We have some remote opportunities for administrative support and digital content creation. Contact us to learn more.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-colors"
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
                            Join Our Volunteer Community Today
                        </h2>
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                            Your service will create lasting change. Apply now and become part of something meaningful.
                        </p>
                        <motion.a
                            href="#apply"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
                        >
                            Apply to Volunteer →
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
