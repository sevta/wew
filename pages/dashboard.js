import BrideCard from "components/dashboard/bride-card";
import EditorCard from "components/dashboard/editor-card";
import TemplateCard from "components/dashboard/template-card";
import LayoutDashboard from "components/layout-dashboard";
import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";

import { getSession } from "next-auth/react";

export default function Dashboard({ data }) {
  return (
    <LayoutDashboard>
      <div className="space-y-6">
        <TemplateCard />
        <BrideCard data={data} />
        <EditorCard />
      </div>
    </LayoutDashboard>
  );
}

export async function getServerSideProps(ctx) {
  await dbConnect();
  const session = await getSession(ctx);
  const data = await Bride.findOne({ user: session?.user?.id }).exec();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
