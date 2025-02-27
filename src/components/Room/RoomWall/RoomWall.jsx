import { LPItems } from "./LPItems";
import { LPPlayer } from "./LPPlayer";
import LPProjectItem from "./LPProject";
import { WallBook } from "./WallBook";
import { WallItems1 } from "./WallItems1";
import { WallItems2 } from "./WallItems2";
import { WallItems3 } from "./WallItems3";
import { WallStand } from "./WallStand";

const RoomWall = () => {
  return (
    <group>
      <WallStand />
      <WallItems1 />
      <WallItems2 />
      <WallItems3 />
      <LPItems />
      <LPPlayer />
      <WallBook />
      <LPProjectItem />
    </group>
  );
};

export default RoomWall;
