import dbConnect from "lib/dbConnect";
import Admin from "models/Admin";
import bcrypt from "bcrypt";
import { withSessionRoute } from "lib/withSession";

export default withSessionRoute(handler);

async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).exec();

    if (admin) {
      const compare = bcrypt.compareSync(password, admin.password);

      if (compare) {
        console.log({ admin });
        req.session.user = {
          email: admin.email,
        };
        await req.session.save();
        res.status(200).json({ message: "ok", admin });
      } else {
        res.status(500).json({ message: "password not match!" });
        res.send({ msg: "failed" });
      }
    } else {
      res.status(500).json({ message: "user not found!" });
    }
  }
}
