import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function TemplateCard() {
  const { register, handleSubmit } = useForm();

  async function onSubmitData({ name, price }) {
    try {
      const resp = await axios.post("/api/template", {
        name,
        price,
      });

      console.log({ resp });
      toast.success("success added template!");
    } catch (error) {
      console.error(error.response);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <div className="title">Template</div>
        </div>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Preview image</span>
            </label>
            <input
              type="file"
              placeholder="preview image"
              className="input-file"
            />
          </div>
          <div className="card-actions">
            <button className="btn btn-block">save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TemplateCard;
