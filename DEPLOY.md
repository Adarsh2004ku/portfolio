# Deployment Guide

This guide covers multiple deployment options for your portfolio.

## 🚀 Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Vite projects.

### Steps:

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub

2. **Click "New Project"**

3. **Import your repository:**
   - Select your portfolio repository from GitHub
   - Vercel will auto-detect it's a Vite project

4. **Configure (usually auto-detected):**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Click "Deploy"**
   - Your site will be live in ~2 minutes!
   - You'll get a URL like: `your-portfolio.vercel.app`

6. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain

### Benefits:
- ✅ Free hosting
- ✅ Automatic deployments on git push
- ✅ HTTPS included
- ✅ Fast CDN
- ✅ Easy custom domains

---

## 🌐 Option 2: Netlify

### Steps:

1. **Go to [netlify.com](https://netlify.com)** and sign up/login with GitHub

2. **Click "Add new site" → "Import an existing project"**

3. **Select your repository**

4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Click "Deploy site"**
   - Your site will be live!

6. **Custom Domain:**
   - Go to Site Settings → Domain Management
   - Add your custom domain

---

## 📄 Option 3: GitHub Pages

GitHub Pages requires a bit more setup but is completely free.

### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.mts:**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your GitHub repo name
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

6. **Your site will be at:**
   `https://yourusername.github.io/your-repo-name/`

---

## ☁️ Option 4: Other Platforms

### Render
- Similar to Vercel/Netlify
- Free tier available
- Connect GitHub repo and deploy

### Cloudflare Pages
- Free hosting
- Fast CDN
- Connect GitHub repo

### AWS Amplify / Azure Static Web Apps
- Enterprise options
- More configuration needed

---

## 🎯 Quick Comparison

| Platform | Ease | Free Tier | Auto Deploy | Custom Domain |
|----------|------|-----------|-------------|---------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ✅ |
| **Netlify** | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ✅ |
| **GitHub Pages** | ⭐⭐⭐ | ✅ | ⚠️ Manual | ✅ |
| **Render** | ⭐⭐⭐⭐ | ✅ | ✅ | ✅ |

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are in `public/images/` folder
- [ ] Profile picture is added (`profile.jpeg`)
- [ ] Project screenshots are added (if any)
- [ ] Test locally: `npm run build` works without errors
- [ ] All links work correctly
- [ ] Mobile responsive design looks good

---

## 🔧 Troubleshooting

### Images not showing?
- Make sure images are in `public/images/` folder
- Check image paths in data files
- Verify file extensions match (.jpg vs .jpeg)

### Build fails?
- Run `npm install` to ensure all dependencies are installed
- Check for any console errors
- Verify Node.js version (v18+)

### 404 errors?
- Check base path in vite.config.mts (for GitHub Pages)
- Verify all routes are correct

---

## 🎉 After Deployment

1. **Share your portfolio URL**
2. **Update your GitHub profile** with the portfolio link
3. **Add to LinkedIn** and other social profiles
4. **Test on mobile devices**
5. **Ask friends for feedback**

---

**Recommended:** Start with **Vercel** - it's the fastest and easiest! 🚀

