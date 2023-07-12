"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface IProps {
	setFiles: Dispatch<SetStateAction<Blob[]>>;
	setImages: Dispatch<SetStateAction<string[]>>;
	children: React.ReactNode;
}

export default function DropZone({ setFiles, setImages, children }: IProps) {
	const onDrop = useCallback((acceptedFiles: Blob[]) => {
		acceptedFiles.forEach((file: Blob) => {
			const reader = new FileReader();
			setFiles((prev) => [...prev, file]);
			const bloburl = URL.createObjectURL(file);
			setImages((prev) => [...prev, bloburl]);
			reader.onabort = () => console.log("file reading was aborted");
			reader.onerror = () => console.log("file reading has failed");
			reader.readAsArrayBuffer(file);
		});
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<div {...getRootProps()} id="dropzone">
			<input {...getInputProps()} />
			{children}
		</div>
	);
}
