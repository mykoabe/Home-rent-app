const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");
const Appartment = require("../models/Appartment");
const advancedResults = require("../middleware/advancedResults");

// @desc      Get Appartments
// @route     GET /api/appartments
// @access    Public
exports.getAppartments = asyncHandler(async (req, res, next) => {
  if (req.params.shopId) {
    console.log(req.params.shopId);
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single Appartment
// @route     GET /api/Appartments/:id
// @access    Public
exports.getAppartment = asyncHandler(async (req, res, next) => {
  const appartment = await Appartment.findById(req.params.id);

  if (!appartment) {
    return next(
      new ErrorResponse(`No Appartment with the id of ${req.params.id}`),
      404
    );
  }
  res.status(200).json({
    success: true,
    data: appartment,
  });
});

// @desc      Create new Appartment
// @route     POST /api/appartments
// @access    Private
exports.addAppartment = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;


  const appartment = await Appartment.create(req.body);

  res.status(201).json({
    success: true,
    data: appartment
  });
});

// @desc      Update Appartment
// @route     PUT /api/Appartments/:id
// @access    Private
exports.updateAppartment = asyncHandler(async (req, res, next) => {
  let appartment = await Appartment.findById(req.params.id);

  if (!appartment) {
    return next(
      new ErrorResponse(`No Appartment with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is shop owner
  if (appartment.user.toString() !== req.user.id && req.shop.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.shop.id} is not authorized to update a Appartment with id ${req.params.id}`,
        401
      )
    );
  }

  appartment = await Appartment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: appartment,
  });
});

// @desc      Delete Appartment
// @route     DELETE /api/Appartments/:id
// @access    Private
exports.deleteAppartment = asyncHandler(async (req, res, next) => {
  const appartment = await Appartment.findById(req.params.id);

  if (!appartment) {
    return next(
      new ErrorResponse(`No Appartment with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is shop owner
  if (appartment.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.shop.id} is not authorized to update a delete with id ${req.params.id}`,
        401
      )
    );
  }
  await appartment.remove();
  res.status(200).json({
    success: true,
    data: {},
  });
});
