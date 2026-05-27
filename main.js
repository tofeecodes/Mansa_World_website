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
