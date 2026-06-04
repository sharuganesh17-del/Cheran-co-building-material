# Vercel Deployment Guide for Cheran & Co.

## Quick Summary
This project is configured and ready to deploy on Vercel. Below are all the configuration details needed.

---

## Deployment Configuration

### Build Settings
| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm install` |
| **Node Version** | 18.x or higher (recommended) |

### Root Directory
```
./
```
(The project root where `package.json` is located)

---

## Step-by-Step Deployment Instructions

### Step 1: Connect GitHub Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Search for and select: `sharuganesh17-del/Cheran-co-building-material`
5. Click **"Import"**

### Step 2: Configure Project Settings
When creating the project on Vercel, use these settings:

**Framework:** Other  
**Build Command:** `npm run build`  
**Output Directory:** `build`  
**Install Command:** `npm install`  
**Root Directory:** `./` (leave as default)

### Step 3: Environment Variables (if needed)
Currently, no environment variables are required. If you add any later:
1. Go to **Project Settings → Environment Variables**
2. Add your variables
3. Redeploy

### Step 4: Domain Configuration
To use your custom domain `cheranandco.in`:
1. In Vercel dashboard, go to **Settings → Domains**
2. Click **"Add Domain"**
3. Enter `cheranandco.in`
4. Follow the instructions to add DNS records to your domain registrar:
   - Update your DNS settings with the nameservers provided by Vercel
   - Or add CNAME/A records as shown

### Step 5: Deploy
Once connected:
- **Automatic:** Any push to the `main` branch will trigger automatic deployment
- **Manual:** Click the **"Deploy"** button in Vercel dashboard

---

## What's Configured for Deployment

✅ **vercel.json** - Contains all Vercel configuration  
✅ **.vercelignore** - Specifies files to exclude from deployment  
✅ **SEO & Meta Tags** - Domain set to `cheranandco.in`  
✅ **Robots.txt** - Configured for search engines  
✅ **Sitemap** - Auto-generated at `/sitemap.xml`  
✅ **Logo** - Using local asset: `src/assets/cheranlogo.jpeg`

---

## Key Files for Deployment

- **vercel.json** - Vercel deployment configuration
- **package.json** - Dependencies and build scripts
- **vite.config.ts** - Vite build configuration
- **.vercelignore** - Files to exclude from build

---

## Post-Deployment Steps

1. **Verify Domain:** Visit `https://cheranandco.in` in your browser
2. **Check SEO:** 
   - View page source to verify meta tags
   - Test sitemap: `https://cheranandco.in/sitemap.xml`
   - Check robots.txt: `https://cheranandco.in/robots.txt`
3. **Test Routes:** Visit all pages to ensure they load correctly
4. **Monitor:** Use Vercel Analytics dashboard for traffic and performance

---

## Build Information

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Development Server (Local Testing)
```bash
npm run dev
```
Runs development server on `http://localhost:8080`

### Preview Build (Local Testing)
```bash
npm run build
npm run preview
```
Tests the production build locally.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm run build` works locally first |
| Domain not resolving | Verify DNS records are propagated (can take 24-48 hours) |
| SEO not indexing | Submit sitemap to Google Search Console |
| Images not loading | Verify image paths use relative URLs |

---

## GitHub Repository
**Repository:** https://github.com/sharuganesh17-del/Cheran-co-building-material  
**Branch:** `main` (production)

Any push to this branch will automatically trigger a Vercel deployment.

---

## Important Notes

🔗 **Domain:** All meta tags, canonical URLs, and og:image are set to `https://cheranandco.in`

🎯 **SEO:** Optimized for:
- Mettupalayam, Coimbatore location
- Building materials keywords
- Local business schema

📱 **Mobile Responsive:** Fully optimized for mobile devices

🚀 **Performance:** Vite build ensures fast load times

---

## Contact Support
For deployment issues, check:
1. [Vercel Documentation](https://vercel.com/docs)
2. Build logs in Vercel dashboard
3. GitHub repository status

