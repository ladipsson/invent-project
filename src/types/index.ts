export type UserRole = 'student' | 'parent' | 'teacher' | 'school';

export type JourneyStatus = 'Locked' | 'Open' | 'In Progress' | 'Completed';

export type EvidenceStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Needs Revision';

export type EvidenceType = 'Reflection' | 'Project' | 'Photo' | 'Document' | 'Video' | 'Challenge submission';

export interface JourneySection {
  id: string;
  number: number;
  title: string;
  summary: string;
  content: string;
  type: 'explore' | 'scenario' | 'workbook' | 'challenge' | 'reflection' | 'evidence' | 'assessment';
}

export interface Journey {
  id: string;
  number: string; // e.g. "01", "06"
  numericIndex: number;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Foundation' | 'Interpersonal' | 'Action & Impact';
  status: JourneyStatus;
  progress: number; // 0 - 100
  estimatedMinutes: number;
  iconName: string;
  sections: JourneySection[];
  keyQuote: string;
  realLifeScenario: {
    title: string;
    context: string;
    dilemma: string;
    options: {
      id: string;
      title: string;
      consequence: string;
      leadershipInsight: string;
    }[];
  };
  challengePrompt: string;
  reflectionPrompt: string;
}

export interface EvidenceItem {
  id: string;
  studentName: string;
  studentClass: string;
  studentSchool: string;
  journeyNumber: string;
  journeyTitle: string;
  submissionDate: string;
  type: EvidenceType;
  title: string;
  description: string;
  status: EvidenceStatus;
  feedback?: string;
  mentorName?: string;
  mentorReviewedDate?: string;
  attachments?: { name: string; size: string; type: string }[];
}

export interface Badge {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  journeyId: string;
  journeyNumber: string;
  iconName: string;
  category: string;
  earned: boolean;
  earnedDate?: string;
  criteria: string;
}

export interface Certificate {
  id: string;
  title: string;
  recipientName: string;
  recipientSchool: string;
  recipientClass: string;
  completionTitle: string;
  issueDate: string;
  certificateNumber: string;
  verificationCode: string;
  mentorSignature: string;
  directorSignature: string;
}

export interface StudentProfile {
  name: string;
  avatarUrl?: string;
  school: string;
  classLevel: string; // e.g. "SSS 2"
  age: number;
  overallProgress: number; // e.g. 37
  journeysCompleted: number; // e.g. 5
  totalJourneys: number; // 14
  badgesCount: number; // 8
  evidenceCount: number; // 12
  certificatesCount: number; // 1
  currentJourneyId: string; // "journey-06"
  currentJourneyTitle: string;
  currentJourneyProgress: number; // 72%
  streakDays: number;
  strengths: string[];
  areasToDevelop: string[];
  recentActivity: {
    id: string;
    title: string;
    timestamp: string;
    type: 'badge' | 'journey' | 'evidence' | 'assessment';
  }[];
}

export interface AssessmentQuestion {
  id: number;
  scenario: string;
  context: string;
  options: {
    id: string;
    text: string;
    dimension: 'Self-Leadership' | 'Communication' | 'Empathy' | 'Resilience' | 'Decision-Making' | 'Teamwork' | 'Responsibility';
    score: number;
  }[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'challenge' | 'feedback' | 'badge' | 'reminder';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}
