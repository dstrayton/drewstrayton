# Drew Strayton — updated website

The landing page, About, and Resume are personalized. The supplied PDF is included as the downloadable resume. Portfolio cards are still editable examples.

## Add your headshot

1. Put your headshot in `assets/images/` and name it `headshot.jpg`.
2. In `content.js`, change `heroImage` to `"assets/images/headshot.jpg"` and `heroImageAlt` to `"Drew Strayton"`.
3. Save and refresh. Adjust `.hero-photo` → `object-position` in `styles.css` if the crop needs changing.

Until then, a labeled neutral placeholder appears in the photo position.

## Update your existing GitHub website

Upload `content.js`, `script.js`, `styles.css`, `index.html`, and the `assets` folder to the same paths in your existing repository and commit. Keep `index.html` at the repository root. Your Pages settings do not need changing. The PDF must retain `assets/documents/Strayton_Resume.pdf` as its path.

---

# Your engineering portfolio

A fully editable portfolio in plain HTML, CSS, and JavaScript. No install, build command, paid service, or framework required. All sample projects and resume entries are placeholders: replace them before publishing.

## 1. Open and preview

1. Extract the ZIP.
2. In VS Code, choose **File → Open Folder** and select `engineering-portfolio`.
3. Open `index.html` in your browser by double-clicking it in your file manager. This site works directly from the file.
4. After an edit, save in VS Code and refresh your browser.

Optional: VS Code's Live Server extension can refresh the page as you edit. Right-click `index.html` and choose **Open with Live Server** after installing it.

## 2. Where to edit

| File / folder | Purpose |
| --- | --- |
| `content.js` | Name, about text, skills, links, projects, image paths, and resume entries |
| `styles.css` | All colors, fonts, spacing, layouts, and responsive rules |
| `index.html` | Header, navigation, footer, browser metadata |
| `script.js` | Rendering templates, filters, and page navigation |
| `assets/images/` | Your photographs, diagrams, and graphics |
| `assets/documents/` | Your resume PDF or other documents |

Start in **content.js**. Keep the quotes, commas, brackets, and braces in place. Use double quotes around text containing apostrophes, or escape the apostrophe: `'I\'m an engineer.'`. Browser developer tools → Console shows syntax errors if something stops working.

## 3. Add project images

1. Place `project-01.jpg` in `assets/images/`.
2. In the relevant project object, change:

```js
image: 'assets/images/project-01.jpg',
imageAlt: 'Describe what the image shows',
```

Keep paths relative: `assets/images/photo.jpg`, not `/assets/images/photo.jpg` or a computer-specific path. Online filenames are case-sensitive. Use short filenames without spaces. JPG/WebP works well for photos; PNG for transparency; SVG for diagrams. Aim for images under 1 MB.

Images crop to fill project cards. To show full images instead, change `object-fit: cover` to `object-fit: contain` in the `.project-image img,.detail-cover img` rule in `styles.css`.

For a project gallery, replace `gallery: []` with:

```js
gallery: [
  {
    src: 'assets/images/prototype-01.jpg',
    alt: 'First prototype with the enclosure removed',
    caption: 'First iteration: evaluating the internal layout.'
  },
  {
    src: 'assets/images/final-assembly.jpg',
    alt: 'Final assembly',
    caption: 'The final design after testing.'
  }
],
```

To add an About portrait, set the top-level `portrait` path and `portraitAlt`.

## 4. Add, remove, or reorder projects

The `projects` array in `content.js` controls both the gallery and the project pages.

- Duplicate one complete project object, from `{ id: ...` through its closing `}`.
- Separate objects with commas.
- Give each project a unique `id` such as `boat-design-2026`. Use lowercase letters, numbers, and hyphens.
- Update its title, category, text, image, and other fields.
- Category filters are created automatically.
- The first two projects appear on the landing page. Reorder objects to change them.
- Delete a whole object to remove a project. You may have as many as you want.
- Set `link` to a full `https://...` address to show a project resources link.

Project URLs use `#project/your-id`. They can be bookmarked and refreshed on GitHub Pages without extra server configuration.

For paragraphs in project descriptions, use `\n\n` inside the quoted text.

## 5. Add your resume

Edit the `resume` section in `content.js`. Duplicate experience/education objects for additional entries and edit the `bullets` arrays.

To enable a PDF download:

1. Add your real PDF as `assets/documents/resume.pdf`.
2. Change the `pdf` field inside `resume` to:

```js
pdf: 'assets/documents/resume.pdf',
```

The download button is hidden until you provide a path. A PDF is not included in this starter. You can also print the Resume tab from your browser.

## 6. Change the visual style

The first block in `styles.css` defines theme variables:

```css
--background: #f5f6f8; /* page background */
--surface: #ffffff;   /* cards and tags */
--ink: #141922;       /* main text */
--muted: #5c6573;     /* secondary text */
--blue: #2359d4;      /* links, buttons, and accent */
--blue-hover: #1743aa;
--line: #dce0e7;      /* dividers */
--dark: #111820;      /* hero graphic background */
--radius: 4px;       /* roundness */
--width: 1160px;     /* maximum content width */
```

Below these variables, CSS is grouped by component. Change font sizes in `h1`, `h2`, `h3`; edit `.hero` for the landing layout and `.project-grid` for gallery columns. The `@media` sections adapt the layout to small screens. The blueprint illustrations are CSS artwork and remain as intentional placeholders when project images are empty.

For a photo instead of the hero blueprint, set `heroImage: 'assets/images/hero.jpg'` and update `heroImageAlt` in `content.js`.

The `home()`, `work()`, `project()`, and `resume()` functions in `script.js` contain the HTML for each view. Edit these when adding whole new layout sections. Text from `content.js` is treated as plain text, not HTML; put structural HTML in the templates.

## 7. Publish on GitHub Pages

1. Sign in to GitHub and create a **public** repository named exactly `YOURUSERNAME.github.io`, replacing `YOURUSERNAME` with your GitHub username.
2. Open the repository. Use **Add file → Upload files** (an empty repository may show an **uploading an existing file** link).
3. Upload the **contents** of the extracted `engineering-portfolio` folder into the repository root. `index.html` must be at the top level, not inside another `engineering-portfolio` folder. Keep the `assets` folder and its contents together. Do not upload only the ZIP.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose **main** and **/ (root)**, then **Save**.
8. Wait for deployment to finish; GitHub Pages will show your published link: `https://YOURUSERNAME.github.io/`.

GitHub guide: https://docs.github.com/en/pages/quickstart

If you use a differently named repository, the address will usually be `https://YOURUSERNAME.github.io/REPOSITORY/`. This starter also supports that because its assets use relative paths.

Update your site by uploading edited files to the same paths and committing again, or use VS Code's Git integration after cloning the repository. Commit and push changes to `main` to redeploy. Check the repository's Actions tab for deployment progress or errors.

## Before publishing

- Replace Your Name, initials, biography, example projects, and resume entries.
- Set your contact links; empty values hide them.
- Update the description in `index.html` for your real portfolio.
- Add accurate alternative text to your photos.
- Check every tab and project at desktop and phone widths.
- Include only information and documents you intend to make public: a free GitHub Pages repository and its source files are public.

## Troubleshooting

- Blank page: check `content.js` for a missing comma or quote; open the browser Console.
- Missing image: check the exact filename, capitalization, and relative path.
- GitHub 404: make sure `index.html` is in the root and Pages uses the correct branch and root folder.
- Old content: wait for deployment to finish, then hard-refresh your browser.

No analytics, external fonts, trackers, or third-party code dependencies are included. Contact uses email links rather than a form backend.
