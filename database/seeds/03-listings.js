exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("listings").insert([
    {
      address_1: "test address 1",
      address_2: "test address 2",
      state: "Cali",
      zip_code: 123654,
      description: "some description",
      smart_lock_id: 987123,
      stairs: false,
      elevator: false,
      base_price: 99,
      amenities: false,
    },
  ]);
};
