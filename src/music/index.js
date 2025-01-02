import merryChristmas from "&/MerryChristmas.mp3";
import merryChristmasImg from "./MerryChristmas.jpg";
import myFavoriteThings from "&/MyFavoriteThings.mp3";
import myFavoriteThingsImg from "./MyFavoriteThings.jpg";
import christmasLights from "&/ChristmasLights.mp3";
import christmasLightsImg from "./ChristmasLights.jpg";
import theChristmasSong from "&/TheChristmasSong.mp3";
import theChristmasSongImg from "./TheChristmasSong.jpg";
import oTannenbaum from "&/OTannenbaum.mp3";
import oTannenbaumImg from "./OTannenbaum.jpg";

const musicAPI = [
  {
    musicName: "Merry Christmas Mr.Lawrence",
    musicArtist: "Ryuichi Sakamoto",
    musicSrc: merryChristmas,
    musicImageSrc: merryChristmasImg,
  },
  {
    musicName: "My Favorite Things",
    musicArtist: "Leslie Odom, Jr",
    musicSrc: myFavoriteThings,
    musicImageSrc: myFavoriteThingsImg,
  },
  {
    musicName: "Christmas Lights",
    musicArtist: "Coldplay",
    musicSrc: christmasLights,
    musicImageSrc: christmasLightsImg,
  },
  {
    musicName: "The Christmas Song",
    musicArtist: "Eddie Higgins Trio",
    musicSrc: theChristmasSong,
    musicImageSrc: theChristmasSongImg,
  },
  {
    musicName: "O Tannenbaum",
    musicArtist: "Vince Guaraldi Trio",
    musicSrc: oTannenbaum,
    musicImageSrc: oTannenbaumImg,
  },
];

export default musicAPI;
