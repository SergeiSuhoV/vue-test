// из за отсутствия реальной БД, генерируем простой ид самостоятельно
// вероятность коллизии средне
export const getPseudoId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`

// Очистка свойств реактивности у объекта
export const getClearObject = data => JSON.parse(JSON.stringify(data))

export const getStorageData = storedName => {
  const stringToObject = JSON.parse(window.localStorage.getItem(storedName))
  return stringToObject
}

export const setStorageData = (storedName, data) => {
  const objectToSting = JSON.stringify(data)
  console.log(objectToSting)
  window.localStorage.setItem(storedName, objectToSting)
}

export const clearStorageData = (storedName) =>
  window.localStorage.setItem(storedName, '')
