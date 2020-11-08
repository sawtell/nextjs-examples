import { serialize } from "cookie";
import User from "mock/user.json";

/**
 * Handle a login call.
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;

    if (email === User.email && password === User.password) {
      // Simulate a login
      setTimeout(() => {
        res.statusCode = 200;
        // Set an HTTP only cookie with the authentication token
        res.setHeader(
          "Set-Cookie",
          serialize("token", User.authToken, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30, // 1 month.. near enough
          })
        );
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(User));
      }, 2000);
    } else {
      // Tell user they have incorrect credentials
      res.status(403).end();
    }
  } else {
    res.status(404).end();
  }
};

export default handler;
