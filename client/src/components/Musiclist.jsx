import { FaPlay } from "react-icons/fa";
import './Style.css';
import Imgsrc from '../assets/player.png';

const Musiclist = () => {
  return (
    <div className="musiclist">
        <ul className='ul_music'>
            <li>
                <img src={Imgsrc} alt="Im" />
                
                <div className="song_name_list">
                  <p>Company by justin bieber</p>

                   <span><FaPlay /></span>
                </div>
                
            </li>
            <li>
                <img src={Imgsrc} alt="Im" />
                
                <div className="song_name_list">
                  <p>Company by justin bieber</p>

                   <span><FaPlay /></span>
                </div>
                
            </li>
            <li>
                <img src={Imgsrc} alt="Im" />
                
                <div className="song_name_list">
                  <p>Company by justin bieber</p>

                   <span><FaPlay /></span>
                </div>
                
            </li>
        </ul>
    </div>
  )
}

export default Musiclist
