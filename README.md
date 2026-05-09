# Ezio Automation Website

A complete industrial automation website with contact form and admin dashboard.

## Files

- `ezio-website.html` - Main website with all HTML, CSS, and JavaScript combined
- `ezio-admin.html` - Admin dashboard for managing enquiries 
- `index.html` — original main website (separate files)
- `style.css` — page styling and layout
- `main.js` — navigation, animation, contact form handling, and EmailJS support
- `admin.html` — original admin dashboard
- `package.json` — project metadata only
- `.gitignore` — common ignored files
- `README.md` — project documentation

## How to Run

### Option 1: Open combined files (recommended)
1. Double-click `ezio-website.html` for the main site
2. Double-click `ezio-admin.html` for the admin dashboard

### Option 2: Open original files locally
1. Open the project folder: `C:\Users\mssan\OneDrive\Documents\Ezio\ezio-automation`
2. Double-click `index.html`
3. The website will open in your default browser

### Option 3: Use a simple local server
```powershell
cd "C:\Users\mssan\OneDrive\Documents\Ezio\ezio-automation"
python -m http.server 8000
```

Then open:
```
http://localhost:8000/ezio-website.html
http://localhost:8000/ezio-admin.html
```

## Features

### Main Website
- Responsive industrial design
- Contact form with EmailJS integration
- WhatsApp integration
- Mobile-friendly navigation
- Scroll animations and counters
- Local storage for enquiry backup

### Admin Dashboard
- Password-protected access (ezio2025)
- Enquiry management (view, mark as read, delete)
- Search and filter functionality
- CSV export
- Reply to customers via EmailJS
- Statistics dashboard

## Setup

1. **EmailJS Configuration** (for contact form emails):
   - Go to https://emailjs.com
   - Create account and add Gmail service
   - Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{company}}`, `{{service}}`, `{{message}}`
   - Update the service ID, template ID, and public key in the JavaScript

2. **Contact Information**:
   - Phone: 8489210516
   - Email: ezioautomation@gmail.com
   - WhatsApp: https://wa.me/918489210516

## How to Collaborate

### Share via GitHub
1. Create a GitHub repository
2. Add remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ezio-automation.git
git push -u origin main
```

3. Invite a collaborator from GitHub repo settings

### Share via OneDrive
1. Right-click the `ezio-automation` folder
2. Click **Share**
3. Send the link to your friend

## Deployment

This is a static website and can be deployed to any static host:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

Upload the combined HTML files (`ezio-website.html` and `ezio-admin.html`) to your hosting provider.

## Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- EmailJS for email functionality
- Local Storage for data persistence
