// export const revalidate = 3600 // revalidate the data at most every hour

export const fetchBE = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
