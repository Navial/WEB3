import Good from './components/Good.jsx'
import Ok from './components/Ok.jsx'
import Bad from './components/Bad.jsx'
import { Context as CountersContext } from "./contexts/countersContext.jsx";
import { useContext } from 'react';

function App() {
  const { resetScores } = useContext(CountersContext )


  return (
    <>
      <ul>
        <Good></Good>
        <Ok></Ok>
        <Bad></Bad>
      </ul>
      <button onClick={resetScores}> Reset scores </button>
    </>
  )
}

export default App
