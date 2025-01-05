import { BookStand } from "./BookStand";
import { BookStuff } from "./BookStuff";
import { Partition } from "./Partition";

const RoomBook = () => {
  return (
    <group>
      <Partition />
      <BookStand />
      <BookStuff />
    </group>
  );
};

export default RoomBook;
