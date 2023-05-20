import Deliver from '../models/deliver.model.js';
import createError from '../utils/createError.js';

//create a new delivery for sellers
export const createDeliver = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, 'Only users can create a delivery option!'));

  const newDeliver = new Deliver({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedDeliver = await newDeliver.save();
    res.status(201).json(savedDeliver);
  } catch (err) {
    next(err);
  }
};

//create delete function for sellers' deliverys
export const deleteDeliver = async (req, res, next) => {
  try {
    const deliver = await Deliver.findById(req.params.id);

    if (deliver.userId !== req.userId)
      return next(createError(403, 'You can Delete your delivery details only!'));
    await Deliver.findByIdAndDelete(req.params.id);
    res.status(200).send('Delivery Option has been deleted!');
  } catch (err) {
    next(err);
  }
};

//get seleted delivery from delivery model
export const getDeliver = async (req, res, next) => {
  try {
    const deliver = await Deliver.findById(req.params.id);
    if (!deliver) return next(createError(404, 'deliver option Not Found!'));
    res.status(200).send(deliver);
  } catch (err) {
    next(err);
  }
};

//get ads acoording to filtering
// export const getDelivers = async (req, res, next) => {
//   const q = req.query;
//   const filters = {
//     ...(q.userId && { userId: q.userId }),
//     ...(q.cat && { cat: q.cat }),
//     ...((q.min || q.max) && {
//       price: {
//         ...(q.min && { $gt: q.min }),
//         ...(q.max && { $lt: q.max }),
//       },
//     }),
//     ...(q.search && { title: { $regex: q.search, $options: 'i' } }),
//   };
//   try {
//     const add = await Add.find(filters).sort({ [q.sort]: -1 });
//     res.status(200).send(add);
//   } catch (err) {
//     next(err);
//   }
// };


//create update selected product
export const updateDelivers = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find product by ID and update product details
    const updatedProduct = await Deliver.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'product is not found' });
    }

    return res.json({
      message: 'Product details updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};
