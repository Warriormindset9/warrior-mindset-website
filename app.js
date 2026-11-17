const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}));
const field=document.querySelector('#intention');const status=document.querySelector('#save-status');
try{field.value=localStorage.getItem('warrior-intention')||'';}catch{status.textContent='Browser storage unavailable. You can still write your intention here.';}
document.querySelector('#intention-form').addEventListener('submit',event=>{event.preventDefault();if(!field.value.trim()){field.setCustomValidity('Write an intention before saving.');field.reportValidity();return;}try{localStorage.setItem('warrior-intention',field.value.trim());status.textContent='Intention saved in this browser. Make your next step count.';}catch{status.textContent='Your browser could not save this. Copy your intention to keep it.';}});
field.addEventListener('input',()=>field.setCustomValidity(''));
