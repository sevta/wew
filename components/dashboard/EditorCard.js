export default function EditorCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Editor</div>
        <form>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Hero image</span>
            </label>
            <input type="file" className="input-file" />
          </div>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Foto pria</span>
            </label>
            <input type="file" className="input-file" />
          </div>
          <div className="form-control">
            <label htmlFor="">
              <span className="label-text-alt">Foto wanita</span>
            </label>
            <input type="file" className="input-file" />
          </div>
        </form>
      </div>
    </div>
  );
}
