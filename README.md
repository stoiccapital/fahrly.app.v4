# Fahrly App Frontend Template

A modern frontend template built with HTML, CSS, and TypeScript featuring three modules: Fahrly Dispatch, Fahrly HR, and Fahrly Fleet.

## Project Structure

```
Fahrly App/
├── index.html          # Main HTML entry point
├── main.css            # All styling (separated from HTML)
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── main.ts         # Application entry point
│   ├── navbar.ts       # Navigation bar component
│   └── modules/
│       ├── dispatch.ts # Fahrly Dispatch module
│       ├── hr.ts       # Fahrly HR module
│       └── fleet.ts    # Fahrly Fleet module
└── dist/               # Compiled JavaScript (generated)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript files:
```bash
npm run build
```

3. For development with auto-rebuild:
```bash
npm run dev
```

4. Open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## Features

- **Dynamic Navigation Bar**: The navbar is dynamically loaded and shared across all modules
- **Module-based Architecture**: Three distinct modules (Dispatch, HR, Fleet) with separate TypeScript files
- **Modern UI**: Clean, responsive design with a professional look
- **Separated Concerns**: HTML, CSS, and TypeScript are in separate files
- **TypeScript**: Full type safety and modern JavaScript features

## Modules

- **Fahrly Dispatch**: Dispatch management, order tracking, and route optimization
- **Fahrly HR**: Employee management, time & attendance, payroll & benefits
- **Fahrly Fleet**: Vehicle management, maintenance tracking, and fleet analytics

