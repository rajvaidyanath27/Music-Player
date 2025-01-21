import { FaRepeat } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { useState } from "react";

const Musicelement = () => {

  const [isHovered, setisHovered] = useState(false);

  const handleDragOver =(event) => {
    event.preventDefault();
    setisHovered(true);
  } 

  const handleDragLeave = ()=> {
    setisHovered(false);
  } 

  const handleDrop =(event)=> {
    setisHovered(false);
    let file = event.dataTransfer.files[0];
    if(file && file.type === 'audio/mpeg'){
        uploadAudio(file)
    }else{
      alert("Please Select and audio file!");
    }
  }

  const uploadAudio=(file)=> {

  }

  return (
    <div className="musicelement">

      <div className={`song_picture ${isHovered ? 'hoverd' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
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
