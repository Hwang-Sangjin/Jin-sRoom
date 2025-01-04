import { Wall } from "./Wall";
import { Floor } from "./Floor";
import { Emissive } from "./Emissive";

const RoomBase = () => {
  return (
    <group>
      <Wall />
      <Floor />
      <Emissive />
    </group>
  );
};

export default RoomBase;
