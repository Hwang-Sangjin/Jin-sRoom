import { Wall } from "./Wall";
import { Floor } from "./Floor";

const RoomBase = () => {
  return (
    <group>
      <Wall />
      <Floor />
    </group>
  );
};

export default RoomBase;
