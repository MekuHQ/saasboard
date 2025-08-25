import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, subtitle, icon: Icon, color = 'violet', progress, trend }) => {
  const colorClasses = {
    violet: 'from-violet-600 to-indigo-500',
    blue: 'from-blue-600 to-cyan-500',
    green: 'from-green-600 to-emerald-500',
    orange: 'from-orange-600 to-red-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
          
          {progress !== undefined && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                <span>Usage</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[color]}`}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <span className={`text-xs font-medium ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.positive ? '↗' : '↘'} {trend.value} from last month
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default StatsCard;