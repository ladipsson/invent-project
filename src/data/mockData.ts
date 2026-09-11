import { 
  Journey, 
  Badge, 
  EvidenceItem, 
  StudentProfile, 
  AssessmentQuestion, 
  Certificate,
  PricingPlan,
  NotificationItem
} from '../types';

export const JOURNEYS_DATA: Journey[] = [
  {
    id: 'journey-01',
    number: '01',
    numericIndex: 1,
    title: 'Self-Leadership',
    tagline: 'Know yourself. Manage yourself. Take ownership of your choices.',
    shortDesc: 'Discover personal strengths, establish core values, and take conscious ownership of your everyday habits and reactions.',
    fullDesc: 'Before leading others, every authentic leader learns to lead themselves. In this journey, you will uncover your core values, understand what drives your emotions, and build reliable routines that withstand classroom pressures and distractions.',
    category: 'Foundation',
    status: 'Completed',
    progress: 100,
    estimatedMinutes: 45,
    iconName: 'Compass',
    keyQuote: 'A leader who cannot govern their own thoughts and actions will soon be governed by circumstance.',
    sections: [
      { id: 's1', number: 1, title: 'Explore', summary: 'Understanding the mirror of self-awareness', content: 'Self-leadership is the intentional practice of influencing your thinking, emotions, and behaviors toward your purpose.', type: 'explore' },
      { id: 's2', number: 2, title: 'Real-Life Scenario', summary: 'Managing study priorities when friends call for games', content: 'You have your terminal examinations in two weeks, but classmates are organizing an afternoon hangout...', type: 'scenario' },
      { id: 's3', number: 3, title: 'Interactive Workbook', summary: 'Mapping your Personal Values Compass', content: 'Identify your 3 non-negotiable core values and write down one action that reinforces each.', type: 'workbook' },
      { id: 's4', number: 4, title: 'Challenge', summary: 'The 7-Day Morning Ownership Ritual', content: 'Wake up 30 minutes early every day for a week without relying on your parents to wake you up.', type: 'challenge' },
      { id: 's5', number: 5, title: 'Reflection', summary: 'Where did I default to blaming others this week?', content: 'Reflect on moments where you felt frustrated and examine your own contribution.', type: 'reflection' },
      { id: 's6', number: 6, title: 'Evidence', summary: 'Submit your 7-day habit tracker & reflection note', content: 'Upload your completed 7-day tracker sheet or photo of your morning routine log.', type: 'evidence' },
      { id: 's7', number: 7, title: 'Assessment', summary: 'Self-governance and accountability check', content: 'Quick 5-question scenario quiz on personal integrity and accountability.', type: 'assessment' }
    ],
    realLifeScenario: {
      title: 'The Unfinished Science Project Dilemma',
      context: 'You and two classmates are tasked with preparing an agricultural biology display for Open Day. Your partners failed to bring their part of the specimen by Thursday evening.',
      dilemma: 'The submission is due Friday morning. Do you report your partners to the biology teacher, finish everything yourself secretly while resenting them, or call an emergency mini-huddle tonight?',
      options: [
        { id: 'opt-1', title: 'Complain publicly in the morning', consequence: 'Causes hostility among group members and reflects poorly on your collaborative ability.', leadershipInsight: 'Venting frustrates the outcome without solving the deadline.' },
        { id: 'opt-2', title: 'Call an emergency sync and redistribute tasks', consequence: 'Everyone takes ownership of an urgent portion before nightfall; project gets completed respectfully.', leadershipInsight: 'True self-leaders initiate constructive problem-solving before finger-pointing.' },
        { id: 'opt-3', title: 'Do it alone in silence and complain to parents', consequence: 'You get exhausted and your peers learn nothing about accountability.', leadershipInsight: 'Silent martyrdom breeds resentment rather than growth.' }
      ]
    },
    challengePrompt: 'Create a "Personal Code of Conduct" with 3 rules you will uphold even when no teacher or parent is watching.',
    reflectionPrompt: 'Write down a recent moment when you reacted in anger. How could self-leadership have changed the outcome?'
  },
  {
    id: 'journey-02',
    number: '02',
    numericIndex: 2,
    title: 'Character',
    tagline: 'Integrity in the dark. Consistency in the light.',
    shortDesc: 'Build an unshakeable moral anchor. Learn why reputation is what people think, while character is who you truly are.',
    fullDesc: 'Character is the foundation upon which all enduring leadership rests. Explore the courage to speak truth, uphold promises, and resist corrupting shortcuts in academic and social environments.',
    category: 'Foundation',
    status: 'Completed',
    progress: 100,
    estimatedMinutes: 50,
    iconName: 'ShieldCheck',
    keyQuote: 'Character is what you do when nobody is looking and when there is no prize for doing right.',
    sections: [],
    realLifeScenario: {
      title: 'The Leaked Test Question Papers',
      context: 'A classmate forwards a photo of what appears to be the upcoming Term Exam paper in Mathematics to your private WhatsApp class study group.',
      dilemma: 'Looking gives you an unfair advantage; reporting risks being labeled a betrayer by friends.',
      options: [
        { id: 'opt-1', title: 'Study the leaked paper silently', consequence: 'Destroys internal self-respect and leaves you unprepared for national WAEC exams.', leadershipInsight: 'Shortcuts in youth become lifelong moral handicaps in adulthood.' },
        { id: 'opt-2', title: 'Advise the group to delete it and report the breach privately', consequence: 'Protects the integrity of the school examination and earns the respect of moral leaders.', leadershipInsight: 'Moral courage requires putting truth above cheap popularity.' }
      ]
    },
    challengePrompt: 'Return something you borrowed or apologize to someone you wronged without making excuses.',
    reflectionPrompt: 'What is one temptation at school you regularly face, and what boundary will you put in place to guard your character?'
  },
  {
    id: 'journey-03',
    number: '03',
    numericIndex: 3,
    title: 'Responsibility',
    tagline: 'Stop passing the blame. Own your classroom, community, and future.',
    shortDesc: 'Transition from passive bystander to active steward of your school, family, and neighborhood environment.',
    fullDesc: 'Great leaders do not wait for permission to fix broken things. Understand social and environmental responsibility, from keeping school facilities pristine to supporting vulnerable classmates.',
    category: 'Foundation',
    status: 'Completed',
    progress: 100,
    estimatedMinutes: 40,
    iconName: 'Award',
    keyQuote: 'Responsibility is the price of freedom and the seed of leadership.',
    sections: [],
    realLifeScenario: {
      title: 'The Littered Assembly Hall',
      context: 'After the Friday cultural presentations, plastic bottles and snack wrappers are left scattered around the school quadrangle. It is not your class duty week.',
      dilemma: 'Should you walk past like everyone else, or take initiative?',
      options: [
        { id: 'opt-1', title: 'Take 3 minutes to pick up 5 items and encourage peers to join', consequence: 'Within 5 minutes, 10 other students start cleaning up.', leadershipInsight: 'Visible personal responsibility is contagious.' }
      ]
    },
    challengePrompt: 'Identify one messy or disorganized spot in your home or school and leave it immaculate today without being asked.',
    reflectionPrompt: 'What is an excuse you frequently use when you fall short of your duties? How will you replace it with ownership?'
  },
  {
    id: 'journey-04',
    number: '04',
    numericIndex: 4,
    title: 'Courage',
    tagline: 'Speak up for what is right, even when your voice shakes.',
    shortDesc: 'Overcome the paralysis of peer pressure, stand up against injustice, and dare to venture into unfamiliar territory.',
    fullDesc: 'Courage is not the absence of fear, but the conviction that something else is more important than fear. Learn tactical frameworks for confronting bullying, defending truth, and presenting ideas boldly.',
    category: 'Foundation',
    status: 'Completed',
    progress: 100,
    estimatedMinutes: 50,
    iconName: 'Flame',
    keyQuote: 'Courage is the first of human qualities because it is the quality which guarantees all others.',
    sections: [],
    realLifeScenario: {
      title: 'Standing Up Against Senior Bullying',
      context: 'You observe a senior student taking lunch money repeatedly from a quiet junior student in the dining hall.',
      dilemma: 'Intervening directly might attract victimization; staying silent makes you complicit.',
      options: [
        { id: 'opt-1', title: 'Bring a school counselor or trusted house master into the loop immediately with factual evidence', consequence: 'Stops the abuse safely without reckless physical altercation.', leadershipInsight: 'Courage pairs boldness with wisdom.' }
      ]
    },
    challengePrompt: 'Raise your hand first in a subject class where you normally stay quiet, or share your honest opinion in a group discussion.',
    reflectionPrompt: 'Recall a time you stayed silent when you should have spoken up. What held you back, and what would you do today?'
  },
  {
    id: 'journey-05',
    number: '05',
    numericIndex: 5,
    title: 'Empathy',
    tagline: 'Seek first to understand. Listen with your head and heart.',
    shortDesc: 'Step into the shoes of peers from diverse backgrounds, ethnic groups, and social circumstances across Nigeria.',
    fullDesc: 'Secondary schools bring together students of varying abilities, languages, and family backgrounds. Empathy allows you to bridge misunderstandings, de-escalate tension, and build lasting bonds of trust.',
    category: 'Interpersonal',
    status: 'Completed',
    progress: 100,
    estimatedMinutes: 45,
    iconName: 'HeartHandshake',
    keyQuote: 'You never really understand a person until you consider things from his point of view.',
    sections: [],
    realLifeScenario: {
      title: 'The Struggling Classmate in Mathematics',
      context: 'A student who just transferred from a rural school is repeatedly mocked for their accent and struggles with Quadratic Equations during class.',
      dilemma: 'Join in the laughter to fit in, or reach out privately to offer support?',
      options: [
        { id: 'opt-1', title: 'Invite them to your afternoon peer-revision desk', consequence: 'Builds a lasting friendship and helps them pass terminal tests.', leadershipInsight: 'Empathy transforms isolated peers into confident team contributors.' }
      ]
    },
    challengePrompt: 'Have a 10-minute uninterrupted conversation with someone at school you rarely talk to and ask about their interests.',
    reflectionPrompt: 'Whom in your class do people often judge unfairly? How can you show them dignity this week?'
  },
  {
    id: 'journey-06',
    number: '06',
    numericIndex: 6,
    title: 'Communication',
    tagline: 'Leadership begins with how we listen, speak and connect.',
    shortDesc: 'Master persuasive speaking, active listening, and constructive feedback in classrooms and teams.',
    fullDesc: 'Communication is the bridge between a good idea and a great movement. In this journey, you will learn the art of public presence, vocal projection without aggression, digital etiquette, and non-verbal posture.',
    category: 'Interpersonal',
    status: 'In Progress',
    progress: 72,
    estimatedMinutes: 55,
    iconName: 'MessageSquare',
    keyQuote: 'The most important thing in communication is hearing what isn\'t said.',
    sections: [
      { id: 's1', number: 1, title: 'Explore', summary: 'The 3 Pillars of Youth Communication: Clarity, Empathy, Conviction', content: 'Words build worlds or destroy trust. As a youth leader, your voice can inspire an entire assembly or defuse a fight in the hostel.', type: 'explore' },
      { id: 's2', number: 2, title: 'Real-Life Scenario', summary: 'The Class Prefect Debate & Inter-House Feud', content: 'A fierce argument erupts between Blue House and Green House during relay race selection...', type: 'scenario' },
      { id: 's3', number: 3, title: 'Interactive Workbook', summary: 'The Active Listening Checklist & Speech Structuring', content: 'Apply the "HOOK - STORY - POINT - ACTION" framework to construct a 2-minute inspiring speech.', type: 'workbook' },
      { id: 's4', number: 4, title: 'Challenge', summary: 'The 3-Minute Elevator Pitch to Your Class Prefect or Teacher', content: 'Deliver a concise proposal for a classroom improvement without using filler words like "erm" or "uhm".', type: 'challenge' },
      { id: 's5', number: 5, title: 'Reflection', summary: 'Where does your message get lost when you speak under pressure?', content: 'Record your personal reflections on how you handle disagreements during group work.', type: 'reflection' },
      { id: 's6', number: 6, title: 'Evidence', summary: 'Upload an audio/video recording or written speech transcript', content: 'Submit your 2-minute speech transcript and peer feedback scorecard.', type: 'evidence' },
      { id: 's7', number: 7, title: 'Assessment', summary: 'Communication Styles and Conflict Resolution Quiz', content: 'Assess your ability to de-escalate tension and communicate with clarity.', type: 'assessment' }
    ],
    realLifeScenario: {
      title: 'The Heated Prefect Election Disagreement',
      context: 'During student council nominations, your closest friend and a peer you respect both run for Head Boy/Girl. Rumors begin circulating on WhatsApp to discredit one candidate.',
      dilemma: 'How do you communicate truth without being accused of bias, and prevent your class from splitting into toxic factions?',
      options: [
        { id: 'opt-1', title: 'Post an angry counter-attack on your status', consequence: 'Escalates the controversy and drags you into toxic social media drama.', leadershipInsight: 'Emotional venting online permanently harms leadership credibility.' },
        { id: 'opt-2', title: 'Host a civil mediation conversation with both candidates present', consequence: 'Clears the misunderstanding and establishes an agreed code of respectful campaigning.', leadershipInsight: 'Effective communicators create safe spaces for respectful discourse.' },
        { id: 'opt-3', title: 'Refuse to talk to either candidate to protect yourself', consequence: 'Fails to protect the community from division when your voice was needed.', leadershipInsight: 'Leadership requires constructive engagement, not indifferent neutrality.' }
      ]
    },
    challengePrompt: 'Deliver a 2-minute speech explaining one positive change you want to see in your school without using "uh" or "um".',
    reflectionPrompt: 'When you are upset, do you tend to shout, withdraw silently, or speak with clear boundaries? What is your next growth step?'
  },
  {
    id: 'journey-07',
    number: '07',
    numericIndex: 7,
    title: 'Teamwork',
    tagline: 'Go fast alone. Go far together.',
    shortDesc: 'Unify different personalities, navigate conflicting egos, and align your team toward a shared victory.',
    fullDesc: 'Great accomplishments in Nigeria and across the globe are never the work of a single hero. Discover how to identify individual strengths, delegate responsibilities fairly, and celebrate collective wins.',
    category: 'Interpersonal',
    status: 'Open',
    progress: 25,
    estimatedMinutes: 50,
    iconName: 'Users',
    keyQuote: 'None of us is as smart as all of us.',
    sections: [],
    realLifeScenario: {
      title: 'The Inter-House Sports Drama',
      context: 'Your relay team has one brilliant runner who refuses to attend afternoon practice sessions because they think they do not need the team.',
      dilemma: 'Exclude the star runner and risk losing the trophy, or address the attitude while keeping the team united?',
      options: [
        { id: 'opt-1', title: 'Have an open 1-on-1 discussion about team baton exchange rhythm and shared pride', consequence: 'The runner understands that individual speed means nothing if the baton is dropped.', leadershipInsight: 'True leaders help stars see that chemistry beats isolated talent.' }
      ]
    },
    challengePrompt: 'Organize a 15-minute group study session for 3 classmates and ensure every member explains one topic.',
    reflectionPrompt: 'Do you prefer working alone or in a team? What weakness in your teamwork style can you improve?'
  },
  {
    id: 'journey-08',
    number: '08',
    numericIndex: 8,
    title: 'Problem-Solving',
    tagline: 'Look past the complaint. Engineer the solution.',
    shortDesc: 'Apply structured design thinking and root-cause analysis to real-world secondary school challenges.',
    fullDesc: 'Anyone can complain about bad roads, delayed schedules, or broken laboratory microscopes. Youth leaders diagnose the root cause, brainstorm resourceful alternatives, and test prototypes.',
    category: 'Action & Impact',
    status: 'Open',
    progress: 0,
    estimatedMinutes: 60,
    iconName: 'Lightbulb',
    keyQuote: 'We cannot solve our problems with the same thinking we used when we created them.',
    sections: [],
    realLifeScenario: {
      title: 'The Broken Library Borrowing System',
      context: 'Students constantly lose library books and the school administration is threatening to close borrowing privileges for everyone.',
      dilemma: 'Design a student-run digital or logbook solution that restores trust without requiring high expenses.',
      options: [
        { id: 'opt-1', title: 'Create a color-coded shelf register and assign student floor stewards', consequence: 'Missing books drop by 80% and library stays open.', leadershipInsight: 'Simple, low-cost operational systems often outperform expensive complaints.' }
      ]
    },
    challengePrompt: 'Identify one everyday annoyance in your school day and write a 1-page solution proposal for your principal or class teacher.',
    reflectionPrompt: 'When faced with an unexpected obstacle, is your first instinct to panic, blame, or brainstorm?'
  },
  {
    id: 'journey-09',
    number: '09',
    numericIndex: 9,
    title: 'Vision',
    tagline: 'See the preferred future before others can imagine it.',
    shortDesc: 'Define high personal aspirations, set meaningful milestones, and inspire others to dream bigger.',
    fullDesc: 'Where there is no vision, youth wander aimlessly. Learn how to map a 5-year academic and leadership roadmap, articulate purpose clearly, and stay anchored amidst short-term noise.',
    category: 'Action & Impact',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 45,
    iconName: 'Eye',
    keyQuote: 'Vision is the art of seeing what is invisible to others.',
    sections: [],
    realLifeScenario: {
      title: 'The Boring Club Revitalization',
      context: 'The Junior Engineers and Technicians (JETS) club in your school has dwindled to 4 inactive members doing rote blackboard calculations.',
      dilemma: 'How do you cast an exciting vision that attracts 50 energetic members?',
      options: [
        { id: 'opt-1', title: 'Propose a hands-on solar power phone-charging prototype project for the annual exhibition', consequence: 'Club membership triples as students see practical excitement.', leadershipInsight: 'Vision attracts energy when it connects learning to tangible impact.' }
      ]
    },
    challengePrompt: 'Create a Vision Board with 3 academic goals, 2 character goals, and 1 community contribution for this year.',
    reflectionPrompt: 'If you could fix one major challenge in your hometown in 10 years, what would it be and why?'
  },
  {
    id: 'journey-10',
    number: '10',
    numericIndex: 10,
    title: 'Decision-Making',
    tagline: 'Weigh consequences, stand on principles, execute with clarity.',
    shortDesc: 'Master mental models, assess risks, and make sound decisions under pressure and incomplete information.',
    fullDesc: 'A teenager makes hundreds of choices each week: what to browse, who to befriend, when to study, what to say. Discover how to evaluate long-term second-order consequences.',
    category: 'Action & Impact',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 50,
    iconName: 'GitMerge',
    keyQuote: 'You are free to make choices, but you are not free to choose the consequences of your choices.',
    sections: [],
    realLifeScenario: {
      title: 'The Party on the Eve of Physics Practical',
      context: 'An influential older student invites you to a late-night music concert on Friday evening before your Saturday morning state olympiad exam.',
      dilemma: 'Risk feeling left out or protect your preparation?',
      options: [
        { id: 'opt-1', title: 'Politely decline, explaining your competition commitment with calm confidence', consequence: 'You ace the practical exam and peers privately respect your discipline.', leadershipInsight: 'Leaders say "No" to good distractions so they can say "Yes" to destiny.' }
      ]
    },
    challengePrompt: 'Use the 10/10/10 Decision Matrix on a difficult choice you face today: How will you feel about it in 10 minutes, 10 months, and 10 years?',
    reflectionPrompt: 'What was the worst decision you made in the last 6 months, and what mental filter was missing?'
  },
  {
    id: 'journey-11',
    number: '11',
    numericIndex: 11,
    title: 'Self-Discipline',
    tagline: 'Doing what needs to be done, when it needs to be done, whether you feel like it or not.',
    shortDesc: 'Break procrastination, master time management, and build unshakeable study and fitness habits.',
    fullDesc: 'Motivation gets you started; self-discipline keeps you growing. Master the Pomodoro technique, digital detox protocols, and consistency systems that guarantee academic distinction.',
    category: 'Foundation',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 45,
    iconName: 'Zap',
    keyQuote: 'Discipline is choosing between what you want now and what you want most.',
    sections: [],
    realLifeScenario: {
      title: 'The Endless Social Media Scrolling Trap',
      context: 'You sit down at 7:00 PM to study Chemistry, but notifications on TikTok and Instagram draw you into a 2-hour rabbit hole.',
      dilemma: 'How do you design an environment where willpower isn\'t exhausted?',
      options: [
        { id: 'opt-1', title: 'Place your phone in another room and set a 45-minute focused timer', consequence: 'Complete your syllabus module on time and sleep peacefully.', leadershipInsight: 'Disciplined leaders control their environment so their environment does not control them.' }
      ]
    },
    challengePrompt: 'Complete a 24-hour non-academic screen-free challenge or finish your homework before turning on any screen.',
    reflectionPrompt: 'Which specific app or distraction steals the most hours from your potential each week?'
  },
  {
    id: 'journey-12',
    number: '12',
    numericIndex: 12,
    title: 'Resilience',
    tagline: 'Bounce back from failure stronger, wiser, and more determined.',
    shortDesc: 'Reframe academic setbacks, overcome rejection, and develop grit that outlasts hardship.',
    fullDesc: 'Every leader will fall down. What differentiates an INVENT leader is the ability to extract wisdom from failure, dust off humiliation, and step back into the arena with renewed tenacity.',
    category: 'Foundation',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 50,
    iconName: 'ShieldAlert',
    keyQuote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
    sections: [],
    realLifeScenario: {
      title: 'Failing the School Debate Selection',
      context: 'After weeks of rehearsals, the debate coordinator selects someone else to represent the school at the National Youth Debate Championships in Abuja.',
      dilemma: 'Do you become bitter and quit the debate society, or use the critique to sharpen your arguments?',
      options: [
        { id: 'opt-1', title: 'Congratulate the winner, ask the adjudicators for 2 specific points of feedback, and offer to spar with the team', consequence: 'You earn high respect from teachers and are appointed assistant coach for the tour.', leadershipInsight: 'Gracious resilience under disappointment is the highest proof of maturity.' }
      ]
    },
    challengePrompt: 'Identify a recent failure or poor grade. Write down 3 lessons it taught you that success never could.',
    reflectionPrompt: 'What failure in your past still makes you feel ashamed? How can you reframe it as training for future leadership?'
  },
  {
    id: 'journey-13',
    number: '13',
    numericIndex: 13,
    title: 'Influence',
    tagline: 'Lead without a title. Inspire change through character and service.',
    shortDesc: 'Learn the difference between manipulation and genuine influence. Rally peers toward noble causes.',
    fullDesc: 'You do not need to be the Head Boy, Head Girl, or class captain to lead. Learn the power of informal leadership: how personal excellence, kindness, and moral courage compel others to follow willingly.',
    category: 'Action & Impact',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 55,
    iconName: 'TrendingUp',
    keyQuote: 'Leadership is not about a title or a designation. It\'s about impact, influence and inspiration.',
    sections: [],
    realLifeScenario: {
      title: 'Turning the Tide of Class Cynicism',
      context: 'Your class has developed a reputation for shouting down teachers and mocking students who submit homework early.',
      dilemma: 'How do you shift the class culture without being isolated?',
      options: [
        { id: 'opt-1', title: 'Partner with 2 other respected peers to publicly thank teachers and ask smart questions during lessons', consequence: 'Within two weeks, the prevailing atmosphere shifts toward productive collaboration.', leadershipInsight: 'A small committed minority of leaders can transform an entire culture.' }
      ]
    },
    challengePrompt: 'Persuade 3 classmates to participate in a joint study or community initiative using positive vision instead of pressure.',
    reflectionPrompt: 'Who has the most influence over your choices today, and is that influence making you better or worse?'
  },
  {
    id: 'journey-14',
    number: '14',
    numericIndex: 14,
    title: 'Service',
    tagline: 'The highest calling of leadership is serving those who follow.',
    shortDesc: 'Design and execute a tangible community impact project that solves a real Nigerian challenge.',
    fullDesc: 'The capstone of the INVENT journey. True African leadership is not about entitlement, luxury, or subservience from others. It is about rolling up your sleeves to serve your school, community, and nation.',
    category: 'Action & Impact',
    status: 'Locked',
    progress: 0,
    estimatedMinutes: 60,
    iconName: 'HeartHandshake',
    keyQuote: 'Everybody can be great... because anybody can serve.',
    sections: [],
    realLifeScenario: {
      title: 'The Clean Water & Hygiene Project',
      context: 'The primary school adjacent to your secondary school lacks basic soap and hand-washing stations, leading to frequent illnesses.',
      dilemma: 'How can secondary school students mobilize resources to solve this sustainably?',
      options: [
        { id: 'opt-1', title: 'Organize a recycled plastic bottle hand-wash stand installation with student-made liquid soap', consequence: 'Provides 200 younger pupils with hygienic hand-washing facilities for the school term.', leadershipInsight: 'Servant leaders create generational impact right in their immediate neighborhood.' }
      ]
    },
    challengePrompt: 'Carry out one voluntary act of service for your school janitors, security guards, or canteen staff today.',
    reflectionPrompt: 'When you achieve success in your future career, how will you ensure your skills serve the underserved in Nigeria?'
  }
];

