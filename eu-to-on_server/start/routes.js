'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post("/users", "UserController.create")
  .validator("User")
Route.post("/session", "SessionController.create")
Route.put("/users", "UserController.update")
  .middleware("auth")
Route.get("/users", "UserController.index")
  .middleware("auth")
Route.resource('product', 'ProductController')
  .apiOnly()
  .middleware("auth")
