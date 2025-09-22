export interface Character {
  id: string;
  name: string;
  description: string;
  unlockCost: number;
  unlocked: boolean;
  image: string;
  clickMultiplier: number;
  passiveIncome: number;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  purchased: boolean;
  type: 'click' | 'passive' | 'mystery';
  value: number;
}

export interface Weather {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  unlockCost: number;
  background: string;
}

export interface GameState {
  brainrot: number;
  totalClicks: number;
  characters: Character[];
  upgrades: Upgrade[];
  weathers: Weather[];
  currentCharacter: string;
  currentWeather: string;
  autoClicker: boolean;
  autoClickerInterval: number;
}

export interface GameStats {
  totalBrainrot: number;
  totalClicks: number;
  charactersUnlocked: number;
  upgradesPurchased: number;
  playTime: number;
  clicksPerSecond: number;
}
