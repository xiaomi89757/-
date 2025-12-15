
import React, { useState } from 'react';
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
import { LeanLearningComingSoon } from './components/LeanLearningComingSoon';
import { NavLinkItem, ViewState } from './types';
import { Menu } from 'lucide-react';
import { SIDEBAR_MENU_ITEMS, DOCUMENT_CONTENTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeMenuItem = SIDEBAR_MENU_ITEMS.find(item => item.id === currentView);

  const renderContent = () => {
    if (!activeMenuItem) {
      return <div className="text-center text-red-500 p-8">未找到对应页面内容。</div>;
    }

    switch (activeMenuItem.type) {
      case 'component':
        if (activeMenuItem.id === ViewState.HOME) {
          return <HomePage />;
        }
        if (activeMenuItem.id === ViewState.APP_SHOUAN) {
          return <DownloadGuidePage />;
        }
        if (activeMenuItem.id === ViewState.APP_EXAM_STAR) {
          return <ExamDownloadPage />;
        }
        if (activeMenuItem.id === ViewState.APP_DOWNLOADS) {
          return <AppDownloadsLandingPage setView={setCurrentView} />;
        }
        if (activeMenuItem.id === ViewState.JOB_OPERATING_PROCEDURES) {
          return <ProceduresPage />;
        }
        if (activeMenuItem.id === ViewState.JOB_SAFETY_RESPONSIBILITIES) {
          return <SafetyResponsibilitiesPage />;
        }
        if (activeMenuItem.id === ViewState.LEAN_LEARNING) {
          return <LeanLearningComingSoon />;
        }
        return <div className="p-8">未知组件页面。</div>;
      
      case 'document':
        if (activeMenuItem.documentKey) {
          const content = DOCUMENT_CONTENTS[activeMenuItem.documentKey];
          if (content) {
            return <DocumentPage content={content} />;
          }
        }
        return <div className="p-8">文档内容缺失。</div>;

      case 'iframe':
        if (activeMenuItem.path) {
          return <IframeViewer src={activeMenuItem.path} title={activeMenuItem.label} />;
        }
        return <div className="p-8">Iframe链接缺失。</div>;

      case 'link_group':
        if (activeMenuItem.id === ViewState.LEAN_PROPOSAL) {
          return <LeanProposalPage title={activeMenuItem.label} links={activeMenuItem.subLinks || []} onNavigate={setCurrentView} />;
        }
        if (activeMenuItem.id === ViewState.MICRO_IMPROVEMENT) {
          return <MicroImprovementPage title={activeMenuItem.label} links={activeMenuItem.subLinks || []} onNavigate={setCurrentView} />;
        }
        if (activeMenuItem.subLinks) {
          return <LinkGroupPage title={activeMenuItem.label} links={activeMenuItem.subLinks} onNavigate={setCurrentView} />;
        }
        return <div className="p-8">链接组内容缺失。</div>;

      case 'external_single_tab':
        return (
          <div className="p-8 text-center text-slate-600">
            请通过左侧菜单点击“{activeMenuItem.label}”直接跳转到新页面。
          </div>
        );

      default:
        return <div className="p-8">未知页面类型。</div>;
    }
  };

  const isIframe = activeMenuItem?.type === 'iframe';
  const isProcedures = activeMenuItem?.id === ViewState.JOB_OPERATING_PROCEDURES;
  const isResponsibilities = activeMenuItem?.id === ViewState.JOB_SAFETY_RESPONSIBILITIES;
  const isLeanProposal = activeMenuItem?.id === ViewState.LEAN_PROPOSAL;
  const isMicroImprovement = activeMenuItem?.id === ViewState.MICRO_IMPROVEMENT;
  const isComingSoon = activeMenuItem?.id === ViewState.LEAN_LEARNING;
  const isFullWidthPage = currentView === ViewState.HOME || isIframe || isProcedures || isResponsibilities || isLeanProposal || isMicroImprovement || isComingSoon;

  return (
    <div className="flex h-screen bg-white md:bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header - Sticky & Compact */}
        <header className="lg:hidden sticky top-0 z-10 flex items-center justify-between bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 py-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              二
            </div>
            <div>
              <span className="font-bold text-base text-slate-800 block leading-none">第二炼钢厂</span>
              <span className="text-[10px] text-slate-500 font-medium">综合管理平台</span>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg active:scale-95 transition-transform"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className={`flex-1 ${isFullWidthPage ? 'overflow-hidden flex flex-col' : 'overflow-y-auto'} bg-white md:bg-slate-50 scroll-smooth`}>
          <div className={`${isFullWidthPage ? 'w-full h-full' : 'max-w-7xl mx-auto w-full min-h-full'}`}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
