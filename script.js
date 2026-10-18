/* Layout and behavior. Most edits belong in content.js or styles.css. */
const $ = (selector) => document.querySelector(selector);
const e = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL = (value) => /^(https?:\/\/|mailto:)/i.test(value) || (value && !/^[a-z][a-z\d+.-]*:|^\/\//i.test(value)) ? e(value) : '#';
const tags = (items) => items.map(t => `<span class="tag">${e(t)}</span>`).join('');
function artwork(index = 0) {
  return `<div class="blueprint art-${index % 3}" aria-hidden="true"><div class="grid"></div><div class="shape shape-one"></div><div class="shape shape-two"></div><span class="drawing-label">CONCEPT / ${String(index + 1).padStart(2, '0')}</span><span class="cross">+</span></div>`;
}
function projectImage(p, i) {
  return p.image ? `<img src="${safeURL(p.image)}" alt="${e(p.imageAlt)}" loading="lazy">` : artwork(i);
}
function card(p, i) {
  return `<a class="project-card" href="#project/${encodeURIComponent(p.id)}"><div class="project-image">${projectImage(p, i)}</div><div class="card-meta"><span>${e(p.category)}</span><span>${e(p.year)}</span></div><h3>${e(p.title)} <span aria-hidden="true">↗</span></h3><p>${e(p.summary)}</p><div class="tags">${tags(p.tools)}</div></a>`;
}
function home() {
 return `<section class="hero"><div class="hero-copy"><h1>${e(portfolio.headline).replace(/\n/g, '<br>')}</h1>${portfolio.subtitle ? `<p class="hero-subtitle">${e(portfolio.subtitle)}</p>` : ''}<p class="intro">${e(portfolio.intro)}</p><div class="actions"><a class="button primary" href="#portfolio">Explore my work <span>↗</span></a><a class="text-link" href="#resume">View resume →</a></div></div><div class="hero-art">${portfolio.heroImage ? `<img class="hero-photo" src="${safeURL(portfolio.heroImage)}" alt="${e(portfolio.heroImageAlt)}">` : artwork(0)}</div></section>
 <section class="about section" id="about"><div><p class="eyebrow">01 / ABOUT</p><h2>My background<br>and motivation.</h2></div><div class="about-copy">${portfolio.portrait ? `<img class="portrait" src="${safeURL(portfolio.portrait)}" alt="${e(portfolio.portraitAlt)}">` : ''}<p>${e(portfolio.about)}</p><p class="muted">${e(portfolio.approach)}</p><div class="tags">${tags(portfolio.skills)}</div></div></section>
 <section class="section"><div class="section-heading"><div><p class="eyebrow">02 / SELECTED WORK</p><h2>From the workbench.</h2></div><a class="text-link" href="#portfolio">All projects ↗</a></div><div class="project-grid">${portfolio.projects.slice(0, 2).map(card).join('')}</div></section>
 <section class="contact-strip"><div><p class="eyebrow">LET’S CONNECT</p><h2>Have something in mind?</h2></div>${portfolio.email ? `<a class="button primary" href="mailto:${e(portfolio.email)}">Get in touch ↗</a>` : '<a class="button primary" href="#resume">Explore my experience ↗</a>'}</section>`;
}
function work() {
 return `<section class="page-heading"><p class="eyebrow">THE PORTFOLIO</p><h1>Work, in detail.</h1><p class="intro">A closer look at the problems, process, and prototypes behind each project.</p></section><section class="work-section"><div class="filters" role="group" aria-label="Filter projects">${['All', ...new Set(portfolio.projects.map(p => p.category))].map((c, i) => `<button class="filter ${i === 0 ? 'active' : ''}" aria-pressed="${i === 0}" data-filter="${e(c)}">${e(c)}</button>`).join('')}</div><div class="project-grid" id="project-list">${portfolio.projects.map(card).join('')}</div></section>`;
}
function project(p) {
 const i = portfolio.projects.indexOf(p);
 return `<section class="page-heading"><a class="text-link" href="#portfolio">← All projects</a><p class="eyebrow project-eyebrow">${e(p.category)} / ${e(p.year)}</p><h1>${e(p.title)}</h1><p class="intro">${e(p.summary)}</p><div class="tags">${tags(p.tools)}</div></section><div class="detail-cover">${projectImage(p,i)}</div><section class="project-body section"><aside><p class="eyebrow">MY ROLE</p><p>${e(p.role)}</p><p class="eyebrow">TIMELINE</p><p>${e(p.timeline)}</p>${p.link ? `<a class="text-link" href="${safeURL(p.link)}" target="_blank" rel="noopener noreferrer">${e(p.linkLabel)} ↗</a>` : ''}</aside><div>${[['01','The challenge',p.challenge],['02','The process',p.process],['03','The outcome',p.outcome]].map(([n,t,c])=>`<article class="story"><p class="eyebrow">${n}</p><h2>${t}</h2><p>${e(c)}</p></article>`).join('')}</div></section><section class="gallery">${(p.gallery || []).map(g=>`<figure><img src="${safeURL(g.src)}" alt="${e(g.alt)}" loading="lazy"><figcaption>${e(g.caption)}</figcaption></figure>`).join('')}</section><a class="text-link end-link" href="#portfolio">← Back to all projects</a>`;
}
function resume() {
 const r=portfolio.resume;
 const entries = (items) => items.map(x=>`<article class="resume-entry"><div><h3>${e(x.title)}</h3><p>${e(x.organization)}</p></div><span class="dates">${e(x.dates)}</span><ul>${x.bullets.map(b=>`<li>${e(b)}</li>`).join('')}</ul></article>`).join('');
 return `<section class="page-heading"><p class="eyebrow">EXPERIENCE & BACKGROUND</p><h1>Resume.</h1><p class="intro">${e(r.summary)}</p>${r.pdf ? `<a class="button primary" href="${safeURL(r.pdf)}" target="_blank" rel="noopener" download>Download resume PDF ↓</a>` : ''}</section><section class="resume-layout"><aside><h2>${e(portfolio.name)}</h2><p class="muted">${e(portfolio.title)}</p>${r.credentials?.length ? `<p class="eyebrow">CREDENTIALS</p><div class="tags">${tags(r.credentials)}</div>` : ''}<p class="eyebrow">SKILLS</p><div class="tags">${tags(portfolio.skills)}</div>${portfolio.email ? `<p><a class="text-link" href="mailto:${e(portfolio.email)}">${e(portfolio.email)}</a></p>` : ''}</aside><div><section class="resume-section"><h2>Experience</h2>${entries(r.experience)}</section><section class="resume-section"><h2>Education</h2>${entries(r.education)}</section>${r.leadership?.length ? `<section class="resume-section"><h2>Leadership & Community</h2>${entries(r.leadership)}</section>` : ''}</div></section>`;
}
function render() {
 const route=location.hash.slice(1) || 'home';
 let view='home'; let html;
 if(route==='portfolio') {view='portfolio'; html=work();}
 else if(route==='resume') {view='resume'; html=resume();}
 else if(route.startsWith('project/')) {
   const p=portfolio.projects.find(x=>`project/${encodeURIComponent(x.id)}`===route);
   view='portfolio'; html=p ? project(p) : '<section class="page-heading"><h1>Project not found.</h1><a href="#portfolio">Return to portfolio →</a></section>';
 } else html=home();
 $('#main').innerHTML=html;
 document.querySelectorAll('[data-page]').forEach(a=> {if(a.dataset.page===view) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');});
 document.title=`${portfolio.name} | ${view==='home'?'Engineering Portfolio':view.charAt(0).toUpperCase()+view.slice(1)}`;
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
   document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});
   $('#project-list').innerHTML=portfolio.projects.map((p,i)=>({p,i})).filter(({p})=>b.dataset.filter==='All'||p.category===b.dataset.filter).map(({p,i})=>card(p,i)).join('');
 }));
 window.scrollTo(0,0);
}
$('#initials').textContent=portfolio.initials;
$('#brand-name').textContent=portfolio.name;
$('#footer-name').textContent=portfolio.name;
$('#year').textContent=new Date().getFullYear();
$('#social-links').innerHTML=[['Email',portfolio.email ? `mailto:${portfolio.email}`:''],['LinkedIn',portfolio.linkedin],['GitHub',portfolio.github]].filter(([,url])=>url).map(([label,url])=>`<a href="${safeURL(url)}">${label} ↗</a>`).join('');
window.addEventListener('hashchange',()=>{render();$('#main').focus({preventScroll:true});});
render();
