# Deployment Guide 🚀

Deploy your restaurant management system to various hosting platforms.

## 📦 Build for Production

First, create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- Free tier available
- Automatic HTTPS
- Easy drag-and-drop deployment
- Custom domain support
- Instant rollbacks

**Steps:**

1. **Via Drag & Drop (Easiest):**
   - Run `npm run build`
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - Done! Your site is live

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   # Select 'dist' as publish directory
   ```

3. **Via Git Integration:**
   - Push code to GitHub
   - Connect repository on Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2: Vercel

**Why Vercel?**
- Free tier
- Excellent performance
- Automatic deployments from Git
- Custom domains

**Steps:**

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   # Follow the prompts
   ```

2. **Via Dashboard:**
   - Push to GitHub
   - Import project on [vercel.com](https://vercel.com)
   - Build command: `npm run build`
   - Output directory: `dist`

### Option 3: GitHub Pages

**Why GitHub Pages?**
- Free for public repositories
- Integrates with GitHub
- Simple setup

**Steps:**

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/restaurant-management",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings

**Important:** Update webpack config for GitHub Pages:
```js
// webpack.config.js
output: {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/restaurant-management/' 
    : '/',
}
```

### Option 4: Firebase Hosting

**Why Firebase?**
- Google infrastructure
- Free SSL
- Fast CDN
- Easy CLI

**Steps:**

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. Initialize:
   ```bash
   firebase init hosting
   # Choose 'dist' as public directory
   # Configure as single-page app: Yes
   # Auto rewrites: No
   ```

3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### Option 5: Surge

**Why Surge?**
- Super simple
- Free for unlimited projects
- Custom domains

**Steps:**

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Deploy:
   ```bash
   npm run build
   cd dist
   surge
   # Follow prompts
   ```

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] `npm run build` completes without errors
- [ ] Test the build locally:
  ```bash
  npx serve dist
  ```
- [ ] All images load correctly
- [ ] localStorage works (check browser compatibility)
- [ ] All routes work (React Router configured for SPA)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Update restaurant name/branding
- [ ] Add your contact information

## ⚙️ Environment-Specific Configuration

### Production vs Development

You can add environment-specific configs:

1. Create `.env` files:
   ```
   # .env.development
   REACT_APP_API_URL=http://localhost:3000
   
   # .env.production
   REACT_APP_API_URL=https://api.yoursite.com
   ```

2. Access in code:
   ```js
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

## 📱 Custom Domain Setup

### Netlify:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records with your provider

### Vercel:
1. Project Settings → Domains
2. Add domain
3. Configure DNS

### GitHub Pages:
1. Add `CNAME` file to `public` folder:
   ```
   yourdomain.com
   ```
2. Configure DNS with your provider

## 🔒 Security Headers

Add security headers in `public/_headers` (for Netlify):

```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

For Vercel, use `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 📊 Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🚨 Troubleshooting

### "Page Not Found" on Refresh

**Problem:** React Router routes don't work after page refresh

**Solution:** Configure server for SPA:

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images Not Loading

**Problem:** Image paths incorrect in production

**Solution:** Use relative paths or CDN URLs (like Unsplash in our app)

### localStorage Not Working

**Problem:** Some browsers block localStorage

**Solution:** Add try-catch blocks (already implemented in our helpers)

### Build Errors

**Problem:** Build fails with dependency errors

**Solutions:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Update dependencies
npm update

# Check for conflicts
npm audit fix
```

## 🎯 Post-Deployment

After deployment:

1. **Test Everything:**
   - Use the testing checklist
   - Test on mobile devices
   - Test all routes
   - Test localStorage

2. **Share Your Demo:**
   - Add to portfolio
   - Share on LinkedIn
   - Include in resume
   - Show to clients

3. **Monitor:**
   - Check analytics
   - Monitor errors (use Sentry if needed)
   - Gather feedback

## 📈 Performance Optimization

### Already Included:
- ✅ Code splitting with React.lazy (optional upgrade)
- ✅ Production build minification
- ✅ Webpack optimization
- ✅ Image lazy loading

### Optional Enhancements:
```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer

# Add to webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
  new BundleAnalyzerPlugin()
]
```

## 🎨 Customization Before Deploy

Update these for your client:

1. **Restaurant Name:** 
   - `src/components/Navbar.js`
   - `src/components/Footer.js`
   - `public/index.html` (title)

2. **Contact Info:**
   - `src/components/Footer.js`
   - `src/pages/OrderPlaced.js`

3. **Colors:**
   - `tailwind.config.js`
   - `src/index.css`

4. **Dishes:**
   - `src/data/mockData.js`

5. **Favicon:**
   - Add `favicon.ico` to `public` folder

## 🌟 Demo URLs

After deployment, you'll get URLs like:

- **Netlify:** `https://your-restaurant.netlify.app`
- **Vercel:** `https://your-restaurant.vercel.app`
- **GitHub Pages:** `https://username.github.io/restaurant-management`
- **Firebase:** `https://your-project.web.app`
- **Surge:** `https://your-restaurant.surge.sh`

## 💡 Pro Tips

1. **Test build locally first:**
   ```bash
   npm run build
   npx serve dist
   ```

2. **Use descriptive names:**
   - Good: `home-kitchen-karachi`
   - Bad: `test-app-123`

3. **Set up automatic deployments:**
   - Connect Git repository
   - Auto-deploy on push to main branch

4. **Keep it simple:**
   - No backend = no server costs
   - Perfect for demos and portfolio

5. **Version your demos:**
   - Create different branches for different clients
   - Customize branding per client

---

## 🎉 You're Ready!

Your restaurant management system is production-ready and can be deployed in minutes to any of these platforms. Choose the one that best fits your needs:

- **Quick demo:** Netlify Drop
- **Portfolio project:** Vercel or Netlify
- **Learning:** GitHub Pages
- **Future backend:** Firebase

**Deploy and impress!** 🚀

---

**Need help?** Check the platform's documentation:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Firebase Docs](https://firebase.google.com/docs/hosting)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
