import TableUsers from "./TableUsers";

export default function TableCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Users</div>
        <TableUsers />
      </div>
    </div>
  );
}
