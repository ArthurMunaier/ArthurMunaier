const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = '/a.webp';
  a.download = 'a.webp'; 
  a.click();
});

