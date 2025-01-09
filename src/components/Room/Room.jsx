import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import RoomBase from "./RoomBase/RoomBase";
import RoomCamping from "./RoomCamping/RoomCamping";
import RoomWall from "./RoomWall/RoomWall";
import RoomBook from "./RoomBook/RoomBook";
import RoomDesk from "./RoomDesk/RoomDesk";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

const Room = () => {
  // const camera = useThree((state) => state.camera);
  // const ref = useRef();
  // const tl = useRef();

  // const scroll = useScroll();

  // useFrame(() => {
  //   tl.current.seek(scroll.offset * tl.current.duration());
  // });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   // VERTICAL ANIMATION
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 2,
  //       y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
  //     },
  //     0
  //   );

  //   // Office Rotation
  //   tl.current.to(
  //     ref.current.rotation,
  //     { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
  //     0
  //   );
  //   tl.current.to(
  //     ref.current.rotation,
  //     { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
  //     1
  //   );

  //   // Office movement
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 1,
  //       x: -1,
  //       z: 2,
  //     },
  //     0
  //   );
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 1,
  //       x: 1,
  //       z: 2,
  //     },
  //     1
  //   );
  // }, []);

  return (
    <group>
      <RoomBase />
      <RoomCamping />
      <RoomWall />
      <RoomBook />
      <RoomDesk />
    </group>
  );
};

export default Room;
