import { CampingEmissive } from "./CampingEmissive";
import { CampingSet } from "./CampingSet";
import { CampingStuff } from "./CampingStuff";
import { Carpet } from "./Carpet";

const RoomCamping = () => {
  return (
    <group>
      <Carpet />
      <CampingSet />
      <CampingStuff />
      <CampingEmissive />
    </group>
  );
};

export default RoomCamping;
