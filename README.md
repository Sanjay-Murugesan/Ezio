# Ezio Automation Website

A clean, static brochure website for Ezio Automation — Special Purpose Machine Manufacturers.

## Project Files

- `index.html` — main website
- `style.css` — page styling and layout
- `main.js` — navigation, animation, contact form handling, and EmailJS support
- `admin.html` — admin dashboard for enquiry history and localStorage preview
- `package.json` — project metadata only
- `.gitignore` — common ignored files
- `README.md` — project documentation

## How to Run

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

## What to Update

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

## Deployment

This is a static website and can be deployed to any static host:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Notes

- Keep all files together in the same folder for CSS and JavaScript to load correctly
- `admin.html` is a local dashboard; it stores enquiries in browser `localStorage`
- If you want, I can also help you add EmailJS setup or update contact info directly
