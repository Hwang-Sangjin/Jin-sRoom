import { CampingEmissive } from "./CampingEmissive";
import { CampingSet } from "./CampingSet";
import { CampingStuff } from "./CampingStuff";
import { Carpet } from "./Carpet";
import { Projection } from "./Projection";

const RoomCamping = () => {
  return (
    <group>
      <Carpet />
      <CampingSet />
      <Projection />
      <CampingStuff />
      <CampingEmissive />
    </group>
  );
};

export default RoomCamping;
