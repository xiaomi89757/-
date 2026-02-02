
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { DocumentPage } from './components/DocumentPage';
import { IframeViewer } from './components/IframeViewer';
import { LinkGroupPage } from './components/LinkGroupPage';
import { LeanProposalPage } from './components/LeanProposalPage';
import { MicroImprovementPage } from './components/MicroImprovementPage';
import { DownloadGuidePage } from './components/DownloadGuidePage';
import { ExamDownloadPage } from './components/ExamDownloadPage';
import { ProceduresPage } from './components/ProceduresPage';
import { SafetyResponsibilitiesPage } from './components/SafetyResponsibilitiesPage';
import { AppDownloadsLandingPage } from './components/AppDownloadsLandingPage';
import { LeanLearningPage } from './components/LeanLearningPage'; 
import { FeedbackPage } from './components/FeedbackPage';
import { TempAssignmentPage } from './components/TempAssignmentPage';
import { ViewState } from './types';
import { Menu, Download, BellRing } from 'lucide-react';
import { SIDEBAR_MENU_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyBanner, setShowNotifyBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (currentView === ViewState.HOME) {
        setShowInstallBanner(true);
      }
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed successfully');
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    if ('Notification' in window && Notification.permission === 'default') {
      const timer = setTimeout(() => setShowNotifyBanner(true), 5000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [currentView]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const activeMenuItem = SIDEBAR_MENU_ITEMS.find(item => item.id === currentView);

  const renderContent = () => {
    if (!activeMenuItem) return <div className="p-8 text-center text-red-500">未找到页面内容。</div>;

    switch (activeMenuItem.type) {
      case 'component':
        if (activeMenuItem.id === ViewState.HOME) return <HomePage onNavigate={setCurrentView} onInstall={handleInstallClick} canInstall={!!deferredPrompt} />;
        if (activeMenuItem.id === ViewState.TEMP_ASSIGNMENT) return <TempAssignmentPage />;
        if (activeMenuItem.id === ViewState.APP_SHOUAN) return <DownloadGuidePage />;
        if (activeMenuItem.id === ViewState.APP_EXAM_STAR) return <ExamDownloadPage />;
        if (activeMenuItem.id === ViewState.APP_DOWNLOADS) return <AppDownloadsLandingPage setView={setCurrentView} />;
        if (activeMenuItem.id === ViewState.JOB_OPERATING_PROCEDURES) return <ProceduresPage />;
        if (activeMenuItem.id === ViewState.JOB_SAFETY_RESPONSIBILITIES) return <SafetyResponsibilitiesPage />;
        if (activeMenuItem.id === ViewState.LEAN_LEARNING) return <LeanLearningPage onNavigate={setCurrentView} />; 
        if (activeMenuItem.id === ViewState.FEEDBACK) return <FeedbackPage />;
        return <div className="p-8">未知页面。</div>;
      case 'iframe':
        return <IframeViewer src={activeMenuItem.path || ''} title={activeMenuItem.label} />;
      case 'link_group':
        if (activeMenuItem.id === ViewState.LEAN_PROPOSAL) return <LeanProposalPage title={activeMenuItem.label} links={activeMenuItem.subLinks || []} onNavigate={setCurrentView} />;
        if (activeMenuItem.id === ViewState.MICRO_IMPROVEMENT) return <MicroImprovementPage title={activeMenuItem.label} links={activeMenuItem.subLinks || []} onNavigate={setCurrentView} />;
        return <LinkGroupPage title={activeMenuItem.label} links={activeMenuItem.subLinks || []} onNavigate={setCurrentView} />;
      default:
        return <div className="p-8">内容解析异常。</div>;
    }
  };

  const isFullWidthPage = 
    currentView === ViewState.HOME || 
    currentView === ViewState.LEAN_LEARNING || 
    activeMenuItem?.type === 'iframe' || 
    activeMenuItem?.id === ViewState.JOB_OPERATING_PROCEDURES;

  return (
    <div className="flex h-screen bg-white md:bg-slate-50 overflow-hidden font-sans">
      <Sidebar currentView={currentView} setView={setCurrentView} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {showInstallBanner && currentView === ViewState.HOME && (
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between shadow-lg animate-slide-down z-50">
            <div className="flex items-center gap-2">
              <Download size={18} className="animate-bounce" />
              <span className="text-sm font-bold">安装“二炼钢平台”到桌面</span>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setShowInstallBanner(false)} className="text-xs opacity-70">以后再说</button>
              <button onClick={handleInstallClick} className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-black">立即安装</button>
            </div>
          </div>
        )}
        <header className="lg:hidden sticky top-0 z-10 flex items-center justify-between bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 py-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">二</div>
            <span className="font-extrabold text-slate-800 tracking-tight">第二炼钢厂</span>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-menu-ping opacity-0"></div>
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="relative flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full active:scale-95 transition-all shadow-[0_0_15px_rgba(37,99,235,0.1)] border border-blue-100"
            >
              <span className="text-xs font-black tracking-widest">进入菜单</span>
              <Menu size={18} strokeWidth={3} />
            </button>
          </div>
        </header>
        <main className={`flex-1 ${isFullWidthPage ? 'overflow-hidden' : 'overflow-y-auto'}`}>
          <div className={`${isFullWidthPage ? 'w-full h-full' : 'max-w-7xl mx-auto'}`}>
            {renderContent()}
          </div>
        </main>
      </div>
      <style>{`
        @keyframes slide-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes menu-ping {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-menu-ping {
          animation: menu-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
