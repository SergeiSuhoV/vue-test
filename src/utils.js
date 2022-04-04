// из за отсутствия реальной БД, генерируем простой ид самостоятельно
// вероятность коллизии средне
export const getPseudoId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`
// Проверка объекта на пустоту
export const isEmpty = x => Object.keys(x).length

// Очистка свойств реактивности у объекта
export const getClearObject = data => JSON.parse(JSON.stringify(data))

export const getStorageData = storedName => {
  if (window.localStorage.getItem(storedName) == true) {
    const stringToObject = JSON.parse(window.localStorage.getItem(storedName))
    return stringToObject
  } else {
    return undefined;
  }
}

export const setStorageData = (storedName, data) => {
  console.log(this)
  const objectToSting = JSON.stringify(data)
  window.localStorage.setItem(storedName, objectToSting)
}

export const clearStorageData = (storedName) =>
  window.localStorage.setItem(storedName, '')