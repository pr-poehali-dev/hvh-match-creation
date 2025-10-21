import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <header className="border-b border-border/50 bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <Icon name="Crosshair" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-primary">unmatched.gg</h1>
                <p className="text-xs text-muted-foreground">The way CS was meant to be played</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  onClick={() => navigate(item.path)}
                  className={isActive(item.path) ? 'bg-primary text-primary-foreground' : ''}
                >
                  <Icon name={item.icon as any} size={16} className="mr-2" />
                  {item.name}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Login
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
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

      <footer className="border-t border-border/50 bg-card mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Crosshair" className="text-primary" size={28} />
                <span className="text-xl font-bold">unmatched.gg</span>
              </div>
              <p className="text-sm text-muted-foreground">The way CS was meant to be played</p>
              <p className="text-xs text-muted-foreground mt-2">© 2024 unmatched.gg</p>
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
    </div>
  );
};

export default Layout;
