import React, { useState } from "react";

const dungeons = {
  "Undercity": [
    ["Secret Entrance"],
    ["Forge", "Lost Well"],
    ["Trap!", "Arena", "Stash"],
    ["Archives", "Catacombs"],
    ["Throne of the Dead Three"]
  ],
  "Dungeon of the Mad Mage": [
    ["Yawning Portal"],
    ["Dungeon Level", "Goblin Bazaar"],
    ["Twisted Caverns", "Lost Level", "Runestone Caverns"],
    ["Deep Mines", "Mad Wizard's Lair"]
  ],
  "Tomb of Annihilation": [
    ["Trapped Entry"],
    ["Veils of Fear", "Oubliette"],
    ["Sandfall Cell", "Cradle of the Death God"]
  ],
  "Lost Mine of Phandelver": [
    ["Cave Entrance"],
    ["Goblin Lair", "Mine Tunnels"],
    ["Temple of Dumathoin"]
  ]
};

const dungeonRooms = {
  "Secret Entrance": "Search your library for a basic land, reveal it, and put it into your hand.",
  "Forge": "Put a +1/+1 counter on target creature.",
  "Lost Well": "Scry 2.",
  "Trap!": "Target player loses 5 life.",
  "Arena": "Goad target creature.",
  "Stash": "Create a Treasure token.",
  "Catacombs": "Create a 4/1 black Skeleton creature token with menace.",
  "Archives": "Draw a card.",
  "Throne of the Dead Three": "Reveal top 10 cards, choose a creature, it enters with 3 +1/+1 counters and gains hexproof.",
  "Yawning Portal": "Gain 1 life.",
  "Dungeon Level": "Scry 1.",
  "Goblin Bazaar": "Create a Treasure token.",
  "Twisted Caverns": "Tap target creature.",
  "Lost Level": "Scry 2.",
  "Runestone Caverns": "Exile the top 2 cards of your library.",
  "Deep Mines": "Draw a card.",
  "Mad Wizard's Lair": "Cast a spell from exile without paying its mana cost.",
  "Trapped Entry": "Each player loses 1 life.",
  "Veils of Fear": "Each opponent loses 2 life unless they discard a card.",
  "Oubliette": "Discard a card.",
  "Sandfall Cell": "Create a Treasure token.",
  "Cradle of the Death God": "Create a 4/4 black God Horror creature token.",
  "Cave Entrance": "Scry 1.",
  "Goblin Lair": "Create a 1/1 red Goblin creature token.",
  "Mine Tunnels": "Create a Treasure token.",
  "Temple of Dumathoin": "Draw a card."
};

function DungeonRoom({ name, effect, isActive, onClick }) {
  return (
    <div 
      className={`p-4 rounded-lg text-center shadow-lg inline-block mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer bg-gray-700 text-white ${isActive ? 'border-2 border-yellow-500' : ''}`}
      onClick={onClick}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2 text-sm break-words">{effect}</p>
    </div>
  );
}

export default function DungeonExplorer() {
  const [selectedDungeon, setSelectedDungeon] = useState("Undercity");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [enteredRooms, setEnteredRooms] = useState({ "Secret Entrance": true });
  const [showRemaining, setShowRemaining] = useState(false);

  const handleRoomClick = (room, level) => {
    if (level === currentLevel + 1) {
      setEnteredRooms({ ...enteredRooms, [room]: true });
      setCurrentLevel(level);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-900 text-white">
      <select 
        className="mb-4 p-2 rounded bg-gray-800 text-white"
        value={selectedDungeon} 
        onChange={(e) => {
          setSelectedDungeon(e.target.value);
          setCurrentLevel(0);
          setEnteredRooms({ [dungeons[e.target.value][0][0]]: true });
        }}
      >
        {Object.keys(dungeons).map((dungeon) => (
          <option key={dungeon} value={dungeon}>{dungeon}</option>
        ))}
      </select>
      <div className="w-full max-w-4xl bg-gray-800 border border-gray-700 p-4 rounded-xl flex flex-col space-y-6">
        {dungeons[selectedDungeon].map((levelRooms, index) => (
          <div key={index} className={`w-full flex justify-center gap-4 flex-wrap ${index > currentLevel + 1 && !showRemaining ? 'hidden' : ''}`}>
            {levelRooms.map((room) => (
              <DungeonRoom 
                key={room} 
                name={room} 
                effect={dungeonRooms[room]} 
                isActive={enteredRooms[room]} 
                onClick={() => handleRoomClick(room, index)}
              />
            ))}
          </div>
        ))}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          onClick={() => setShowRemaining(!showRemaining)}
        >
          {showRemaining ? "Hide Remaining Dungeon ▲" : "Show Remaining Dungeon ▼"}
        </button>
      </div>
    </div>
  );
}
