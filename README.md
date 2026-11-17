# Jane & Nnamdi: Wedding Invitation Website

## 1. What is in this folder
- `index.html` the page structure and the link-preview tags
- `styles.css` colours (at the top) and design
- `script.js` **all your wording and settings** (the CONFIG block at the top)
- `google-apps-script.gs` receives RSVPs into a Google Sheet
- `assets/` photos, flowers, music, icons, `og-image-2.jpg` (the WhatsApp preview picture)

## 2. Editing the wording
Open `script.js` in any text editor (Notepad is fine). Only change the text between quotation marks inside the CONFIG block at the top. Do not touch anything under the line "APP CODE".

## 3. Still to fill / check before sending the link
1. **Hosting address** in `index.html`: replace `__SITE_URL__` in 4 places (canonical, og:url, og:image, twitter:image) with your real address, ending with a slash, e.g. `https://name.github.io/repo/`. Also put the same address in `siteUrl` in script.js.
2. **Venue map pin**: open the venue in Google Maps, copy the address exactly as shown, paste into `mapQuery` (or paste a share link into `mapsUrl`).
3. **Gifts**: fill `gifts.bank`, `accountName`, `accountNumber` to show the Gifts section (hidden until then).
4. **Legal Nuptial Bond**: add its venue/time if guests are invited (add another item under `venues`).
5. Vendors "Apparel" and "Male Designer" had no names, so they are not shown. Add them under `vendors`.
6. Phone numbers: two different sets were supplied; the first set is used everywhere. Check them.
7. **Music**: `assets/music.mp3` is only a generated placeholder. Replace with your own licensed MP3 (keep the name). Compress: `ffmpeg -i song.mp3 -b:a 96k -t 120 music.mp3`. Do not use copyrighted songs without a licence.

## 4. Photos
`hero.webp` (top of page), `envelope-card.webp` (slides out of the envelope), `footer.webp` (arch). To replace, save your new photo with the same name and size (WebP). The flowers were cut from your flyer and recoloured burgundy and olive (`floral-left.webp`, `floral-right.webp`).

## 5. Collecting RSVPs in a Google Sheet
1. Create a new Google Sheet. 2. Extensions > Apps Script. 3. Delete the sample code and paste all of `google-apps-script.gs`. 4. Deploy > New deployment > type Web app > Execute as **Me**, Who has access **Anyone** > Deploy and authorise. 5. Copy the Web app URL into `rsvp.endpoint` in script.js. 6. Submit a real test RSVP on the live site and check the "RSVPs" tab. After any later change to the script, use Deploy > Manage deployments > New version.
Until this is done, guests are pointed to the WhatsApp and Call buttons.

## 6. Link preview (WhatsApp / Facebook)
The preview picture is `assets/og-image-2.jpg` with the text "You are invited to celebrate our union in marriage." To refresh a cached preview, rename the image (e.g. `og-image-3.jpg`, and update the 2 image tags) or share the link with `?v=2`, then open the Facebook Sharing Debugger and press "Scrape Again".

## 7. Free hosting
- **GitHub Pages**: create a repo, upload everything in this folder, Settings > Pages > Branch `main` / root. Address: `https://USERNAME.github.io/REPO/`
- **Netlify**: drag and drop the folder at app.netlify.com/drop.
- **Vercel**: import the repo or upload the folder; no build settings needed.
Custom domain: add the A records (or a CNAME for www) your host gives you at your domain registrar, then update the 4 addresses in step 3.1.

## 8. Personal guest links
Add `?guest=Name` to the link: `https://your-site/?guest=Mr%20and%20Mrs%20Okeke` (space = `%20`, & = `%26`). The envelope and card greet "Dear ..." and the RSVP name is pre-filled. Add `?nointro` to skip the envelope when testing.
