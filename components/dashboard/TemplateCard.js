/* eslint-disable @next/next/no-img-element */
export default function TemplateCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Template</div>
        <div className="grid grid-cols-4 gap-5">
          <div className="overflow-hidden">
            <img
              className="rounded"
              src="https://jadinikah.co/wp-content/uploads/2021/12/New-Arrivals-001b.png"
              alt=""
            />
            <button className="btn btn-xs">select</button>
          </div>
          <div className="overflow-hidden">
            <img
              className="rounded"
              src="https://jadinikah.co/wp-content/uploads/2021/12/New-Arrivals-001b.png"
              alt=""
            />
            <button className="btn btn-xs">select</button>
          </div>
        </div>
      </div>
    </div>
  );
}
