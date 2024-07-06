"use client";
import { MdUploadFile } from "react-icons/md";
import Dropzone from "react-dropzone";

export default function DropZoneComponent() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps()}
            className="mx-auto w-full max-w-2xl h-80 outline-dashed border-1 outline-gray-400 rounded-md hover:bg-blue-100 hover:outline-blue-500 hover:text-blue-500"
          >
            <input {...getInputProps()} />
            <div className=" flex justify-center flex-col items-center w-full h-full hover:cursor-pointer">
              <MdUploadFile className="text-6xl" />
              <p className="text-2xl text-black  ">
                Drag drop some files here, or click to select files
              </p>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
