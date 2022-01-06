import Login from "components/admin/Login";
import LayoutAdmin from "components/LayoutAdmin";

export default function AdminPageLogin() {
  return (
    <LayoutAdmin>
      <div className="title">Admin</div>

      <div className="mt-10">
        <Login />
      </div>
    </LayoutAdmin>
  );
}
