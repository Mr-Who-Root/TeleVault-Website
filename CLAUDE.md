# CLAUDE.md — TeleVault website

Public product website for TeleVault (Free & Pro), served by GitHub Pages from `main` at **https://mr-who-root.github.io/TeleVault-Website/**. Static HTML/CSS/JS with no build step; pushing to `main` publishes in about a minute.

The workspace-level `../CLAUDE.md` has the facts about both editions and the **standing rule**: whenever a user-facing feature changes in `../TeleVault-Free` or `../TeleVault-Pro`, update this site in the same piece of work and push it.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole site, one page (content lives here) |
| `styles.css` | Design tokens and layout; mirrors `../TeleVault-Free/DESIGN.md` |
| `script.js` | Theme toggle (key `televault_theme`, shared with the privacy site) and footer year |
| `assets/icon.svg`, `favicon-32.png`, `apple-touch-icon.png` | App icon, copied from `../TeleVault-Free/vaultgram-icons/` |
| `assets/og-image.png` | Social preview: Free's 1024×500 feature graphic |
| `assets/screens/tv2-*.webp` | 2.0 app screenshots (Pro), 620 px wide, from the cleaned captures in `../video/V2.0` |
| `assets/screens/mac-*.webp` | TeleVault Pro on a Mac (Settings, the player), 1200 px wide, from the Mac-version test build |
| `.nojekyll` | Serve files as-is |

## Sections in `index.html` (in order) and what to edit

1. **Hero** (`.hero`): the platform row (Android · macOS · Windows · Linux; no pill badges, the user asked for them to go), tagline, Play buttons plus a quiet "Mac, Windows & Linux" link, stat strip, two phone mock-ups.
1b. **What's new in 2.0** (`#v2`): one card per 2.0 feature (same tags as Features) and the "Already using TeleVault? Update from Google Play" note.
2. **How it works** (`#how`): three steps.
3. **Features** (`#features`): one `<article class="feature">` per feature. Only a Pro-only feature gets a tag (`<span class="tag tag-pro">Pro</span>`); everything else has none. Pick a Font Awesome 6.5 icon. Keep the text short and user-facing.
4. **Screenshots** (`#screenshots`): `<figure class="shot">` items in a horizontal scroller. Give each an `alt` and a short caption; add a `tag-pro` / `tag-free` badge if the screen is edition-specific.
4b. **Desktop** (`#desktop`): macOS / Windows / Linux cards, then "How to get it": the desktop apps are for TeleVault Pro buyers, who email `letter2govind@gmail.com` (the button pre-fills the message) with the version they want and their Google Play **order number** (GPA.xxxx-xxxx-xxxx-xxxxx, from the Play receipt email). Builds come from the `Mac-version`, `Windows-version` and `Linux-version` branches of `Mr-Who-Root/TeleVault` (private release `v2.0.0`). Keep the "not on desktop" list in step with `PlatformSupport` in the Mac branch.
5. **Free vs Pro** (`#compare`): two plan cards plus the comparison table. It must match `../TeleVault-Free/lib/core/config/free_tier_limits.dart` and `pro_upgrade.dart`. Use the `.yes` check / `.no` dash spans, and `.note` for small print.
6. **Privacy** (`#privacy`): four summary cards and a link to the privacy policy. Only claims that are true for both apps. Don't say "no analytics" (both apps use Firebase).
7. **FAQ** (`#faq`): `<details>` items mirroring the in-app Help screen (`lib/ui/screens/settings/help_screen.dart`).
8. **Final CTA** and **footer**.

## Play links

Both apps are live on Google Play: Free (`com.televault.free`) and Pro (`com.vaultgram.app`, live since 2026-10-09). Every "Get" button is a real `<a>` to its Play page (hero, plan cards, final CTA). The dashed `.btn.is-pending` style in `styles.css` is now unused; keep it in case a future edition launches the same way.

## Checking changes

Render with headless Chrome before pushing, in both themes and at phone width:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --blink-settings=preferredColorScheme=0 --window-size=1280,5600 --virtual-time-budget=5000 \
  --screenshot=/path/to/out.png "file://$PWD/index.html"
```

(`preferredColorScheme=1` gives light mode. The narrowest window headless Chrome allows is 500 px.) Nothing may scroll sideways at phone width.

## Screenshots

See "Screenshots" in `../CLAUDE.md`: adb demo mode, navigate only, **pixelate Cloud-tab thumbnails**, export 620 px WebP into `assets/screens/`.
