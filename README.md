# Kerala Migrant Worker Platform

A comprehensive web application designed to manage and support migrant workers in Kerala. This platform provides essential services and data management tools for government officials, healthcare providers, and the workers themselves.

## Key Features

*   **Multi-Role Dashboards:** Separate, tailored dashboards for Government Officials, Doctors, and Migrant Workers.
*   **Health Management:**
    *   Digital Health ID for every worker.
    *   Access to health records and vaccination history.
    *   Disease surveillance and monitoring.
*   **Emergency Response:** A dedicated module for managing and responding to emergencies.
*   **Resource Management:** Tools for planning and allocating resources for worker camps and healthcare.
*   **Worker Support:** Information on benefits, a rewards system, and alert notifications.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or later)
*   pnpm (or npm/yarn)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/migrant-workers.git
    ```
2.  Install NPM packages:
    ```sh
    pnpm install
    ```
3.  Start the development server:
    ```sh
    pnpm dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

After starting the development server, you can navigate to the different parts of the application:

*   `/login/doctor`: Login page for doctors.
*   `/dashboard/govt`: Main dashboard for government officials.
*   `/dashboard/worker`: Dashboard for migrant workers.
