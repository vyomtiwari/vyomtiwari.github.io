# Vyom Tiwari - Portfolio Website

A clean, minimalist portfolio website built with HTML, CSS, and vanilla JavaScript. Features a black and white design aesthetic with smooth animations and full responsive design.

## 🎨 Features

- **Minimalist Design**: Clean black and white theme with elegant typography
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle fade-in effects and scroll animations
- **Performance Optimized**: No frameworks, pure vanilla code
- **SEO Friendly**: Semantic HTML with proper meta tags
- **Easy to Customize**: Well-commented code with clear structure

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # Interactive functionality
├── resume.pdf          # Your resume (add this file)
└── README.md           # This file
```

## 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio website on GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Name your repository: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - Example: If your username is "vyomtiwari", name it: `vyomtiwari.github.io`
5. Make sure the repository is set to **Public**
6. Click **"Create repository"**

**Important**: For a user/organization site, the repository name MUST be `username.github.io`

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest for beginners)

1. On your repository page, click **"uploading an existing file"** or **"Add file" → "Upload files"**
2. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `resume.pdf` (your actual resume file)
3. Add a commit message: "Initial commit - Portfolio website"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line

```bash
# Navigate to your project folder
cd path/to/your/portfolio-website

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar (under "Code and automation")
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub to build your site

### Step 4: Access Your Live Website

Your website will be live at: `https://your-username.github.io`

Example: `https://vyomtiwari.github.io`

**Note**: It may take a few minutes for the site to become available after deployment.

## ⚙️ Customization Guide

### Updating Personal Information

1. **Name and Title**: Edit the text in the `#home` section of `index.html`
2. **About Section**: Update education, background text in the `#about` section
3. **Skills**: Add or remove skill tags in the `#skills` section
4. **Projects**: Duplicate the `.project-card` structure to add more projects
5. **Contact**: Update email and social media links in the `#contact` section

### Adding Your Resume

1. Export your resume as a PDF
2. Name the file `resume.pdf`
3. Place it in the same folder as `index.html`
4. If you want a different filename, update the href in the Resume button:
   ```html
   <a href="your-resume-name.pdf" target="_blank" class="nav-link nav-resume">Resume</a>
   ```

### Changing Colors

Edit the CSS variables in `style.css` (lines 9-15):

```css
:root {
    --color-black: #0a0a0a;      /* Main dark color */
    --color-white: #fafafa;      /* Main light color */
    --color-gray-dark: #1a1a1a;  /* Dark sections background */
    /* ... other variables ... */
}
```

### Setting Up Contact Form (Formspree)

The contact form currently has a placeholder action. To make it work:

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID
5. In `index.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Adding More Projects

Locate the commented section in `index.html` (around line 238) and duplicate this structure:

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <div class="project-links">
            <a href="github-link" class="project-link" title="GitHub Repository">
                <!-- GitHub icon SVG -->
            </a>
        </div>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</article>
```

## 🐛 Common Issues and Fixes

### Issue: Website not loading after deployment
**Solution**: 
- Wait 5-10 minutes after first deployment
- Check that your repository name is exactly `username.github.io`
- Ensure files are in the root folder (not in a subfolder)
- Check Settings → Pages to confirm GitHub Pages is enabled

### Issue: Styles not loading
**Solution**:
- Ensure `style.css` is in the same folder as `index.html`
- Check that the filename is exactly `style.css` (case-sensitive)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Resume link not working
**Solution**:
- Make sure `resume.pdf` is uploaded to the repository
- Verify filename matches exactly (case-sensitive)
- Check that the file is in the root folder, not a subfolder

### Issue: Contact form not working
**Solution**:
- Set up Formspree account and get your form ID
- Replace `YOUR_FORM_ID` in the form action attribute
- Alternatively, users can click "email me directly" link as a fallback

### Issue: Mobile menu not working
**Solution**:
- Ensure `script.js` is loaded (check browser console for errors)
- Verify the script file is in the same folder as `index.html`
- Check that JavaScript is enabled in your browser

## 📱 Testing Your Website

Before deployment, test locally:

1. **Open index.html** in a web browser
2. **Test responsiveness**:
   - Open Chrome DevTools (F12)
   - Click "Toggle device toolbar" (Ctrl+Shift+M)
   - Test different device sizes
3. **Check all links** work correctly
4. **Test the mobile menu** on small screens
5. **Verify smooth scrolling** between sections

## 🔧 Browser Support

This website works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note**: Internet Explorer is not supported.

## 📈 Performance Tips

1. **Optimize images**: Compress any images before adding them
2. **Minimize file sizes**: The current files are already optimized
3. **Use webp format**: For images, use .webp for better compression
4. **Enable browser caching**: GitHub Pages does this automatically

## 🎓 Learning Resources

Want to customize further? Here are some helpful resources:

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📝 License

This project is free to use and modify for your personal portfolio.

## 🤝 Need Help?

If you encounter any issues:

1. Check the "Common Issues and Fixes" section above
2. Review your code for typos
3. Use browser DevTools to debug (F12)
4. Search for solutions on Stack Overflow
5. Check GitHub Pages documentation

## 🎉 Next Steps After Deployment

1. **Share your portfolio**:
   - Add the link to your GitHub profile
   - Share on LinkedIn
   - Add to your resume

2. **Keep it updated**:
   - Add new projects as you complete them
   - Update your skills
   - Refresh your resume regularly

3. **Monitor analytics** (optional):
   - Add Google Analytics to track visitors
   - See which sections get the most attention

4. **SEO Optimization**:
   - Add meta descriptions
   - Submit sitemap to Google Search Console
   - Add Open Graph tags for social media sharing

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*For questions or suggestions, feel free to reach out via the contact form on the website.*
