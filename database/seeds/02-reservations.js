exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("reservations").insert([
    {
      id: 1,
      reference: "test reference 1",
      door_key_code: 123,
      guest_first_name: "test name 1",
      guest_last_name: "test last 1",
      guest_phone: 800 - 111 - 111,
      is_rewards_member: false,
      price: 55,
      guest_count: 2,
      check_in: "1/1/1111",
      check_out: "1/2/1111",
    },
  ]);
};
