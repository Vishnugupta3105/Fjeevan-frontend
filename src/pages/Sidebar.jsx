import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Home,
  Users,
  MessageSquare,
  Bell,
  Store,
  Users2,
  MessageCircle,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

function Sidebar({ isOpen }) {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Users, label: 'Interact', path: '/interact' },
    { icon: Users2, label: 'Friends', path: '/friends' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Store, label: 'Marketplace', path: '/marketplace' },
    { icon: MessageCircle, label: 'Groups', path: '/groups' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Main Navigation */}
        <nav className="flex-1 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link to={item.path} key={item.path}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full justify-start px-4 py-2 ${
                    isActive
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <nav className="py-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link to={item.path} key={item.path}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full justify-start px-4 py-2 ${
                    isActive
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar; 