import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, MessageSquare, Menu, Search, User } from 'lucide-react';

function Navbar({ onMenuClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Jeevansar</span>
            </Link>
          </div>

          {/* Center section - Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Jeevansar"
                className="pl-10 bg-gray-100 dark:bg-gray-700 border-none"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                5
              </span>
            </Button>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
