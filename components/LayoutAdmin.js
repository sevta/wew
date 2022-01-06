export default function LayoutAdmin({ children }) {
  return (
    <div className="w-full min-h-screen bg-base-200 font-inter p-10">
      <div className="container max-w-4xl">{children}</div>
    </div>
  );
}
