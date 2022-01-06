import dbConnect from "lib/dbConnect";
import Admin from "models/Admin";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).exec();

    if (admin) {
      const compare = bcrypt.compareSync(password, admin.password);
      console.log("compare", compare);
      if (compare) {
        res.send({ msg: "ok auth" });
      } else {
        res.send({ msg: "failed" });
      }
    } else {
      res.send({ msg: "not found" });
    }
  }
}
