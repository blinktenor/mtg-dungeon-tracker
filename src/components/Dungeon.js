import React, { useState } from "react";

const dungeonRooms = {
  start: { name: "Secret Entrance", effect: "Search your library for a basic land, reveal it, and put it into your hand.", next: ["Forge", "Lost Well"] },
  Forge: { name: "Forge", effect: "Put a +1/+1 counter on target creature.", next: ["Trap!", "Arena"] },
  "Lost Well": { name: "Lost Well", effect: "Scry 2.", next: ["Trap!", "Arena"] },
  "Trap!": { name: "Trap!", effect: "Target player loses 5 life.", next: ["Stash", "Archives"] },
  Arena: { name: "Arena", effect: "Goad target creature.", next: ["Stash", "Archives"] },
  Stash: { name: "Stash", effect: "Create a Treasure token.", next: ["Throne of the Dead Three"] },
  Archives: { name: "Archives", effect: "Draw a card.", next: ["Throne of the Dead Three"] },
  "Throne of the Dead Three": { name: "Throne of the Dead Three", effect: "Reveal top 10 cards, choose a creature, it enters with 3 +1/+1 counters and gains hexproof.", next: [] }
};

export default function UndercityDungeon() {
  const [currentRoom, setCurrentRoom] = useState("start");

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 p-4 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">{dungeonRooms[currentRoom].name}</h2>
          <p className="mt-2 text-gray-300">{dungeonRooms[currentRoom].effect}</p>
          <div className="mt-4 space-y-2">
            {dungeonRooms[currentRoom].next.map((room) => (
              <button
                key={room}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                onClick={() => setCurrentRoom(room)}
              >
                Enter {room}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
