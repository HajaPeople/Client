import Room, { type Room as RoomType } from "./Room";


type RoomListProps = {
  rooms: RoomType[];
}
const RoomList = ({rooms}:RoomListProps)=>{
  return <ul className="overflow-y-auto">
    {rooms.map((room)=> 
      <li key={`room-${room.id} w-full`}>
        <a href={`/room/${room.id}`}>
          <Room {...room} />
        </a>
      </li>)}
    </ul>
};
export default RoomList;