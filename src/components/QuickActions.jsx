import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Link, Zap, BarChart3, Code } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Search, label: 'Keyword Research', color: 'violet', path: '/tools/keyword-content' },
    { icon: FileText, label: 'Generate FAQ Schema', color: 'blue', path: '/tools/keyword-content' },
    { icon: Link, label: 'Check Redirects', color: 'green', path: '/tools/technical-seo' },
    { icon: Zap, label: 'Page Speed Test', color: 'orange', path: '/tools/technical-seo' },
    { icon: BarChart3, label: 'Create Report', color: 'indigo', path: '/reports' },
    { icon: Code, label: 'Validate Robots.txt', color: 'cyan', path: '/tools/technical-seo' }
  ];

  const colorClasses = {
    violet: 'from-violet-600 to-indigo-500 hover:from-violet-700 hover:to-indigo-600',
    blue: 'from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600',
    green: 'from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600',
    orange: 'from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600',
    indigo: 'from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600',
    cyan: 'from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600'
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${colorClasses[action.color]} text-white transition-all duration-200 group`}
          >
            <action.icon className="w-5 h-5 lg:w-6 lg:h-6 mb-1 lg:mb-2 group-hover:scale-110 transition-transform mx-auto" />
            <p className="text-xs lg:text-sm font-medium text-center">{action.label}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;