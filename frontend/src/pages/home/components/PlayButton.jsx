import React from "react";
import { usePlayerStore } from "../../../stores/usePlayerStore";
import { Button } from "../../../components/ui/button";
import { Pause, Play } from "lucide-react";

const PlayButton = ({ song, isChange = false }) => {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } =
    usePlayerStore();
  const isCurrentSong = currentSong?._id === song._id;

  const handlePlay = () => {
    if (isCurrentSong) togglePlay();
    else setCurrentSong(song);
  };

  return (
    <Button
      onClick={handlePlay}
      className={`rounded-full absolute ${
        isChange ? "bottom-0" : "top-3"
      }  right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all
        opacity-0 translate-y-2  ${
          isCurrentSong ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
    >
      {isCurrentSong && isPlaying ? (
        <Pause className="size-3 text-black" />
      ) : (
        <Play className="size-3 text-black" />
      )}
    </Button>
  );
};

export default PlayButton;
