import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Search, Plus, Users } from 'lucide-react';

function Groups() {
  const [searchQuery, setSearchQuery] = useState('');

  const groups = [
    {
      id: 1,
      name: 'Tech Enthusiasts',
      avatar: '/images/groups/tech.jpg',
      members: 1234,
      type: 'Public',
      lastPost: '2 hours ago',
    },
    {
      id: 2,
      name: 'Book Club',
      avatar: '/images/groups/books.jpg',
      members: 567,
      type: 'Private',
      lastPost: '1 day ago',
    },
    {
      id: 3,
      name: 'Travel Buddies',
      avatar: '/images/groups/travel.jpg',
      members: 890,
      type: 'Public',
      lastPost: '3 days ago',
    },
  ];

  const personalityGroups = [
    {
      id: 1,
      name: 'Einstein Discussion Group',
      avatar: '/images/personalities/albert-einstein.jpg',
      members: 456,
      category: 'Science',
      lastDiscussion: '1 hour ago',
    },
    {
      id: 2,
      name: 'Gandhi Peace Circle',
      avatar: '/images/personalities/mahatma-gandhi.jpg',
      members: 789,
      category: 'Philosophy',
      lastDiscussion: '2 hours ago',
    },
    {
      id: 3,
      name: 'Vivekananda Wisdom Circle',
      avatar: '/images/personalities/swami-vivekananda.jpg',
      members: 345,
      category: 'Spirituality',
      lastDiscussion: '1 day ago',
    },
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPersonalityGroups = personalityGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Groups</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Group
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search groups..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Regular Groups Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGroups.map((group) => (
            <Card key={group.id} className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar src={group.avatar} alt={group.name} />
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-gray-500">
                    {group.members} members • {group.type}
                  </p>
                  <p className="text-sm text-indigo-500">
                    Last post: {group.lastPost}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Personality Groups Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Personality Discussion Groups</h2>
          <Button variant="outline" onClick={() => window.location.href = '/interact'}>
            <Users className="h-4 w-4 mr-2" />
            Join More Groups
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPersonalityGroups.map((group) => (
            <Card key={group.id} className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar src={group.avatar} alt={group.name} />
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-gray-500">
                    {group.members} members • {group.category}
                  </p>
                  <p className="text-sm text-indigo-500">
                    Last discussion: {group.lastDiscussion}
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

export default Groups; 