import { useState } from 'react'
import './App.css'
import UndercityDungeon from './components/Dungeon.jsx';

function App() {
  return (
    <div>
      <UndercityDungeon borderColor={'border-white-500'} />
      <UndercityDungeon borderColor={'border-blue-500'} />
      <UndercityDungeon borderColor={'border-red-500'} />
      <UndercityDungeon borderColor={'border-green-500'} />
    </div>
  )
}

export default App
