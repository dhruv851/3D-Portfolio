3D Portfolio

This project uses Vite with React, Tailwind CSS, Three.js, React Three Fiber, and Drei.

Available Scripts

In the project directory, you can run:

npm run dev

Runs the app in development mode (Vite).
Open http://localhost:5173
to view it in your browser.

The page will reload when you make changes, and you’ll see any build errors in the console.

npm run build

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for best performance.

Your app is ready to be deployed!

npm run preview

Serves the production build from the dist folder so you can verify the output locally.

npm test (optional)

If you’ve added a test setup (e.g., Vitest/RTL), this launches the test runner in watch mode.

Learn More

Vite Guide: https://vitejs.dev/guide/

React Docs: https://react.dev/

Tailwind CSS: https://tailwindcss.com/docs

Three.js: https://threejs.org/docs/

React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

Drei: https://docs.pmnd.rs/drei/introduction

EmailJS: https://www.emailjs.com/docs/

Code Splitting

Handled automatically by Vite/Rollup via dynamic import().
Docs: https://vitejs.dev/guide/features.html#code-splitting

Analyzing the Bundle Size

Use tools like rollup-plugin-visualizer on the production build.
Guide: https://vitejs.dev/guide/build.html#inspect-the-bundle

Making a Progressive Web App

Add and configure vite-plugin-pwa.
Docs: https://vite-pwa-org.netlify.app/

Advanced Configuration

Tweak vite.config.\* for aliases, plugins, env, and build options.
Reference: https://vitejs.dev/config/

Deployment

Run npm run build, then deploy the dist folder to your host (Vercel, Netlify, GitHub Pages, etc.).
Guide: https://vitejs.dev/guide/static-deploy.html

Troubleshooting

Port in use: npm run dev -- --port 5174

Build errors: delete node_modules and lockfile, then reinstall (rm -rf node_modules && npm i)

EmailJS not working: ensure env keys are prefixed with VITE\_ and values match your EmailJS dashboard
