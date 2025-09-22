'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Star, Cloud, Sun, Snowflake, Wind } from 'lucide-react';
import { GameState, Character, Upgrade, Weather } from '@/types/game';
import { 
  initialCharacters, 
  initialUpgrades, 
  initialWeathers, 
  formatNumber, 
  getClickValue, 
  getPassiveIncome 
} from '@/lib/gameData';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    brainrot: 0,
    totalClicks: 0,
    characters: initialCharacters,
    upgrades: initialUpgrades,
    weathers: initialWeathers,
    currentCharacter: 'tralalero-tralala',
    currentWeather: 'normal',
    autoClicker: false,
    autoClickerInterval: 1000,
  });

  const [showUpgrades, setShowUpgrades] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);

  // Auto-clicker effect
  useEffect(() => {
    if (gameState.autoClicker) {
      const interval = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          brainrot: prev.brainrot + getPassiveIncome(prev),
        }));
      }, gameState.autoClickerInterval);

      return () => clearInterval(interval);
    }
  }, [gameState.autoClicker, gameState.autoClickerInterval]);

  // Handle click
  const handleClick = useCallback(() => {
    const clickValue = getClickValue(gameState);
    setClickAnimation(true);
    setTimeout(() => setClickAnimation(false), 300);
    
    setGameState(prev => ({
      ...prev,
      brainrot: prev.brainrot + clickValue,
      totalClicks: prev.totalClicks + 1,
    }));

    // Check for character unlocks
    const newCharacters = prev.characters.map(char => {
      if (!char.unlocked && prev.brainrot >= char.unlockCost) {
        return { ...char, unlocked: true };
      }
      return char;
    });

    // Check for weather unlocks
    const newWeathers = prev.weathers.map(weather => {
      if (!weather.unlocked && prev.brainrot >= weather.unlockCost) {
        return { ...weather, unlocked: true };
      }
      return weather;
    });

    if (newCharacters.some(char => char.unlocked !== prev.characters.find(c => c.id === char.id)?.unlocked)) {
      setGameState(prev => ({ ...prev, characters: newCharacters }));
    }

    if (newWeathers.some(weather => weather.unlocked !== prev.weathers.find(w => w.id === weather.id)?.unlocked)) {
      setGameState(prev => ({ ...prev, weathers: newWeathers }));
    }
  }, [gameState]);

  // Purchase upgrade
  const purchaseUpgrade = (upgradeId: string) => {
    const upgrade = gameState.upgrades.find(u => u.id === upgradeId);
    if (upgrade && !upgrade.purchased && gameState.brainrot >= upgrade.cost) {
      setGameState(prev => ({
        ...prev,
        brainrot: prev.brainrot - upgrade.cost,
        upgrades: prev.upgrades.map(u => 
          u.id === upgradeId ? { ...u, purchased: true } : u
        ),
      }));

      // Enable auto-clicker if it's the auto-click upgrade
      if (upgradeId === 'auto-click') {
        setGameState(prev => ({ ...prev, autoClicker: true }));
      }
    }
  };

  // Switch character
  const switchCharacter = (characterId: string) => {
    const character = gameState.characters.find(c => c.id === characterId);
    if (character && character.unlocked) {
      setGameState(prev => ({ ...prev, currentCharacter: characterId }));
    }
  };

  // Switch weather
  const switchWeather = (weatherId: string) => {
    const weather = gameState.weathers.find(w => w.id === weatherId);
    if (weather && weather.unlocked) {
      setGameState(prev => ({ ...prev, currentWeather: weatherId }));
    }
  };

  const currentCharacter = gameState.characters.find(c => c.id === gameState.currentCharacter);
  const currentWeather = gameState.weathers.find(w => w.id === gameState.currentWeather);

  return (
    <div 
      className="min-h-screen game-container relative overflow-hidden"
      style={{ background: currentWeather?.background }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {gameState.currentWeather === 'rain' && (
          <div className="rain-effect">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-8 bg-blue-300 opacity-60"
                style={{ left: `${Math.random() * 100}%` }}
                animate={{
                  y: [0, window.innerHeight],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
        
        {gameState.currentWeather === 'snowing' && (
          <div className="snow-effect">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-80"
                style={{ left: `${Math.random() * 100}%` }}
                animate={{
                  y: [0, window.innerHeight],
                  x: [0, Math.random() * 50 - 25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-white">Italian Brainrot Clicker</h1>
              <p className="text-white/80 text-sm">Tap your way through the viral universe!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="text-white text-2xl font-bold">
                {formatNumber(gameState.brainrot)} Brainrot
              </div>
              <div className="text-white/60 text-sm">
                {formatNumber(gameState.totalClicks)} clicks
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center">
          {/* Character Display */}
          <motion.div
            className="relative mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-64 h-64 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center cursor-pointer character-float ${
                clickAnimation ? 'click-animation' : ''
              }`}
              onClick={handleClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {currentCharacter ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <div className="text-white text-lg font-semibold">
                    {currentCharacter.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {currentCharacter.description}
                  </div>
                </div>
              ) : (
                <div className="text-white text-6xl">🧠</div>
              )}
            </motion.div>
            
            {/* Click Value Display */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold"
              animate={{ scale: clickAnimation ? 1.2 : 1 }}
            >
              +{getClickValue(gameState)}
            </motion.div>
          </motion.div>

          {/* Click Instructions */}
          <motion.div
            className="text-white/80 text-lg mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click the character to earn Brainrot!
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              onClick={() => setShowUpgrades(!showUpgrades)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Upgrades
            </motion.button>
            
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              onClick={() => setShowCharacters(!showCharacters)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5 inline mr-2" />
              Characters
            </motion.button>
            
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              onClick={() => setShowWeather(!showWeather)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Cloud className="w-5 h-5 inline mr-2" />
              Weather
            </motion.button>
          </div>
        </div>
      </main>

      {/* Upgrades Modal */}
      <AnimatePresence>
        {showUpgrades && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowUpgrades(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Upgrades</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowUpgrades(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                {gameState.upgrades.map((upgrade) => (
                  <motion.div
                    key={upgrade.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      upgrade.purchased
                        ? 'bg-green-50 border-green-200'
                        : gameState.brainrot >= upgrade.cost
                        ? 'bg-blue-50 border-blue-200 hover:bg-blue-100 cursor-pointer'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => !upgrade.purchased && gameState.brainrot >= upgrade.cost && purchaseUpgrade(upgrade.id)}
                    whileHover={{ scale: upgrade.purchased ? 1 : 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-800">{upgrade.name}</h3>
                        <p className="text-gray-600 text-sm">{upgrade.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">
                          {upgrade.purchased ? '✓ Purchased' : formatNumber(upgrade.cost)}
                        </div>
                        {upgrade.purchased && (
                          <div className="text-green-600 text-sm">Active</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Characters Modal */}
      <AnimatePresence>
        {showCharacters && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCharacters(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Characters</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowCharacters(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameState.characters.map((character) => (
                  <motion.div
                    key={character.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      character.id === gameState.currentCharacter
                        ? 'bg-blue-100 border-blue-300'
                        : character.unlocked
                        ? 'bg-green-50 border-green-200 hover:bg-green-100 cursor-pointer'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => character.unlocked && switchCharacter(character.id)}
                    whileHover={{ scale: character.unlocked ? 1.02 : 1 }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">🧠</div>
                      <h3 className="font-semibold text-gray-800 mb-2">{character.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{character.description}</p>
                      <div className="text-xs text-gray-500">
                        {character.unlocked ? (
                          character.id === gameState.currentCharacter ? 'Active' : 'Unlocked'
                        ) : (
                          `Unlock at ${formatNumber(character.unlockCost)} Brainrot`
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Weather Modal */}
      <AnimatePresence>
        {showWeather && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWeather(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Weather</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowWeather(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameState.weathers.map((weather) => (
                  <motion.div
                    key={weather.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      weather.id === gameState.currentWeather
                        ? 'bg-blue-100 border-blue-300'
                        : weather.unlocked
                        ? 'bg-green-50 border-green-200 hover:bg-green-100 cursor-pointer'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => weather.unlocked && switchWeather(weather.id)}
                    whileHover={{ scale: weather.unlocked ? 1.02 : 1 }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {weather.id === 'normal' && '🌤️'}
                        {weather.id === 'rain' && '🌧️'}
                        {weather.id === 'sunny' && '☀️'}
                        {weather.id === 'star-rain' && '⭐'}
                        {weather.id === 'windy' && '💨'}
                        {weather.id === 'snowing' && '❄️'}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{weather.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{weather.description}</p>
                      <div className="text-xs text-gray-500">
                        {weather.unlocked ? (
                          weather.id === gameState.currentWeather ? 'Active' : 'Unlocked'
                        ) : (
                          `Unlock at ${formatNumber(weather.unlockCost)} Brainrot`
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Game;
