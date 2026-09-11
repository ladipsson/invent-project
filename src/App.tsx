import React, { useState, useEffect } from 'react';
import { 
  MOCK_JOURNEYS, 
  MOCK_STUDENT_PROFILE, 
  MOCK_BADGES, 
  MOCK_EVIDENCE, 
  MOCK_CERTIFICATES, 
  MOCK_NOTIFICATIONS 
} from './data/mockData';
import { UserRole, Journey, EvidenceItem, NotificationItem, Badge } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SubmitEvidenceModal } from './components/SubmitEvidenceModal';

// Pages
import { HomePage } from './pages/HomePage';
import { JourneysCatalogPage } from './pages/JourneysCatalogPage';
import { JourneyDetailPage } from './pages/JourneyDetailPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BadgesPage } from './pages/BadgesPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ParentLandingPage } from './pages/ParentLandingPage';
import { ParentDashboardPage } from './pages/ParentDashboardPage';
import { SchoolLandingPage } from './pages/SchoolLandingPage';
import { SchoolDashboardPage } from './pages/SchoolDashboardPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>('journey-06');
  
  // Dynamic App State
  const [journeys, setJourneys] = useState<Journey[]>(MOCK_JOURNEYS);
  const [studentProfile, setStudentProfile] = useState(MOCK_STUDENT_PROFILE);
  const [badges, setBadges] = useState<Badge[]>(MOCK_BADGES);
  const [evidenceList, setEvidenceList] = useState<EvidenceItem[]>(MOCK_EVIDENCE);
  const [certificates] = useState(MOCK_CERTIFICATES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState<boolean>(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleSelectJourney = (journeyId: string) => {
    setSelectedJourneyId(journeyId);
    setCurrentView('journey-detail');
  };

  const handleToggleOnline = () => {
    setIsOnline(prev => !prev);
  };

  const handleMarkNotificationRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleSubmitEvidence = (evidenceData: {
    journeyId: string;
    journeyTitle: string;
    journeyNumber: string;
    title: string;
    type: any;
    description: string;
    fileName?: string;
  }) => {
    const newEvidenceItem: EvidenceItem = {
      id: `ev-${Date.now()}`,
      journeyNumber: evidenceData.journeyNumber,
      journeyTitle: evidenceData.journeyTitle,
      studentName: studentProfile.name,
      studentSchool: studentProfile.school,
      studentClass: studentProfile.classGrade,
      title: evidenceData.title,
      type: evidenceData.type,
      submissionDate: 'Today, Just now',
      status: 'Under Review',
      description: evidenceData.description,
      attachments: evidenceData.fileName ? [{ name: evidenceData.fileName, size: '4.2 MB', type: 'application/pdf' }] : undefined
    };

    setEvidenceList(prev => [newEvidenceItem, ...prev]);

    // Push notification for student & mentor
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: 'Evidence Submitted for Review',
      message: `"${evidenceData.title}" has been queued for mentor review by ${studentProfile.mentorName}.`,
      timestamp: 'Just now',
      read: false,
      type: 'feedback'
    };
    setNotifications(prev => [newNotif, ...prev]);

    // Update student profile count
    setStudentProfile(prev => ({
      ...prev,
      evidenceCount: prev.evidenceCount + 1
    }));
  };

  const handleApproveEvidence = (id: string, feedback: string) => {
    setEvidenceList(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: 'Approved', feedback }
          : item
      )
    );

    const targetItem = evidenceList.find(e => e.id === id);
    if (targetItem) {
      // Unlock badge if matching
      setBadges(prev =>
        prev.map(b =>
          b.journeyNumber === targetItem.journeyNumber
            ? { ...b, earned: true, earnedDate: 'Just now' }
            : b
        )
      );

      // Add positive alert
      setNotifications(prev => [
        {
          id: `notif-${Date.now()}`,
          title: 'Evidence Approved! 🎉',
          message: `Mr. Emmanuel Okafor approved "${targetItem.title}" with positive rubric feedback.`,
          timestamp: 'Just now',
          read: false,
          type: 'badge'
        },
        ...prev
      ]);
    }
  };

  const handleRequestRevision = (id: string, feedback: string) => {
    setEvidenceList(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: 'Needs Revision', feedback }
          : item
      )
    );

    const targetItem = evidenceList.find(e => e.id === id);
    if (targetItem) {
      setNotifications(prev => [
        {
          id: `notif-${Date.now()}`,
          title: 'Revision Requested on Evidence',
          message: `Mr. Emmanuel Okafor provided guidance on "${targetItem.title}". Check your portfolio to review suggestions.`,
          timestamp: 'Just now',
          read: false,
          type: 'feedback'
        },
        ...prev
      ]);
    }
  };

  const currentJourney = journeys.find(j => j.id === selectedJourneyId) || journeys[5];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#132238] font-inter antialiased selection:bg-[#FFB703] selection:text-[#071B33]">
      
      {/* Header with Role Switching and Global Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        userRole={userRole}
        onRoleChange={setUserRole}
        notifications={notifications}
        onMarkNotificationRead={handleMarkNotificationRead}
        isOnline={isOnline}
        onToggleOnline={handleToggleOnline}
        onOpenEvidenceModal={() => setIsEvidenceModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            journeys={journeys}
            studentProfile={studentProfile}
            onNavigate={handleNavigate}
            onSelectJourney={handleSelectJourney}
          />
        )}

        {currentView === 'journeys' && (
          <JourneysCatalogPage
            journeys={journeys}
            onSelectJourney={handleSelectJourney}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'journey-detail' && (
          <JourneyDetailPage
            journey={currentJourney}
            onBack={() => handleNavigate('journeys')}
            onOpenEvidenceModal={() => setIsEvidenceModalOpen(true)}
          />
        )}

        {currentView === 'assessment' && (
          <AssessmentPage
            onNavigate={handleNavigate}
            onSelectJourney={handleSelectJourney}
          />
        )}

        {currentView === 'student-dashboard' && (
          <StudentDashboardPage
            studentProfile={studentProfile}
            journeys={journeys}
            badges={badges}
            evidenceList={evidenceList}
            onSelectJourney={handleSelectJourney}
            onNavigate={handleNavigate}
            onOpenEvidenceModal={() => setIsEvidenceModalOpen(true)}
          />
        )}

        {currentView === 'portfolio' && (
          <PortfolioPage
            studentProfile={studentProfile}
            evidenceList={evidenceList}
            journeys={journeys}
            onOpenEvidenceModal={() => setIsEvidenceModalOpen(true)}
            onSelectJourney={handleSelectJourney}
          />
        )}

        {currentView === 'badges' && (
          <BadgesPage badges={badges} />
        )}

        {currentView === 'certificates' && (
          <CertificatesPage
            certificates={certificates}
            studentProfile={studentProfile}
          />
        )}

        {currentView === 'for-parents' && (
          <ParentLandingPage onNavigate={handleNavigate} />
        )}

        {currentView === 'parent-dashboard' && (
          <ParentDashboardPage />
        )}

        {currentView === 'for-schools' && (
          <SchoolLandingPage onNavigate={handleNavigate} />
        )}

        {currentView === 'school-dashboard' && (
          <SchoolDashboardPage />
        )}

        {currentView === 'teacher-dashboard' && (
          <TeacherDashboardPage
            evidenceList={evidenceList}
            onApproveEvidence={handleApproveEvidence}
            onRequestRevision={handleRequestRevision}
          />
        )}

        {currentView === 'pricing' && (
          <PricingPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Reusable Evidence Submission Modal */}
      <SubmitEvidenceModal
        isOpen={isEvidenceModalOpen}
        onClose={() => setIsEvidenceModalOpen(false)}
        journeys={journeys}
        defaultJourneyId={selectedJourneyId}
        onSubmit={handleSubmitEvidence}
      />

      {/* Global Brand Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
