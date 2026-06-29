
import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CollaborationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        type: 'Event Partnership',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const payload = {
                ...formData,
                subject: `COLLABORATION: ${formData.type} - ${formData.organization}`
            };
            await axios.post(`${apiUrl}/collaborate`, payload);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', organization: '', type: 'Event Partnership', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <main className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
            <SEO 
                title="Partner With Us - Collaboration" 
                description="Collaborate with DigiGro for event partnerships, sponsorships, content collaboration, and strategic alliances to scale your digital reach." 
                keywords="Digital Marketing Partnership, Sponsor Events, Content Collaboration, Strategic Alliance" 
            />
            <Navbar />

            {/* Page Header */}
            <div className="relative py-24 bg-gradient-to-r from-primary to-secondary text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Partner With Us</h1>
                    <p className="text-lg opacity-90">Let's create something extraordinary together.</p>
                </div>
            </div>

            {/* Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                        placeholder="+1 234..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Organization / Company</label>
                                <input
                                    type="text"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                    placeholder="Your Organization"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Collaboration Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                                >
                                    <option value="Event Partnership">Event Partnership</option>
                                    <option value="Sponsorship">Sponsorship</option>
                                    <option value="Content Collaboration">Content Collaboration</option>
                                    <option value="Strategic Alliance">Strategic Alliance</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                                    placeholder="Briefly describe your proposal..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-primary transition-colors disabled:opacity-70 flex items-center justify-center gap-2 text-lg transform hover:-translate-y-1 duration-300"
                            >
                                {status === 'submitting' ? 'Submitting...' : 'Submit Proposal'}
                                {!status.includes('submitting') && <Send size={20} />}
                            </button>

                            {status === 'success' && (
                                <div className="p-4 bg-green-50 text-success rounded-lg flex items-center gap-2 text-sm justify-center font-bold">
                                    <CheckCircle size={20} /> Request sent successfully! We'll be in touch.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-50 text-red-500 rounded-lg flex items-center gap-2 text-sm justify-center font-bold">
                                    <AlertCircle size={20} /> Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CollaborationPage;
