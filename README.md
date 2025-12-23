# Adarsh Kumar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation & Running

1. **Install Node.js** (if not already installed):
   ```bash
   # Using Homebrew (macOS)
   brew install node
   
   # Or download from https://nodejs.org/
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - The terminal will show a URL (usually `http://localhost:5173`)
   - Open it in your browser to see your portfolio!

## 📁 Project Structure

```
port/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.mts         # Vite configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── public/
│   └── images/            # Image assets
│       ├── profile/       # Profile picture
│       └── projects/     # Project screenshots
├── src/
│   ├── data/             # Data files (easy to update)
│   │   ├── profile.js    # Profile configuration
│   │   ├── projects.js   # Projects data
│   │   └── skills.js     # Skills data
│   ├── main.jsx          # React entry point
│   ├── index.css         # Global styles with Tailwind
│   └── Portfolio.jsx     # Main portfolio component
└── README.md             # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

- ✨ Modern, responsive design
- 🎯 Smooth scrolling navigation
- 📱 Mobile-friendly menu
- 🌈 Beautiful gradient themes
- ⚡ Fast performance with Vite
- 🎭 Interactive hover effects
- 🖼️ **Project screenshots support**
- 👤 **Profile picture support**
- 📝 **Easy content updates** via data files

## 📦 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🌐 Deployment

To deploy your portfolio:

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to:
   - **Vercel**: `vercel deploy`
   - **Netlify**: Drag and drop `dist` folder
   - **GitHub Pages**: Follow GitHub Pages deployment guide

## 🖼️ Adding Images

### Profile Picture

1. Add your profile image to `public/images/profile/profile.jpg` (or `.png`, `.webp`)
2. Update `src/data/profile.js` if using a different filename
3. Recommended size: 400x400px (square)

### Project Screenshots

1. Add project screenshots to `public/images/projects/`
2. Update the `image` property in `src/data/projects.js` with your filename
3. Example: `image: "network-security.png"`
4. Recommended size: 1200x800px (16:9 aspect ratio)

See `public/images/README.md` for detailed instructions.

## 📝 Updating Content

### Update Projects
Edit `src/data/projects.js` - add, remove, or modify project entries.

### Update Skills
Edit `src/data/skills.js` - modify skill categories and items.

### Update Profile Info
Edit `src/data/profile.js` - update name, bio, social links, etc.

## 📝 Notes

- Make sure Node.js is installed before running `npm install`
- The portfolio includes sections for: Home, About, Skills, Projects, and Contact
- All project links point to your GitHub repositories
- Images are optional - placeholders will show if images are missing
- Data is separated into easy-to-edit files in `src/data/`

---

Built with ❤️ by Adarsh Kumar

# portfolio
