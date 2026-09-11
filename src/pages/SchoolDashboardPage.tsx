import React, { useState } from 'react';
import { 
  School, 
  Users, 
  Award, 
  CheckCircle2, 
  Search, 
  Filter, 
  Printer, 
  Download, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { MOCK_SCHOOL_COHORT } from '../data/mockData';
import { ProgressBar } from '../components/ProgressBar';

export const SchoolDashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');

  const filteredStudents = MOCK_SCHOOL_COHORT.students.filter((st) => {
    const matchesSearch = st.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === 'All' || st.classGrade.startsWith(selectedClass);
    return matchesSearch && matchesClass;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* School Admin Header */}
        <div className="bg-[#071B33] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold text-[#FFB703] uppercase">
              <School className="w-3.5 h-3.5" />
              <span>Institutional School Portal</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-white">
              {MOCK_SCHOOL_COHORT.schoolName}
            </h1>
            <p className="text-sm text-slate-300">
              Administered by {MOCK_SCHOOL_COHORT.principalName} • {MOCK_SCHOOL_COHORT.academicYear}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl border border-slate-700 bg-[#0D2745] hover:bg-[#13335a] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4 text-[#FFB703]" />
              <span>Export Cohort Report</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Enrolled Students</span>
            <p className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">{MOCK_SCHOOL_COHORT.totalStudents}</p>
            <span className="text-[10px] text-slate-400">JSS 1 – SSS 3</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Active Learners</span>
            <p className="font-sora text-3xl font-extrabold text-[#159A6C] mt-2">{MOCK_SCHOOL_COHORT.activeStudents}</p>
            <span className="text-[10px] text-emerald-600 font-bold">89% engagement</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Journeys Mastered</span>
            <p className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">{MOCK_SCHOOL_COHORT.completedJourneysCount}</p>
            <span className="text-[10px] text-slate-400">Total completed</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Certificates Issued</span>
            <p className="font-sora text-3xl font-extrabold text-[#FFB703] mt-2">{MOCK_SCHOOL_COHORT.certificatesIssued}</p>
            <span className="text-[10px] text-[#FFB703] font-bold">Official credentials</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
            <span className="text-xs font-semibold text-slate-500">Cohort Average</span>
            <p className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">{MOCK_SCHOOL_COHORT.averageProgress}%</p>
            <div className="mt-2">
              <ProgressBar progress={MOCK_SCHOOL_COHORT.averageProgress} size="sm" showPercentage={false} />
            </div>
          </div>
        </div>

        {/* Student Cohort Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-sora text-xl font-bold text-[#071B33]">
                Student Leadership Registry
              </h2>
              <p className="text-xs text-slate-500">
                Live character development and evidence tracking across all registered students.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center gap-3">
              <div className="relative w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by student name..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                />
              </div>

              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                <option value="All">All Classes</option>
                <option value="SSS 2">SSS 2</option>
                <option value="SSS 1">SSS 1</option>
                <option value="JSS 3">JSS 3</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Class</th>
                  <th className="py-3 px-4">Active Journey</th>
                  <th className="py-3 px-4">Progress</th>
                  <th className="py-3 px-4">Badges</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#071B33]">
                      {st.name}
                    </td>
                    <td className="py-3.5 px-4">
                      {st.classGrade}
                    </td>
                    <td className="py-3.5 px-4">
                      {st.currentJourney}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#071B33]">{st.progress}%</span>
                        <div className="w-16">
                          <ProgressBar progress={st.progress} size="sm" showPercentage={false} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#071B33] font-bold">
                        {st.badges} badges
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        st.status === 'Ahead'
                          ? 'bg-emerald-100 text-emerald-800'
                          : st.status === 'On Track'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {st.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};
