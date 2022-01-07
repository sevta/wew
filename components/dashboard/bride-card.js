import axios from "axios";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Bride({ data }) {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("the data", { data });
  }, [data]);

  async function onSubmit({ namaPengantinPria, namaPengantinWanita, date }) {
    setLoading(true);
    const uid = session?.user?.id;
    try {
      const resp = await axios.post("/api/bride", {
        namaPengantinPria,
        namaPengantinWanita,
        date,
        uid,
      });

      console.log(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <div className="title">Data</div>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Nama pengantin pria</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={data?.namaPengantinPria}
              {...register("namaPengantinPria", { required: true })}
            />
          </div>

          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Nama pengantin wanita</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={data?.namaPengantinWanita}
              {...register("namaPengantinWanita", { required: true })}
            />
          </div>

          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Tanggal acara</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              defaultValue={data?.date}
              {...register("date", { required: true })}
            />
          </div>
          <div className="card-actions">
            <button
              className={`btn btn-block ${loading && "loading"}`}
              disabled={loading}
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
