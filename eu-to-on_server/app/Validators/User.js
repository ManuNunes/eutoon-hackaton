'use strict'
const { rule } = use("Validator")

class User {
  get rules() {
    return {
      email: "email|required|unique:users",
      phone: [rule("regex", /^(\([1-9]{2}\)) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/g), rule("required"), "unique:users"],
      cidade: "string|required|min:2|max:100",
      CEP: [rule("regex", /^[0-9]{5}-[0-9]{3}$/g), rule("required")]
    }
  }
  get messages() {
    return {
      "email.email": "E-mail não é válido",
      "email.required": "O e-mail é obrigatório",
      "email.unique": "Esse já está cadastrado",
      "phone.regex": "O número deve ser no formato: (XX) 9XXXX-XXXX",
      "phone.required": "O número é obrigatório",
      "phone.unique": "Esse número já está cadastrado"

    }
  }
}


module.exports = User
