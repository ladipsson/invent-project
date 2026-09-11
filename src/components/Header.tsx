import React, { useState } from 'react';
import { 
  Compass, 
  Menu, 
  X, 
  Bell, 
  Wifi, 
  WifiOff, 
  ChevronDown, 
  User, 
  GraduationCap, 
  Users, 
  Building2, 
  Award, 
  BookOpen, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { UserRole, NotificationItem } from '../types';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  notifications: NotificationItem[];
  onMarkNotificationRead: (id: string) => void;
  isOnline: boolean;
  onToggleOnline: () => void;
  onOpenEvidenceModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  userRole,
  onRoleChange,
  notifications,
  onMarkNotificationRead,
  isOnline,
  onToggleOnline
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const roleLabels: Record<UserRole, { label: string; name: string; icon: any }> = {
    student: { label: 'Student View', name: 'David Adewale', icon: User },
    parent: { label: 'Parent View', name: 'Mrs. Adeyemi', icon: Users },
    teacher: { label: 'Mentor / Teacher View', name: 'Mr. Emmanuel Okafor', icon: GraduationCap },
    school: { label: 'School Admin View', name: 'King\'s College Lagos', icon: Building2 }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'for-schools', label: 'For Schools' },
    { id: 'for-parents', label: 'For Parents' },
    { id: 'pricing', label: 'Pricing' }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  const getDashboardViewForRole = (role: UserRole) => {
    switch (role) {
      case 'student': return 'student-dashboard';
      case 'parent': return 'parent-dashboard';
      case 'teacher': return 'teacher-dashboard';
      case 'school': return 'school-dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top micro-bar for African youth educational context & offline sync badge */}
      <div className="bg-[#071B33] text-white text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFB703] animate-pulse" />
            <span className="font-semibold tracking-wide text-slate-200">INVENT YOUTH LEADERSHIP INITIATIVE</span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-[#FFB703] font-medium">LEARN. LEAD. SERVE. CREATE IMPACT.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Real-time sync & offline toggle */}
            <button 
              onClick={onToggleOnline}
              title="Click to simulate offline / online network mode"
              className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                isOnline ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900' : 'bg-amber-950/80 text-amber-300 border border-amber-700/50 hover:bg-amber-900'
              }`}
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span>Online • Synced</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-400" />
                  <span>Offline Mode (Cached)</span>
                </>
              )}
            </button>

            {/* Quick switcher pill for easy testing across the 4 experiences */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 bg-[#0D2745] hover:bg-[#13335a] text-slate-200 hover:text-white px-2.5 py-0.5 rounded text-[11px] border border-slate-700 transition-colors"
                id="role-switch-button"
              >
                <span className="text-[#FFB703] font-bold">Role:</span>
                <span>{roleLabels[userRole].label.replace(' View', '')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-64 bg-[#071B33] border border-slate-700 rounded-xl shadow-2xl p-2 z-50 text-slate-200 text-left">
                  <div className="px-2 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    Switch Test Experience
                  </div>
                  {(['student', 'parent', 'teacher', 'school'] as UserRole[]).map((r) => {
                    const RoleIcon = roleLabels[r].icon;
                    const isActive = userRole === r;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          onRoleChange(r);
                          setRoleDropdownOpen(false);
                          onNavigate(getDashboardViewForRole(r));
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs my-0.5 transition-colors ${
                          isActive ? 'bg-[#FFB703] text-[#071B33] font-bold' : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <RoleIcon className="w-4 h-4" />
                          <div className="text-left">
                            <div>{roleLabels[r].label}</div>
                            <div className={`text-[10px] ${isActive ? 'text-[#071B33]/80' : 'text-slate-400'}`}>{roleLabels[r].name}</div>
                          </div>
                        </div>
                        {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#071B33]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-11 h-11 rounded-xl bg-[#071B33] flex items-center justify-center text-[#FFB703] shadow-md border border-[#0D2745] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FFB703]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Compass className="w-6 h-6 stroke-[2.2] transform group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-sora text-2xl font-extrabold tracking-tight text-[#071B33]">
                  INVENT
                </span>
                <span className="text-[10px] font-bold text-[#FFB703] bg-[#071B33] px-1.5 py-0.5 rounded">
                  NG
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase -mt-0.5">
                Leadership Journey™
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#071B33] bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-[#071B33] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                className="relative p-2.5 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-[#071B33] transition-colors"
                title="Notifications"
                id="header-notification-button"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#FFB703] text-[#071B33] text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-[#071B33] uppercase tracking-wider">
                      Leadership Alerts ({notifications.length})
                    </span>
                    <span className="text-[11px] text-slate-400">Real-time sync</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto mt-1">
                    {notifications.map((n) => (
                      <div 
                        key={n.id} 
                        onClick={() => onMarkNotificationRead(n.id)}
                        className={`p-2.5 rounded-xl cursor-pointer transition-colors ${
                          n.read ? 'hover:bg-slate-50 opacity-75' : 'bg-amber-50/50 hover:bg-amber-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <p className="text-xs font-bold text-[#071B33]">{n.title}</p>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">{n.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Link to Role's Dashboard */}
            <button
              onClick={() => handleNavClick(getDashboardViewForRole(userRole))}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071B33] text-sm font-semibold transition-colors border border-slate-200/80"
              id="header-dashboard-button"
            >
              <span>{roleLabels[userRole].label.replace(' View', ' Portal')}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick(userRole === 'student' ? 'student-dashboard' : 'assessment')}
              className="px-5 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-2"
              id="header-get-started-button"
            >
              <span>Start Journey</span>
              <Sparkles className="w-4 h-4 text-[#071B33]" />
            </button>
          </div>

          {/* Mobile Menu & Notif Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
              className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#FFB703] text-[#071B33] text-[9px] font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#071B33] hover:bg-slate-100"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3">
          <div className="pb-2 border-b border-slate-100">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Select Experience
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(['student', 'parent', 'teacher', 'school'] as UserRole[]).map((r) => {
                const isActive = userRole === r;
                return (
                  <button
                    key={r}
                    onClick={() => {
                      onRoleChange(r);
                      setMobileMenuOpen(false);
                      onNavigate(getDashboardViewForRole(r));
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-bold text-left transition-colors ${
                      isActive ? 'bg-[#FFB703] text-[#071B33]' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {roleLabels[r].label.replace(' View', '')}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium ${
                  currentView === item.id ? 'bg-[#071B33] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => handleNavClick(getDashboardViewForRole(userRole))}
              className="w-full py-2.5 rounded-xl bg-slate-100 text-[#071B33] text-sm font-bold"
            >
              Open {roleLabels[userRole].label}
            </button>
            <button
              onClick={() => handleNavClick('assessment')}
              className="w-full py-2.5 rounded-xl bg-[#FFB703] text-[#071B33] text-sm font-bold shadow-xs"
            >
              Take Free Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
