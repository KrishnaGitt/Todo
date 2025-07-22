function sumOfTwoNumber(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        if (map.hasOwnProperty(result)) {
            return [map[result], i];
        }
        map[nums[i]] = i;
    }
}
const nums = [2, 7, 11, 15];
const target = 9;

console.log(sumOfTwoNumber(nums, target));
// Output: [0, 1]


Question 3: MongoDB Aggregation Consider a MongoDB collection named sales with documents
structured as follows:

database.sales.aggregate([
  {
    $unwind: "$items"
  },
  {
    $project: {
      store: 1,
      month: { $dateToString: { format: "%Y-%m", date: "$date" } },
      revenue: { $multiply: ["$items.quantity", "$items.price"] },
      price: "$items.price"
    }
  },
  {
    $group: {
      _id: {
        store: "$store",
        month: "$month"
      },
      totalRevenue: { $sum: "$revenue" },
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1
    }
  },
  {
    $sort: {
      store: 1,
      month: 1
    }
  }
]);
