const express = require("express");
const {
  getIndependents,
  addIndependent,
  getIndependent,
  updateIndependent,
  deleteIndependent,
} = require("../controller/independent");

const Independent = require("../models/Independent");
const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    advancedResults(Independent),
    getIndependents
  )
  .post(protect, authorize("admin", "homeOwner"), addIndependent);
router
  .route("/:id")
  .get(getIndependent)
  .put(protect, authorize("admin", "homeOwner"), updateIndependent)
  .delete(protect, authorize("admin", "homeOwner"), deleteIndependent);
module.exports = router;
