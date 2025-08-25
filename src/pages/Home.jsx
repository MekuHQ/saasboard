import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import StatsCard from '../components/StatsCard';
import QuickActions from '../components/QuickActions';
import RecentActivity from '../components/RecentActivity';
import { Search, BarChart3, Zap, CreditCard } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 lg:mb-8"
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
            Here's what's happening with your SEO tools today.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatsCard
            title="API Queries"
            value="1,247"
            subtitle="of 2,500 used"
            icon={Search}
            color="violet"
            progress={50}
            trend={{ positive: true, value: "12%" }}
          />
          <StatsCard
            title="Reports Generated"
            value="23"
            subtitle="this month"
            icon={BarChart3}
            color="blue"
            trend={{ positive: true, value: "8%" }}
          />
          <StatsCard
            title="Tools Used"
            value="8"
            subtitle="most popular: Keyword Research"
            icon={Zap}
            color="green"
            trend={{ positive: false, value: "3%" }}
          />
          <StatsCard
            title="Current Plan"
            value="Pro"
            subtitle="Upgrade to Enterprise"
            icon={CreditCard}
            color="orange"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <QuickActions />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>

        {/* Usage Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Usage Overview</h2>
          <div className="h-48 lg:h-64 bg-slate-50 dark:bg-slate-700 rounded-xl flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">Chart will be implemented with Recharts</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;