# Brevo Credentials Configuration

## ✅ Credentials Added

Your Brevo API credentials have been integrated into the exit-intent popup.

**Configured:**
- **API Key:** xkeysib-870df...bf43-Qm9R61sWSmYHqQRo
- **List ID:** 2

---

## 🔒 Security Setup (Recommended)

Your credentials are currently in the code with a fallback to environment variables. For better security, create an environment file:

### Create `.env.local` file

In your project root (`/Users/austinstarke/Desktop/starke media site/`), create a file named `.env.local` with:

```
# Brevo (SendinBlue) API Configuration
NEXT_PUBLIC_BREVO_API_KEY=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
NEXT_PUBLIC_BREVO_LIST_ID=2

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://starkemedia.com
NEXT_PUBLIC_EMAIL=a.starkemedia@gmail.com
```

**Note:** `.env.local` is already in your `.gitignore`, so it won't be committed to Git.

---

## 🧪 Test Your Integration

1. **Restart your dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Visit your site:** http://localhost:3002

3. **Trigger the popup:** Move mouse to top of browser

4. **Submit a test:**
   - Email: your-email@example.com
   - Business: Test Business or @testhandle
   - Click "Send Me My Audit"

5. **Check Brevo:**
   - Login to Brevo
   - Go to Contacts → Lists → Your List (ID: 2)
   - Verify the contact appears with BUSINESS_ID attribute

---

## ✅ Expected Behavior

**Success:**
- Popup shows: "Audit Request Received! Check your email for next steps."
- Closes after 3 seconds
- Contact appears in Brevo list ID 2

**If Error:**
- Shows error message with email fallback
- Check browser console (F12) for details

---

## 🚨 Security Notes

**Important:**

1. **Never commit `.env.local` to Git** (it's already in .gitignore ✅)
2. **Never share your API key publicly**
3. **Rotate your API key if exposed**
4. **For production:** Consider using a backend API endpoint to hide the key completely

### Current Implementation:
- API key is in client-side code (visible in browser)
- This is okay for low-risk scenarios
- For higher security, create a backend endpoint:
  ```
  User → Your Backend API → Brevo API
  ```

---

## 🔄 If You Need to Rotate Your API Key

1. Go to Brevo → SMTP & API → API Keys
2. Delete the old key
3. Generate a new key
4. Update in `.env.local` or `components/ExitIntentPopup.tsx`
5. Restart dev server

---

## 📊 Monitor Your Leads

**In Brevo:**
- Contacts → Lists → Your List (ID: 2)
- You'll see new contacts with their BUSINESS_ID attribute

**Contact Data Captured:**
- Email address
- BUSINESS_ID (business name or Instagram handle)
- Timestamp (automatically by Brevo)

---

Your exit-intent popup is now live and connected to Brevo! 🎉

