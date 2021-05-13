const validate = () => {
  const form = document.querySelector('form')
  const emailEl = document.getElementById('email')
  const commentEl = document.getElementById('comment')
  const emailError = document.getElementById('email-error')
  const commentError = document.getElementById('comment-error')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let isEmailValid = checkEmail(),
      isCommentValid = checkComment()

    let isFormValid = isEmailValid & isCommentValid

    if (isFormValid) alert('Success')
  })

  const isRequired = (value) => (value === '' ? false : true)
  const isEmailValid = (email) => {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEx.test(email)
  }

  const showError = (input) => {
    const textField = input
    textField.classList.remove('success')
    textField.classList.add('error')
  }

  const showSuccess = (input) => {
    const textField = input
    textField.classList.remove('error')
    textField.classList.add('success')
  }

  // Check email
  const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim()
    if (!isRequired(email)) {
      showError(emailEl)
      emailError.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter your email
      `
    } else if (!isEmailValid(email)) {
      showError(emailEl)
      emailError.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please enter a valid email
      `
    } else {
      showSuccess(emailEl)
      emailError.innerHTML = ''
      valid = true
    }
    return valid
  }

  const checkComment = () => {
    let valid = false
    const comment = commentEl.value.trim()
    if (!isRequired(comment)) {
      showError(commentEl)
      commentError.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Please write a comment
      `
    } else {
      showSuccess(commentEl)
      commentError.innerHTML = ''
      valid = true
    }
    return valid
  }
}

export default validate
