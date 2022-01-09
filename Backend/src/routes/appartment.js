const express = require("express");
const {
  getAppartments,
  addAppartment,
  getAppartment,
  updateAppartment,
  deleteAppartment,
} = require("../controller/appartment");

const Appartment = require("../models/Appartment");
const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get(
    advancedResults(Appartment),
    getAppartments
  )
  .post(protect, authorize("admin", "homeOwner"), addAppartment);
router
  .route("/:id")
  .get(getAppartment)
  .put(protect, authorize("admin", "homeOwner"), updateAppartment)
  .delete(protect, authorize("admin", "homeOwner"), deleteAppartment);
module.exports = router;
