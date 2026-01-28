import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/app/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { hexColors } from '@/config/colors';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{ 
      background: `linear-gradient(90deg, ${hexColors.brown.dark} 0%, ${hexColors.navy.dark} 100%)`,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Name */}
          <Link to="/" className="text-xl font-semibold text-white hover:opacity-80 transition-opacity">
            RiskWise
          </Link>

          {/* Center: Navigation Links */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white border-b-2 pb-0.5' 
                  : 'text-white/70 hover:text-white'
              }`}
              style={isActive('/') ? { borderColor: hexColors.navy.light } : {}}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-white border-b-2 pb-0.5' 
                  : 'text-white/70 hover:text-white'
              }`}
              style={isActive('/dashboard') ? { borderColor: hexColors.navy.light } : {}}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-white border-b-2 pb-0.5' 
                  : 'text-white/70 hover:text-white'
              }`}
              style={isActive('/about') ? { borderColor: hexColors.navy.light } : {}}
            >
              About Us
            </Link>
          </div>

          {/* Right: Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-white hover:bg-white/10"
            aria-label="Toggle theme"
          >
            <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
