import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-violet-600 dark:text-violet-500">404</h1>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-4">
            Page Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition-colors duration-200"
          >
            Go Home
          </Link>
          
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} SaaSBoard - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;