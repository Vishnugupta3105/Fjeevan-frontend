import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Camera, MoreHorizontal } from 'lucide-react';

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');

  const user = {
    name: 'John Doe',
    avatar: '/images/avatars/john.jpg',
    coverPhoto: '/images/covers/profile-cover.jpg',
    bio: 'AI Enthusiast | History Lover | Tech Explorer',
    location: 'New York, USA',
    joined: 'January 2024',
    friends: 1234,
    interactions: 56,
  };

  const recentInteractions = [
    {
      id: 1,
      personality: 'Albert Einstein',
      category: 'Scientist',
      timestamp: '2 hours ago',
      preview: 'Had an amazing discussion about quantum physics and the nature of reality.',
    },
    {
      id: 2,
      personality: 'Mahatma Gandhi',
      category: 'Freedom Fighter',
      timestamp: '1 day ago',
      preview: 'Learned about the principles of non-violence and civil disobedience.',
    },
    {
      id: 3,
      personality: 'Swami Vivekananda',
      category: 'Philosopher',
      timestamp: '3 days ago',
      preview: 'Explored the concepts of self-realization and spiritual growth.',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Cover Photo */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src={user.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="outline" className="bg-white/90">
            <Camera className="h-4 w-4 mr-2" />
            Update Cover Photo
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 px-4">
        <div className="flex items-end space-x-4">
          <Avatar
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 border-4 border-white dark:border-gray-800"
          />
          <div className="mb-4">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
          </div>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">{user.friends}</div>
          <div className="text-gray-600 dark:text-gray-400">Friends</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">{user.interactions}</div>
          <div className="text-gray-600 dark:text-gray-400">Interactions</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">{recentInteractions.length}</div>
          <div className="text-gray-600 dark:text-gray-400">Recent Chats</div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          {/* Posts will be shown here */}
        </TabsContent>

        <TabsContent value="interactions" className="space-y-4">
          {recentInteractions.map((interaction) => (
            <Card key={interaction.id} className="p-4">
              <div className="flex items-start space-x-4">
                <Avatar
                  src={`/images/personalities/${interaction.personality.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={interaction.personality}
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{interaction.personality}</h3>
                    <span className="text-sm text-gray-500">({interaction.category})</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {interaction.preview}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {interaction.timestamp}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">{user.location}</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Joined</h3>
            <p className="text-gray-600 dark:text-gray-400">{user.joined}</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Profile; 