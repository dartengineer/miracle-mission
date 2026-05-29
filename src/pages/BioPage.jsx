import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Award,
    BookOpen,
    Globe,
    Heart,
    Users,
    Zap,
    CheckCircle,
    Star,
    GraduationCap,
    TrendingUp,
} from 'lucide-react';
import ImgPlaceholder from '../components/ui/ImgPlaceholder';

const educationBackground = [
    {
        year: '1979',
        title: 'GED',
        institution: 'Georgia Education System',
        description: 'Completed General Educational Development',
        icon: GraduationCap,
    },
    {
        year: '2000s',
        title: 'Associate Degree',
        institution: 'Beulah Heights University',
        description: 'Associate Degree in Biblical Studies',
        icon: BookOpen,
    },
    {
        year: '2010s',
        title: "Bachelor's Degree",
        institution: 'Beulah Heights University',
        description: "Bachelor's Degree in Leadership Administration",
        icon: TrendingUp,
    },
    {
        year: '2010s',
        title: "Master's Degree",
        institution: 'University of Georgia',
        description: 'Master\'s Degree in Public Administration',
        icon: Star,
    },
];

const achievements = [
    {
        title: 'Ministry Calling',
        year: '1989',
        description: 'Called into ministry by the Holy Spirit, beginning her journey as an evangelist and spiritual counselor.',
        icon: Heart,
    },
    {
        title: 'United Pentecostal Church Member',
        year: '1972',
        description: 'Devoted member of the United Pentecostal Church for over 50 years, serving faithfully in ministry and community.',
        icon: Users,
    },
    {
        title: 'Author',
        year: '2008',
        description: 'Became a published author with five spiritual books available on Amazon.',
        icon: BookOpen,
    },
    {
        title: 'Nonprofit Founder & CEO',
        year: '2005',
        description:
            'Founded and led Miracle Mission International Outreach Inc, a certified nonprofit serving thousands in the community.',
        icon: Zap,
    },
    {
        title: 'Pioneer of Certified Services',
        year: '2005-2015',
        description:
            'First in the Pentecostal Church to operate a certified nonprofit site providing comprehensive community services including food assistance, clothing, educational training, and rental assistance.',
        icon: CheckCircle,
    },
    {
        title: 'Global Ministry Expansion',
        year: '2015+',
        description:
            'First to establish a Community Center and Church overseas in Pakistan and Africa, preaching and teaching the Gospel of Jesus Christ internationally.',
        icon: Globe,
    },
];

const awards = [
    {
        year: '2018',
        title: 'Community Pillar Award',
        presenter: 'State Representative Sandra Scott',
        description: 'Recognition for outstanding service to the community',
    },
    {
        year: '2019',
        title: "Listed in Who's Who Executive Directory",
        presenter: 'Who\'s Who',
        description: 'Honored among the nation\'s most accomplished executives',
    },
    {
        year: '2021',
        title: 'Women of Influence Award',
        presenter: 'When Girlfriends Gather',
        description: 'Recognized for significant influence and leadership impact',
    },
    {
        year: '2024',
        title: 'Nikki T. Randall Servant Leadership Award',
        presenter: 'Georgia Women\'s Legislative Caucus & State Representative Regina Lewis Ward',
        description: 'Honored for exceptional servant leadership and community service',
    },
    {
        year: '2025',
        title: 'Phenomenal Woman Award',
        presenter: 'Former Commissioner Vivian Thomas and Mayor Jaden Williams, Stockbridge, Georgia',
        description: 'Recognized as a Phenomenal Woman by the Community of Stockbridge',
    },
];

const publications = [
    { title: 'Available on Amazon', count: '5 Spiritual Books' },
];

