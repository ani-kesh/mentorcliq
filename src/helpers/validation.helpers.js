export function isValidEmail(email) {
  const emailCheckReg =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailCheckReg.test(email)) return true;
  return false;
}

export function isValidPassword(password) {
  // Minimum eight characters, at least one letter and one number:
  const passwordCheckReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (passwordCheckReg.test(password)) return true;
  return false;
}


export function isEmptyString(value) {
  if (value.replace(/\s/g, "") === "") return false;
  return true;
}