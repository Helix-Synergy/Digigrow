
import {
    Globe,
    Search,
    Share2,
    MousePointerClick,
    Facebook,
    Shield,
    Rocket,
    Smartphone,
    Video,
    Code,
    MessageCircle,
    Eye,
    ShieldCheck,
    BarChart,
    MapPin,
    Link as LinkIcon,
    Settings,
    FileText,
    TrendingUp,
    Calendar,
    Megaphone,
    PieChart,
    Users,
    Target,
    PenTool,
    Sliders,
    Repeat,
    Zap,
    DollarSign,
    Image,
    Layout,
    Mail,
    List,
    Palette,
    Layers,
    Monitor,
    RefreshCw,
    ClipboardCheck,
    Filter,
    ShoppingCart
} from 'lucide-react';

export const services = [
    {
        icon: Search,
        title: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization",
        desc: "Grow Your Online Visibility & Rank Higher on Google",
        headerColor: "from-green-600 to-teal-700",
        fullDesc: "Search Engine Optimization (SEO) is the process of improving your website’s visibility on search engines like Google. Our SEO strategies help your business rank higher, attract the right audience, and generate consistent organic traffic that converts into leads and sales.",
        details: "SEO is essential for your business because it helps you improve your visibility in search engine results pages (SERPs). This, in turn, can lead to more website traffic, higher conversion rates, and enhanced brand awareness. We customize strategies specifically for your market position.",
        features: ["Improved Google rankings", "Increased organic traffic", "Better user experience", "Strong online presence", "Higher ROI compared to paid ads"],
        subServices: [
            { icon: Search, title: "Keyword Research & Strategy", desc: "In-depth keyword research, High-intent and long-tail keywords, Competitor keyword analysis, Search volume & difficulty analysis." },
            { icon: FileText, title: "On-Page SEO", desc: "Optimized page titles & meta descriptions, SEO-friendly content optimization, Proper heading structure (H1–H6), Image optimization & alt tags, Internal linking strategy." },
            { icon: Settings, title: "Technical SEO", desc: "Website speed optimization, Mobile responsiveness, Crawlability & indexing fixes, XML sitemap & robots.txt setup, Fix broken links & errors." },
            { icon: FileText, title: "Content Optimization", desc: "SEO blog writing, Content gap analysis, Keyword-focused content updates, Search-intent optimization, Regular content performance tracking." },
            { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimization, Local keyword targeting, NAP consistency (Name, Address, Phone), Local citations & reviews strategy, Location-based ranking improvement." },
            { icon: LinkIcon, title: "Off-Page SEO (Link Building)", desc: "High-quality backlinks, Authority website outreach, Brand mentions, Spam link removal, Domain authority growth." },
            { icon: TrendingUp, title: "SEO Reporting & Analytics", desc: "Monthly ranking reports, Traffic & conversion tracking, Keyword performance updates, Actionable insights & improvements." }
        ],
        benefits: [
            { title: "White-hat SEO techniques", desc: "We use ethical, Google-compliant strategies to ensure safe, long-term growth." },
            { title: "Data-driven strategies", desc: "Decisions based on real-time analytics and competitor insights." },
            { title: "Long-term ranking growth", desc: "Focus on sustainable results that build authority over time." },
            { title: "Increased website traffic", desc: "Attract more qualified visitors who are searching for your services." },
            { title: "Higher lead & sales conversion", desc: "Turn organic traffic into measurable business revenue." }
        ],
        color: "text-[#16A34A]"
    },
    {
        icon: Share2,
        title: "Social Media Marketing (SMM)",
        slug: "social-media-marketing",
        desc: "Build Your Brand. Engage Your Audience. Drive Results.",
        headerColor: "from-blue-400 to-cyan-500",
        fullDesc: "Social Media Marketing (SMM) helps your business connect with the right audience, build brand awareness, and turn followers into loyal customers. We create data-driven social media strategies that increase engagement, grow your audience, and generate real business results.",
        details: "A solid social media presence gives you the ability to engage with your audience and build relationships with interested parties. We handle everything from strategy to execution, ensuring your brand stays top-of-mind.",
        features: ["Facebook", "Instagram", "LinkedIn", "X (Twitter)", "TikTok", "Pinterest"],
        subServices: [
            { icon: Share2, title: "Social Media Strategy", desc: "Platform-specific marketing strategy, Audience research & competitor analysis, Content planning & brand positioning, Monthly content calendar." },
            { icon: Settings, title: "Account Setup & Optimization", desc: "Profile setup & optimization, Bio, highlights & cover design, Branding alignment across platforms, Call-to-action optimization." },
            { icon: FileText, title: "Content Creation", desc: "Eye-catching posts & creatives, Reels & short-form video content, Stories & carousel posts, Captions with hashtags & keywords, Brand-consistent visuals." },
            { icon: Calendar, title: "Content Scheduling & Publishing", desc: "Daily / weekly posting, Best-time posting strategy, Consistent content delivery, Multi-platform scheduling." },
            { icon: Users, title: "Community Management", desc: "Replying to comments & messages, Audience engagement, Building relationships with followers, Reputation management." },
            { icon: Megaphone, title: "Paid Social Media Advertising", desc: "Facebook & Instagram Ads, LinkedIn Ads, TikTok Ads, Campaign setup & management, Audience targeting & retargeting, Performance optimization." },
            { icon: PieChart, title: "Analytics & Reporting", desc: "Engagement & growth reports, Reach & impression tracking, Follower insights, Campaign performance analysis." }
        ],
        benefits: [
            { title: "Creative & data-driven content", desc: "Engaging visuals and copy backed by performance metrics." },
            { title: "Consistent brand presence", desc: "Maintain a uniform and professional image across all channels." },
            { title: "Increased engagement & followers", desc: "Build a loyal community that actively interacts with your brand." },
            { title: "Lead generation focused", desc: "Strategies designed to convert social interest into tangible leads." },
            { title: "Measurable results", desc: "Transparent reporting showing exactly how your campaigns are performing." }
        ],
        color: "text-[#06B6D4]"
    },
    {
        icon: MousePointerClick,
        title: "Paid Advertising (PPC)",
        slug: "paid-advertising-ppc",
        desc: "Get Instant Traffic, Qualified Leads & Maximum ROI",
        headerColor: "from-orange-500 to-red-600",
        fullDesc: "Paid Advertising (Pay-Per-Click) is one of the fastest ways to drive targeted traffic, generate leads, and increase sales. We create and manage high-performing PPC campaigns that put your business in front of the right audience at the right time.",
        details: "PPC allows you to reach potential customers precisely when they are searching for your products or services. Unlike organic search, which involves building traffic over time to establish a presence, paid advertising offers immediate visibility and results.",
        features: ["Increased website traffic", "More qualified leads", "Higher conversion rates", "Better ad spend efficiency", "Scalable growth"],
        subServices: [
            { icon: Target, title: "PPC Strategy & Planning", desc: "Business & goal analysis, Competitor research, Budget planning & bidding strategy, Platform selection." },
            { icon: Search, title: "Google Ads Management", desc: "Search Ads, Display Ads, Shopping Ads, YouTube Ads, Keyword research & optimization, Conversion tracking setup." },
            { icon: Share2, title: "Social Media Advertising", desc: "Facebook & Instagram Ads, LinkedIn Ads, TikTok Ads, Audience targeting & retargeting, Lookalike audience creation." },
            { icon: PenTool, title: "Ad Creative & Copywriting", desc: "High-converting ad copy, Creative images & videos, A/B testing of ads, Call-to-action optimization." },
            { icon: Sliders, title: "Campaign Optimization", desc: "Bid & budget optimization, Keyword & audience refinement, Quality Score improvement, Cost-per-lead reduction." },
            { icon: Repeat, title: "Remarketing & Retargeting", desc: "Website visitor retargeting, Cart abandonment campaigns, Lead follow-up ads, Brand recall campaigns." },
            { icon: BarChart, title: "PPC Reporting & Analytics", desc: "Clicks, impressions & conversions, Cost per click (CPC) analysis, ROI & performance reports, Actionable insights." }
        ],
        benefits: [
            { title: "Fast results & instant visibility", desc: "Get your brand in front of potential customers immediately launch." },
            { title: "Highly targeted campaigns", desc: "Reach the exact audience demographic and intent you want." },
            { title: "Budget-controlled advertising", desc: "You control exactly how much you spend and where it goes." },
            { title: "Conversion-focused approach", desc: "Every campaign is optimized to drive real business actions." },
            { title: "Transparent reporting", desc: "Know exactly where every dollar is going and what it brings back." }
        ],
        color: "text-[#22C55E]"
    },
    {
        icon: FileText,
        title: "Content Marketing",
        slug: "content-marketing",
        desc: "Engage Your Audience. Build Trust. Drive Conversions.",
        headerColor: "from-pink-500 to-rose-600",
        fullDesc: "Content Marketing focuses on creating valuable, relevant, and consistent content to attract, engage, and convert your target audience. We develop strategic content that strengthens your brand authority, improves SEO, and drives long-term business growth.",
        details: "In a digital world where attention is the new currency, content is king. A well-executed content marketing strategy not only brings traffic but builds a loyal community around your brand, establishing you as a thought leader in your industry.",
        features: ["Increased website traffic", "Higher engagement", "Improved search rankings", "Better lead quality", "Strong brand credibility"],
        subServices: [
            { icon: Target, title: "Content Strategy & Planning", desc: "Content goal setting, Audience & competitor research, Content calendar creation, Funnel-based content strategy." },
            { icon: FileText, title: "Blog Writing & SEO Content", desc: "High-quality blog articles, Keyword-optimized content, Industry-relevant topics, Internal linking strategy, Content updates & optimization." },
            { icon: Layout, title: "Website Content", desc: "Homepage & service pages, About Us content, Landing page copy, Conversion-focused messaging." },
            { icon: Image, title: "Visual & Interactive Content", desc: "Infographics, Presentations & PDFs, Case studies, E-books & whitepapers." },
            { icon: Video, title: "Video & Multimedia Content", desc: "Short-form videos (Reels, Shorts), Explainer videos, YouTube content planning, Video script writing." },
            { icon: Users, title: "Lead Generation Content", desc: "Lead magnets, Email content & newsletters, Downloadable resources, Sales-driven content funnels." },
            { icon: Share2, title: "Content Distribution & Promotion", desc: "Content sharing strategy, Social media distribution, Email marketing integration, Paid content promotion." },
            { icon: BarChart, title: "Content Performance & Reporting", desc: "Traffic & engagement tracking, Conversion analysis, Content optimization insights, Monthly performance reports." }
        ],
        benefits: [
            { title: "Value-driven content", desc: "We prioritize quality and relevance to genuinely help and inform your audience." },
            { title: "SEO & conversion focused", desc: "Every piece of content is crafted to rank well and drive specific user actions." },
            { title: "Brand authority building", desc: "Establish your business as the go-to expert in your niche." },
            { title: "Long-term organic growth", desc: "Build a library of assets that continues to generate results over months and years." },
            { title: "Consistent content delivery", desc: "Reliable publishing schedules that keep your audience engaged and returning." }
        ],
        color: "text-[#EC4899]"
    },
    {
        icon: Mail,
        title: "Email Marketing",
        slug: "email-marketing",
        desc: "Turn Subscribers into Loyal Customers.",
        headerColor: "from-orange-500 to-amber-600",
        fullDesc: "Email Marketing is one of the most powerful digital marketing channels for building relationships, nurturing leads, and driving repeat sales. We create personalized, data-driven email campaigns that engage your audience and deliver measurable results.",
        details: "Direct communication with your audience is invaluable. Unlike social media algorithms that limit reach, email ensures your message lands directly in your customer's inbox, fostering a deeper connection and driving higher conversion rates.",
        features: ["Higher open & click rates", "Increased conversions", "Stronger customer relationships", "Better repeat sales", "Long-term brand loyalty"],
        subServices: [
            { icon: Target, title: "Email Strategy & Planning", desc: "Goal-based email strategy, Audience segmentation, Campaign planning & scheduling, Funnel-based email flow." },
            { icon: Mail, title: "Email Campaign Creation", desc: "Promotional emails, Newsletter content, Product launch emails, Event & announcement emails, Personalized messaging." },
            { icon: PenTool, title: "Email Design & Copywriting", desc: "Mobile-responsive email design, High-converting subject lines, Engaging email copy, Strong call-to-action (CTA)." },
            { icon: Zap, title: "Marketing Automation", desc: "Welcome email sequences, Drip & nurture campaigns, Abandoned cart emails, Re-engagement campaigns, Customer retention flows." },
            { icon: List, title: "List Management & Growth", desc: "Email list segmentation, Lead magnet integration, Subscriber cleanup & hygiene, Compliance best practices." },
            { icon: Sliders, title: "A/B Testing & Optimization", desc: "Subject line testing, Content & CTA testing, Send-time optimization, Conversion rate improvement." },
            { icon: BarChart, title: "Analytics & Reporting", desc: "Open & click-through rates, Conversion tracking, Campaign performance reports, Actionable insights." }
        ],
        benefits: [
            { title: "High ROI marketing channel", desc: "Email consistently delivers one of the highest returns on investment in digital marketing." },
            { title: "Personalized communication", desc: "Speak directly to your audience's interests and behaviors." },
            { title: "Automated lead nurturing", desc: "Move prospects through your sales funnel automatically, 24/7." },
            { title: "Improved customer retention", desc: "Keep your brand top-of-mind and encourage repeat purchases." },
            { title: "Data-driven optimization", desc: "Continuously improve performance based on real engagement data." }
        ],
        color: "text-[#F97316]"
    },
    {
        icon: Rocket,
        title: "Website & Funnel Optimization",
        slug: "website-funnel-optimization",
        desc: "Turn Visitors into Leads. Leads into Customers.",
        headerColor: "from-violet-600 to-indigo-600",
        fullDesc: "Website & Funnel Optimization focuses on improving user experience and guiding visitors through a seamless journey—from first click to final conversion. We optimize your website and sales funnels to maximize conversions, reduce drop-offs, and increase revenue.",
        details: "Your website is your 24/7 salesperson. If it’s not converting, you’re leaving money on the table. We analyze user behavior to remove friction, streamline the path to purchase, and ensure every click counts towards your bottom line.",
        features: ["More qualified leads", "Better user engagement", "Increased sales conversions", "Optimized customer journey", "Scalable growth"],
        subServices: [
            { icon: ClipboardCheck, title: "Website Audit & Analysis", desc: "Website performance review, UX/UI analysis, Conversion bottleneck identification, User behavior tracking." },
            { icon: TrendingUp, title: "Conversion Rate Optimization (CRO)", desc: "CTA optimization, Page layout & design improvements, Trust signals & social proof, A/B testing." },
            { icon: Layout, title: "Landing Page Optimization", desc: "High-converting landing page design, Copy & visual optimization, Mobile-first optimization, Speed & performance enhancement." },
            { icon: Filter, title: "Sales Funnel Strategy", desc: "Funnel mapping & structure, Lead generation funnels, Email & retargeting funnel setup, Customer journey optimization." },
            { icon: Zap, title: "Website Performance Optimization", desc: "Page speed optimization, Mobile responsiveness, Navigation & usability improvements, Technical fixes." },
            { icon: MousePointerClick, title: "Lead Capture & Forms", desc: "Lead capture form optimization, Popup & CTA design, Lead magnet integration, CRM & email tool integration." },
            { icon: BarChart, title: "Analytics & Tracking", desc: "Google Analytics & Tag Manager setup, Conversion & goal tracking, Heatmaps & user behavior analysis, Funnel performance reporting." }
        ],
        benefits: [
            { title: "Data-driven optimization", desc: "We rely on hard data and user behavior analysis, not guesswork, to make improvements." },
            { title: "Improved user experience", desc: "Create a seamless, enjoyable journey that keeps users engaged and reduces friction." },
            { title: "Higher conversion rates", desc: "Turn more of your existing traffic into paying customers with optimized paths." },
            { title: "Reduced bounce rates", desc: "Keep visitors on your site longer with engaging content and intuitive layout." },
            { title: "Increased ROI", desc: "Maximize the value of every dollar spent on attracting traffic by converting more of it." }
        ],
        color: "text-[#8B5CF6]"
    },
    {
        icon: Palette,
        title: "Branding & Creative",
        slug: "branding-creative",
        desc: "Build a Strong Brand That People Remember.",
        headerColor: "from-purple-500 to-indigo-600",
        fullDesc: "Branding is more than just a logo—it’s how your audience sees, feels, and connects with your business. Our Branding & Creative services help you create a powerful brand identity that stands out, builds trust, and leaves a lasting impression.",
        details: "In a crowded marketplace, a strong brand is your most valuable asset. We blend creativity with strategy to build brands that not only look good but also communicate the right message to the right people.",
        features: ["Strong brand recognition", "Increased trust & credibility", "Better engagement", "Higher conversion rates", "Professional brand presence"],
        subServices: [
            { icon: Target, title: "Brand Strategy", desc: "Brand positioning & messaging, Target audience research, Competitor analysis, Brand voice & tone development, Value proposition creation." },
            { icon: Palette, title: "Visual Identity Design", desc: "Logo design, Brand color palette, Typography selection, Brand style guidelines, Visual consistency across platforms." },
            { icon: Layers, title: "Creative Design", desc: "Social media creatives, Ad banners & visuals, Marketing collateral (brochures, flyers), Presentation & pitch deck design." },
            { icon: FileText, title: "Content & Messaging", desc: "Brand storytelling, Taglines & slogans, Website & ad messaging, Campaign concepts." },
            { icon: Monitor, title: "Creative for Digital Marketing", desc: "Ad creatives (static & video), Landing page visuals, Email marketing designs, Conversion-focused creatives." },
            { icon: RefreshCw, title: "Brand Refresh & Rebranding", desc: "Brand audit, Visual & messaging updates, Logo redesign, Brand relaunch support." },
            { icon: BarChart, title: "Creative Performance Tracking", desc: "Engagement & conversion analysis, A/B testing of creatives, Design optimization insights." }
        ],
        benefits: [
            { title: "Unique & memorable branding", desc: "Stand out from competitors with a distinct visual language." },
            { title: "Consistent brand identity", desc: "Ensure your brand looks professional across all touchpoints." },
            { title: "Creative + strategy approach", desc: "Design that looks great and drives business goals." },
            { title: "Audience-focused design", desc: "Visuals crafted to resonate specifically with your target market." },
            { title: "Business growth driven", desc: "Branding that builds equity and supports long-term success." }
        ],
        color: "text-[#EF4444]"
    },
    {
        icon: Users,
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        desc: "Connect Your Brand with the Right Voices.",
        headerColor: "from-pink-500 to-rose-500",
        fullDesc: "Influencer Marketing helps brands reach their target audience through trusted creators who drive authentic engagement and real buying decisions. We plan and manage influencer campaigns that increase brand awareness, build credibility, and boost conversions.",
        details: "People trust people, not just ads. By partnering with the right influencers, you can tap into established communities and drive action with authenticity that traditional advertising can't match.",
        features: ["Authentic audience reach", "High engagement rates", "Trust-based brand promotion", "Niche-targeted campaigns", "Measurable results"],
        subServices: [
            { icon: Target, title: "Influencer Strategy & Planning", desc: "Campaign goal definition, Audience & platform analysis, Influencer marketing roadmap, Budget & timeline planning." },
            { icon: Search, title: "Influencer Research & Selection", desc: "Micro, macro & celebrity influencers, Niche & audience relevance, Authenticity checks. Platforms: Instagram, YouTube, TikTok, Facebook, LinkedIn." },
            { icon: ClipboardCheck, title: "Campaign Management", desc: "Influencer outreach & negotiation, Content guidelines & approvals, Campaign execution, Timeline & deliverables management." },
            { icon: Video, title: "Content Collaboration", desc: "Sponsored posts & reels, Stories & live sessions, Product reviews & unboxings, Video & short-form content." },
            { icon: Megaphone, title: "Influencer Advertising", desc: "Boosted influencer posts, Whitelisting & branded content ads, Performance-driven influencer ads." },
            { icon: TrendingUp, title: "Performance Tracking & Reporting", desc: "Reach & impressions, Engagement rate analysis, Traffic & conversion tracking, ROI-focused reporting." },
            { icon: ShieldCheck, title: "Brand Safety & Compliance", desc: "Content quality control, Disclosure & compliance guidelines, Reputation management." }
        ],
        benefits: [
            { title: "Increased brand awareness", desc: "Expose your brand to new, highly relevant audiences." },
            { title: "Higher engagement", desc: "Influencer content typically sees much higher interaction rates than brand posts." },
            { title: "Improved brand trust", desc: "Leverage the trust influencers have built with their followers." },
            { title: "More website traffic", desc: "Drive high-quality referrals directly to your site or landing pages." },
            { title: "Better conversion rates", desc: "Social proof from trusted figures drives purchase decisions." }
        ],
        color: "text-[#EC4899]"
    },
    {
        icon: Globe,
        title: "WordPress Services",
        slug: "wordpress-services",
        desc: "Powerful, Secure & High-Performing WordPress Websites.",
        headerColor: "from-blue-600 to-indigo-700",
        fullDesc: "We offer complete WordPress solutions to help businesses build fast, secure, and user-friendly websites. From custom design to ongoing maintenance, our WordPress services are tailored to support your business goals and online growth.",
        details: "WordPress powers over 40% of the web for a reason. It's flexible, scalable, and powerful. We harness that power to build digital experiences that are easy for you to manage and delightful for your customers to use.",
        features: ["Custom & scalable solutions", "Fast & secure websites", "SEO & performance focused", "Easy-to-manage backend", "Reliable ongoing support"],
        subServices: [
            { icon: Layout, title: "WordPress Website Design & Development", desc: "Custom WordPress website design, Theme customization, Responsive & mobile-friendly layouts, User-friendly interface, SEO-ready website structure." },
            { icon: Palette, title: "WordPress Theme Customization", desc: "UI/UX customization, Brand-aligned design updates, Layout & styling improvements, Speed & performance optimization." },
            { icon: Code, title: "Plugin Development & Integration", desc: "Custom plugin development, Third-party plugin setup, Payment gateway integration, CRM & marketing tool integration." },
            { icon: ShoppingCart, title: "WordPress eCommerce (WooCommerce)", desc: "WooCommerce store setup, Product & category management, Secure payment integration, Cart & checkout optimization, Conversion-focused store design." },
            { icon: Zap, title: "Website Speed & Performance Optimization", desc: "Page speed optimization, Image & code optimization, Hosting & caching setup, Core Web Vitals improvement." },
            { icon: ShieldCheck, title: "WordPress Security", desc: "Security plugin setup, Malware removal, Firewall & login protection, Regular security monitoring." },
            { icon: Settings, title: "Website Maintenance & Support", desc: "WordPress core updates, Theme & plugin updates, Regular backups, Bug fixes & troubleshooting, Ongoing technical support." },
            { icon: Search, title: "WordPress SEO Optimization", desc: "SEO-friendly structure, On-page SEO setup, Schema & sitemap integration, Search engine visibility improvement." },
            { icon: RefreshCw, title: "Website Migration & Backup", desc: "Website migration to WordPress, Hosting & domain setup, Website backup & restore, Zero downtime migration." }
        ],
        benefits: [
            { title: "Professional website presence", desc: "Establish credibility with a high-quality, custom-designed site." },
            { title: "Faster load times", desc: "Optimized performance needed for user retention and SEO ranking." },
            { title: "Better user experience", desc: "Intuitive navigation and design that keeps visitors engaged." },
            { title: "Improved search rankings", desc: "Technical SEO foundations that help you climb search results." },
            { title: "Higher conversions", desc: "Strategic design elements that guide users towards taking action." }
        ],
        color: "text-[#2563EB]"
    }
];
