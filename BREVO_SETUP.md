# Brevo (SendinBlue) Integration Setup

## Overview

Your exit-intent popup is now integrated with Brevo API to automatically add leads to your email list.

---

## Step 1: Get Your Brevo API Key

1. Log in to your Brevo account at [https://app.brevo.com](https://app.brevo.com)
2. Click your name in the top right → **SMTP & API**
3. Go to the **API Keys** tab
4. Click **Generate a new API key**
5. Give it a name like "Website Exit Popup"
6. Copy the API key (you won't see it again!)

---

## Step 2: Get Your List ID

1. In Brevo, go to **Contacts** → **Lists**
2. Find your "Content Audit Leads" list (or create a new list)
3. Click on the list name
4. Look at the URL - it will be something like:
   ```
   https://app.brevo.com/contact/list/id/123
   ```
   The number at the end (123) is your List ID

**Alternative method:**
- Hover over the list name and the ID may appear
- Or click Edit and check the browser URL

---

## Step 3: Configure Your Popup

Open the file: `components/ExitIntentPopup.tsx`

Find these lines (around line 42-43):

```typescript
const BREVO_API_KEY = 'YOUR_BREVO_API_KEY_HERE' // Replace with your actual API key
const BREVO_LIST_ID = 0 // Replace with your actual list ID number
```

**Replace with your actual values:**

```typescript
const BREVO_API_KEY = 'xkeysib-abc123...' // Your actual Brevo API key
const BREVO_LIST_ID = 123 // Your actual list ID number (just the number, no quotes)
```

---

## Step 4: Create the BUSINESS_ID Attribute in Brevo

1. Go to **Contacts** → **Settings** → **Contact attributes**
2. Click **Create a new attribute**
3. Set:
   - **Name:** `BUSINESS_ID`
   - **Type:** Text
   - **Category:** Normal
4. Click **Create attribute**

This stores the business name/Instagram handle from your form.

---

## Step 5: Test the Integration

1. Visit your site: http://localhost:3002
2. Move mouse to top of browser to trigger popup
3. Fill in:
   - Email: your-test@email.com
   - Business: Test Business or @testhandle
4. Click "Send Me My Audit"

**If successful:**
- You'll see: "Audit request received! Check your email for next steps."
- Popup closes after 3 seconds
- Check your Brevo contact list - the contact should appear with BUSINESS_ID attribute

**If there's an error:**
- Error message shows: "Something went wrong. Email me directly at..."
- Check browser console (F12) for error details
- Verify API key and List ID are correct

---

## What Data Gets Sent to Brevo

```json
{
  "email": "user@example.com",
  "attributes": {
    "BUSINESS_ID": "Shop Name or @instagram"
  },
  "listIds": [123],
  "updateEnabled": true
}
```

**Fields:**
- `email` - User's email address
- `BUSINESS_ID` - Business name or Instagram handle
- `listIds` - Your Brevo list ID (array)
- `updateEnabled` - If contact exists, update their info

---

## Success & Error Handling

### ✅ Success (200/201 response)
- Shows success message with checkmark icon
- Sets permanent localStorage flag so popup never shows again
- Closes automatically after 3 seconds

### ❌ Error
- Shows error message with your email as fallback
- User can still close popup
- Contact not added to Brevo list

---

## Security Notes

**API Key Security:**

⚠️ **Important:** Your API key is currently in client-side code, which means it's visible to anyone who inspects your website code.

**For production, consider:**

1. **Create a backend API endpoint** (recommended)
   ```
   User → Your API → Brevo API
   ```

2. **Use environment variables** (Next.js)
   ```typescript
   const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY
   ```
   Add to `.env.local`:
   ```
   NEXT_PUBLIC_BREVO_API_KEY=xkeysib-your-key-here
   ```

3. **Restrict API key permissions** in Brevo
   - Only give "Contacts" write permission
   - Don't give campaign or other permissions

---

## Troubleshooting

### "CORS error" in browser console
- Brevo API should allow CORS from browsers
- If you get CORS errors, you'll need to create a backend endpoint

### "401 Unauthorized"
- Check your API key is correct
- Verify it's not expired
- Make sure there are no extra spaces

### "400 Bad Request"
- List ID might be wrong (check it's a number, not a string)
- Email format might be invalid
- BUSINESS_ID attribute might not exist in Brevo

### Contact appears but no BUSINESS_ID
- Create the BUSINESS_ID attribute in Brevo (Step 4)
- Attribute names are case-sensitive

### Success message shows but contact not in Brevo
- Check the specific list by ID
- Contact might be in "All Contacts" but not your specific list
- Verify List ID is correct

---

## Next Steps After Setup

1. ✅ Configure API key and List ID
2. ✅ Create BUSINESS_ID attribute
3. ✅ Test with a real email
4. ✅ Set up welcome email automation in Brevo
5. ✅ Monitor your content audit leads list
6. ✅ Create follow-up email sequence

---

## Brevo Email Automation (Optional)

Create an automated welcome email:

1. Go to **Automation** in Brevo
2. Create new workflow
3. **Trigger:** Contact added to "Content Audit Leads" list
4. **Action:** Send email with:
   - Subject: "Your Content Audit is Coming..."
   - Content: Confirm receipt, set expectations
5. Activate the workflow

---

Your exit-intent popup is now ready to capture leads and send them directly to Brevo! 🎯

