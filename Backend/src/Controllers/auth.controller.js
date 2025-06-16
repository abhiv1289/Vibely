import { User } from "../Models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      console.log("user not found!");

      User.create({
        clerkId: id,
        fullname: `${firstName || ""} ${lastName || ""}`.trim(),
        imageUrl: imageUrl,
      });
    } else {
      console.log("User already exists!");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in callback function!");
    next(error);
  }
};
