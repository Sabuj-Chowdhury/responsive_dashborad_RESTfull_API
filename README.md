# Responsive Dashboard with RESTful API Integration

## Introduction

This project is a **responsive admin dashboard** that integrates with a **RESTful API** to display user and product data. The dashboard allows viewing users and products, adding a product, viewing a single product, and deleting a product. The project is built with **React and Tailwind CSS** and supports **Google authentication via Firebase**.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Sabuj-Chowdhury/responsive_dashborad_RESTfull_API.git
   cd responsive_dashborad_RESTfull_API
   ```

2. **Create an `.env.local` file in the root directory** with the following Firebase credentials:

   ```ini
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

## Usage

- The dashboard consists of:
  - A **sidebar** for navigation.
  - A **main content area** displaying users and products.
- Users can:
  - View a list of users fetched from `https://jsonplaceholder.typicode.com/users`.
  - View a list of products fetched from `https://api.restful-api.dev/objects`.
  - Add a new product using a **POST** request.
  - Retrieve a single product by ID.
  - Delete a product.

## Features

- **Fully responsive** admin dashboard.
- **Google authentication** using Firebase.
- **REST API integration** for fetching and managing data.
- **Sorting and searching** functionality for users and products.
- **Tailwind CSS** for styling.

## Dependencies

This project uses the following dependencies:

```json
"dependencies": {
  "@tailwindcss/vite": "^4.0.3",
  "@tanstack/react-query": "^4.36.1",
  "axios": "^1.7.9",
  "firebase": "^11.2.0",
  "prop-types": "^15.8.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.5.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.5",
  "sweetalert2": "^11.15.10",
  "tailwindcss": "^4.0.3"
}
```

## Configuration

- The Firebase authentication setup is configured using environment variables stored in `.env.local`.
- The API endpoints for users and products are hardcoded in the React components.

## Deployment

This project is **deployed on Firebase** and can be accessed at:

👉 **[Live Demo](https://dashboard-27d70.web.app/)**

## API Endpoints

- **Users API:**

  - Get all users: `GET https://jsonplaceholder.typicode.com/users`
  - Fetch user details: `GET https://jsonplaceholder.typicode.com/users/:id`

- **Products API:**
  - Get all products: `GET https://api.restful-api.dev/objects`
  - Add a product: `POST https://api.restful-api.dev/objects`
  - Fetch a single product: `GET https://api.restful-api.dev/objects/:id`
  - Delete a product: `DELETE https://api.restful-api.dev/objects/:id`

## Troubleshooting

- Ensure that the `.env.local` file is correctly set up.
- If the API requests fail, check if the API endpoints are reachable.
- Run `npm install` again if there are missing dependencies.