export const CURRENT_STUDENT: StudentProfile = {
  name: 'David Adewale',
  school: 'King\'s College, Lagos',
  classLevel: 'SSS 2 (Science)',
  age: 16,
  overallProgress: 37,
  journeysCompleted: 5,
  totalJourneys: 14,
  badgesCount: 8,
  evidenceCount: 12,
  certificatesCount: 1,
  currentJourneyId: 'journey-06',
  currentJourneyTitle: 'Communication',
  currentJourneyProgress: 72,
  streakDays: 14,
  strengths: ['Communication', 'Empathy', 'Responsibility'],
  areasToDevelop: ['Decision-Making', 'Resilience'],
  recentActivity: [
    { id: 'act-1', title: 'Submitted speech recording for Journey 06', timestamp: '2 hours ago', type: 'evidence' },
    { id: 'act-2', title: 'Earned "Empathy Champion" Badge', timestamp: 'Yesterday', type: 'badge' },
    { id: 'act-3', title: 'Completed Journey 05: Empathy', timestamp: '3 days ago', type: 'journey' },
    { id: 'act-4', title: 'Scored 92% on Leadership Strengths Assessment', timestamp: '1 week ago', type: 'assessment' }
  ]
};

export const BADGES_DATA: Badge[] = [
  {
    id: 'badge-01',
    title: 'Self-Leader',
    subtitle: 'Master of Habits & Direction',
    description: 'Completed Journey 01 and submitted a verified 7-day personal integrity tracker.',
    journeyId: 'journey-01',
    journeyNumber: '01',
    iconName: 'Compass',
    category: 'Foundation',
    earned: true,
    earnedDate: '12 Jan 2026',
    criteria: 'Complete Journey 01 workbook & log 7 days of personal accountability.'
  },
  {
    id: 'badge-02',
    title: 'Character Anchor',
    subtitle: 'Truth in Action',
    description: 'Demonstrated moral courage by resolving academic dilemmas with honesty and integrity.',
    journeyId: 'journey-02',
    journeyNumber: '02',
    iconName: 'ShieldCheck',
    category: 'Foundation',
    earned: true,
    earnedDate: '18 Jan 2026',
    criteria: 'Submit character pledge and analyze 3 real-world integrity scenarios.'
  },
  {
    id: 'badge-03',
    title: 'Responsibility Steward',
    subtitle: 'Ownership of Environment',
    description: 'Led a classroom cleanup or school environmental initiative without being instructed.',
    journeyId: 'journey-03',
    journeyNumber: '03',
    iconName: 'Award',
    category: 'Foundation',
    earned: true,
    earnedDate: '25 Jan 2026',
    criteria: 'Upload photographic evidence of a self-initiated school care project.'
  },
  {
    id: 'badge-04',
    title: 'Courageous Voice',
    subtitle: 'Standing Firm Against Peer Pressure',
    description: 'Spoke out against unfair treatment and shared an original perspective in class debates.',
    journeyId: 'journey-04',
    journeyNumber: '04',
    iconName: 'Flame',
    category: 'Foundation',
    earned: true,
    earnedDate: '02 Feb 2026',
    criteria: 'Complete the Courage scenario lab and voice defense challenge.'
  },
  {
    id: 'badge-05',
    title: 'Empathy Champion',
    subtitle: 'Bridge Builder Across Differences',
    description: 'Listened deeply to peers from different backgrounds and resolved peer misunderstandings.',
    journeyId: 'journey-05',
    journeyNumber: '05',
    iconName: 'HeartHandshake',
    category: 'Interpersonal',
    earned: true,
    earnedDate: '10 Feb 2026',
    criteria: 'Mentor a junior or struggling classmate for at least 2 study sessions.'
  },
  {
    id: 'badge-06',
    title: 'Communication Pro',
    subtitle: 'Eloquent & Persuasive Orator',
    description: 'Mastered the hook-story-point speech framework and defused high-stakes conflict.',
    journeyId: 'journey-06',
    journeyNumber: '06',
    iconName: 'MessageSquare',
    category: 'Interpersonal',
    earned: true,
    earnedDate: '18 Feb 2026',
    criteria: 'Deliver an inspirational 3-minute speech and submit peer evaluation scores.'
  },
  {
    id: 'badge-07',
    title: 'Team Player',
    subtitle: 'Catalyst for Collective Win',
    description: 'Facilitated group unity, shared credit generously, and helped struggling teammates excel.',
    journeyId: 'journey-07',
    journeyNumber: '07',
    iconName: 'Users',
    category: 'Interpersonal',
    earned: true,
    earnedDate: '24 Feb 2026',
    criteria: 'Lead an inter-house or group assignment team with documented team consensus.'
  },
  {
    id: 'badge-08',
    title: 'Problem Solver',
    subtitle: 'Design Thinking Explorer',
    description: 'Identified a systemic bottleneck in school operations and engineered a low-cost solution.',
    journeyId: 'journey-08',
    journeyNumber: '08',
    iconName: 'Lightbulb',
    category: 'Action & Impact',
    earned: true,
    earnedDate: '01 Mar 2026',
    criteria: 'Submit an approved 1-page solution proposal with mentor verification.'
  },
  {
    id: 'badge-09',
    title: 'Vision Builder',
    subtitle: 'Architect of Tomorrow',
    description: 'Formulated a comprehensive 5-year academic, leadership, and community impact blueprint.',
    journeyId: 'journey-09',
    journeyNumber: '09',
    iconName: 'Eye',
    category: 'Action & Impact',
    earned: false,
    criteria: 'Complete Journey 09 and present personal vision board to mentor.'
  },
  {
    id: 'badge-10',
    title: 'Sound Decider',
    subtitle: 'Analytical & Ethical Judgement',
    description: 'Applied consequence matrices to navigate difficult social and academic crossroads.',
    journeyId: 'journey-10',
    journeyNumber: '10',
    iconName: 'GitMerge',
    category: 'Action & Impact',
    earned: false,
    criteria: 'Solve all 5 advanced decision simulations in Journey 10.'
  },
  {
    id: 'badge-11',
    title: 'Discipline Master',
    subtitle: 'Conqueror of Distraction',
    description: 'Maintained 30 uninterrupted days of consistent study routines and digital boundaries.',
    journeyId: 'journey-11',
    journeyNumber: '11',
    iconName: 'Zap',
    category: 'Foundation',
    earned: false,
    criteria: 'Submit 30-day focus logs with parent signature verification.'
  },
  {
    id: 'badge-12',
    title: 'Resilient Leader',
    subtitle: 'Unbreakable Spirit',
    description: 'Extracted profound wisdom from a major failure or setback and coached others through grief.',
    journeyId: 'journey-12',
    journeyNumber: '12',
    iconName: 'ShieldAlert',
    category: 'Foundation',
    earned: false,
    criteria: 'Complete the Failure-to-Strength reflective portfolio module.'
  },
  {
    id: 'badge-13',
    title: 'Transformational Influencer',
    subtitle: 'Leading Without a Title',
    description: 'Catalyzed positive behavioral shifts in a group or dormitory through moral example.',
    journeyId: 'journey-13',
    journeyNumber: '13',
    iconName: 'TrendingUp',
    category: 'Action & Impact',
    earned: false,
    criteria: 'Submit testimonials from 3 classmates on positive culture change.'
  },
  {
    id: 'badge-14',
    title: 'Service Champion',
    subtitle: 'Servant Leader of the Nation',
    description: 'Designed, funded, and implemented a verifiable community service project impacting 50+ people.',
    journeyId: 'journey-14',
    journeyNumber: '14',
    iconName: 'HeartHandshake',
    category: 'Action & Impact',
    earned: false,
    criteria: 'Execute the INVENT Capstone Community Impact Project with formal documentation.'
  }
];

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev-01',
    studentName: 'David Adewale',
    studentClass: 'SSS 2',
    studentSchool: 'King\'s College Lagos',
    journeyNumber: '06',
    journeyTitle: 'Communication',
    submissionDate: '10 Mar 2026',
    type: 'Video',
    title: 'Class Prefect Debate Speech & De-escalation Talk',
    description: 'Delivered a 3-minute persuasive speech during Friday Assembly on conflict resolution between senior and junior boarding students.',
    status: 'Under Review',
    feedback: 'Excellent vocal projection and clear structure. Waiting for final mentor rubric evaluation.',
    mentorName: 'Mr. Emmanuel Okafor',
    attachments: [{ name: 'prefect_speech_audio.mp4', size: '14.2 MB', type: 'video/mp4' }]
  },
  {
    id: 'ev-02',
    studentName: 'David Adewale',
    studentClass: 'SSS 2',
    studentSchool: 'King\'s College Lagos',
    journeyNumber: '05',
    journeyTitle: 'Empathy',
    submissionDate: '26 Feb 2026',
    type: 'Project',
    title: 'Peer Mathematics Study Circle for Transferred Students',
    description: 'Organized a weekly 45-minute revision circle for 4 students struggling with WAEC syllabus topics after relocating to Lagos.',
    status: 'Approved',
    feedback: 'Outstanding servant leadership, David! The students\' diagnostic test scores improved noticeably by 22%.',
    mentorName: 'Mrs. Folake Adeleke',
    mentorReviewedDate: '28 Feb 2026',
    attachments: [{ name: 'study_circle_notes.pdf', size: '2.4 MB', type: 'application/pdf' }]
  },
  {
    id: 'ev-03',
    studentName: 'David Adewale',
    studentClass: 'SSS 2',
    studentSchool: 'King\'s College Lagos',
    journeyNumber: '04',
    journeyTitle: 'Courage',
    submissionDate: '14 Feb 2026',
    type: 'Reflection',
    title: 'Personal Reflection: Speaking Up in the Hostel',
    description: 'Documented my internal moral dilemma when witnessing illegal lights-out extortion and how I reported it constructively to the housemaster.',
    status: 'Approved',
    feedback: 'Exemplary moral clarity. You upheld safety while maintaining respect for school authority.',
    mentorName: 'Mr. Emmanuel Okafor',
    mentorReviewedDate: '16 Feb 2026'
  },
  {
    id: 'ev-04',
    studentName: 'David Adewale',
    studentClass: 'SSS 2',
    studentSchool: 'King\'s College Lagos',
    journeyNumber: '03',
    journeyTitle: 'Responsibility',
    submissionDate: '02 Feb 2026',
    type: 'Photo',
    title: 'Science Laboratory Safety & Glassware Organization Project',
    description: 'Spent Saturday morning cataloging and properly storing Chemistry lab reagents that were haphazardly left on demonstration benches.',
    status: 'Approved',
    feedback: 'Teacher in charge of science praised your diligence. Full marks awarded.',
    mentorName: 'Mr. Emmanuel Okafor',
    mentorReviewedDate: '04 Feb 2026',
    attachments: [{ name: 'lab_before_after.jpg', size: '4.1 MB', type: 'image/jpeg' }]
  },
  {
    id: 'ev-05',
    studentName: 'Chiamaka Obi',
    studentClass: 'SSS 1',
    studentSchool: 'Corona Secondary School, Agbara',
    journeyNumber: '01',
    journeyTitle: 'Self-Leadership',
    submissionDate: '09 Mar 2026',
    type: 'Document',
    title: '7-Day Morning Integrity Journal & Wake-up Log',
    description: 'Tracked my morning routines, eliminated social media before school prep, and practiced daily gratitude affirmations.',
    status: 'Approved',
    feedback: 'Inspiring discipline! You are setting a wonderful tone for your secondary school journey.',
    mentorName: 'Mrs. Chinelo Eze',
    mentorReviewedDate: '10 Mar 2026'
  },
  {
    id: 'ev-06',
    studentName: 'Tolu Adeyemi',
    studentClass: 'JSS 3',
    studentSchool: 'Queen\'s College, Yaba',
    journeyNumber: '07',
    journeyTitle: 'Teamwork',
    submissionDate: '11 Mar 2026',
    type: 'Challenge submission',
    title: 'Junior House Quiz Team Coordination Log',
    description: 'Assigned study topics based on individual strengths and ran practice quiz drills for our house team.',
    status: 'Under Review',
    feedback: 'Received submission. Review scheduled for tomorrow morning.',
    mentorName: 'Mr. Emmanuel Okafor'
  },
  {
    id: 'ev-07',
    studentName: 'Emeka Nwosu',
    studentClass: 'SSS 3',
    studentSchool: 'Loyola Jesuit College, Abuja',
    journeyNumber: '10',
    journeyTitle: 'Decision-Making',
    submissionDate: '08 Mar 2026',
    type: 'Reflection',
    title: 'Career & University Choice Decision Matrix',
    description: 'Evaluated my options between Mechatronics Engineering and Software Architecture using probability trade-offs.',
    status: 'Needs Revision',
    feedback: 'Good logic, but please consult your school guidance counselor and include their feedback in section 3.',
    mentorName: 'Dr. Amina Danjuma',
    mentorReviewedDate: '09 Mar 2026'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-01',
    title: 'Foundation of Youth Leadership Certificate',
    recipientName: 'David Adewale',
    recipientSchool: 'King\'s College Lagos',
    recipientClass: 'SSS 2',
    completionTitle: 'Completed Foundations of Leadership: Journeys 01–05',
    issueDate: '15 February 2026',
    certificateNumber: 'INVENT-2026-FND-0842',
    verificationCode: 'INV-9824-NG',
    mentorSignature: 'Mr. Emmanuel Okafor (Senior Mentor)',
    directorSignature: 'Dr. Stella Babatunde (Executive Director, INVENT Africa)'
  },
  {
    id: 'cert-02',
    title: '14 Powers of Leadership Certificate of Distinction',
    recipientName: 'David Adewale',
    recipientSchool: 'King\'s College Lagos',
    recipientClass: 'SSS 2',
    completionTitle: 'Full 14 Powers of Leadership & Capstone Project',
    issueDate: 'Pending Completion (Expected July 2026)',
    certificateNumber: 'INVENT-2026-CAP-PENDING',
    verificationCode: 'INV-PROVISIONAL',
    mentorSignature: 'Mr. Emmanuel Okafor (Senior Mentor)',
    directorSignature: 'Dr. Stella Babatunde (Executive Director, INVENT Africa)'
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    scenario: 'Group Project Conflict',
    context: 'During a biology term project, one group member consistently arrives late, does not complete their assigned research section, and jokes around when you try to work.',
    options: [
      { id: '1a', text: 'Pull them aside privately, explain the impact on the group, and ask what is preventing them from contributing.', dimension: 'Communication', score: 10 },
      { id: '1b', text: 'Immediately report them to the subject teacher to get them removed from your group.', dimension: 'Responsibility', score: 4 },
      { id: '1c', text: 'Do their part of the project late at night without saying anything to avoid trouble.', dimension: 'Self-Leadership', score: 2 },
      { id: '1d', text: 'Mock them openly in class so they feel embarrassed into working.', dimension: 'Teamwork', score: 0 }
    ]
  },
  {
    id: 2,
    scenario: 'Academic Pressure & Moral Dilemma',
    context: 'You discover that an important mock examination question paper has been leaked into a private WhatsApp group you belong to.',
    options: [
      { id: '2a', text: 'Mute the group, do not open the leaked file, and rely on your honest preparation.', dimension: 'Self-Leadership', score: 8 },
      { id: '2b', text: 'Warn the group admins about the danger of cheating and alert your guidance counselor anonymously.', dimension: 'Responsibility', score: 10 },
      { id: '2c', text: 'Open the paper "just to see what type of questions are coming" but promise not to memorize answers.', dimension: 'Decision-Making', score: 2 },
      { id: '2d', text: 'Forward it to your best friends so everyone gets an advantage.', dimension: 'Teamwork', score: 0 }
    ]
  },
  {
    id: 3,
    scenario: 'Public Speaking & Hesitation',
    context: 'Your school is hosting an inter-school symposium and the principal asks for two students to volunteer to deliver a welcome speech to dignitaries.',
    options: [
      { id: '3a', text: 'Raise your hand immediately, write an outline, and ask an English teacher for rehearsal feedback.', dimension: 'Communication', score: 10 },
      { id: '3b', text: 'Wait to see if your friends volunteer before deciding whether to join.', dimension: 'Decision-Making', score: 4 },
      { id: '3c', text: 'Recommend a classmate who is outspoken because you believe you might stutter.', dimension: 'Empathy', score: 5 },
      { id: '3d', text: 'Look down at your shoes so the principal does not notice you.', dimension: 'Self-Leadership', score: 0 }
    ]
  },
  {
    id: 4,
    scenario: 'Handling Harsh Criticism',
    context: 'Your housemaster critiques your inter-house sports organization harshly in front of junior students, pointing out multiple disorganized logistics.',
    options: [
      { id: '4a', text: 'Listen calmly, note the valid operational lapses, apologize for the oversights, and correct the setup immediately.', dimension: 'Resilience', score: 10 },
      { id: '4b', text: 'Argue back defensively pointing out that it was not your personal fault alone.', dimension: 'Communication', score: 2 },
      { id: '4c', text: 'Walk away angrily and refuse to participate in any other sports committee activities.', dimension: 'Self-Leadership', score: 0 },
      { id: '4d', text: 'Smile politely on the surface but complain bitterly to your classmates behind his back.', dimension: 'Responsibility', score: 2 }
    ]
  },
  {
    id: 5,
    scenario: 'Supporting a Struggling Peer',
    context: 'A student in your arm of the class recently transferred from another state. They speak with an unfamiliar accent and classmates frequently giggle whenever they read aloud in class.',
    options: [
      { id: '5a', text: 'Sit next to them at break time, introduce yourself warmly, and invite them into your study group.', dimension: 'Empathy', score: 10 },
      { id: '5b', text: 'Stay silent and don\'t laugh, but keep your distance to avoid being teased by friends.', dimension: 'Self-Leadership', score: 4 },
      { id: '5c', text: 'Laugh along with the class because you don\'t want to be singled out as strange.', dimension: 'Teamwork', score: 0 },
      { id: '5d', text: 'Tell the bullies to keep quiet in a loud, aggressive shout that causes a classroom fight.', dimension: 'Communication', score: 3 }
    ]
  },
  {
    id: 6,
    scenario: 'Unexpected Failure in Competition',
    context: 'You spent months preparing for the State Science Olympiad, but you did not advance past the preliminary stage.',
    options: [
      { id: '6a', text: 'Request your scorecard breakdown, identify the exact concept gaps, and create a revision schedule for next year.', dimension: 'Resilience', score: 10 },
      { id: '6b', text: 'Decide that the examiners were biased or corrupt and abandon science competitions completely.', dimension: 'Decision-Making', score: 0 },
      { id: '6c', text: 'Feel dejected for two weeks and avoid talking about academics with anyone.', dimension: 'Self-Leadership', score: 2 },
      { id: '6d', text: 'Congratulate the students who qualified and ask them how they prepared.', dimension: 'Empathy', score: 8 }
    ]
  },
  {
    id: 7,
    scenario: 'Time Management Under Crunch',
    context: 'You have a chemistry lab report due tomorrow, chores assigned by your parents tonight, and your favorite football team is playing a crucial match on TV.',
    options: [
      { id: '7a', text: 'Complete the chores first, do the lab report diligently, and watch match highlights later.', dimension: 'Self-Leadership', score: 10 },
      { id: '7b', text: 'Watch the football match first and attempt to rush the lab report at 4:30 AM before school.', dimension: 'Decision-Making', score: 2 },
      { id: '7c', text: 'Copy a classmate\'s lab report in the morning bus on the way to school.', dimension: 'Responsibility', score: 0 },
      { id: '7d', text: 'Pretend you are feeling sick so your parents excuse you from chores.', dimension: 'Self-Leadership', score: 0 }
    ]
  },
  {
    id: 8,
    scenario: 'Delegating in a Group Effort',
    context: 'As the leader of the Cultural Day Drama Presentation, you realize opening day is in 3 days and costumes, scripts, and stage props are only half ready.',
    options: [
      { id: '8a', text: 'Convene an immediate huddle, assign clear individual roles according to student talents, and set strict check-in checkpoints.', dimension: 'Teamwork', score: 10 },
      { id: '8b', text: 'Stay up all night trying to sew costumes and paint props entirely by yourself.', dimension: 'Self-Leadership', score: 3 },
      { id: '8c', text: 'Panic and announce to the teacher that the presentation cannot hold.', dimension: 'Resilience', score: 0 },
      { id: '8d', text: 'Shout at everyone for being lazy without offering an updated plan.', dimension: 'Communication', score: 0 }
    ]
  },
  {
    id: 9,
    scenario: 'Ethical Leadership Choice',
    context: 'During prefect elections, your best friend asks you to spread a false rumor about the leading opponent so your friend can win the post of Senior Prefect.',
    options: [
      { id: '9a', text: 'Refuse firmly, explain that true victory cannot come through slander, and advise them to win on merit.', dimension: 'Decision-Making', score: 10 },
      { id: '9b', text: 'Help spread the rumor because loyalty to your friend comes above all else.', dimension: 'Teamwork', score: 0 },
      { id: '9c', text: 'Tell them you will do it, but secretly do nothing so you don\'t upset them.', dimension: 'Communication', score: 3 },
      { id: '9d', text: 'Stop being friends with them without explaining why.', dimension: 'Empathy', score: 2 }
    ]
  },
  {
    id: 10,
    scenario: 'Community Initiative',
    context: 'The open gutter in front of your school entrance frequently clogs during the rainy season, causing stagnant water and unpleasant odor for pupils.',
    options: [
      { id: '10a', text: 'Draft a simple proposal to the School Environmental Club and principal to organize a Saturday student-staff clearing initiative.', dimension: 'Responsibility', score: 10 },
      { id: '10b', text: 'Complain on social media with photos about how terrible the local council is.', dimension: 'Communication', score: 3 },
      { id: '10c', text: 'Jump over the gutter every morning and ignore it since you do not live in the school.', dimension: 'Self-Leadership', score: 0 },
      { id: '10d', text: 'Wait for the state government to fix it someday.', dimension: 'Decision-Making', score: 1 }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'FREE',
    price: '₦0',
    period: 'forever',
    description: 'Explore the foundations of leadership with zero barriers. Ideal for discovering the platform.',
    features: [
      'Access to Journey 01: Self-Leadership',
      'Interactive Leadership Strengths Assessment',
      'Personal Diagnostic Report',
      'Sample Real-Life Scenarios',
      'Basic Student Portfolio Profile',
      'Community Guidelines'
    ],
    ctaText: 'Start Free'
  },
  {
    id: 'leadership-pass',
    name: 'LEADERSHIP PASS',
    price: '₦15,000',
    period: 'per year',
    description: 'The complete leadership curriculum for Nigerian secondary students committed to personal mastery.',
    popular: true,
    badge: 'MOST POPULAR',
    features: [
      'All 14 Leadership Powers & Journeys',
      'Full Interactive Workbooks & Audio Guides',
      'Weekly Real-World Action Challenges',
      'Comprehensive Leadership Portfolio',
      'All 14 Badges & Official Certificate',
      'Dedicated Parent Dashboard & Progress Sync',
      'Offline Access for Mobile & Tablets',
      'Direct Peer Study Community Access'
    ],
    ctaText: 'Choose Plan'
  },
  {
    id: 'leadership-plus',
    name: 'LEADERSHIP PLUS',
    price: '₦30,000',
    period: 'per year',
    description: 'High-touch mentorship for students targeting prefectship, university scholarships, and national impact.',
    features: [
      'Everything in Leadership Pass',
      'Dedicated Personal Mentor Assignment',
      'Written Rubric Feedback on all 14 Evidence Submissions',
      'Capstone Community Project Mentorship',
      'Letter of Leadership Recommendation for University/Visa',
      'Quarterly 1-on-1 Virtual Leadership Coaching',
      'Priority Invitation to INVENT National Youth Summit'
    ],
    ctaText: 'Choose Plan'
  }
];

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'New Weekly Challenge Active',
    message: 'Journey 06: Deliver a 2-minute constructive proposal to your class teacher.',
    timestamp: '15 minutes ago',
    read: false,
    type: 'challenge'
  },
  {
    id: 'notif-2',
    title: 'Mentor Feedback Received',
    message: 'Mr. Emmanuel Okafor reviewed your Mathematics Study Circle evidence.',
    timestamp: '2 hours ago',
    read: false,
    type: 'feedback'
  },
  {
    id: 'notif-3',
    title: 'Achievement Unlocked!',
    message: 'You earned the "Empathy Champion" badge. Keep going!',
    timestamp: 'Yesterday',
    read: true,
    type: 'badge'
  },
  {
    id: 'notif-4',
    title: 'Daily Practice Reminder',
    message: 'Leadership is practiced daily. Have you logged your reflection for today?',
    timestamp: '1 day ago',
    read: true,
    type: 'reminder'
  }
];

