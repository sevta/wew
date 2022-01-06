import dbConnect from "lib/dbConnect";
import Bride from "models/Bride";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (req.method === "GET") {
    console.log("the session from bride", { session });
    res.send({ msg: "ok get" });
  }

  if (req.method === "POST") {
    const { namaPengantinPria, namaPengantinWanita, date, uid } = req.body;

    console.log({ session });

    const hasBride = await Bride.findOne({ user: uid }).exec();

    if (hasBride) {
      await Bride.findOneAndUpdate(
        { user: uid },
        {
          namaPengantinPria,
          namaPengantinWanita,
          date,
          user: session?.user.id,
        }
      );
      res.send({ msg: "success update" });
    } else {
      await Bride.create(
        {
          namaPengantinPria,
          namaPengantinWanita,
          date,
          user: session?.user.id,
        },
        function (err, result) {
          if (err) {
            console.log(err);
            res.send({ msg: "err", error: err });
          }
          console.log({ result });
          res.send({ msg: "ok" });
        }
      );
    }
  }
}
