import axios from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  async function handleLogin({ email, password }) {
    try {
      const resp = await axios.post("/api/admin/login", {
        email,
        password,
      });

      console.log(resp);
      if (resp) router.replace("/admin");
    } catch (error) {
      console.error(error.response);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <div className="title">Login</div>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
          </div>
          <div className="card-actions">
            <button className="btn btn-block">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