export const SCHOOL_STUDENTS_MOCK = [
  { id: 'stu-1', name: 'David Adewale', class: 'SSS 2A', progress: 37, journeys: '5 / 14', badges: 8, status: 'Active', lastActive: 'Today' },
  { id: 'stu-2', name: 'Chiamaka Obi', class: 'SSS 1B', progress: 78, journeys: '11 / 14', badges: 11, status: 'Active', lastActive: 'Today' },
  { id: 'stu-3', name: 'Tolu Adeyemi', class: 'JSS 3C', progress: 42, journeys: '6 / 14', badges: 7, status: 'Active', lastActive: 'Yesterday' },
  { id: 'stu-4', name: 'Aisha Bello', class: 'SSS 2A', progress: 92, journeys: '13 / 14', badges: 13, status: 'Active', lastActive: 'Today' },
  { id: 'stu-5', name: 'Daniel Eze', class: 'SSS 3C', progress: 100, journeys: '14 / 14', badges: 14, status: 'Completed', lastActive: '2 days ago' },
  { id: 'stu-6', name: 'Favour Okafor', class: 'JSS 2B', progress: 28, journeys: '4 / 14', badges: 5, status: 'Active', lastActive: '3 days ago' },
  { id: 'stu-7', name: 'Emeka Nwosu', class: 'SSS 3A', progress: 64, journeys: '9 / 14', badges: 10, status: 'Active', lastActive: 'Yesterday' },
  { id: 'stu-8', name: 'Zainab Danjuma', class: 'SSS 1A', progress: 50, journeys: '7 / 14', badges: 8, status: 'Active', lastActive: 'Today' }
];

