import { Chair } from "./Chair";
import { Desk } from "./Desk";
import { DeskETC1 } from "./DeskETC1";
import { DeskETC2 } from "./DeskETC2";
import { DeskPlant } from "./DeskPlant";

const RoomDesk = () => {
  return (
    <group>
      <Desk />
      <Chair />
      <DeskETC1 />
      <DeskETC2 />
      <DeskPlant />
    </group>
  );
};

export default RoomDesk;
