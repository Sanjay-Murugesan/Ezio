# Ezio Automation Website

A clean, static brochure website for Ezio Automation — Special Purpose Machine Manufacturers.

## 🚀 Live Demo
- **GitHub Repository**: https://github.com/Sanjay-Murugesan/Ezio
- **Local Development**: Open `index.html` in your browser
- **Admin Dashboard**: Open `admin.html` (Password: `ezio2025`)

## 📁 Project Files

- `index.html` — Main website with contact form and WhatsApp integration
- `style.css` — Clean white theme with DM Serif Display + DM Sans fonts
- `main.js` — Navigation, animations, contact form handling, and EmailJS support
- `admin.html` — Admin dashboard for enquiry history and localStorage preview
- `package.json` — Project metadata only
- `.gitignore` — Common ignored files
- `README.md` — Project documentation

## ✨ Features

- **Responsive Design** — Works on desktop, tablet, and mobile
- **Contact Form** — EmailJS integration for form submissions
- **WhatsApp Integration** — Direct chat link with pre-filled message
- **Admin Dashboard** — Password-protected enquiry management
- **Smooth Animations** — Scroll reveals, counters, and hover effects
- **Local Storage** — Offline enquiry storage for admin dashboard

## 📞 Contact Information

- **Phone**: 8489210516
- **Email**: ezioautomation@gmail.com
- **WhatsApp**: Direct chat integration

## 🛠️ How to Run

### Option 1: Open locally
1. Open the project folder: `C:\Users\mssan\OneDrive\Documents\Ezio\ezio-automation`
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Use a simple local server (recommended)
If you want the best experience and avoid browser restrictions, use a local server:

```powershell
cd "C:\Users\mssan\OneDrive\Documents\Ezio\ezio-automation"
python -m http.server 8000
```

Then open:

```
http://localhost:8000/index.html
```

## 👥 How to Collaborate

### Share via GitHub (Current Setup)
The project is already set up on GitHub:

```bash
# Clone the repository
git clone https://github.com/Sanjay-Murugesan/Ezio.git

# Make changes and push
git add .
git commit -m "Your changes"
git push origin main
```

### Share via OneDrive
1. Right-click the `ezio-automation` folder
2. Click **Share**
3. Send the link to your friend

## 📋 What to Update

### Contact details
Update your contact information in `index.html`:
- `8489210516`
- `ezioautomation@gmail.com`
- WhatsApp number
- Any other phone/email text shown on the page

### EmailJS
If the contact form should send email, update `main.js` with:
- EmailJS service ID
- EmailJS template ID
- EmailJS public key

### Admin password
If needed, change the password in `admin.html` from the current default `ezio2025`.

## 🚀 Deployment

This is a static website and can be deployed to any static host:
- **Netlify** — Drag & drop the folder
- **Vercel** — Connect GitHub repo
- **GitHub Pages** — Enable from repository settings
- **Firebase Hosting** — Use Firebase CLI

## 📝 Notes

- Keep all files together in the same folder for CSS and JavaScript to load correctly
- `admin.html` is a local dashboard; it stores enquiries in browser `localStorage`
- The website uses EmailJS for contact form submissions
- All contact details are hardcoded in `index.html` for easy updates