// Aliases for unified importing across views
export const MOCK_JOURNEYS = JOURNEYS_DATA;
export const MOCK_STUDENT_PROFILE = {
  ...CURRENT_STUDENT,
  classGrade: CURRENT_STUDENT.classLevel,
  mentorName: 'Mr. Emmanuel Okafor',
  completedJourneys: CURRENT_STUDENT.journeysCompleted
};
export const MOCK_BADGES = BADGES_DATA;
export const MOCK_EVIDENCE = EVIDENCE_ITEMS;
export const MOCK_CERTIFICATES = CERTIFICATES_DATA;
export const MOCK_NOTIFICATIONS = NOTIFICATIONS_DATA;

export const MOCK_PARENT_PROFILE = {
  parentName: 'Mrs. Adeyemi',
  children: [
    {
      id: 'child-1',
      name: 'David Adewale',
      classGrade: 'SSS 2 (Science)',
      school: 'King\'s College Lagos',
      progress: 68,
      completedJourneys: 9,
      badges: 11,
      evidenceSubmitted: 18,
      currentJourney: 'Resilience (Journey 11)',
      conversationStarterPrompt: 'Ask your child about a time they had to keep going even when something became difficult.'
    },
    {
      id: 'child-2',
      name: 'Tolu Adeyemi',
      classGrade: 'JSS 2 (Emerald)',
      school: 'Corona Secondary School',
      progress: 42,
      completedJourneys: 6,
      badges: 7,
      evidenceSubmitted: 8,
      currentJourney: 'Courage (Journey 04)',
      conversationStarterPrompt: 'Ask your child how they handle speaking up in class when classmates disagree.'
    }
  ]
};

