import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function Login(req, res) {
  const userLoggingIn = req.body;

  User.findOne({ email: userLoggingIn.email }).then((dbUser) => {
    if (!dbUser) {
      return res.send({ message: "No Account Found with this Email" });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
        if (isCorrect) {
          const user = {
            id: dbUser._id,
            email: dbUser.email,
          };
          return res.send({
            message: "Logged In Successfully",
            user,
            email: req.body.email,
          });
        } else {
          return res.send({ message: "Incorrect Password" });
        }
      });
  });
}

export { Login };
