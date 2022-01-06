import dbConnect from "lib/dbConnect";
import Admin from "models/Admin";
import bcrypt from "bcrypt";

/**
* gajadi pake
*/
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log({ email, password });

    const hasUser = await Admin.findOne({ email }).exec();

    if (hasUser) {
      res.send({ status: "error", message: "email has been registered" });
    } else {
      if (email !== undefined || password !== undefined) {
        const hashPassword = bcrypt.hashSync(password, 10);
        Admin.create(
          {
            email,
            password: hashPassword,
          },
          function (err, user) {
            if (err) console.log(err);
            console.log(user);
            res.send({
              status: "success",
              msg: "user has been created",
              user,
            });
          }
        );
      } else {
        res.send({ status: "error", msg: "username or passwod null" });
      }
    }
  }
}
