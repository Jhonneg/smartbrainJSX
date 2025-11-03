import brain from "./icons8-brain-100.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image className="p-6" alt="logo" src={brain} />

      <a href="https://github.com/Jhonneg">
        <p className="inline-block mx-1">Build by </p>
        <Image
          className="inline-block"
          width="32"
          height="32"
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
          alt="github"
        />
      </a>
    </div>
  );
}
