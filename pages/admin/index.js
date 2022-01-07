import LayoutAdmin from "components/layout-admin";
import TableCard from "components/admin/table-card";
import TemplateCard from "components/admin/template-card";
import axios from "axios";
import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";

import { useRouter } from "next/router";
import { withSessionSsr } from "lib/withSession";

export default function AdminPage({ brides }) {
  const router = useRouter();

  async function handleLogout() {
    await axios.get("/api/admin/logout");
    router.push("/admin/login");
  }

  return (
    <LayoutAdmin>
      <button onClick={handleLogout}>logout</button>
      <div className="grid grid-cols-1 gap-y-10">
        <TemplateCard />
      </div>
    </LayoutAdmin>
  );
}

export const getServerSideProps = withSessionSsr(handler);

async function handler({ req }) {
  await dbConnect();
  const user = req.session.user || null;
  const brides = await Bride.find().exec();

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin/login",
      },
    };
  }

  return {
    props: {
      user,
      brides: JSON.parse(JSON.stringify(brides)),
    },
  };
}
