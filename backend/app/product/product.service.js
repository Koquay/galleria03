const chalk = require("chalk");
require("./product.model");
const Product = require("mongoose").model("Product");

exports.getProducts = async (res, filters) => {
  const aggregatePipeline = buildAggregatePipeline(filters);

  try {
    const products = await Product.aggregate(aggregatePipeline);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send("Error getting prouducts");
  }
};

const buildAggregatePipeline = (filtersStr) => {
  const filters = JSON.parse(filtersStr);
  let { categoryFilters, filterPrice } = filters;
  let aggregatePipeline = [];

  let categoryMatch = buildCategoryMatch(categoryFilters);
  if (categoryMatch) {
    aggregatePipeline.push(categoryMatch);
  }

  let priceMatch = buildPriceRangeMatch(filterPrice);
  if (priceMatch) {
    aggregatePipeline.push(priceMatch);
  }

  checkForEmptyAggregate(aggregatePipeline);

  return aggregatePipeline;
};

const buildPriceRangeMatch = (filterPrice) => {
  if (filterPrice && filterPrice.maxPrice && filterPrice.minPrice) {
    let priceMatch = [];

    priceMatch.push({
      $and: [
        { $gte: ["$price", +filterPrice.minPrice] },
        { $lte: ["$price", +filterPrice.maxPrice] },
      ],
    });

    return { $match: { $expr: { $or: priceMatch } } };
  }

  return null;
};

const buildCategoryMatch = (categoryTypes) => {
  if (categoryTypes.length) {
    return { $match: { type: { $in: categoryTypes } } };
  }

  return null;
};

const checkForEmptyAggregate = (aggregatePipeline) => {
  if (aggregatePipeline.length === 0) {
    aggregatePipeline.push({ $match: { _id: { $ne: null } } });
  }
};
