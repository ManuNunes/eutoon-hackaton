
'use strict'

const User = use("App/Models/User")
const Product = use("App/Models/Products")


class UserController {

  async index({ request, response, auth }) {
    const user = await auth.getUser()

    const { perPage = 20, page = 1, categoria, subCategoria, order = "asc", field = "created_at" } = request.all()

    let query = {
      user_id: user.id
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

  async create({ request, response }) {

    const data = request.all()

    const user = await User.create(data)

    return response.status(201).json(user)

  }

  async update({ request, auth }) {
    const { phone, cidade, rua } = request.all()

    const user = await auth.getUser()

    user.phone = phone
    user.rua = rua
    user.cidade = cidade

    await user.save()

    return user

  }
}


module.exports = UserController
