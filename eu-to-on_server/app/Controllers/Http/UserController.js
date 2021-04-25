
'use strict'

const User = use("App/Models/User")


class UserController {

  async create({ request, response }) {

    const data = request.all()

    const user = await User.create(data)

    return response.status(201).json(user)

  }

  async update({ request, auth, response }) {
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
