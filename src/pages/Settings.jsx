import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { 
  User, 
  Bell, 
  Lock, 
  Globe, 
  Shield, 
  Save, 
  Camera,
  Moon,
  Sun
} from 'lucide-react';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    personalityUpdates: true,
    friendRequests: true,
    messages: true,
    comments: true,
  });

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Globe className="h-4 w-4 mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <img src="/images/avatars/current-user.jpg" alt="Profile" />
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 bg-white dark:bg-gray-800"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Profile Picture</h3>
                <p className="text-sm text-gray-500">
                  Upload a new profile picture
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input defaultValue="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium">Bio</label>
                <Input defaultValue="AI Enthusiast | History Lover | Tech Explorer" />
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <Input defaultValue="New York, USA" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Receive notifications about {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </p>
                  </div>
                  <Button
                    variant={value ? 'default' : 'outline'}
                    onClick={() => handleNotificationToggle(key)}
                  >
                    {value ? 'On' : 'Off'}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm text-gray-500">
                    Who can see your profile
                  </p>
                </div>
                <Button variant="outline">Public</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Personality Interactions</h4>
                  <p className="text-sm text-gray-500">
                    Who can see your personality interactions
                  </p>
                </div>
                <Button variant="outline">Friends</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Theme</h4>
                  <p className="text-sm text-gray-500">
                    Choose your preferred theme
                  </p>
                </div>
                <Button
                  variant={darkMode ? 'default' : 'outline'}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                  {darkMode ? 'Dark' : 'Light'}
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Settings; 