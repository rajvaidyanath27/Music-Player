import './index.css';
import './app.css';  
import Musicelement from './components/Musicelement';
import './components//Style.css'
import Musiclist from './components/Musiclist';

function App() {
  return (
    <>
    <div className="player">
      <h3>Collixidal</h3>
       <hr />

       <Musicelement />
       <hr />
       <Musiclist />
    </div>
    </>
  )
}

export default App
