exports.up = async function ( knex ) {
  await knex.schema.createTable('cars', table => {
    table.text('VIN').primary().notNullable().unique()
    table.text('make').notNullable()
    table.text('model').notNullable()
    table.integer('mileage').notNullable()
    table.text('transmission')
    table.text('title_status')
  })
}

exports.down = async function ( knex ) {
  await knex.schema.dropTableIfExists('cars')

}
