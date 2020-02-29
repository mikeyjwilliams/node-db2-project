exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate();

  await knex('cars').insert([
    {
      vin: 'asdfghjk123456781',
      make: 'honda',
      model: 'accord',
      mileage: 50,
      transmissionType: 'automatic',
      title: 'clean',
    },
    {
      vin: 'asdfghjk123456782',
      make: 'kia',
      model: 'soranto',
      mileage: 150000,
      transmissionType: 'manual',
      title: 'clean',
    },
    {
      vin: 'asdfghjk123456783',
      make: 'honda',
      model: 'prius',
      mileage: 25000,
      transmissionType: 'automatic',
      title: 'n/a',
    },
    {
      id: 7,
      vin: 'asdfghjk123456784',
      make: 'honda',
      model: 'civic',
      mileage: 75000,
      transmissionType: 'manual',
      title: 'clean',
    },
    {
      vin: 'asdfghjk123456785',
      make: 'jeep',
      model: 'cherokee',
      mileage: 35000,
      transmissionType: 'n/a',
      title: 'n/a',
    },
    {
      vin: 'asdfghjk123456786',
      make: 'cadillac',
      model: 'escalade',
      mileage: 45250,
      transmissionType: 'automatic',
      title: 'salvage',
    },
    {
      vin: 'asdfghjk123456787',
      make: 'acura',
      model: 'soranto',
      mileage: 5240,
      transmissionType: 'n/a',
      title: 'n/a',
    },
    {
      vin: 'asdfghjk123456788',
      make: 'Toyota',
      model: 'highlander',
      mileage: 500,
      transmissionType: 'n/a',
      title: 'n/a',
    },
  ]);
};
