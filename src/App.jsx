import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/pages/Sidebar';
import Feed from '@/pages/Feed';
import InteractCategories from '@/pages/InteractCategories';
import PersonalityList from '@/pages/PersonalityList';
import ChatPage from '@/pages/ChatPage';
import Profile from '@/pages/Profile';
import Friends from '@/pages/Friends';
import Groups from '@/pages/Groups';
import Marketplace from '@/pages/Marketplace';
import Notifications from '@/pages/Notifications';
import Messages from '@/pages/Messages';
import Settings from '@/pages/Settings';
import Help from '@/pages/Help';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/interact" element={<InteractCategories />} />
              <Route path="/personalities/:category" element={<PersonalityList />} />
              <Route path="/chat/:category/:name" element={<ChatPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
