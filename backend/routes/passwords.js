import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Heylo, I am the backend :3");
});

export { router as passwordRouter };
