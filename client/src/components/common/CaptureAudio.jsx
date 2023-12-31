import { useStateProvider } from "@/context/StateContext";
import { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaPauseCircle, FaPlay, FaStop, FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";
// import WaveSurfer from "wavesurfer.js";

function CaptureAudio({hide}) {

  const [{ userInfo, currentChatUser, socket }, dispatch] = useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveForm, setWaveForm] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlayBackTime, setCurrentPlayBackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const waveFormRef = useRef(null);


  // useEffect(() => {
  //   const wavesurfer = WaveSurfer.create({
  //     container: waveFormRef.current,
  //     waveColor: "#ccc",
  //     progressColor: "#4a9eff",
  //     cursorColor: "#7ae3c3",
  //     barWidth: 2,
  //     height: 30,
  //     responsive: true
  //   });
  //   setWaveForm(wavesurfer);

  //   wavesurfer.on("finish", () => {
  //     setIsPlaying(false);
  //   });

  //   return () => {
  //     wavesurfer.destroy();
  //   }

  // }, []);

  // useEffect(() => {
  //   if(waveForm) handleStartRecording()
  // }, [waveForm])


  const handlePlayRecording = () => {

  }
  const handlePauseRecording = () => {

  }

  const handleStopRecording = () => {

  }
  const handleStartRecording = () => {

  }

  const sendRecording = async () => {

  }

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  };

  return (
    <div className="flex text-2xl w-full justify-end items-center">
     
      <div className="pt-1">
        <FaTrash 
          className="text-panel-header-icon cursor-pointer"
          onClick={() => hide( )}
        />
      </div>
      <div className="mx-4 py-2 px-4 text-white text-lg flex gap-3 justify-center items-center bg-search-input-container-background rounded-full drop-shadow-lg">
        {isRecording ? (
          <div className="text-red-500 animate-pulse w-60 text-center">
            Recording <span>{recordingDuration}s</span>
          </div>
        ):
        (
          <div className="">
            {
              recordedAudio && 
              <>
                {
                  !isPlaying ?
                  <FaPlay onClick={handlePlayRecording} /> :
                  <FaStop onClick={handlePauseRecording} />
                }
              </>
            }
          </div>
        )}
        <div className="w-60" ref={waveFormRef} hidden={isRecording} />
        {
          recordedAudio && isPlaying && (
            <span>
              {formatTime(currentPlayBackTime)}
            </span>
          )
        }   
        {
          recordedAudio && !isPlaying && <span>
            {formatTime(totalDuration)}
          </span>
        }    
        <audio ref={audioRef} hidden />

        <div className="mr-4">
            {
              !isRecording ? 
              <FaMicrophone className="text-red-500" onClick={handleStartRecording} /> :
              <FaPauseCircle className="text-red-500" onClick={handleStopRecording} />
            }
        </div>
        <div>
          <MdSend 
            className="text-panel-header-icon cursor-pointer mr-4"
            title="send"
            onClick={sendRecording}
          />
        </div>
      </div>
    </div>
  )
}

export default CaptureAudio;
