"use client";

import DropZone from "@/components/DropZone";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IProps {
	setFiles: Dispatch<SetStateAction<Blob[]>>;
	setImages: Dispatch<SetStateAction<string[]>>;
	representImg: string;
}
export default function RepresentitiveImage({ representImg, setFiles, setImages }: IProps) {
	return (
		<div>
			<div className="w-[350px] h-60 ">
				<DropZone setFiles={setFiles} setImages={setImages}>
					{representImg ? (
						<Image src={representImg} alt="representitiveImage" width={350} height={240} />
					) : (
						<div className="w-[350px] h-60 flex rounded-lg justify-center align-middle bg-[#D9D9D9] border-[1px] border-[#D9D9D9]">
							<Image src="/Vector.svg" alt="image" width={80} height={60} />
						</div>
					)}
				</DropZone>
			</div>
		</div>
	);
}
