import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { IframeViewer } from './components/IframeViewer';
import { LinkGroupPage } from './components/LinkGroupPage';
import { DownloadGuidePage } from './components/DownloadGuidePage';
import { ExamDownloadPage } from './components/ExamDownloadPage';
import { ProceduresPage } from './components/ProceduresPage';
import { SafetyResponsibilitiesPage } from './components/SafetyResponsibilitiesPage';
import { AppDownloadsLandingPage } from './components/AppDownloadsLandingPage';
import { ViewState } from './types';
import { Menu } from 'lucide-react';
import { SIDEBAR_MENU_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeMenuItem = SIDEBAR_MENU_ITEMS.find(item => item.id === currentView) || SIDEBAR_MENU_ITEMS.find(item => item.id === ViewState.HOME);

  const renderContent = () => {
    if (!activeMenuItem) return <div className="p-10 text-center text-slate-400">页面内容未找到。</div>;

    switch (activeMenuItem.type) {
      case 'component':
        if (activeMenuItem.id === ViewState.HOME) return <HomePage setView={setCurrentView} />;
        if (activeMenuItem.id === ViewState.APP_SHOUAN) return <DownloadGuidePage />;
        if (activeMenuItem.id === ViewState.APP_EXAM_STAR) return <ExamDownloadPage />;
        if (activeMenuItem.id === ViewState.APP_DOWNLOADS) return <AppDownloadsLandingPage setView={setCurrentView} />;
        if (activeMenuItem.id === ViewState.JOB_OPERATING_PROCEDURES) return <ProceduresPage />;
        if (activeMenuItem.id === ViewState.JOB_SAFETY_RESPONSIBILITIES) return <SafetyResponsibilitiesPage />;
        return null;
      case 'iframe':
        return activeMenuItem.path ? <IframeViewer src={activeMenuItem.path} title={activeMenuItem.label} /> : null;
      case 'link_group':
        return activeMenuItem.subLinks ? <LinkGroupPage title={activeMenuItem.label} links={activeMenuItem.subLinks} onNavigate={setCurrentView} /> : null;
      case 'external_single_tab':
         // This view type opens a new tab, so we can show a confirmation message.
        return (
          <div className="flex items-center justify-center h-full bg-slate-100">
            <div className="text-center p-8">
              <h2 className="text-xl font-bold text-slate-600">操作确认</h2>
              <p className="text-slate-500 mt-2">相关页面已在新浏览器窗口中打开。</p>
            </div>
          </div>
        );
      default:
        return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-16 shrink-0 z-40 shadow-sm sticky top-0">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md">二</div>
            <h1 className="text-slate-800 font-bold text-base">综合管理平台</h1>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600 active:bg-slate-200 rounded-full transition-all">
            <Menu size={24} />
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <div className="h-full w-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;