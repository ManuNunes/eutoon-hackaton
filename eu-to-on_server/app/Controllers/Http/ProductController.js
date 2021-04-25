'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */

const Product = use("App/Models/Products")

class ProductController {

  async index({ request, response, auth }) {

    const user = await auth.getUser()

    const { perPage = 20, page = 1, categoria, subCategoria, order = "asc", field = "created_at" } = request.all()

    let query = {

    }

    // filtro para categorias
    query = categoria ? { ...query, categoria } : query
    query = subCategoria ? { ...query, subCategoria } : query

    const products = await Product
      .query()
      .where(query)
      .orderBy(field)
      .paginate(page, perPage)

    response.json(products)

  }

  async store({ request, auth, response }) {
    const user = await auth.getUser()
    const data = request.all()

    data.user_id = user.id

    const product = await Product.create(data)

    response.json(product)
  }

  async update({ request, response, auth, params }) {
    const user = await auth.getUser()
    const { id } = params

    const { nome, valor, descricao } = request.all()

    await Product.query()
      .where({ id, user_id: user.id })
      .update({ nome, valor, descricao })
    response.json({ Success: "Produto Alterado com sucesso!" })
  }

  async destroy({ response, auth, params }) {
    const user = await auth.getUser()

    const { id } = params

    await Product.query()
      .where({ id, user_id: user.id })
      .delete()

    response.json({ Success: "Usuário foi Excluído" })
  }
}

module.exports = ProductController
