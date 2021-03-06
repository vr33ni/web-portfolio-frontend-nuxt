# vr33ni - Portfolio

## Description

### Frontend (this repo)

#### Architecture

Using Nuxt Composition API and Typescript. Built based on Nuxt TS starter template and on basis of a project using Vue3 Composition API and Javascript ([original repo](https://github.com/vr33ni/web-portfolio-frontend))
This application showcases my CV in form of a web portfolio. Currently, the project is still **under development**.
The entrypoint is default.vue in the layout folder. It loads the header as well as the nuxt main view.
The application consists of a basic user interface made from different components, which are accessed via the index page. The data is managed via store methods and fetched from the backend via multiple services (listed in the **services** folder).
The backend code is available via the repository mentioned below.
Bootstrap is used for styling.
Fontawesome is used as an icon library.

#### User interface

The user interface displays consists of a header and a body.
The body furthermore consists of different sections: About me, Resume (professional experience, skill tags and education).
The user interface is responsive.

### Backend ([Backend repo](https://github.com/vr33ni/web-portfolio-backend))

Using NodeJs + Firebase as a database.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Todos

1. Create models/dtos for fetching data via the services
2. Tests (Jest + E2E Nightwatch)
3. Update styling
4. Deploy on herokuapp using Docker
5. Evaluate using Nuxt Composition API and Typescript vs using Vue3 + Composition API and Javascript
6. Evaluate benefits of using SSR vs not using SSR in this context
