import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div>
      <div className="container pb-10">
        <div className="flex items-center justify-between">
          <div className="title font-bold">Undagin.</div>
          <div className="flex items-center justify-center space-x-8">
            {session?.user ? (
              <>
                <div
                  className="link"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </div>
                <Link href="/dashboard" passHref>
                  <div className="link">Dashboard</div>
                </Link>
              </>
            ) : (
              <Link href="/login" passHref>
                <div className="link">Login</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
