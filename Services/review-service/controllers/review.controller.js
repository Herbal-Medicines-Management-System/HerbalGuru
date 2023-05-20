import createError from '../utils/createError.js';
import Review from '../models/review.model.js';
import Add from '../models/add.model.js';

export const createReview = async (req, res, next) => {
  console.log('create review');
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    addId: req.body.addId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      addId: req.body.addId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, 'You have already created a review for this add!')      
      );

    //TODO: check if the user purchased the add.

    const savedReview = await newReview.save();

    await Add.findByIdAndUpdate(req.body.addId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ addId: req.params.addId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(createError(404, 'Review not found'));
    }

    if (review.userId !== req.userId)
      return next(createError(403, 'You can delete your own reviews only'));
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).send('Review has been deleted successfully');
  } catch (err) {
    next(err);
  }
};
