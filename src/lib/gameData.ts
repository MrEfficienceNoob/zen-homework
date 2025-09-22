import { Character, Upgrade, Weather } from '@/types/game';

export const initialCharacters: Character[] = [
  {
    id: 'tralalero-tralala',
    name: 'Tralalero Tralala',
    description: 'A shark wearing Nike shoes - the starting character',
    unlockCost: 0,
    unlocked: true,
    image: '/characters/tralalero-tralala.png',
    clickMultiplier: 1,
    passiveIncome: 0,
  },
  {
    id: 'bombardino-crocodilo',
    name: 'Bombardino Crocodilo',
    description: 'A crocodile fused with a bomber plane. Speaks in chaotic Italian and ejects bombs in rapid fire.',
    unlockCost: 200,
    unlocked: false,
    image: '/characters/bombardino-crocodilo.png',
    clickMultiplier: 2,
    passiveIncome: 0,
  },
  {
    id: 'tung-tung-sahur',
    name: 'Tung Tung Tung Sahur',
    description: 'A heavily memeified skin, carrying a bat with a teacup sidekick. Known for rhythm-like chants and memes.',
    unlockCost: 1000,
    unlocked: false,
    image: '/characters/tung-tung-sahur.png',
    clickMultiplier: 3,
    passiveIncome: 1,
  },
  {
    id: 'brr-brr-patapim',
    name: 'Brr Brr Patapim',
    description: 'From a windy forest full of whimsy. Lost his golden hat to a brr-ing frog and chases wizard advice.',
    unlockCost: 5000,
    unlocked: false,
    image: '/characters/brr-brr-patapim.png',
    clickMultiplier: 5,
    passiveIncome: 2,
  },
  {
    id: 'lirili-larila',
    name: 'Lirili Larila',
    description: 'A wandering desert elephant with a ticking clock, a shell, and a knack for spotting surreal sights.',
    unlockCost: 15000,
    unlocked: false,
    image: '/characters/lirili-larila.png',
    clickMultiplier: 8,
    passiveIncome: 3,
  },
  {
    id: 'bobrito-bandito',
    name: 'Bobrito Bandito',
    description: 'A rodent dressed like a boss, wielding a high-powered weapon and a slick hat.',
    unlockCost: 50000,
    unlocked: false,
    image: '/characters/bobrito-bandito.png',
    clickMultiplier: 12,
    passiveIncome: 5,
  },
  {
    id: 'bombombini-gussini',
    name: 'Bombombini Gussini',
    description: 'Bombardiro Crocodilos brother - another explosive character.',
    unlockCost: 100000,
    unlocked: false,
    image: '/characters/bombombini-gussini.png',
    clickMultiplier: 15,
    passiveIncome: 8,
  },
  {
    id: 'burbaloni-luliloli',
    name: 'Burbaloni Luliloli',
    description: 'A mythical coconut found on Bali shores, containing a capybara and worshipped by locals.',
    unlockCost: 250000,
    unlocked: false,
    image: '/characters/burbaloni-luliloli.png',
    clickMultiplier: 20,
    passiveIncome: 12,
  },
  {
    id: 'cappuccino-assassino',
    name: 'Cappuccino Assassino',
    description: 'A lightning-fast, dual-katana-wielding master of dexterity, feared even by the elusive Trippi Troppi.',
    unlockCost: 500000,
    unlocked: false,
    image: '/characters/cappuccino-assassino.png',
    clickMultiplier: 30,
    passiveIncome: 20,
  },
  {
    id: 'chimpanzini-bananini',
    name: 'Chimpanzini Bananini',
    description: 'The viral monkey-fruit hybrid that took social media by storm.',
    unlockCost: 1000000,
    unlocked: false,
    image: '/characters/chimpanzini-bananini.png',
    clickMultiplier: 50,
    passiveIncome: 35,
  },
  {
    id: 'trippi-troppi',
    name: 'Trippi Troppi',
    description: 'A shrimp-cat hybrid featuring typical AI surrealism and sound madness.',
    unlockCost: 2500000,
    unlocked: false,
    image: '/characters/trippi-troppi.png',
    clickMultiplier: 75,
    passiveIncome: 50,
  },
];

export const initialUpgrades: Upgrade[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    description: '+1 Brainrot per click',
    cost: 50,
    purchased: false,
    type: 'click',
    value: 1,
  },
  {
    id: 'auto-click',
    name: 'Auto Click',
    description: '+1 Brainrot per second',
    cost: 125,
    purchased: false,
    type: 'passive',
    value: 1,
  },
  {
    id: 'mr-clicker',
    name: 'Mr Clicker',
    description: '+5 Brainrot per click',
    cost: 500,
    purchased: false,
    type: 'click',
    value: 5,
  },
  {
    id: 'trallero-farm',
    name: 'Trallero Trallala Farm',
    description: '+6 Brainrot per second',
    cost: 1100,
    purchased: false,
    type: 'passive',
    value: 6,
  },
  {
    id: 'mystery-reward',
    name: 'Mystery Reward',
    description: '???',
    cost: 12000,
    purchased: false,
    type: 'mystery',
    value: 0,
  },
];

export const initialWeathers: Weather[] = [
  {
    id: 'normal',
    name: 'Normal',
    description: 'The default weather - calm and peaceful',
    unlocked: true,
    unlockCost: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'rain',
    name: 'Rain',
    description: 'A gentle rain falls, bringing extra Brainrot',
    unlocked: false,
    unlockCost: 1000,
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'sunny',
    name: 'Sunny',
    description: 'Bright sunshine boosts your clicking power',
    unlocked: false,
    unlockCost: 5000,
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
  {
    id: 'star-rain',
    name: 'Star Rain',
    description: 'Magical stars fall from the sky, multiplying your gains',
    unlocked: false,
    unlockCost: 25000,
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    id: 'windy',
    name: 'Windy',
    description: 'Strong winds carry extra Brainrot to you',
    unlocked: false,
    unlockCost: 100000,
    background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  },
  {
    id: 'snowing',
    name: 'Snowing',
    description: 'Snowflakes bring winter magic and extra rewards',
    unlocked: false,
    unlockCost: 500000,
    background: 'linear-gradient(135deg, #e6ddd4 0%, #f0f2f5 100%)',
  },
];

export const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const getClickValue = (gameState: any): number => {
  let clickValue = 1;
  
  // Add character multiplier
  const currentChar = gameState.characters.find((c: Character) => c.id === gameState.currentCharacter);
  if (currentChar) {
    clickValue *= currentChar.clickMultiplier;
  }
  
  // Add upgrade multipliers
  gameState.upgrades.forEach((upgrade: Upgrade) => {
    if (upgrade.purchased && upgrade.type === 'click') {
      clickValue += upgrade.value;
    }
  });
  
  return clickValue;
};

export const getPassiveIncome = (gameState: any): number => {
  let passiveIncome = 0;
  
  // Add character passive income
  const currentChar = gameState.characters.find((c: Character) => c.id === gameState.currentCharacter);
  if (currentChar) {
    passiveIncome += currentChar.passiveIncome;
  }
  
  // Add upgrade passive income
  gameState.upgrades.forEach((upgrade: Upgrade) => {
    if (upgrade.purchased && upgrade.type === 'passive') {
      passiveIncome += upgrade.value;
    }
  });
  
  return passiveIncome;
};
