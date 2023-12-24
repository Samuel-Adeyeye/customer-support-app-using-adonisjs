// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class RequestsController {
  public async view({ view }) {
    const requests = await Database.from('requests').select("*");
    return view.render("request/view", { requests });
  }

  public create({ view }) {
    return view.render("form/create");
  }

}
