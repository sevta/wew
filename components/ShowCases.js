/* eslint-disable @next/next/no-img-element */
export default function ShowCases({
  index = 0,
  price = "-",
  name,
  OnLihatContohClick = () => {},
}) {
  return (
    <div className="card shadow-none">
      <figure>
        <img
          src="https://jadinikah.co/wp-content/uploads/2021/12/New-Arrivals-001b.png"
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <div className="title font-amatic font-bold text-4xl">
            New Arivals {index + 1} <span className="text-xl">{name}</span>
          </div>
        </div>
        <div className="content">Rp {price}</div>
        {price === 0 && <div className="badge badge-secondary">free</div>}
        <div className="card-actions">
          <button
            className="btn btn-block btn-ghost"
            onClick={OnLihatContohClick}
          >
            lihat contoh
          </button>
          <button className="btn btn-seondary btn-block">pesan sekarang</button>
        </div>
      </div>
    </div>
  );
}
