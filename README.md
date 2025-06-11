# The York Dental Suite - Monorepo

This repository contains the codebase for The York Dental Suite, including a Next.js frontend and a WordPress backend.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- [pnpm](https://pnpm.io/installation)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Composer](https://getcomposer.org/download/)

## Project Structure

- `apps/frontend`: Contains the Next.js frontend application.
- `apps/wordpress`: Contains the WordPress backend, including the custom theme and Docker setup.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GokouWS/kmg_dental.git
    cd kmg_dental
    ```

2.  **Install dependencies and set up the environment:**

    This command will install frontend dependencies using pnpm, set up the WordPress Docker containers, and install WordPress PHP dependencies using Composer.

    ```bash
    pnpm setup
    ```

## Development

To start the development servers for both the frontend and backend:

```bash
pnpm dev
```

This will:

- Start the WordPress Docker containers (accessible at `http://localhost:8080`).
- Start the Next.js frontend development server (typically accessible at `http://localhost:3000`).

### Individual Development Servers

If you need to run only one part of the project:

- **WordPress Backend:**

  ```bash
  pnpm dev:wordpress
  ```

  WordPress will be available at `http://localhost:8080`. You can access the WordPress admin panel at `http://localhost:8080/wp-admin`.

- **Next.js Frontend:**

  ```bash
  pnpm dev:frontend
  ```

  The frontend will be available at `http://localhost:3000` (or the next available port).

## WordPress Theme

The custom WordPress theme, "The York Dental Suite", is located in `apps/wordpress/wp-content/themes/york-dental-suite/`.

## Accessing WordPress

- **Site URL:** `http://localhost:8080`
- **Admin URL:** `http://localhost:8080/wp-admin`
  - **Username:** `wordpressuser` (or as defined in `apps/wordpress/docker-compose.yml`)
  - **Password:** `wordpresspassword` (or as defined in `apps/wordpress/docker-compose.yml`)

Make sure to activate "The York Dental Suite" theme from the WordPress admin panel under Appearance > Themes after the initial setup.
