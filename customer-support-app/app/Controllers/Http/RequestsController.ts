// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import { schema } from "@ioc:Adonis/Core/Validator";
import CreateRequestValidator from "App/Validators/CreateRequestValidator";

export default class RequestsController {
  public async view({ view }) {
    const requests = await Database.from('requests').select("*");
    return view.render("request/view", { requests });
  }

  public create({ view }) {
    return view.render("form/create");
  }

  public async file({ request, response }) {
    const payload = await request.validate(CreateRequestValidator);
    await Database.table('requests').insert({ ...payload, slug: payload.Support_Request_Title });
    return response.redirect().back();

  }

}
