import { withSessionRoute } from "lib/withSession";

async function handler(req, res) {
  if (req.method === "GET") {
    req.session.destroy();
    res.status(200).json({ message: "ok" });
  }
}
export default withSessionRoute(handler);
