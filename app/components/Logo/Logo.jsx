import brain from "./icons8-brain-100.png";

export default function Logo() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <img className="p-6" alt="logo" src={brain} />
      </div>

      <a href="https://github.com/Jhonneg">
        <p className="inline-block mx-1">Build by </p>
        <img
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
