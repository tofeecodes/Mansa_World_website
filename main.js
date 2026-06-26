// CURSOR
const cursor=document.getElementById('cursor'),trail=document.getElementById('cursorTrail');
let tx=0,ty=0,mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
(function at(){tx+=(mx-tx)*.12;ty+=(my-ty)*.12;trail.style.left=tx+'px';trail.style.top=ty+'px';requestAnimationFrame(at);})();

// SCROLL REVEAL
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('visible'),i*70);});},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// HAMBURGER MENU
const ham=document.getElementById('hamburger');
if(ham){
  const navList=document.querySelector('.nav-links');
  ham.addEventListener('click',()=>{ham.classList.toggle('open');navList.classList.toggle('open');});
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{ham.classList.remove('open');navList.classList.remove('open');}));
}

// SPONSOR MODAL
function openSponsorModal(el) {
  document.getElementById('modalName').textContent = el.dataset.name || '';
  document.getElementById('modalDesc').textContent = el.dataset.desc || '';
  const link = document.getElementById('modalLink');
  if (el.dataset.link) {
    link.href = el.dataset.link;
    link.style.display = 'inline-block';
  } else {
    link.style.display = 'none';
  }
  const img = el.querySelector('img');
  const logoDiv = document.getElementById('modalLogo');
  logoDiv.innerHTML = img ? `<img src="${img.src}" alt="${img.alt}" />` : '';
  document.getElementById('sponsorModal').classList.add('active');
}

function closeSponsorModal(e) {
  if (!e || e.target === document.getElementById('sponsorModal')) {
    document.getElementById('sponsorModal').classList.remove('active');
  }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSponsorModal(); });