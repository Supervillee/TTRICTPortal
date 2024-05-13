const scriptURL = 'https://script.google.com/macros/s/AKfycbzwxzT_RarmaHwpt_EbRWbgC3r98BF8_mQ92HkzVkXPtcfw1xLlRZnK44KIi-S7eDHZxQ/exec'

const form = document.forms['incid_rep']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your report was submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})