export const MOCK_SCHOOL_COHORT = {
  schoolName: 'King\'s College Lagos',
  principalName: 'Alhaji A. B. Mohammed',
  academicYear: '2025 / 2026 Academic Session',
  totalStudents: 245,
  activeStudents: 218,
  completedJourneysCount: 1284,
  certificatesIssued: 173,
  averageProgress: 64,
  students: [
    { id: 'st-1', name: 'David Adewale', classGrade: 'SSS 2', currentJourney: 'Communication (06)', progress: 74, badges: 8, status: 'On Track' },
    { id: 'st-2', name: 'Chiamaka Obi', classGrade: 'SSS 1', currentJourney: 'Decision-Making (10)', progress: 85, badges: 11, status: 'Ahead' },
    { id: 'st-3', name: 'Tolu Adeyemi', classGrade: 'JSS 3', currentJourney: 'Courage (04)', progress: 42, badges: 6, status: 'On Track' },
    { id: 'st-4', name: 'Aisha Bello', classGrade: 'SSS 2', currentJourney: 'Transformational (13)', progress: 92, badges: 13, status: 'Ahead' },
    { id: 'st-5', name: 'Daniel Eze', classGrade: 'SSS 3', currentJourney: 'Service Champion (14)', progress: 100, badges: 14, status: 'Ahead' },
    { id: 'st-6', name: 'Favour Okafor', classGrade: 'JSS 3', currentJourney: 'Responsibility (03)', progress: 28, badges: 4, status: 'Needs Support' },
    { id: 'st-7', name: 'Emeka Nwosu', classGrade: 'SSS 2', currentJourney: 'Critical Thinking (09)', progress: 64, badges: 9, status: 'On Track' },
    { id: 'st-8', name: 'Zainab Danjuma', classGrade: 'SSS 1', currentJourney: 'Teamwork (07)', progress: 50, badges: 7, status: 'On Track' }
  ]
};

