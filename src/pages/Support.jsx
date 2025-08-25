import React from 'react';
import Layout from '../components/Layout';
import { HelpCircle, Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I generate my first SEO report?',
      answer: 'Navigate to the Reports section and click "Generate New Report". Select the type of report you need and follow the prompts.'
    },
    {
      question: 'What is the API query limit?',
      answer: 'Your current Pro plan includes 25,000 API queries per month. You can monitor your usage in the Billing section.'
    },
    {
      question: 'How do I add team members?',
      answer: 'Go to Settings → Team Management to invite team members. You can manage permissions and access levels there.'
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes, you can export all your reports and data in CSV format from the Preferences section in Settings.'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      responseTime: 'Typically replies in 2 minutes',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      responseTime: 'Typically replies within 4 hours',
      available: true
    },
    {
      icon: Clock,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive guides',
      responseTime: 'Available 24/7',
      available: true
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Support</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Get help with your SEO tools and account
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <option.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{option.title}</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{option.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-500">{option.responseTime}</span>
                {option.available && (
                  <span className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Available</span>
                  </span>
                )}
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-violet-600 to-indigo-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-violet-700 hover:to-indigo-600 transition-all">
                Get Help
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 pb-4 last:pb-0">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact Us</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="What can we help you with?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                placeholder="Please describe your issue in detail..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white py-3 px-4 rounded-xl font-medium hover:from-violet-700 hover:to-indigo-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Support;