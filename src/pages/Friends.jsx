import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, Users } from 'lucide-react';

function Friends() {
  const [searchQuery, setSearchQuery] = useState('');

  const friends = [
    {
      id: 1,
      name: 'Jane Smith',
      avatar: '/images/avatars/jane.jpg',
      mutualFriends: 12,
      status: 'Online',
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: '/images/avatars/mike.jpg',
      mutualFriends: 8,
      status: 'Offline',
    },
    {
      id: 3,
      name: 'Sarah Williams',
      avatar: '/images/avatars/sarah.jpg',
      mutualFriends: 15,
      status: 'Online',
    },
  ];

  const personalities = [
    {
      id: 1,
      name: 'Albert Einstein',
      avatar: '/images/personalities/albert-einstein.jpg',
      category: 'Scientist',
      lastInteraction: '2 hours ago',
    },
    {
      id: 2,
      name: 'Mahatma Gandhi',
      avatar: '/images/personalities/mahatma-gandhi.jpg',
      category: 'Freedom Fighter',
      lastInteraction: '1 day ago',
    },
    {
      id: 3,
      name: 'Swami Vivekananda',
      avatar: '/images/personalities/swami-vivekananda.jpg',
      category: 'Philosopher',
      lastInteraction: '3 days ago',
    },
  ];

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPersonalities = personalities.filter((personality) =>
    personality.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Friends</h1>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Friend
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search friends and personalities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Friends Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFriends.map((friend) => (
            <Card key={friend.id} className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar src={friend.avatar} alt={friend.name} />
                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                  <p className="text-sm text-gray-500">
                    {friend.mutualFriends} mutual friends
                  </p>
                  <p className="text-sm text-green-500">{friend.status}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Personalities Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your Personalities</h2>
          <Button variant="outline" onClick={() => window.location.href = '/interact'}>
            <Users className="h-4 w-4 mr-2" />
            Discover More
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPersonalities.map((personality) => (
            <Card key={personality.id} className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar src={personality.avatar} alt={personality.name} />
                <div>
                  <h3 className="font-semibold">{personality.name}</h3>
                  <p className="text-sm text-gray-500">{personality.category}</p>
                  <p className="text-sm text-indigo-500">
                    Last interaction: {personality.lastInteraction}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends; 