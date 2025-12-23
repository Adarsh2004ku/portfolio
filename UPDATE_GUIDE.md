# Quick Update Guide

This guide helps you quickly update your portfolio content.

## 📸 Adding Profile Picture

1. **Add your image:**
   - Place your profile photo in `public/images/profile/`
   - Name it `profile.jpg` (or `.png`, `.webp`)

2. **Update config (if needed):**
   - Open `src/data/profile.js`
   - Change `profileImage: "/images/profile/profile.jpg"` if using different filename

## 🖼️ Adding Project Screenshots

1. **Add screenshot:**
   - Place screenshot in `public/images/projects/`
   - Use descriptive name (e.g., `network-security.png`)

2. **Link to project:**
   - Open `src/data/projects.js`
   - Find your project
   - Add/update: `image: "network-security.png"`

**Example:**
```javascript
{
  title: "Network Security ML System",
  image: "network-security.png", // ← Add this line
  description: "...",
  // ...
}
```

## ✏️ Updating Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description here",
    tech: ["Python", "React", "Docker"],
    github: "https://github.com/yourusername/project",
    highlights: ["Feature 1", "Feature 2"],
    status: "Completed", // or "Active Development" or "Ongoing"
    image: "project-screenshot.png", // Optional
  },
  // Add more projects...
];
```

## 🛠️ Updating Skills

Edit `src/data/skills.js`:

```javascript
export const skills = {
  "Your Category": {
    icon: <Code className="w-5 h-5" />, // Change icon if needed
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // Add more categories...
};
```

**Available icons:** `Code`, `Database`, `Cloud`, `Cpu` (from lucide-react)

## 👤 Updating Profile Info

Edit `src/data/profile.js`:

```javascript
export const profileConfig = {
  profileImage: "/images/profile/profile.jpg",
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio here",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
    phone: "+91-1234567890",
  },
  location: "Your City, State",
};
```

## 🎨 Image Tips

- **Profile picture:** 400x400px, square format
- **Project screenshots:** 1200x800px, 16:9 aspect ratio
- **Formats:** `.jpg`, `.png`, `.webp`
- **Optimize:** Compress images before adding (use TinyPNG or similar)
- **File size:** Keep under 500KB for faster loading

## 🔄 After Making Changes

1. Save your files
2. The dev server will auto-reload (if running `npm run dev`)
3. Check your browser to see updates

## 📝 Need Help?

- See `public/images/README.md` for detailed image instructions
- Check `README.md` for full documentation
- All data files are in `src/data/` folder

