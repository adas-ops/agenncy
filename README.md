# Agenncy

A modern web application built with Next.js and TypeScript. This project provides a solid foundation for building scalable, type-safe, and maintainable user interfaces.

---

## Features

- Built with **Next.js** + **TypeScript** for strong typing and improved developer experience.  
- Integrated **ESLint** for consistent code style and catching errors early.  
- Uses **PostCSS** for styling utilities and custom configuration.  
- Structured `src/` directory to keep code organized.  
- Ready for local development, and easy to deploy (e.g. Vercel or similar platforms).  

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- Node.js (version 16 or newer recommended)  
- npm, Yarn, or pnpm (choose your preferred package manager)  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adas-ops/agenncy.git
   cd agenncy
### Install dependencies:

# using npm

npm install

# or using yarn
yarn

# or using pnpm
pnpm install

# To run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev

### Configuration

ESLint: Check the file eslint.config.mjs for lint rules.

PostCSS: See postcss.config.mjs for stylesheet processing configuration.

TypeScript: Configuration in tsconfig.json.

# Folder Structure

/
├── src/
│   ├── app/             # Next.js pages/app directory (or route components)
│   ├── components/      # React components
│   ├── styles/          # CSS / PostCSS styles
│   └── ...other folders as needed
├── public/              # static assets
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json

# Contributing
Contributions are welcome! If you’d like to help, feel free to:

Fork the repository

Create a feature branch (git checkout -b feature-name)

Make your changes & test

Submit a pull request

