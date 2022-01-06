import dbConnect from "lib/dbConnect";
import Template from "models/Template";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, price } = req.body;

    const hasTemplates = await Template.findOne({ name }).exec();

    if (hasTemplates) {
      res.send({ msg: "name template has been added" });
    } else {
      Template.create(
        {
          name,
          price,
        },
        function (err, template) {
          console.log(template);
          res.send({
            msg: "success create template",
            data: template,
          });
        }
      );
    }
  }
}
