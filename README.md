# BAZE CHINA — GitHub Pages storefront

A responsive bilingual (Russian/English) fashion storefront with product filters, cart, and order-message links for Telegram and WhatsApp.

## Files
- `index.html` — page structure
- `style.css` — design and responsive layout
- `script.js` — product data, language toggle, cart and order links

## Before publishing
1. Open `script.js`.
2. At the top, change:
   - `telegramUsername: "YOUR_TELEGRAM_USERNAME"` to your Telegram username without `@` (example: `"baze_china_shop"`).
   - `whatsappNumber: "YOUR_WHATSAPP_NUMBER"` to your full international phone number using digits only (example: Netherlands `31612345678`; do not include `+`, spaces or dashes).
3. Replace sample product names, prices, photos, and descriptions in the `products` array with your real inventory. Prices are currently sample prices in euros.
4. Preview by opening `index.html` in your browser. An internet connection is needed for Google Fonts and remote Unsplash photos.

## Publish with GitHub Pages
1. Sign in at https://github.com/ or create an account.
2. Click **New repository**. Name it `baze-china`. Set it to **Public**, then create it.
3. On the repository page, click **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` (upload the files themselves, not a folder nested inside another folder).
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Wait a few minutes. The site URL should be `https://YOUR-GITHUB-USERNAME.github.io/baze-china/`.
10. If it does not appear, refresh **Settings → Pages** and check the deployment status. Make sure `index.html` is in the repository root.

## Important
- GitHub Pages hosts static websites. This demo cart does not save orders to a server, process payments, calculate shipping, or manage stock.
- Checkout opens Telegram or WhatsApp with an order message. The buyer must send the message. Telegram prefilled text support can vary by client; if it does not prefill, the customer may need to paste the order manually.
- For a real store, add clear delivery/returns/privacy information and only use product photos you have permission to publish.
- This project is a starter storefront, not legal, payment, or ecommerce infrastructure.
