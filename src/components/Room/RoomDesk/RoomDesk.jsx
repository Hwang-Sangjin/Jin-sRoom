import { Chair } from "./Chair";
import { Desk } from "./Desk";
import { DeskETC1 } from "./DeskETC1";
import { DeskETC2 } from "./DeskETC2";
import { DeskImac } from "./DeskImac";
import { DeskKeyboard } from "./DeskKeyboard";
import { DeskLamp } from "./DeskLamp";
import { DeskMacbook } from "./DeskMacbook";
import { DeskMouse } from "./DeskMouse";
import { DeskPlant } from "./DeskPlant";
import { Earth } from "./Earth";
import { GlobeStand } from "./GlobeStand";

const RoomDesk = () => {
  return (
    <group>
      <Desk />
      <Chair />
      <DeskETC1 />
      <DeskETC2 />
      <DeskPlant />
      <DeskLamp />
      <DeskImac />
      <DeskMacbook />
      <DeskMouse />
      <DeskKeyboard />
      <GlobeStand />
      <Earth />
    </group>
  );
};

export default RoomDesk;
