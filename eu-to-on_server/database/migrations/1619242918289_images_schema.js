'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up() {
    this.create('images', (table) => {
      table.increments()
      table.integer('produto_id')
        .unsigned()
        .references('id')
        .inTable("products")
      table.string("url", 254).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('images')
  }
}

module.exports = ImagesSchema
