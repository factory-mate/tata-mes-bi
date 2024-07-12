export const getRandomValue = (max: number = 100, min: number = 0) =>
  Math.floor(Math.random() * (max - min) + min)

export const getRandomValues = (count: number = 10, max: number = 100, min: number = 0) =>
  Array.from({ length: count }, () => getRandomValue(max - min) + min)
