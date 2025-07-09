const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const resultP = document.getElementById('result');

generateBtn.addEventListener('click', async () => {
  const length = document.getElementById('length').value;
  const res = await fetch(`/api/generate-password?length=${length}`);
  const data = await res.json();
  resultP.textContent = data.random_password || 'Failed to get password.';
});

copyBtn.addEventListener('click', () => {
  const password = resultP.textContent;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  }
});
