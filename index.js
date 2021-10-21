window.onload = async () => {
  const root = document.getElementById('root')
  const response = await fetch('/example.json')
  const body = await response.text()
  root.textContent = body
};
