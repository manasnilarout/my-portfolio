# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases my work, experience, and skills in a clean and professional manner.

## 🚀 Features

- Modern UI with Geist font and custom components
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Built with Next.js 15 and React 18
- Custom favicon generation from SVG
- Radix UI components for accessible UI elements
- Firebase integration
- React Query for efficient data fetching

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Fonts:** Geist Sans, Geist Mono
- **Database:** Firebase
- **Data Fetching:** React Query
- **Development Tools:**
  - TurboPack
  - Sharp (for image processing)
  - ESLint
  - TypeScript

## 🏃‍♂️ Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Generate favicons:
   ```bash
   npm run generate-favicons
   # or
   yarn generate-favicons
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The site will be available at `http://localhost:9002`

## 📜 Available Scripts

- `dev`: Runs the development server with TurboPack on port 9002
- `build`: Creates a production build
- `start`: Starts the production server
- `lint`: Runs ESLint for code linting
- `typecheck`: Runs TypeScript type checking
- `generate-favicons`: Generates favicons from SVG source

## 🎨 Favicon Generation

The project includes a custom favicon generation script that converts an SVG source file into various favicon formats:

- Creates PNG favicons in 16x16 and 32x32 sizes
- Generates a 180x180 Apple Touch Icon
- Source SVG should be placed in `public/icon.svg`

To update favicons, modify the `public/icon.svg` file and run:
```bash
npm run generate-favicons
```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── ai/           # AI-related functionality
├── public/           # Static assets
├── scripts/         # Utility scripts
└── package.json     # Project dependencies and scripts
```

## 🔧 Development

- The project uses Next.js 15 with the App Router
- TurboPack is enabled for faster development builds
- TypeScript is used for type safety
- ESLint is configured for code quality
- Tailwind CSS for styling with custom configurations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop screens
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
