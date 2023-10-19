import React from 'react'
import Player from "@madzadev/audio-player";
const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: [""],  
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: [""],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: [""],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: "otra cancion",
        tags: [""],
      },

     
      


  ];
const colors=`html{
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #f6fe10;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #10fed6;
    --progressSlider: #9440f3;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #9440f3;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`


const Player1 = () => {
  return (
    <div>
      <Player
      customColorScheme={colors}
      trackList={tracks}
      />
    </div>
  )
}

export default Player1
