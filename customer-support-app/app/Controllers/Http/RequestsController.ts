// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class RequestsController {
  public async view({ view }) {
    const requests = await Database.from('requests').select("*");
    return view.render("form/view", { requests });
  }

}
