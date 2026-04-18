#  Secure Financial Vault | React Architecture Showcase

A modern, single-page React application built to demonstrate enterprise-level frontend architecture. This project showcases secure routing, global state management, persistent sessions, and high-fidelity data visualization for the fintech/energy sector.

## Live Demo
 

## Core Engineering Features

* **Enterprise-Grade Security Routing:** Engineered a custom `ProtectedRoute` wrapper using **React Router v6** to act as a gatekeeper, preventing unauthorized URL access and forcing redirects.
* **Global State Management (Zero Prop-Drilling):** Built a scalable authentication engine from scratch using the **React Context API** (`createContext`, `useContext`) to broadcast login state across the entire component tree.
* **Persistent User Sessions:** Integrated browser `localStorage` directly into the Context Provider to ensure authentication status survives hard page refreshes—solving a critical real-world UX problem.
* **High-Fidelity Data Visualization:** Implemented a responsive, Bloomberg-terminal style `<AreaChart>` using **Recharts**.
    * Tracks 14-day historical market volatility for Aradel Holdings.
    * Features custom SVG linear gradients (`<defs>`) for a glowing UI effect.
    * Utilizes dynamic Y-axis domain mapping (`['dataMin', 'dataMax']`) for precise data scaling.
    * Includes a fully custom, dark-mode styled tooltip.

##  Tech Stack
* **Core:** React 18, Vite
* **Routing:** React Router DOM v6
* **State Management:** React Context API
* **Data Visualization:** Recharts
* **Styling:** Inline CSS / Modern Dark Mode UI

##  Running it Locally

To spin up this architecture on your local machine:

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install