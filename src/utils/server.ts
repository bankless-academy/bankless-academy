// export const revalidate = 3600 // revalidate the data at most every hour

export const fetchBE = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch (error) {
    return text
  }
}
