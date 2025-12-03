import React, { useState } from 'react';
import { PenTool, BarChart3, Coins, Layout, Zap, Smartphone } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'analytics' | 'monetization'>('editor');
  const { elementRef, isVisible } = useIntersectionObserver();

  const renderContent = () => {
    switch (activeTab) {
      case 'editor':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
             <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                   <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex space-x-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="p-8 bg-white dark:bg-slate-800 min-h-[300px]">
                     <div className="w-3/4 h-8 bg-slate-100 dark:bg-slate-700 rounded mb-6 animate-pulse"></div>
                     <div className="space-y-3">
                       <div className="w-full h-4 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                       <div className="w-full h-4 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                       <div className="w-5/6 h-4 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                       <div className="w-full h-4 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                     </div>
                     <div className="mt-8 flex gap-4">
                        <div className="px-4 py-2 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 rounded-lg text-xs font-bold border border-brand-100 dark:border-brand-800">AI Suggestions</div>
                        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-100 dark:border-slate-600">Draft Saved</div>
                     </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 lg:pl-10">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-300 rounded-xl flex items-center justify-center mb-6">
                  <PenTool size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Distraction-Free Editor</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Writing shouldn't be hard. We built a beautiful, Zen-mode editor that helps authors get into the flow state.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div> Auto-save & Cloud Sync
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div> Integrated Grammar Checking
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div> Easy Export (PDF, EPUB)
                  </li>
                </ul>
              </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
             <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-slate-900 dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden p-6 relative min-h-[350px]">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                     <div className="bg-slate-800 dark:bg-slate-900 p-4 rounded-lg">
                        <div className="text-slate-400 text-xs mb-1">Total Reads</div>
                        <div className="text-white text-xl font-bold">24,592</div>
                        <div className="text-green-400 text-xs mt-1">+12% this week</div>
                     </div>
                     <div className="bg-slate-800 dark:bg-slate-900 p-4 rounded-lg">
                        <div className="text-slate-400 text-xs mb-1">Avg. Time</div>
                        <div className="text-white text-xl font-bold">4m 12s</div>
                     </div>
                  </div>
                  <div className="bg-slate-800 dark:bg-slate-900 h-40 rounded-lg w-full relative overflow-hidden flex items-end px-2 space-x-2">
                     <div className="bg-brand-500 w-1/6 h-[40%] rounded-t animate-[pulse_3s_ease-in-out_infinite]"></div>
                     <div className="bg-brand-500 w-1/6 h-[60%] rounded-t opacity-80"></div>
                     <div className="bg-brand-500 w-1/6 h-[30%] rounded-t opacity-60"></div>
                     <div className="bg-brand-500 w-1/6 h-[80%] rounded-t animate-[pulse_4s_ease-in-out_infinite]"></div>
                     <div className="bg-brand-500 w-1/6 h-[50%] rounded-t opacity-70"></div>
                     <div className="bg-brand-500 w-1/6 h-[75%] rounded-t"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 lg:pl-10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data-Driven Growth</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Empowering writers with the same analytics used by major publishers. Understand your audience demographics and reading behavior.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Read-through Rate Tracking
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Audience Geography
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Monetization Dashboard
                  </li>
                </ul>
              </div>
          </div>
        );
      case 'monetization':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
             <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-[350px] p-8 flex flex-col justify-center">
                   <div className="flex items-center justify-between mb-6 p-4 bg-stone-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                          <Coins size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">Tip Received</div>
                          <div className="text-xs text-slate-500">from Reader @alex99</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">+$5.00</div>
                   </div>
                    <div className="flex items-center justify-between mb-6 p-4 bg-stone-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <Layout size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">Premium Chapter</div>
                          <div className="text-xs text-slate-500">142 purchases</div>
                        </div>
                      </div>
                      <div className="text-green-600 font-bold">+$71.00</div>
                   </div>
                   <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-600">
                      <div className="flex justify-between items-center">
                         <span className="text-slate-600 dark:text-slate-400 font-medium">Total Balance</span>
                         <span className="text-2xl font-bold text-slate-900 dark:text-white">$1,240.50</span>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 lg:pl-10">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-xl flex items-center justify-center mb-6">
                  <Coins size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Direct Monetization</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Stop writing for exposure. We provide built-in tools to help you earn from your first reader, not your millionth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Reader Tipping System
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Premium/Locked Chapters
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Monthly Subscriptions
                  </li>
                </ul>
              </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Our Product</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Complete Publishing Suite
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We solve the fragmentation in the creator economy by combining writing tools, analytics, and community in one platform.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'editor'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300'
            }`}
          >
            <PenTool size={18} />
            <span>Writer Tools</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'analytics'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300'
            }`}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab('monetization')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'monetization'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300'
            }`}
          >
            <Coins size={18} />
            <span>Monetization</span>
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[500px]">
          {renderContent()}
        </div>
        
      </div>
    </section>
  );
};

export default Features;