export const PRICING_TIERS = [
  {
    id: 'free',
    name: 'Free Starter',
    price: '₦0',
    period: 'forever',
    description: 'Explore foundational leadership habits with zero barriers. Ideal for trying out the platform.',
    features: [
      'Access to Journey 01 (Self-Leadership) & 02 (Character)',
      'Leadership Strengths Diagnostic Assessment',
      'Personal Diagnostic Report Card',
      'Interactive Workbooks (Sample)',
      'Basic Student Portfolio Profile'
    ],
    cta: 'Start Free Journey',
    isPopular: false
  },
  {
    id: 'pass',
    name: 'Leadership Pass',
    price: '₦15,000',
    period: '/ year per student',
    description: 'The standard leadership journey curriculum for ambitious Nigerian secondary students.',
    features: [
      'All 14 Leadership Powers & Journeys',
      'Interactive Reflection Workbooks & Scenario Labs',
      'Real-World Evidence Uploads (Photos, Audio, Video)',
      'All 14 Verifiable Digital Badges',
      'Accredited INVENT Leadership Certificate',
      'Parent Companion Dashboard with Weekly Prompts',
      'Full Offline Mode for low-bandwidth areas'
    ],
    cta: 'Enroll Now',
    isPopular: true
  },
  {
    id: 'plus',
    name: 'Leadership Plus',
    price: '₦30,000',
    period: '/ year per student',
    description: 'Elevated mentorship for prefect candidates, scholarship applicants, and student leaders.',
    features: [
      'Everything in Leadership Pass',
      'Dedicated Certified Educator Rubric Review',
      'Quarterly 1-on-1 Virtual Leadership Mentorship',
      'Official Verifiable Embossed Printed Certificate',
      'Free Courier Delivery to home or school across Nigeria',
      'Formal Letter of Leadership Recommendation'
    ],
    cta: 'Get Mentored',
    isPopular: false
  }
];