function TimelineItem({ item, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const Icon = item.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-8 flex ${index % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'}`}
        >
            {/* Content */}
            <div className="lg:w-5/12 lg:px-4">
                <motion.div
                    whileHover={{ translateY: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
                >
                    <div className="flex items-start gap-3 mb-3">
                        <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-lg">
                            <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{item.year}</span>
                            <h3 className="font-display font-bold text-gray-900 text-lg">{item.title}</h3>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
            </div>

            {/* Center Line */}
            <div className="lg:w-2/12 flex justify-center">
                <div className="w-1 h-24 bg-gradient-to-b from-orange-400 to-orange-200 relative">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </div>

            {/* Spacer for alignment */}
            <div className="lg:w-5/12" />
        </motion.div>
    );
}

function AwardCard({ award, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -8 }}
            className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-200"
        >
            <div className="flex items-start gap-3 mb-3">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{award.year}</span>
                    <h3 className="font-display font-bold text-gray-900 text-lg mt-1">{award.title}</h3>
                </div>
            </div>
            <p className="text-sm font-semibold text-orange-700 mb-2">{award.presenter}</p>
            <p className="text-gray-600 text-sm">{award.description}</p>
        </motion.div>
    );
}

function EducationCard({ edu, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const Icon = edu.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ translateY: -8 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-l-blue-500"
        >
            <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{edu.year}</span>
                    <h3 className="font-display font-bold text-gray-900 text-lg mt-1">{edu.title}</h3>
                </div>
            </div>
            <p className="text-sm font-semibold text-blue-700 mb-2">{edu.institution}</p>
            <p className="text-gray-600 text-sm">{edu.description}</p>
        </motion.div>
    );
}

export default function BioPage() {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <Helmet>
                <title>Biography - Evangelist Marlene Garrett Lemons - Miracle Mission</title>
                <meta
                    name="description"
                    content="Learn about Evangelist Marlene Garrett Lemons, founder of Miracle Mission International Outreach Inc, her ministry journey, achievements, and awards."
                />
                <meta name="keywords" content="Evangelist Marlene Lemons, biography, ministry, nonprofit leader, spiritual counseling" />
            </Helmet>

            <PageHeader
                title="About Evangelist Marlene Garrett Lemons"
                subtitle="A Life of Faith, Service, and Transformation"
                breadcrumb="Home > Biography"
            />

            {/* Hero Bio Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Image */}
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, x: -50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            className="lg:sticky lg:top-20"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <ImgPlaceholder label="Evangelist Marlene Garrett Lemons" className="aspect-[3/4] object-cover" />
                            </div>
                        </motion.div>

                        {/* Bio Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div>
                                <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">
                                    Pioneer • Leader • Innovator
                                </span>
                                <h2 className="section-title">A Life of Purpose and Impact</h2>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Marlene has been providing spiritual counseling and godly advice for over 25 years, speaking on family,
                                    marriage, relationships, leadership, and faith-based living.
                                </p>

                                <p>
                                    She was married for 45 years until separated by death. Marlene studied Marriage and Family at Beulah
                                    Heights University. Her spiritual belief is that marriage is sacred and should never be entered into
                                    lightly. She believes godly counseling is essential when embracing a role ordained by God, with the
                                    ultimate goal of remaining married until separated by death.
                                </p>

                                <p>
                                    Evangelist Marlene Garrett Lemons has been a devoted member of the United Pentecostal Church since 1972
                                    and was called into ministry in 1989.
                                </p>

                                <p className="text-lg font-semibold text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-l-orange-500">
                                    Her life journey is one of resilience, faith, determination, and transformation.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <motion.div whileHover={{ translateY: -5 }} className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                                    <div className="text-2xl font-bold text-orange-600">50+</div>
                                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Years of Faith</div>
                                </motion.div>
                                <motion.div whileHover={{ translateY: -5 }} className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <div className="text-2xl font-bold text-blue-600">20+</div>
                                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Years of Service</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Early Life & Education */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Early Years</span>
                        <h2 className="section-title mb-8">The Foundations of Faith</h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-12">
                        <p>
                            Determined to continue her education despite early challenges, she left school in the 9th grade, got
                            married, became a housewife, and raised two sons while later becoming the proud grandmother of eleven
                            grandchildren.
                        </p>
                        <p>
                            In 1979, she earned her GED, marking the beginning of her academic journey. This achievement opened doors to
                            further education and personal growth, demonstrating her unwavering commitment to self-improvement and
                            service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educationBackground.map((edu, index) => (
                            <EducationCard key={edu.year} edu={edu} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Ministry & Achievement Timeline */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Life Journey</span>
                        <h2 className="section-title mb-12">Ministry Milestones & Achievements</h2>
                    </motion.div>

                    <div className="relative">
                        {achievements.map((achievement, index) => (
                            <TimelineItem key={index} item={achievement} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Service Accomplishments */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">
                            Public Service
                        </span>
                        <h2 className="section-title mb-8">20 Years of Dedicated Community Service</h2>
                    </motion.div>

                    <div className="bg-white rounded-2xl p-8 border-l-4 border-l-orange-500 shadow-lg">
                        <div className="max-w-3xl">
                            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                                Pioneer Services & Historic Achievements
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Marlene became the first in the Pentecostal Church to operate a nonprofit certified site that provided
                                comprehensive community services including:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    'Educational training',
                                    'Food assistance',
                                    'Clothing distribution',
                                    'Toiletries distribution',
                                    'Referrals services',
                                    'Court-ordered community service',
                                    'Rental assistance',
                                    'Utility assistance',
                                    'Hotel vouchers',
                                    'Educational classes',
                                ].map((service, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-gray-700"
                                    >
                                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                        <span>{service}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                                <p className="text-gray-700 leading-relaxed">
                                    She was recently honored for 20 years of exceptional public service with the City of McDonough, Georgia,
                                    where her work was publicly recognized and celebrated.
                                </p>
                            </div>

                            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-gray-700 leading-relaxed">
                                    Marlene also became the first to establish a Community Center and Church overseas in Pakistan and Africa,
                                    where she preached and taught the Gospel of Jesus Christ, extending her ministry and impact globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Ministry & Legacy */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">
                                    Modern Ministry
                                </span>
                                <h2 className="section-title">Digital Creator & Spiritual Influencer</h2>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Marlene has become known as a digital creator of spiritual content on Facebook, creatively combining
                                inspirational messages, music, and imagery that reflected her personality and ministry. Through her digital
                                presence, she continues to reach thousands with messages of hope, faith, and transformation.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Marlene has consistently broken barriers, inspired hope, and paved new paths through faith, leadership, and
                                service. She is recognized as a pioneer, motivator, and trailblazer whose accomplishments continue to inspire
                                others around the world.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <motion.div whileHover={{ translateY: -5 }} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                                <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">Author</h3>
                                <p className="text-sm text-gray-600">5 Spiritual Books published on Amazon</p>
                            </motion.div>
                            <motion.div whileHover={{ translateY: -5 }} className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                                <Users className="w-8 h-8 text-pink-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">Digital Creator</h3>
                                <p className="text-sm text-gray-600">Spiritual content & inspiration</p>
                            </motion.div>
                            <motion.div whileHover={{ translateY: -5 }} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                                <Globe className="w-8 h-8 text-green-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">Global Ministry</h3>
                                <p className="text-sm text-gray-600">International outreach & impact</p>
                            </motion.div>
                            <motion.div whileHover={{ translateY: -5 }} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                                <Heart className="w-8 h-8 text-blue-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">Counselor</h3>
                                <p className="text-sm text-gray-600">Marriage & spiritual guidance</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Honors</span>
                        <h2 className="section-title mb-12">Awards & Recognition</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {awards.map((award, index) => (
                            <AwardCard key={award.year} award={award} index={index} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 border-l-4 border-l-amber-500 shadow-lg"
                    >
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                            "The Phenomenal Woman Award was presented by Former Commissioner Vivian Thomas and Mayor Jaden Williams of
                            Stockbridge, Georgia, honoring her exceptional contributions to the community and her unwavering commitment to
                            service and spiritual leadership."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Publications */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-3 block">Works</span>
                        <h2 className="section-title mb-12">Published Works</h2>
                    </motion.div>

                    <motion.div
                        whileHover={{ translateY: -8 }}
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-200 shadow-lg max-w-2xl mx-auto"
                    >
                        <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                        <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Spiritual Books</h3>
                        <p className="text-gray-700 mb-4">
                            Marlene became an author in 2008 and has published five spiritual books that are available on Amazon.
                        </p>
                        <a
                            href="https://amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                        >
                            Explore on Amazon →
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
