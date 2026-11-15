import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { SyllabusPage } from './pages/SyllabusPage';
import { ModulesIndexPage } from './pages/ModulesIndexPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { LessonPage } from './pages/LessonPage';
import { LabsPage } from './pages/LabsPage';
import { LabDetailPage } from './pages/LabDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { QuizzesPage } from './pages/QuizzesPage';
import { ShortcutsPage } from './pages/ShortcutsPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { FaqPage } from './pages/FaqPage';
import { CreditsPage } from './pages/CreditsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <CourseProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-950 text-[#0F172A] dark:text-slate-100">
          <Header />
          <SearchModal />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/syllabus" element={<SyllabusPage />} />
              <Route path="/modules" element={<ModulesIndexPage />} />
              <Route path="/module/:moduleId" element={<ModuleDetailPage />} />
              <Route path="/module/:moduleId/:lessonId" element={<LessonPage />} />
              <Route path="/labs" element={<LabsPage />} />
              <Route path="/labs/:labId" element={<LabDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/quizzes" element={<QuizzesPage />} />
              <Route path="/shortcuts" element={<ShortcutsPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/credits" element={<CreditsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CourseProvider>
  );
}
