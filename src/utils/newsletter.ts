const PARAGRAPH_API_COOKIE = process.env.PARAGRAPH_API_COOKIE

export const addToNewsletter = async (email: string): Promise<boolean> => {
  const response = await fetch('https://paragraph.com/subscribers', {
    method: 'POST',
    headers: {
      'accept': 'text/x-component',
      'content-type': 'text/plain;charset=UTF-8',
      'next-action': '40629fc8039cd04ad5e0c7de91a357fef7b0e606f3',
      'priority': 'u=1, i',
      'cookie': `subscribeModalShown-%40banklessacademy=true; ${PARAGRAPH_API_COOKIE}`,
    },
    body: JSON.stringify([email]),
  })
  const text = await response.text()
  return text?.includes(`"email":"${email}"`)
}

export const getNewsletterSubscribers = async (): Promise<boolean> => {
  const response = await fetch('https://paragraph.com/subscribers', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'priority': 'u=1, i',
      'rsc': '1',
      'cookie': `${PARAGRAPH_API_COOKIE}`,
    },
  })
  const text = await response.text()
  return text?.includes(`"blogId":"FvVJL73FnDhX7bNWY20g"`)
}
