/* eslint-disable @next/next/no-img-element */
export default function Tmp1({
  namaPengantinPria = "nama pengantin",
  namaPengantinWanita = "nama pengantin",
}) {
  return (
    <div>
      <div className="relative h-screen w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-base-content/20 z-30"></div>
        <img
          src="https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="z-20"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40">
          <div className="font-greatvibes text-8xl text-white text-center">
            <div>{namaPengantinPria}</div>
            <div>&</div>
            <div>{namaPengantinWanita}</div>
          </div>
        </div>
      </div>
      <div className="h-screen py-10">
        <div className="font-greatvibes text-6xl font-bold text-center">
          We are getting maried
        </div>
      </div>
    </div>
  );
}