export const SCHOOL_PRICING_TIERS = [
  {
    id: 'school-starter',
    name: 'School Starter',
    price: '₦250,000',
    period: '/ year (Up to 100 students)',
    description: 'Perfect for single arm or class cohort rollout (e.g. SSS 1 or JSS 1).',
    features: [
      'Up to 100 Student Licenses',
      'School Admin Dashboard & Character Analytics',
      'Teacher / Mentor Grading & Rubric Portal',
      'Bulk Student Onboarding via CSV',
      'Official School Accreditation Badge'
    ],
    cta: 'Request School License',
    isPopular: false
  },
  {
    id: 'school-growth',
    name: 'School Growth',
    price: '₦550,000',
    period: '/ year (Up to 300 students)',
    description: 'Comprehensive character education curriculum for entire Junior or Senior secondary cohorts.',
    features: [
      'Up to 300 Student Licenses',
      'Prefect & Student Council Preparation Module',
      'Teacher Training & Mentorship Workshop (Virtual)',
      'Termly Character Formation Impact Reports',
      'Verified Certificates with School Co-Branding',
      'Dedicated Customer Success Representative'
    ],
    cta: 'Partner with INVENT',
    isPopular: true
  },
  {
    id: 'school-enterprise',
    name: 'School Enterprise',
    price: '₦1,200,000',
    period: '/ year (Whole school 600+)',
    description: 'Full institutional deployment across JSS 1 through SSS 3 with on-site prefect retreat.',
    features: [
      'Unlimited Student Enrollment',
      'On-Campus Prefect Leadership Bootcamp (1 Day)',
      'Custom School Values Integration into Journey Workbooks',
      'Priority Support & Dedicated Mentor Team',
      'Annual Leadership Awards Sponsorship'
    ],
    cta: 'Contact Institutional Board',
    isPopular: false
  }
];

