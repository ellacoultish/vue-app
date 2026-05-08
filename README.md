# Vue 3 Practice Storefront

This is a Vue 3 shopping flow built for an interview task. Users can browse a mocked product catalogue, add items to a basket, complete an order form, and view an order confirmation screen.

## Tech Stack

- Vue 3 with Vite
- TypeScript
- Vue Router
- Pinia for state management
- Tailwind CSS
- Storybook for component development
- Vitest for unit tests

## Install Dependencies

From the repository root, move into the app directory and install dependencies:

```sh
cd vue-app
npm install
```

The project expects Node.js `^20.19.0` or `>=22.12.0`.

## Run the Application Locally

Start the Vite development server:

```sh
npm run dev
```

Vite will print a local URL in the terminal, usually:

```sh
http://localhost:5173
```

## Build for Production

To type-check and create a production build:

```sh
npm run build
```

To preview the production build locally:

```sh
npm run preview
```

## Run Tests

Run the unit test suite with:

```sh
npm run test:unit
```

## Run Storybook

Start Storybook on port `6006`:

```sh
npm run storybook
```

## How Data Is Provided

Product data is provided by a local mocked API in `vue-app/src/api/products.ts`. The `getProducts()` function returns a static list of products after a short artificial delay, which simulates an asynchronous API request without needing a backend service or external API key.

The product catalogue is loaded into the Pinia products store in `vue-app/src/stores/products.ts`. Basket items are managed in `vue-app/src/stores/basket.ts`, and order form details are managed in `vue-app/src/stores/orderForm.ts`.

All app state is held in memory while the app is running. There is no database or persistent storage, so refreshing the page resets the basket and order form.

## AI Assistance

AI was used to support development of this project. In particular, Codex was used to generate the mocked product data in `vue-app/src/api/products.ts`, as well as being used for generating inital boiler plate and troubleshooting throughout. Architectural, testing, and design decisions were made manually.
