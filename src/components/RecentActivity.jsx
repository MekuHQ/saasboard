import React from 'react';
import { motion } from 'framer-motion';
import { Search, Link, FileText, BarChart3, RefreshCw } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'keyword',
      icon: Search,
      title: 'Keyword Analysis',
      description: 'Analyzed 50 keywords for "digital marketing"',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      status: 'completed'
    },
    {
      id: 2,
      type: 'links',
      icon: Link,
      title: 'Broken Link Scan',
      description: 'Scanned example.com - 3 broken links found',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      status: 'completed'
    },
    {
      id: 3,
      type: 'schema',
      icon: FileText,
      title: 'FAQ Schema Generated',
      description: 'Created schema for 12 FAQ items',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      status: 'completed'
    },
    {
      id: 4,
      type: 'report',
      icon: BarChart3,
      title: 'Monthly SEO Report',
      description: 'Generated comprehensive SEO audit report',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400';
      case 'running':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400';
      case 'failed':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'text-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-slate-400';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Activity</h2>
        <button className="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-900/20 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors">
              <activity.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                  {activity.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 truncate">
                {activity.description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </p>
            </div>

            <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
              <RefreshCw className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;