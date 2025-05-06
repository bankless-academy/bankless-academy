const PARAGRAPH_API_COOKIE = process.env.PARAGRAPH_API_COOKIE

const BLOG_ID = 'FvVJL73FnDhX7bNWY20g'

export const addToNewsletter = async (email: string): Promise<{
  type: string
  msg: string
  code: string
}> => {
  const response = await fetch('https://api.paragraph.com/blogs/@banklessacademy/subscribe', {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'content-type': 'application/json',
      'origin': 'https://paragraph.com',
      'priority': 'u=1, i',
      'referer': 'https://paragraph.com/',
      'sec-gpc': '1',
    },
    body: JSON.stringify({
      email: email,
      skipWelcomeEmail: false
    }),
  })
  let data = await response.json()
  // Already subscribed
  // {"type":"info","msg":"Already subscribed!","code":"ALREADY_SUBSCRIBED"}

  // Subscribed
  // replace with { msg: 'OK' }
  if (data?.sub?.blogId === BLOG_ID) {
    data = { msg: 'OK' }
  }

  // invalid email
  // {"msg":"Please enter a valid email."}

  return data
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
  return text?.includes(`"blogId":"${BLOG_ID}"`)
}
