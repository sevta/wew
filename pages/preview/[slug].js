import LayoutTemplate from "components/layout-template";
import Tmp1 from "components/templates/tmp1";
import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";
import { getSession } from "next-auth/react";

export default function Preview({ preview }) {
  return (
    <LayoutTemplate>
      <Tmp1
        namaPengantinPria={preview.namaPengantinPria}
        namaPengantinWanita={preview.namaPengantinWanita}
      />
    </LayoutTemplate>
  );
}

export async function getServerSideProps(ctx) {
  await dbConnect();
  const session = await getSession(ctx);
  const data = await Bride.findOne({ user: session?.user?.id });

  return {
    props: {
      preview: JSON.parse(JSON.stringify(data)),
    },
  };
}
