import { serialize } from "cookie";

/**
 * Handle a login call.
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
const handler = async (req, res) => {
  if (req.method === "POST") {
    if (req.cookies.token) {
      // Simulate the logout on the server.
      setTimeout(() => {
        res.status(200);
        // Set the token to null and expired
        res.setHeader(
          "Set-Cookie",
          serialize("token", null, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            maxAge: 0,
          })
        );
        res.end();
      }, 2000);
    } else {
      res.status(200).end();
    }
  } else {
    res.status(404).end();
  }
};

export default handler;
