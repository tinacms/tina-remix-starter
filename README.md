This is a [Tina CMS](https://tina.io/) project.

## Setup

- Fork this repo
- Clone the fork to your local machine.

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
yarn build
```
## Deploying the Site

This project can easily be deployed using services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). 

### Build settings

In general, the build settings will look like so:
![image](https://user-images.githubusercontent.com/71273009/198213418-ea141090-8f7b-4092-8260-01af128b8ef9.png)

### Environment variables

When setting up the Netlify/Vercel project, apply the `TINA_CLIENT_ID` & `TINA_TOKEN` environment variables from your [app.tina.io](https://app.tina.io) project. 

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting starter guide](https://tina.io/docs/introduction/using-starter/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!
