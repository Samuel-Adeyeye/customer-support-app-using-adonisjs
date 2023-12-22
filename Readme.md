## The backend component of a simple customer support platform using `Adonisjs` framework.

### Requirements
- There is only one user-facing form and that is the support request form.
- Customers are required to enter the following information per support request. Store the support request on a separate table.
- First name,
- Last name,
- Email address,
- Support message title,
- Support message text (potentially a long text),
- File (support just one file upload)
- Maintain a database table for users with the following required fields: `ID`, `Email Address`, and `Full name`.
- A user can have many support requests. A support request can belong to only one user.
- When a new support request is submitted, link the request to a user via the provided email address.
- Write tests for handling of the support request submission.
- Show that the support request was submitted, and the data persisted.
- Show that multiple support requests with the same email address is linked to the same user.
- Show that the file is successful uploaded and stored.
- Create a database diagram for all the tables with this [tool](https://dbdiagram.io/home) showing the indexes and foreign relationships.
- Authentication/registration flow is not needed.

### Approach 
- You are expected to develop the backend with this [Adonisjs framework](https://adonisjs.com/). Follow [these instructions](https://docs.adonisjs.com/guides/installation) to setup the backend.
- Feel free to use either MySQL or PostgreSQL as database engine. Follow these instructions to setup the [Lucid ORM](https://docs.adonisjs.com/guides/database/introduction).
- Create routes for your backend using [Adonisjs Routing](https://docs.adonisjs.com/guides/routing).
- Validate the submitted data with the [Adonisjs Validator](https://docs.adonisjs.com/guides/validator/introduction). [Reference](https://docs.adonisjs.com/reference/validator/schema/string).
- Store the uploaded file to local drive using the basic [Adonisjs file handling](https://docs.adonisjs.com/guides/file-uploads).
- Write tests for your backend Adonisjs/Japa test runner. See the [introduction](https://docs.adonisjs.com/guides/testing/introduction) and [HTTP tests](https://docs.adonisjs.com/guides/testing/http-tests). 
- Testing file uploads [here](https://docs.adonisjs.com/guides/testing/http-tests#file-uploads) and [here](https://v2.japa.dev/docs/plugins/api-client#file-uploads).
- Testing forms [here](https://docs.adonisjs.com/guides/testing/http-tests#file-uploads).