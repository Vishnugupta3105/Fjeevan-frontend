// Voice configurations for different personalities
const voiceConfigs = {
  // Indian Personalities
  'mahatma-gandhi': {
    english: {
      rate: 0.7,
      pitch: 0.7,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.7,
      pitch: 0.7,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'apj-abdul-kalam': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'swami-vivekananda': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'bhagat-singh': {
    english: {
      rate: 1.0,
      pitch: 1.0,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 1.0,
      pitch: 1.0,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'subhash-chandra-bose': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'milkha-singh': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'dhyan-chand': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'rajesh-khanna': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'raj-kapoor': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'irrfan-khan': {
    english: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },
  'sushant-singh-rajput': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - English (India)'
    },
    hindi: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Ravi Desktop - Hindi (India)'
    }
  },

  // International Personalities
  'albert-einstein': {
    english: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'nikola-tesla': {
    english: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'don-bradman': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'pele': {
    english: {
      rate: 1.0,
      pitch: 1.0,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'muhammad-ali': {
    english: {
      rate: 1.1,
      pitch: 1.1,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'charlie-chaplin': {
    english: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'superman': {
    english: {
      rate: 0.8,
      pitch: 0.8,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'spider-man': {
    english: {
      rate: 1.1,
      pitch: 1.1,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'captain-america': {
    english: {
      rate: 0.9,
      pitch: 0.9,
      voiceName: 'Microsoft Mark Desktop - English (United States)'
    }
  },
  'batman': {
    english: {
      rate: 0.7,
      pitch: 0.7,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  },
  'iron-man': {
    english: {
      rate: 1.1,
      pitch: 1.0,
      voiceName: 'Microsoft David Desktop - English (United States)'
    }
  }
};

class VoiceService {
  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.voices = [];
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.lastUsedVoice = null;

    this.loadVoices();
    this.speechSynthesis.onvoiceschanged = () => this.loadVoices();
  }

  loadVoices() {
    this.voices = this.speechSynthesis.getVoices();
    console.log('Available voices:', this.voices.map(v => `${v.name} (${v.lang})`));
  }

  getVoiceByName(name, language) {
    // Try exact match first
    let voice = this.voices.find(voice => voice.name === name);
    if (voice) return voice;

    // Hindi: Prefer Google Hindi
    if (language === 'hindi') {
      voice = this.voices.find(v => v.name === 'Google हिन्दी' && v.lang === 'hi-IN');
      if (voice) return voice;
      // Fallback: any Hindi
      voice = this.voices.find(v => v.lang.toLowerCase().includes('hi'));
      if (voice) return voice;
      // Warn if no Indian male voice
      console.warn('No Indian male Hindi voice available. Using fallback.');
    } else {
      // English: Prefer Google UK English Male
      voice = this.voices.find(v => v.name === 'Google UK English Male' && v.lang === 'en-GB');
      if (voice) return voice;
      // Fallback: Google US English
      voice = this.voices.find(v => v.name === 'Google US English' && v.lang === 'en-US');
      if (voice) return voice;
      // Fallback: Microsoft David
      voice = this.voices.find(v => v.name === 'Microsoft David' && v.lang === 'en-US');
      if (voice) return voice;
      // Fallback: any English
      voice = this.voices.find(v => v.lang.toLowerCase().includes('en'));
      if (voice) return voice;
      // Warn if no Indian male English voice
      console.warn('No Indian male English voice available. Using fallback.');
    }
    // Fallback: any voice
    return this.voices[0];
  }

  speak(text, personality, language = 'english') {
    if (this.isSpeaking) {
      this.stop();
    }

    const personalityKey = personality.toLowerCase().replace(/\s+/g, '-');
    const config = voiceConfigs[personalityKey]?.[language] || {
      rate: 1.0,
      pitch: 1.0,
      voiceName: language === 'hindi' 
        ? 'Google हिन्दी'
        : 'Google UK English Male'
    };

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getVoiceByName(config.voiceName, language);
    this.lastUsedVoice = voice;

    if (voice) {
      utterance.voice = voice;
      utterance.lang = language === 'hindi' ? 'hi-IN' : (voice.lang || 'en-IN');
    }

    utterance.rate = config.rate;
    utterance.pitch = config.pitch;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.currentUtterance = utterance;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error);
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    this.speechSynthesis.speak(utterance);
  }

  stop() {
    if (this.isSpeaking && this.currentUtterance) {
      this.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
  }

  isAvailable() {
    return 'speechSynthesis' in window;
  }

  getLastUsedVoiceInfo() {
    if (!this.lastUsedVoice) return null;
    return {
      name: this.lastUsedVoice.name,
      lang: this.lastUsedVoice.lang
    };
  }
}

export default new VoiceService(); 