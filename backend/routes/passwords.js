import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Heylo, I am the backend :3");
});

router.use(express.json());

router.post("/", (req, res) => {
  console.log(req.body.password);
  res.sendStatus(200);
});

export { router as passwordRouter };
