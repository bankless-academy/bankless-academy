const fs=require('fs')
const ed=(p,pairs)=>{let s=fs.readFileSync(p,'utf8')
  for(const [a,b] of pairs){ if(!s.includes(a)) throw new Error(`${p}: no match for ${JSON.stringify(a.slice(0,60))}`); s=s.split(a).join(b) }
  fs.writeFileSync(p,s)}
const addImport=(p)=>{let s=fs.readFileSync(p,'utf8')
  if(/from 'react-i18next'|from 'i18next'/.test(s)) return
  const ms=[...s.matchAll(/^import [\s\S]*?from '[^']+'\n/gm)]
  const last=ms[ms.length-1]
  s=s.slice(0,last.index+last[0].length)+"import { t } from 'i18next'\n"+s.slice(last.index+last[0].length)
  fs.writeFileSync(p,s)}

// --- pages/_app.tsx
addImport('src/pages/_app.tsx')
ed('src/pages/_app.tsx',[
  ['<Sentry.ErrorBoundary>Maintenance in progress ...</Sentry.ErrorBoundary>',
   "<Sentry.ErrorBoundary>{t('Maintenance in progress ...')}</Sentry.ErrorBoundary>"],
  ['<div>Maintenance in progress ...</div>', "<div>{t('Maintenance in progress ...')}</div>"],
  ['                            Loading Explorer Profile\n', "                            {t('Loading Explorer Profile')}\n"],
  ['                  No wallet? 👉 Get Zerion wallet here\n', "                  {t('No wallet? 👉 Get Zerion wallet here')}\n"],
])

// --- pages/maintenance.tsx
addImport('src/pages/maintenance.tsx')
ed('src/pages/maintenance.tsx',[
  ['return <>Maintenance in progress ...</>', "return <>{t('Maintenance in progress ...')}</>"],
])

// --- pages/confirmation.tsx
addImport('src/pages/confirmation.tsx')
ed('src/pages/confirmation.tsx',[
  ['                Close Window\n', "                {t('Close Window')}\n"],
])

// --- pages/explore.tsx  (page body only; the <head> metadata stays English)
addImport('src/pages/explore.tsx')
ed('src/pages/explore.tsx',[
  ['            Explore Apps\n', "            {t('Explore Apps')}\n"],
  ['          The best apps for your crypto journey — all in one place.\n',
   "          {t('The best apps for your crypto journey — all in one place.')}\n"],
])

// --- pages/explorer/my-profile.tsx
addImport('src/pages/explorer/my-profile.tsx')
ed('src/pages/explorer/my-profile.tsx',[
  ['          Loading Explorer Profile\n', "          {t('Loading Explorer Profile')}\n"],
  ['            Explorer Profile\n', "            {t('Explorer Profile')}\n"],
])

// --- pages/mini-apps.tsx
ed('src/pages/mini-apps.tsx',[
  ['<Title>Mini Apps</Title>', "<Title>{t('Mini Apps')}</Title>"],
  ['                      Ethereum Showcase\n', "                      {t('Ethereum Showcase')}\n"],
  ['<Heading size="md">Custom URL</Heading>', `<Heading size="md">{t('Custom URL')}</Heading>`],
])

// --- components/MiniAppsList.tsx / MiniLessonsList.tsx / MiniApp.tsx
addImport('src/components/MiniAppsList.tsx')
ed('src/components/MiniAppsList.tsx',[
  ['<LoadingContainer>Loading mini apps...</LoadingContainer>',
   "<LoadingContainer>{t('Loading mini apps...')}</LoadingContainer>"],
])
addImport('src/components/MiniLessonsList.tsx')
ed('src/components/MiniLessonsList.tsx',[
  ['<LoadingContainer>Loading lessons...</LoadingContainer>',
   "<LoadingContainer>{t('Loading lessons...')}</LoadingContainer>"],
])
addImport('src/components/MiniApp.tsx')
ed('src/components/MiniApp.tsx',[
  ['<Text>Please connect your wallet first</Text>',
   "<Text>{t('Please connect your wallet first')}</Text>"],
])

// --- components/LessonContent.tsx
addImport('src/components/LessonContent.tsx')
ed('src/components/LessonContent.tsx',[
  ['<Box fontSize="2xl">Lesson Content:</Box>',
   `<Box fontSize="2xl">{t('Lesson Content:')}</Box>`],
])

// --- components/Reward.tsx
addImport('src/components/Reward.tsx')
ed('src/components/Reward.tsx',[
  ['                        Learn more\n', "                        {t('Learn more')}\n"],
])

// --- components/Badge.tsx
ed('src/components/Badge.tsx',[
  ['                  Share & Refer\n', "                  {t('Share & Refer')}\n"],
])

// --- components/ShareModal.tsx
ed('src/components/ShareModal.tsx',[
  ['                  Connect your wallet and earn referral rewards!\n',
   "                  {t('Connect your wallet and earn referral rewards!')}\n"],
])

// --- components/OnrampButton.tsx
ed('src/components/OnrampButton.tsx',[
  ["'Please sign the message in your wallet...'", "t('Please sign the message in your wallet...')"],
  ["'Loading Coinbase Onramp...'", "t('Loading Coinbase Onramp...')"],
  ["'Error loading Coinbase Onramp. Please try again.'",
   "t('Error loading Coinbase Onramp. Please try again.')"],
])

// --- components/MintDatadiskModal.tsx
ed('src/components/MintDatadiskModal.tsx',[
  ['<>Click Mint again after switching network.</>',
   "<>{t('Click Mint again after switching network.')}</>"],
  ['description: <>Click Mint again.</>,',
   "description: <>{t('Click Mint again.')}</>,"],
])
console.log('ok')
