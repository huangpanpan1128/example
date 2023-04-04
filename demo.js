// 脚本
const changeColorBtn = document.getElementById('change-color-btn');
changeColorBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'pink';
  } else {
    body.style.backgroundColor = 'white';
  }
});
