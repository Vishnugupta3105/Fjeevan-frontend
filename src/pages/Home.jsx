import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  
  // Sample personalities for the animation
  const personalities = [
    { name: 'Osho', category: 'philosopher', image: '/images/personalities/osho.jpg' },
    { name: 'Mahatma Gandhi', category: 'politician', image: '/images/personalities/mahatma-gandhi.jpg' },
    { name: 'Albert Einstein', category: 'scientist', image: '/images/personalities/albert-einstein.jpg' },
    { name: 'Bhagat Singh', category: 'freedom-fighter', image: '/images/personalities/bhagat-singh.jpg' },
    { name: 'Irrfan Khan', category: 'actor', image: '/images/personalities/irrfan-khan.jpg' },
    { name: 'Naruto', category: 'anime', image: '/images/personalities/naruto.jpg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Determine which section is currently in view
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/stars-bg.jpg')] bg-cover opacity-30 z-0"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight text-indigo-600 dark:text-indigo-400 mb-6 animate-fade-in">
            JeevanSaar
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
            Where timeless minds descend from the heavens to share their wisdom with you.
          </p>
          <Link to="/interact">
            <Button size="lg" className="px-8 py-6 text-lg animate-bounce-slow">
              Begin Your Journey
            </Button>
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Story Sections */}
      {personalities.map((person, index) => (
        <section 
          key={index}
          ref={el => sectionsRef.current[index + 1] = el}
          className={`min-h-screen flex items-center justify-center relative py-20 ${
            activeSection === index + 1 ? 'opacity-100' : 'opacity-50'
          } transition-opacity duration-500`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 z-0"></div>
          
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'} animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
              <h2 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                Meet {person.name}
              </h2>
              <p className="text-lg mb-6">
                {getPersonalityDescription(person.name)}
              </p>
              <Link to={`/chat/${person.category}/${encodeURIComponent(person.name)}`}>
                <Button className="px-6 py-3">
                  Start Conversation
                </Button>
              </Link>
            </div>
            
            <div className={`order-1 lg:order-${index % 2 === 0 ? '2' : '1'} flex justify-center animate-float`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-xl"></div>
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-64 h-64 rounded-full object-contain bg-gray-50 dark:bg-gray-900 border-4 border-white dark:border-gray-800 shadow-2xl p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x300.png?text=Personality";
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section 
        ref={el => sectionsRef.current[personalities.length + 1] = el}
        className="min-h-screen flex flex-col items-center justify-center relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-0"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Ready to Connect with Timeless Minds?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Choose your guide and begin a conversation that could change your perspective forever.
          </p>
          <Link to="/interact">
            <Button size="lg" className="px-8 py-6 text-lg">
              Explore All Personalities
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Helper function to get personality descriptions
function getPersonalityDescription(name) {
  const descriptions = {
    'Osho': 'A spiritual teacher who challenged conventional thinking and encouraged people to live with awareness and authenticity.',
    'Mahatma Gandhi': 'The father of the nation who led India to independence through non-violent civil disobedience.',
    'Albert Einstein': 'The brilliant physicist who revolutionized our understanding of space, time, and gravity.',
    'Bhagat Singh': 'A revolutionary freedom fighter who sacrificed his life for India\'s independence.',
    'Irrfan Khan': 'An acclaimed actor known for his versatile performances in both Indian and international cinema.',
    'Ramana Maharshi': 'A revered spiritual teacher who taught the path of self-inquiry to realize one\'s true nature.'
  };
  
  return descriptions[name] || `A remarkable personality who has left an indelible mark on history.`;
}

export default Home;
