// The privacy policy text, kept in git rather than Notion so that it always
// server-renders. The Notion route renders inside <Web3Providers> (ssr: false),
// so its served HTML is an empty shell to anything that does not run
// JavaScript. A legal document that external reviewers have to be able to
// fetch cannot depend on that, or on the Notion API being up.
//
// One HTML string, rendered twice by src/pages/privacy-policy.tsx: the
// crawlable copy via pageMeta.seoHtml, and the in-app copy. They cannot drift.
export const PRIVACY_POLICY_LAST_UPDATED = 'October 2026'

export const PRIVACY_POLICY_HTML = `
<h2>Information that is gathered from visitors</h2>
<p>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.</p>
<p>Browser local storage is used to remember visitor preferences when interacting with the website.</p>
<p>Where registration is required, the visitor's email and wallet address will be stored on the server.</p>

<h2>How the Information is used</h2>
<p>The information is used to enhance the visitor's experience when using the website to display personalized content.</p>
<p>E-mail addresses will not be sold, rented or leased to 3rd parties.</p>
<p>E-mail may be sent to inform you of news of our services or offers by us or our affiliates.</p>

<h2>Third-party sign-in</h2>
<p>You can optionally connect a third-party account (such as Facebook, Google, X, LinkedIn, Discord or Farcaster) to verify that you are a real person. We request only the minimum permission each provider offers for this, and we store only the account identifier returned by that provider. We do not request your contact list, and we never post on your behalf. Disconnecting an account removes that identifier from your profile.</p>

<h2>Data Deletion Requests</h2>
<p>Users have the right to request the deletion of their personal data stored on our servers. To request that your data be deleted, please contact us at <a href="mailto:contact@banklessacademy.com">contact@banklessacademy.com</a> with the subject line "Data Deletion Request". Include the email address and any other identifying information associated with your account or data. We will process your request and delete your data within a reasonable timeframe, in compliance with applicable laws.</p>

<h2>Links to Other Websites</h2>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>

<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, You can contact us: <a href="mailto:contact@banklessacademy.com">contact@banklessacademy.com</a></p>

<p><em>Last updated: ${PRIVACY_POLICY_LAST_UPDATED}</em></p>
`
