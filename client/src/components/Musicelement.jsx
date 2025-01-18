import { FaRepeat } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";

const Musicelement = () => {
  return (
    <div className="musicelement">

      <div className="song_picture">
        <img src=" " alt="song cover" />
      </div>

      <div className="progress">
        <div className="time">
            <span>00:00</span>
            <span>00:00</span>
        </div>
         
         <div className="progress_bar">
            <div className="progress_line">
            </div>
         </div>
      </div>

      <div className="song-detail">
        <marquee behavior="" direction="">
          Sex on Hours
        </marquee>

        <p>Eminem</p>
      </div>

      <div className="controls">
        <button><FaRepeat /></button>

        <div className="control-btn">
           <button><MdSkipPrevious /></button>
            <button className="play"><FaPlay /></button>
            <button><MdSkipNext /></button>

        </div>

        <button><FaShuffle /></button>
      </div>

    </div>
  )
}

export default Musicelement
