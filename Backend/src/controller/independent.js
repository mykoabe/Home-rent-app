const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");
const Independent = require("../models/Independent");
const advancedResults = require("../middleware/advancedResults");

// @desc      Add Independent
// @route     POST /api/independents
// @access    Private
exports.addIndependent = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const independent = await Independent.create(req.body);
  res.status(200).json({
    success: true,
    data: independent,
  });
});

// @desc      Get Independents
// @route     GET /api/Independents
// @access    Public
exports.getIndependents = asyncHandler(async (req, res, next) => {
  if (req.params.indId) {
    console.log(indId);
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single Independents
// @route     GET /api/Independents/:id
// @access    Public
exports.getIndependent = asyncHandler(async (req, res, next) => {
  const independent = await Independent.findById(req.params.id);

  if (!independent) {
    return next(
      new ErrorResponse(`No Independent with the id of ${req.params.id}`),
      404
    );
  }
  res.status(200).json({
    success: true,
    data: independent,
  });
});

// @desc      Update Independent
// @route     PUT /api/Independents/:id
// @access    Private
exports.updateIndependent = asyncHandler(async (req, res, next) => {
  let independent = await Independent.findById(req.params.id);

  if (!independent) {
    return next(
      new ErrorResponse(`No Independent with the id of ${req.params.id}`),
      404
    );
  }
  // Make sure user is shop owner
  if (
    independent.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.shop.id} is not authorized to update a Independent with id ${req.params.id}`,
        401
      )
    );
  }

  independent = await Independent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: independent,
  });
});

// @desc      Delete Independent
// @route     DELETE /api/Independents/:id
// @access    Private
exports.deleteIndependent = asyncHandler(async (req, res, next) => {
  const independent = await Independent.findById(req.params.id);

  if (!independent) {
    return next(
      new ErrorResponse(`No Independent with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is shop owner
  if (
    independent.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete Independent with id ${req.params.id}`,
        401
      )
    );
  }
  await independent.remove();
  res.status(200).json({
    success: true,
    data: {},
  });
});
