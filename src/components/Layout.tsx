import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import FindMatchModal from '@/components/FindMatchModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFindMatch, setShowFindMatch] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Rankings', path: '/rankings', icon: 'Trophy' },
    { name: 'Tournaments', path: '/tournaments', icon: 'Award' },
    { name: 'Profile', path: '/profile', icon: 'User' },
    { name: 'Rules', path: '/rules', icon: 'BookOpen' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-primary/20 bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-md sticky top-0 z-50 glow">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <Icon name="Crosshair" className="text-primary group-hover:rotate-90 transition-transform duration-300" size={36} />
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors"></div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-glow bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                  unmatched.gg
                </h1>
                <p className="text-xs text-muted-foreground font-semibold">The way CS was meant to be played</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  onClick={() => navigate(item.path)}
                  className={isActive(item.path) ? 'bg-gradient-to-r from-primary to-orange-500 text-black font-bold glow' : 'hover:bg-primary/10'}
                >
                  <Icon name={item.icon as any} size={16} className="mr-2" />
                  {item.name}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold animate-pulse glow-strong hover:scale-105 transition-transform"
                onClick={() => setShowFindMatch(true)}
              >
                <Icon name="Crosshair" size={16} className="mr-2 animate-spin" />
                Find Match
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                <Icon name="LogIn" size={16} className="mr-2" />
                Login
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-orange-500 text-black font-bold glow hover:scale-105 transition-transform">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="relative border-t-2 border-primary/20 bg-gradient-to-b from-card to-card/50 mt-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 py-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  <Icon name="Crosshair" className="text-primary group-hover:rotate-180 transition-transform duration-500" size={32} />
                  <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  unmatched.gg
                </span>
              </div>
              <p className="text-sm text-foreground/80 font-medium mb-2">The way CS was meant to be played</p>
              <p className="text-xs text-muted-foreground">© 2024 unmatched.gg • All rights reserved</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/rankings')} className="hover:text-primary transition-colors">
                    Rankings
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/tournaments')} className="hover:text-primary transition-colors">
                    Tournaments
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => navigate('/rules')} className="hover:text-primary transition-colors">
                    Rules
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <FindMatchModal open={showFindMatch} onOpenChange={setShowFindMatch} />
    </div>
  );
};

export default Layout;