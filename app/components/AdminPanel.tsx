"use client";

import { useState, useEffect } from "react";

interface Visitor {
  ip: string;
  city: string;
  region: string;
  country: string;
  userAgent: string;
  page: string;
  timestamp: number;
}

interface ActiveRaver {
  name: string;
  color: string;
  mood: string;
}

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [storageType, setStorageType] = useState("");
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [activeRavers, setActiveRavers] = useState<ActiveRaver[]>([]);
  const [adminTab, setAdminTab] = useState<"listeners" | "traffic">("listeners");

  // Simple helper to parse User Agent to a readable name
  const parseUA = (ua: string) => {
    if (/chrome|crios/i.test(ua)) return "Chrome";
    if (/firefox|iceweasel/i.test(ua)) return "Firefox";
    if (/safari/i.test(ua) && !/chrome/i.test(ua)) return "Safari";
    if (/iphone|ipad/i.test(ua)) return "iOS Mobile";
    if (/android/i.test(ua)) return "Android Mobile";
    if (/windows/i.test(ua)) return "Windows Desktop";
    if (/macintosh/i.test(ua)) return "macOS Desktop";
    return "Browser";
  };

  // Helper to format country code to flag emoji
  const getFlag = (code: string) => {
    if (!code || code === "Local" || code.length !== 2) return "🌐";
    const codePoints = code
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    try {
      return String.fromCodePoint(...codePoints);
    } catch (e) {
      return "🌐";
    }
  };

  // Relative time helper
  const getRelativeTime = (time: number) => {
    const diff = Date.now() - time;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(time).toLocaleDateString();
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/visitors?passcode=${encodeURIComponent(passcode)}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthorized(true);
        setVisitors(data.visitors || []);
        setStorageType(data.storageType || "");
        localStorage.setItem("admin_passcode", passcode); // Cache for convenience
        
        // Also fetch active ravers
        const raveRes = await fetch("/api/listeners");
        const raveData = await raveRes.json();
        if (raveRes.ok) {
          setActiveRavers(raveData.users || []);
        }
      } else {
        setError(data.error || "Invalid passcode.");
      }
    } catch (err) {
      setError("Network or API error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const activePass = passcode || localStorage.getItem("admin_passcode") || "";
      
      // Refresh traffic
      const res = await fetch(`/api/admin/visitors?passcode=${encodeURIComponent(activePass)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setVisitors(data.visitors || []);
      }

      // Refresh active ravers
      const raveRes = await fetch("/api/listeners");
      const raveData = await raveRes.json();
      if (raveRes.ok) {
        setActiveRavers(raveData.users || []);
      }
    } catch (e) {}
    setLoading(false);
  };

  // Check cached passcode on load
  useEffect(() => {
    const cached = localStorage.getItem("admin_passcode");
    if (cached) {
      setPasscode(cached);
      // Auto submit
      const autoAuth = async () => {
        try {
          const res = await fetch(`/api/admin/visitors?passcode=${encodeURIComponent(cached)}`);
          const data = await res.json();
          if (res.ok && data.success) {
            setIsAuthorized(true);
            setVisitors(data.visitors || []);
            setStorageType(data.storageType || "");

            // Also fetch active ravers
            const raveRes = await fetch("/api/listeners");
            const raveData = await raveRes.json();
            if (raveRes.ok) {
              setActiveRavers(raveData.users || []);
            }
          }
        } catch (e) {
          localStorage.removeItem("admin_passcode");
        }
      };
      autoAuth();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_passcode");
    setPasscode("");
    setIsAuthorized(false);
    setVisitors([]);
    setActiveRavers([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 animate-[fade-in_0.2s_ease-out] p-4">
      <div className="glass w-full max-w-2xl max-h-[85vh] rounded-3xl flex flex-col overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <div>
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Ambience Owner Console
            </h2>
            {isAuthorized && (
              <p className="text-[10px] text-white/40 mt-0.5">
                Active Storage: <span className="text-blue-400/90 font-medium">{storageType}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Console Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          {!isAuthorized ? (
            <form onSubmit={handleLoginSubmit} className="max-w-sm mx-auto py-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Verification Required</h3>
              <p className="text-xs text-white/40 mb-6">
                Only the owner (Dhruv Garg) is authorized to see the active listener sessions. Please enter the console PIN.
              </p>
              
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Console Passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full text-center rounded-xl bg-white/5 border border-white/10 py-3 text-white placeholder:text-white/30 outline-none focus:border-blue-500/40 focus:bg-white/[0.07] transition-all text-sm tracking-widest"
                  autoFocus
                />
                
                {error && <p className="text-red-400 text-[11px] font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50"
                >
                  {loading ? "Authorizing..." : "Enter Console"}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Console Tabs */}
              <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                <button
                  onClick={() => setAdminTab("listeners")}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    adminTab === "listeners"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Rave Listeners ({activeRavers.length})
                </button>
                <button
                  onClick={() => setAdminTab("traffic")}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    adminTab === "traffic"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Traffic History ({visitors.length})
                </button>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between pb-2">
                <p className="text-xs text-white/60">
                  {adminTab === "listeners"
                    ? `Active virtual ravers currently inside the ambience`
                    : `Historical traffic connections logged to database`
                  }
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white text-[11px] font-medium border border-white/5 flex items-center gap-1.5 transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={loading ? "animate-spin" : ""}>
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                    </svg>
                    Refresh
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg text-[11px] font-medium border border-red-500/20 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Content Panel */}
              {adminTab === "listeners" ? (
                /* Rave Listeners List */
                activeRavers.length === 0 ? (
                  <div className="py-16 text-center text-white/30 text-xs">
                    No active listeners in ambience right now.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeRavers.map((u, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3 hover:bg-white/[0.05] transition-colors"
                      >
                        <span className="text-xl select-none">{u.mood}</span>
                        <div className="min-w-0">
                          <span
                            style={{ color: u.color }}
                            className="text-xs font-semibold truncate block tracking-wide"
                          >
                            {u.name}
                          </span>
                          <span className="text-[9px] text-white/30 block mt-0.5">
                            Status: Streaming Trance
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                /* Traffic History List */
                visitors.length === 0 ? (
                  <div className="py-16 text-center text-white/30 text-xs">
                    No active session logs found yet.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {visitors.map((v, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3 gap-2 hover:bg-white/[0.05] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl leading-none flex-shrink-0">
                            {getFlag(v.country)}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[12px] font-semibold text-white/90">
                                {v.city === "Local / Unknown" ? "Localhost" : v.city}
                              </span>
                              {v.region && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">
                                  {v.region}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-white/35 font-mono mt-0.5">
                              {v.ip} · {parseUA(v.userAgent)}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4 flex-shrink-0 text-right">
                          <div className="text-left sm:text-right">
                            <span className="text-[10px] text-blue-400/90 font-medium px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                              Page: {v.page}
                            </span>
                          </div>
                          <span className="text-[11px] text-white/40 tabular-nums">
                            {getRelativeTime(v.timestamp)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
