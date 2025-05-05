import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

function PersonalityList() {
  const { category } = useParams();

  const personalitiesData = {
    philosopher: [
      { name: 'Jiddu Krishnamurti', image: '/images/personalities/jiddu-krishnamurti.jpg' },
      { name: 'Osho', image: '/images/personalities/osho.jpg' },
      { name: 'Swami Vivekananda', image: '/images/personalities/swami-vivekananda.jpg' },
    ],
    politician: [
      { name: 'Jawaharlal Nehru', image: '/images/personalities/jawaharlal-nehru.jpg' },
      { name: 'Sardar Patel', image: '/images/personalities/sardar-patel.jpg' },
      { name: 'Mahatma Gandhi', image: '/images/personalities/mahatma-gandhi.jpg' },
    ],
    scientist: [
      { name: 'Albert Einstein', image: '/images/personalities/albert-einstein.jpg' },
      { name: 'A.P.J. Abdul Kalam', image: '/images/personalities/apj-abdul-kalam.jpg' },
      { name: 'Nikola Tesla', image: '/images/personalities/nikola-tesla.jpg' },
    ],
    'freedom-fighter': [
      { name: 'Bhagat Singh', image: '/images/personalities/bhagat-singh.jpg' },
      { name: 'Subhash Chandra Bose', image: '/images/personalities/subhash-chandra-bose.jpg' },
      { name: 'Chandrashekhar Azad', image: '/images/personalities/chandrashekhar-azad.jpg' },
    ],
    sports: [
      { name: 'Milkha Singh', image: '/images/personalities/milkha-singh.jpg' },
      { name: 'Dhyan Chand', image: '/images/personalities/dhyan-chand.jpg' },
      { name: 'Don Bradman', image: '/images/personalities/don-bradman.jpg' },
      { name: 'Pele', image: '/images/personalities/pele.jpg' },
      { name: 'Muhammad Ali', image: '/images/personalities/muhammad-ali.jpg' },
    ],
    actor: [
      { name: 'Rajesh Khanna', image: '/images/personalities/rajesh-khanna.jpg' },
      { name: 'Raj Kapoor', image: '/images/personalities/raj-kapoor.jpg' },
      { name: 'Irrfan Khan', image: '/images/personalities/irrfan-khan.jpg' },
      { name: 'Sushant Singh Rajput', image: '/images/personalities/sushant-singh-rajput.jpg' },
      { name: 'Charlie Chaplin', image: '/images/personalities/charlie-chaplin.jpg' },
    ],
    superhero: [
      { name: 'Superman', image: '/images/personalities/superman.jpg'},
      { name: 'Spider-Man', image: '/images/personalities/spiderman.jpg'},
      { name: 'Captain America', image: '/images/personalities/captainamerica.jpg'},
      { name: 'Batman', image: '/images/personalities/batman.jpg'},
      { name: 'Iron Man', image: '/images/personalities/ironman.jpg'},
    ],
    anime: [
      { name: 'Death Note', image: '/images/personalities/deathnote.jpg'},
      { name: 'Attack of Titan', image: '/images/personalities/attackoftitan.jpg'},
      { name: 'One Piece', image: '/images/personalities/onepiece.jpg'},
      { name: 'Naruto', image: '/images/personalities/naruto.jpg'},
    ],
  };

  const personalities = personalitiesData[category] || [];

  return (
    <div className="min-h-screen py-16 px-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        {category.replace('-', ' ').toUpperCase()}
      </h1>

      {personalities.length === 0 ? (
        <p className="text-center text-muted-foreground">No personalities found in this category.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalities.map((person, idx) => (
            <Link to={`/chat/${category}/${encodeURIComponent(person.name)}`} key={idx}>
              <Card className="group overflow-hidden relative hover:shadow-xl transition">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-64 w-full object-contain bg-gray-50 dark:bg-gray-900 transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-4 py-2 text-center">
                  <div className="text-lg font-semibold">{person.name}</div>
                  {person.description && (
                    <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {person.description}
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PersonalityList;
