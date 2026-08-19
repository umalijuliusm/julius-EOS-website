const menuToggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
const navLinks=[...document.querySelectorAll('.nav-links a')];
function closeMenu(){menu?.classList.remove('open');document.body.classList.remove('menu-open');menuToggle?.setAttribute('aria-expanded','false');menuToggle?.setAttribute('aria-label','Open navigation')}
menuToggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');document.body.classList.toggle('menu-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.forEach(a=>a.addEventListener('click',closeMenu));
const sections=[...document.querySelectorAll('main section[id]')];
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>navObserver.observe(section));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
