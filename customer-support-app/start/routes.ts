/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route';



Route.get('/', async ({ view }) => {
  return view.render('welcome');
});

Route.get("/form", "RequestsController.view").as("form_view");


Route.post("/form", ({ response }) => {
  // const { email, password } = request.body();
  return response.redirect("/form")
}).as("form_create")


Route.patch("/form/:id", ({ params }) => {
  return (params);
})
.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})
  .as("form_update");


  Route.delete("/form/:id", ({ params }) => {
    return (params);
  })
  .where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
    .as("form_delete");