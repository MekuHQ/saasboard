import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Search, FileText, Code, Link, Zap, BarChart3, Download, Share2 } from 'lucide-react';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('keyword-content');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    {
      id: 'keyword-content',
      name: 'Keyword & Content',
      tools: [
        { id: 'paa', name: 'People Also Ask Extractor', icon: Search, description: 'Extract PAA questions for any keyword' },
        { id: 'meta-preview', name: 'Meta Title & Description Preview', icon: FileText, description: 'Preview how your meta tags appear in search' },
        { id: 'faq-schema', name: 'FAQ Schema Generator', icon: Code, description: 'Generate structured data for FAQ sections' },
        { id: 'blog-ideas', name: 'Blog Idea Generator', icon: FileText, description: 'Get content ideas based on keywords' }
      ]
    },
    {
      id: 'technical-seo',
      name: 'Technical SEO',
      tools: [
        { id: 'robots-validator', name: 'Robots.txt & Sitemap Validator', icon: Code, description: 'Validate your robots.txt and sitemap files' },
        { id: 'redirect-checker', name: 'Redirect Checker', icon: Link, description: 'Check redirect chains and status codes' },
        { id: 'alt-checker', name: 'Image Alt Checker', icon: FileText, description: 'Audit images for missing alt attributes' },
        { id: 'speed-checker', name: 'Page Speed Quick Checker', icon: Zap, description: 'Quick page speed analysis' }
      ]
    },
    {
      id: 'links-authority',
      name: 'Links & Authority',
      tools: [
        { id: 'broken-links', name: 'Broken Link Finder', icon: Link, description: 'Find and fix broken links on your site' },
        { id: 'anchor-text', name: 'Backlink Anchor Text Extractor', icon: BarChart3, description: 'Analyze anchor text distribution' }
      ]
    }
  ];

  const [activeTool, setActiveTool] = useState(categories[0].tools[0]);

  const handleToolRun = async () => {
    if (!inputValue.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        tool: activeTool.name,
        input: inputValue,
        data: `Sample results for "${inputValue}" using ${activeTool.name}`,
        timestamp: new Date().toISOString()
      });
      setIsLoading(false);
    }, 2000);
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <Layout>
      <div className="space-y-4 lg:space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">SEO Tools</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
            Comprehensive SEO analysis and optimization tools
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveTool(category.tools[0]);
                setResults(null);
              }}
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tools Grid and Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Tools List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-3 lg:p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 lg:mb-4 text-sm lg:text-base">
                {currentCategory?.name}
              </h3>
              <div className="space-y-2">
                {currentCategory?.tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setActiveTool(tool);
                      setResults(null);
                    }}
                    className={`w-full text-left p-2 lg:p-3 rounded-xl transition-all text-sm ${
                      activeTool.id === tool.id
                        ? 'bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-start space-x-2 lg:space-x-3">
                      <tool.icon className={`w-4 h-4 lg:w-5 lg:h-5 mt-0.5 ${
                        activeTool.id === tool.id ? 'text-violet-600 dark:text-violet-400' : 'text-slate-500'
                      }`} />
                      <div>
                        <h4 className={`font-medium ${
                          activeTool.id === tool.id ? 'text-violet-900 dark:text-violet-100' : 'text-slate-900 dark:text-slate-100'
                        }`}>
                          {tool.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 hidden lg:block">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tool Workspace */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Input Panel */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                  <activeTool.icon className="w-5 h-5 lg:w-6 lg:h-6 text-violet-600 dark:text-violet-400" />
                  <h2 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {activeTool.name}
                  </h2>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mb-4 lg:mb-6">
                  {activeTool.description}
                </p>

                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Input
                    </label>
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter your keyword, URL, or content..."
                      className="w-full h-24 lg:h-32 px-3 lg:px-4 py-2 lg:py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none text-sm lg:text-base"
                    />
                  </div>

                  <button
                    onClick={handleToolRun}
                    disabled={!inputValue.trim() || isLoading}
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white py-2 lg:py-3 px-3 lg:px-4 rounded-xl font-medium hover:from-violet-700 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm lg:text-base"
                  >
                    {isLoading ? 'Processing...' : `Run ${activeTool.name}`}
                  </button>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <h3 className="text-base lg:text-lg font-semibold text-slate-900 dark:text-slate-100">Results</h3>
                  {results && (
                    <div className="flex space-x-1 lg:space-x-2">
                      <button className="p-1 lg:p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <Download className="w-3 h-3 lg:w-4 lg:h-4" />
                      </button>
                      <button className="p-1 lg:p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center h-40 lg:h-64">
                    <div className="animate-spin rounded-full h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-violet-600"></div>
                  </div>
                ) : results ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 lg:space-y-4"
                  >
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 lg:p-4">
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2 text-sm lg:text-base">Analysis Complete</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs lg:text-sm mb-2 lg:mb-3">{results.data}</p>
                      <div className="text-xs text-slate-500 dark:text-slate-500">
                        Generated: {new Date(results.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-40 lg:h-64 text-slate-500 dark:text-slate-400">
                    <div className="text-center">
                      <activeTool.icon className="w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-2 lg:mb-4 opacity-50" />
                      <p className="text-xs lg:text-sm">Run the tool to see results here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;