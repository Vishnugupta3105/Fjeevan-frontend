import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Bell, Check, X } from 'lucide-react';

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'personality',
      title: 'New Personality Available',
      message: 'You can now chat with Albert Einstein about quantum physics!',
      timestamp: '2 hours ago',
      read: false,
      personality: {
        name: 'Albert Einstein',
        avatar: '/images/personalities/albert-einstein.jpg',
      },
    },
    {
      id: 2,
      type: 'interaction',
      title: 'Interaction Complete',
      message: 'Your conversation with Mahatma Gandhi has been saved to your profile.',
      timestamp: '1 day ago',
      read: false,
      personality: {
        name: 'Mahatma Gandhi',
        avatar: '/images/personalities/mahatma-gandhi.jpg',
      },
    },
    {
      id: 3,
      type: 'friend',
      title: 'Friend Request',
      message: 'Jane Smith wants to be your friend',
      timestamp: '2 days ago',
      read: true,
      user: {
        name: 'Jane Smith',
        avatar: '/images/avatars/jane.jpg',
      },
    },
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline">
          <Bell className="h-4 w-4 mr-2" />
          Notification Settings
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`p-4 ${!notification.read ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}
          >
            <div className="flex items-start space-x-4">
              <Avatar
                src={notification.personality?.avatar || notification.user?.avatar}
                alt={notification.personality?.name || notification.user?.name}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <span className="text-sm text-gray-500">{notification.timestamp}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {notification.message}
                </p>
                {notification.type === 'personality' && (
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => window.location.href = `/chat/${notification.personality.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Start Chat
                  </Button>
                )}
              </div>
              <div className="flex space-x-2">
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(notification.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Notifications; 