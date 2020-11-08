import User from "mock/user.json";

export default (req, res) => {
  if (req.cookies.token) {
    if (User.authToken === req.cookies.token) {
      res.status(200).end(JSON.stringify({ user: User }));
    }
  }
  res.status(403).end();
};
