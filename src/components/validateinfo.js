export default function validateinfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Korisničko ime je obavezno';
    }
    if (!values.email) {
      errors.email = 'Email je obavezna';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Neispravna email adresa';
    }
    if (!values.password) {
      errors.password = 'Šifra je obavezna';
    } else if (values.password.length < 6) {
      errors.password = 'Šifra mora da sadrži najmanje 6 karaktera';
    }
  
    if (!values.password2) {
      errors.password2 = 'Potvrdi šifru';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Šifra nije istas';
    }
    return errors;
  }