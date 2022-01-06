import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit } = useForm();

  async function handleLogin({ email, password }) {
    const resp = await axios.post("/api/admin/login", {
      email,
      password,
    });

    console.log(resp);
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
