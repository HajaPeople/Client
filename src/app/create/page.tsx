"use client";

import { useState } from "react";
import RepresentitiveImage from "./RepresentitiveImage";

export default function Page() {
	const [files, setFiles] = useState<Blob[]>([]);
	const [images, setImages] = useState<string[]>([]);
	const [representImg, setRepresentImg] = useState<string>("");

	return <div className="">{/* <RepresentitiveImage representImg={representImg} setFiles={setFiles} setImages={setImages} /> */}</div>;
}
