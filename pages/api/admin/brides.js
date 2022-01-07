import { withSessionRoute } from "lib/withSession";
import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";

export default withSessionRoute(handler);

async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const session = req.session.user;

    console.log({ session });

    const bride = await Bride.find().exec();

    console.log({ bride });

    if (!session) {
      res.status(500).json({ message: "unauthorized" });
    } else {
      res.status(200).json({ message: "ok", bride });
    }
  }
}
