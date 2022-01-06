import BrideCard from "components/dashboard/BrideCard";
import EditorCard from "components/dashboard/EditorCard";
import TemplateCard from "components/dashboard/TemplateCard";
import LayoutDashboard from "components/LayoutDashboard";
import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";

import { getSession } from "next-auth/react";

export default function Dashboard({ data }) {
  return (
    <LayoutDashboard>
      <div className="space-y-6">
        <BrideCard data={data} />
        <TemplateCard />
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
