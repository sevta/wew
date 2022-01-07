import Link from "next/link";

export default function LayoutAdmin({ children }) {
  return (
    <div className="w-full min-h-screen bg-base-200 font-inter p-10">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="title">Admin</div>
          <div>
            <Link href="/" passHref>
              <div className="link">Home</div>
            </Link>
          </div>
        </div>
        <main className="mt-10">{children}</main>
      </div>
    </div>
  );
}
