import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LayoutDashboard({ children }) {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/");
    },
  });
  const isUser = !!session?.user;

  if (isUser) {
    return (
      <div className="w-full min-h-screen bg-base-200 font-inter p-10 md:p-0 md:pt-5">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="title">Dashboard </div>
            <div className="flex items-center justify-center space-x-10">
              <Link href="/" passHref>
                <div className="link">Home</div>
              </Link>
              <Link href="/preview/12" passHref>
                <div className="link">Preview</div>
              </Link>
              <div
                className="link"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </div>
            </div>
          </div>

          <main className="mt-10">{children}</main>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}
