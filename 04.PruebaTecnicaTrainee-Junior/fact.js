const URL_CAT_FACT = 'https://catfact.ninja/fact'

export const fetchRandomFact = async () => {
  const response = await fetch(URL_CAT_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}
