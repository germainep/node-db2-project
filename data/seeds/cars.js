exports.seed = async ( knex ) => {
  // Deletes ALL existing entries
  await knex('cars')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('cars').insert([
                                     {
                                       VIN: 'W038402H492',
                                       make: 'Mustang',
                                       model: 'Ford',
                                       mileage: 1,
                                       transmission: 'manual',
                                       'title_status': 'clean',
                                     },
                                     {
                                       VIN: '29U038402H492',
                                       make: 'Caviler',
                                       model: 'Chevrolet',
                                       mileage: 1,
                                       transmission: 'manual',
                                       'title_status': 'salvage',
                                     },
                                     {
                                       VIN: 'P9U0HE402H492',
                                       make: '325i',
                                       model: 'BMW',
                                       mileage: 403952,
                                       transmission: 'automatic',
                                     },
                                   ])
      })
}
