# Sanjay Dass — Website + Portfolio Admin Panel Setup Guide

Yeh guide bilkul simple steps me hai, koi coding nahi karni padegi. Sirf ek baar setup karna hai.

## Kya milega setup ke baad
- Aapki Digital CV + Portfolio LIVE website ban jayegi (free), jise aap company ko link bhej sakte ho.
- Ek **Admin Panel** (`yourname.netlify.app/admin`) milega, jaha login karke:
  - Naya work image "Add" bata sakte ho (category choose karo — Digital Art, Posters, ID Cards, etc.)
  - Kisi bhi purane work ko "Delete" kar sakte ho
  - Save/Publish dabate hi 1 minute me site apne aap update ho jayegi — koi code touch nahi karna.

---

## Step 1 — GitHub par account + repository
1. https://github.com par free account banao (agar nahi hai).
2. "New repository" par click karo, naam do — jaise `sanjay-dass-portfolio`. Public rakho. Create karo.
3. Repo khulne ke baad "Add file" → "Upload files" par click karo, aur is poore folder ke saare files/folders (index.html, portfolio.html, style.css, portfolio.css, portfolio.js, admin/, content/, work/, assets/, Sanjay_Dass_CV_Final_2026.pdf) drag-drop karke "Commit changes" karo.

## Step 2 — Netlify par site banao
1. https://netlify.com par "Sign up" karo — "Sign up with GitHub" choose karo (sabse aasan).
2. Dashboard me "Add new site" → "Import an existing project" → GitHub choose karo → apni repo select karo.
3. Deploy settings default hi rehne do, "Deploy site" dabao. 1-2 minute me aapki site live ho jayegi (link kuch aisa milega: `random-name-123.netlify.app`). Chaho toh Site settings me isse rename kar sakte ho, jaise `sanjaydass.netlify.app`.

## Step 3 — Admin panel activate karo (Identity + Git Gateway)
1. Netlify dashboard me apni site kholo → **Site configuration** → **Identity** → "Enable Identity" dabao.
2. Identity tab me neeche **Services → Git Gateway** section me "Enable Git Gateway" dabao.
3. Identity tab me hi, **Registration** ko "Invite only" rakho (safe rehta hai, koi bahar se signup nahi kar payega).
4. Identity tab me "Invite users" par click karo, apna hi email daalo → invite bhej do.
5. Apne email par ek invite link aayega — usse click karke apna password set karo.

## Step 4 — Admin panel use karo
1. Browser me jao: `https://yoursite.netlify.app/admin/`
2. Apne email/password se login karo (jo Step 3 me set kiya).
3. "Portfolio Work" collection kholo → "Work Items" → "Add" (list ke andar naya item add) →
   - Category select karo (jaise "Posters")
   - Image upload karo
   - Title/Description likh sakte ho (optional)
4. Upar "Publish" dabao. Bas — 1 minute me site par live ho jayega.
5. Delete karne ke liye, wahi item kholo aur list se remove/trash icon se hata do, phir Publish.

---

## Zaroori baat
- Original design/layout bilkul waise hi rahega — sirf images add/delete honge, koi tootega nahi.
- Jab tak koi image kisi category me add nahi hoti, us jagah pehle wale placeholder cards dikhte rahenge (jaise abhi hai) — koi khaali jagah nahi dikhegi.
- Yeh sab 100% free hai (GitHub + Netlify dono ka free plan kaafi hai iske liye).
