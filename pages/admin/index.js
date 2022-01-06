import LayoutAdmin from "components/LayoutAdmin";
import TableCard from "components/admin/TableCard";

export default function AdminPage() {
  return (
    <LayoutAdmin>
      <div className="title">Admin.</div>
      <div className="mt-10">
        <TableCard />
      </div>
    </LayoutAdmin>
  );
}
