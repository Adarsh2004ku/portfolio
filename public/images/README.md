# Images Directory

This directory contains all images for your portfolio.

## Folder Structure

```
images/
├── profile/          # Your profile picture
│   └── profile.jpg   # (or .png, .webp)
└── projects/         # Project screenshots
    ├── network-security.png
    ├── etl-airflow.png
    ├── ml-pipeline.png
    ├── house-price.png
    ├── black-friday.png
    └── data-science.png
```

## How to Add Images

### 1. Profile Picture

1. Add your profile image to `public/images/profile/`
2. Name it `profile.jpg` (or `.png`, `.webp`)
3. Recommended size: 400x400px or larger (square)
4. Update `src/data/profile.js` if you use a different filename

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Project Screenshots

1. Add project screenshots to `public/images/projects/`
2. Use descriptive filenames (e.g., `network-security.png`)
3. Update the `image` property in `src/data/projects.js` with the filename
4. Recommended size: 1200x800px or larger (16:9 aspect ratio)

**Example:**
```javascript
{
  title: "Network Security ML System",
  image: "network-security.png", // Your screenshot filename
  // ...
}
```

### 3. Using External URLs

You can also use external image URLs:

```javascript
// In profile.js
profileImage: "https://example.com/profile.jpg"

// In projects.js
image: "https://example.com/screenshot.png"
```

## Image Optimization Tips

- **Compress images** before adding them (use tools like TinyPNG, ImageOptim)
- **Use WebP format** for better compression (if supported)
- **Keep file sizes under 500KB** for faster loading
- **Use appropriate dimensions** - don't upload 4K images if not needed

## Current Project Images Needed

Based on your projects, you should add screenshots for:

1. `network-security.png` - Network Security ML System
2. `etl-airflow.png` - ETL Pipeline using Apache Airflow
3. `ml-pipeline.png` - End-to-End ML Pipeline with DVC & MLflow
4. `house-price.png` - House Price Prediction (MLOps)
5. `black-friday.png` - Black Friday Sales Analysis
6. `data-science.png` - Data Science Project Suite

## Placeholder Behavior

- If no image is provided, a placeholder will be shown
- If an image fails to load, an error placeholder will appear
- Profile picture will show initials if image is missing

