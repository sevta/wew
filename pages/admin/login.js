import Login from "components/admin/login";
import LayoutAdmin from "components/layout-admin";
import { withSessionSsr } from "lib/withSession";

export default function AdminPageLogin() {
  return (
    <LayoutAdmin>
      <Login />
    </LayoutAdmin>
  );
}

export const getServerSideProps = withSessionSsr(handler);

async function handler({ req }) {
  const user = req.session?.user || null;

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
