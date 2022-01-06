import Layout from "components/Layout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "authenticated") router.push("/dashboard");

  if (status === "loading") {
    // return <div>loading...</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="card max-w-md mx-auto">
          <div className="card-body">
            <div className="card-title">
              {/* <div className="title">Login</div> */}
            </div>
            <button
              className="btn btn-block"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              Login with github
            </button>
            <button
              className="btn btn-block btn-primary"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              Login with google
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
