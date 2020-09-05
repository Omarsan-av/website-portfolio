let dropDowns = Array.from(document.querySelectorAll('.link'));

const handleClick = (e) => 
{
   e.preventDefault();
   dropDowns.forEach(node => 
   {
      node.classList.remove('link--active');
   });
   
   e.currentTarget.classList.add('link--active');
}

dropDowns.forEach(node => 
{
   node.addEventListener('click', handleClick)
});