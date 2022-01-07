import dbConnect from "lib/dbConnect";
import { withSessionRoute } from "lib/withSession";
import Template from "models/Template";

export default withSessionRoute(handler);

async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, price } = req.body;

    const user = req.session.user;

    if (!user) return res.status(500).json({ message: "unauthorized!" });

    const hasTemplates = await Template.findOne({ name }).exec();

    if (hasTemplates) {
      res.status(500).json({ message: "name template has been added" });
    } else {
      Template.create(
        {
          name,
          price,
        },
        function (err, template) {
          if (err) console.log(err);

          res.status(200).json({
            message: "success create template",
            data: template,
          });
        }
      );
    }
  }
}
