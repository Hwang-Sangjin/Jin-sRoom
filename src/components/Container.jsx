import { useRecoilState } from "recoil";
import AudioPlayer from "./audioPlayer";
import FiberContainer from "./FiberContainer";
import { currentMusic } from "../recoil/currentMusic";
import { playState } from "../recoil/playState";
import { useEffect, useRef, useState } from "react";
import musicAPI from "../music";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const getMusicTimeFormat = (time = 0) => {
  let minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return minutes + ":" + seconds;
};

const Container = () => {
  const audioRef = useRef(null);
  const [musicList, setMusicList] = useState(musicAPI);
  const [playMusic, setPlayMusic] = useRecoilState(currentMusic);
  const [play, setPlay] = useRecoilState(playState);
  const [rangeValue, setRange] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [playIndex, setPlayIndex] = useState(0);
  const [userPlay, setUserPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setMusicList(shuffle(musicList));
  }, []);

  useEffect(() => {
    setPlayMusic(musicList[playIndex]);
    if (userPlay) {
      audioRef.current.play();
    }
  }, [musicList]);

  useEffect(() => {
    setPlayMusic(musicList[playIndex]);
  }, [playIndex]);

  useEffect(() => {
    start();
  }, [playMusic]);

  const start = () => {
    if (audioRef.current && userPlay) {
      audioRef.current.play();
    }
    if (userPlay) {
      setPlay(true);
    } else {
      setUserPlay(true);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPlay(false);
  };

  const onChangeRange = (e) => {
    if (audioRef) {
      const audio = audioRef.current;
      let clickPosition = e.pageX - e.currentTarget.offsetLeft;
      let clickedValue =
        (clickPosition * e.currentTarget.max) / e.currentTarget.offsetWidth;
      audio.currentTime =
        (parseInt(String(clickedValue), 10) / 100) * audio.duration;
      setRange(parseInt(String(clickedValue), 10));
    }
  };

  const onClickNext = () => {
    setPlayIndex((playIndex + 1) % musicList.length);
  };

  const onClickPrevious = () => {
    if (rangeValue < 3) {
      setPlayIndex((playIndex - 1 + musicList.length) % musicList.length);
    } else {
      setRange(0);
      if (audioRef.current) {
        audioRef.current.pause(); // 오디오를 일시 중지합니다.
        audioRef.current.currentTime = 0; // 오디오 재생 위치를 초기화합니다.
        audioRef.current.play();
      }
    }
  };

  const handleVolumeChange = (volumeValue) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <>
      <audio
        key={playIndex}
        src={playMusic?.musicSrc}
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          setDuration(getMusicTimeFormat(e.target.duration || 0));
          setCurrentTime(getMusicTimeFormat(e.target.currentTime));
          setRange((e.target?.currentTime / e.target?.duration || 0) * 100);
        }}
        onEnded={onClickNext}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
        }}
      ></audio>
      <FiberContainer />
      <AudioPlayer
        playMusic={playMusic}
        play={play}
        start={start}
        stop={stop}
        rangeValue={rangeValue}
        onChangeRange={onChangeRange}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        duration={duration}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </>
  );
};

export default Container;
