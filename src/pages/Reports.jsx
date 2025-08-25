import React from 'react';
import Layout from '../components/Layout';
import { BarChart3, Download, Calendar, Filter } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly SEO Audit Report',
      type: 'Comprehensive',
      date: 'Dec 15, 2024',
      status: 'completed',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Keyword Performance Analysis',
      type: 'Keyword',
      date: 'Dec 10, 2024',
      status: 'completed',
      size: '1.1 MB'
    },
    {
      id: 3,
      title: 'Technical SEO Health Check',
      type: 'Technical',
      date: 'Dec 5, 2024',
      status: 'completed',
      size: '3.2 MB'
    },
    {
      id: 4,
      title: 'Backlink Profile Analysis',
      type: 'Links',
      date: 'Dec 1, 2024',
      status: 'completed',
      size: '4.7 MB'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Reports</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Access and manage your SEO analysis reports
            </p>
          </div>
          <button className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:from-violet-700 hover:to-indigo-600 transition-all">
            Generate New Report
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-slate-500" />
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm">
              <option>All Types</option>
              <option>Comprehensive</option>
              <option>Keyword</option>
              <option>Technical</option>
              <option>Links</option>
            </select>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/20 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                  {report.status}
                </span>
              </div>
              
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{report.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{report.type} Report</p>
              
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                <span>{report.date}</span>
                <span>{report.size}</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <button className="w-full flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reports.length === 0 && (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">No reports yet</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Generate your first SEO report to get started
            </p>
            <button className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-6 py-2 rounded-xl font-medium">
              Create Report
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reports;