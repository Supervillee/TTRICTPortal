const scriptURL = 'https://script.google.com/macros/s/AKfycbx9fRvsEXGLJqNkc0VnGLa3O-dqmVLuAUnYCnpcyQ6Yij19mzbsv8S_LxslRnVgBsV0fQ/exec'

const form = document.forms['tech_registry']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your update was submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})