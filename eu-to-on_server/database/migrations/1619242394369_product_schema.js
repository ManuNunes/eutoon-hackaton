'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
      table.string("nome").notNullable()
      table.decimal("valor", 4, 2).notNullable()
      table.string("descricao").notNullable()
      table.enu("categoria", ["Produtos", "Serviços"], {
        useNative: true,
        enumName: "categoria",
      });
      table.enu("subCategoria",
        ["Artes e Artesanato",
          "Alimentação",
          "Vestuário",
          "Cosméticos",
          "Outros",
          "Técnicos",
          "Educacionais",
          "Limpeza",
          "Pet",
          "Marcenaria",
          "Pintura",
          "Corte e costura",
          "Beleza",
          "Reparos e construção",
          "Transporte"
        ],
        {
          useNative: true,
          enumName: "subCategoria"
        })
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
    this.raw("DROP TYPE categoria")
    this.raw("DROP TYPE subCategoria")
  }
}

module.exports = ProductSchema
