import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function LayoutTemplate({ children }) {
  const audioUrl =
    "https://jadinikah.co/wp-content/uploads/2021/12/Jamie_Miller_Here_s_Your_Perfect-1.mp3";
  const audio = new Audio(audioUrl);

  const [play, setPlay] = useState(false);

  useEffect(() => {
    audio.play();
    audio.addEventListener("ended", () => setPlay(false));
    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlay(false));
    };
  }, []);

  return (
    <div className=" font-josefin" data-theme="emerald">
      <div className="bg-black p-3 z-[100] fixed top-0 left-0 w-full flex items-center justify-between">
        <div className="font-medium text-white">Template 1</div>
        <button className="btn btn-sm px-4">beli</button>
      </div>
      {children}
    </div>
  );
}
