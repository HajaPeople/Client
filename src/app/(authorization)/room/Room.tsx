import Image from "next/image";
import { getTimeDiffToKorean } from "./dateUtils";

export type Room = {
  id: number;
  title: string;
  thumbnailUrl: string;
  previewText:string;
  lastMessageTime: string;
}

type RoomProps = Room;

const Room = ({ title, previewText, thumbnailUrl, lastMessageTime}:RoomProps)=>{
  return <div className="flex h-20 items-center border-b p-1">
    <div className="basis-20 flex items-center justify-center h-full w-full">
      <Image 
        src={thumbnailUrl} 
        alt={`${title} 썸네일 이미지`} 
        width={54} 
        height={54} 
        className="object-cover aspect-square rounded-md"
      />
    </div>
    <div className="flex-1 h-full flex flex-col py-1">
      <h3 className="text-[15px]">{title}</h3>
      <p className="text-xs text-[#555]">{previewText}</p>
    </div>
    <div className="basis-15 h-full flex p-2">
      <p className="text-xs text-[#666]">{getTimeDiffToKorean(new Date(lastMessageTime))}</p>
    </div>
  </div>
};

export default Room;

