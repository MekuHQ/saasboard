import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  FileText, 
  Settings, 
  Wrench, 
  BarChart3, 
  CreditCard, 
  HelpCircle, 
  ChevronLeft,
  ChevronRight,
  Link,
  Code,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { 
      icon: Wrench, 
      label: 'Tools', 
      path: '/tools',
      subItems: [
        { label: 'People Also Ask Extractor', path: '/tools/paa' },
        { label: 'Meta Title & Description Preview', path: '/tools/meta-preview' },
        { label: 'FAQ Schema Generator', path: '/tools/faq-schema' },
        { label: 'Blog Idea Generator', path: '/tools/blog-ideas' },
        { label: 'Robots.txt & Sitemap Validator', path: '/tools/robots-validator' },
        { label: 'Redirect Checker', path: '/tools/redirect-checker' },
        { label: 'Image Alt Checker', path: '/tools/alt-checker' },
        { label: 'Page Speed Quick Checker', path: '/tools/speed-checker' },
        { label: 'Broken Link Finder', path: '/tools/broken-links' },
        { label: 'Backlink Anchor Text Extractor', path: '/tools/anchor-text' }
      ]
    },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: CreditCard, label: 'Billing', path: '/billing' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Support', path: '/support' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col h-screen sticky top-0 z-50 lg:relative ${
        isMobileOpen ? 'fixed left-0 top-0 h-full' : 'hidden lg:flex'
      }`}>
        {/* Mobile header */}
        <div className="lg:hidden p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-800 dark:text-slate-100">SaaSBoard</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between hidden lg:flex">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-800 dark:text-slate-100">SaaSBoard</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden lg:block"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.path}>
              <RouterLink
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive(item.path)
                    ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-violet-600 dark:text-violet-400' : ''}`} />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </RouterLink>
              
              {/* Sub-items for Tools */}
              {item.subItems && !isCollapsed && isActive(item.path) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <RouterLink
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        location.pathname === subItem.path
                          ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      {subItem.label}
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Upgrade CTA */}
        {!isCollapsed && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-500 rounded-xl p-4 text-white">
              <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-violet-100 mb-3">Unlock advanced SEO tools and unlimited reports</p>
              <button className="w-full bg-white text-violet-600 text-sm font-medium py-2 px-3 rounded-lg hover:bg-violet-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;