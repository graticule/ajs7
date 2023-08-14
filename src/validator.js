export default class Validator {
  static validateUsername(username) {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры(0 - 9);
    // Имя не должно содержать подряд более трёх цифр, а также
    // начинаться и заканчиваться цифрами, символами подчёркивания или тире.
    if (username.match(/\d{3,}/)) {
      return false;
    }
    if (username.toLowerCase().match(/^[a-z]([-a-z_\d]*[a-z])?$/)) {
      return true;
    }
    return false;
  }
}
