import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const addressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String, required: true },
  town: { type: String, required: true },
  county: { type: String, required: true },
  postCode: { type: String, required: true },
  country: { type: String, required: true },
});
// Define the location schema
const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: addressSchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      index: "2dsphere", // create a 2dsphere index on the "coordinates" field
    },
    price: {
        type: Map,
        of: String
    }, // Assuming price is an object with string values
    image: {
      type: String,
      required: false,
    },
    google_rating: {
      type: Number,
      required: false,
    },
    categories: {
      type: [String],
      default: [],
    },
    suitableFor: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      required: true,
    },
    recommended: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  },
);

locationSchema.index({
  name: "text",
  description: "text",
  shortDescription: "text",
  categories: "text",
  suitableFor: "text",
});
// Create a 2dsphere index on the location field
locationSchema.index({ location: '2dsphere' });

locationSchema.plugin(mongoosePaginate);

// Create the location model based on the schema
const Locations = mongoose.model("Locations", locationSchema);

export default Locations;
