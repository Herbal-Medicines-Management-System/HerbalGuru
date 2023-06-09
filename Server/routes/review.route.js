import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
   getReviews,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

//create new review route
router.post("/", verifyToken, createReview )

//view all review relavernt addId route
 router.get("/:addId", getReviews )

 //delete revire route
router.delete("/:id", deleteReview)

export default router;
