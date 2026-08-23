// The app-wide emotion Global block (fonts, toast/menu/popover styling, RTL
// fixes). Extracted from _app.tsx so the hybrid lesson pages — which take the
// nolayout branch and mount the interactive app as a client-side island — get
// the exact same styles as the default app tree. Edit HERE, never fork.
import { Global, css } from '@emotion/react'

const AppGlobalStyles = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: 'ClearSans';
        src: url(/fonts/clear-sans/TTF/ClearSans-Bold.ttf);
      }
      /* Telegram Mini App theme variables */
      :root {
        --tg-theme-bg-color: #000000;
        --tg-theme-text-color: #ffffff;
        --tg-theme-hint-color: #999999;
        --tg-theme-link-color: #b85ff1;
        --tg-theme-button-color: #b85ff1;
        --tg-theme-button-text-color: #ffffff;
        --tg-theme-secondary-bg-color: #1a1a1a;
      }
      /* Apply Telegram theme to body */
      body {
        background-color: var(--tg-theme-bg-color) !important;
        color: var(--tg-theme-text-color) !important;
      }
      /* Disable focus border in Chakra-UI */
      *:focus {
        box-shadow: none !important;
      }
      /* custom scrollbar color & width */
      .ms-track .ms-thumb {
        background: #916ab8;
      }
      .ms-track.ms-y .ms-thumb {
        width: 7px;
      }
      /* HACK: custom toast */
      .css-qret8q,
      .css-zqqgfp,
      .css-mu48c4 {
        color: white !important;
        border-radius: 15px !important;
        a {
          color: white !important;
          text-decoration: underline;
          text-underline-position: under;
        }
      }
      /* success toast */
      .css-qret8q {
        background: linear-gradient(180deg, #429683, #35564f) !important;
        border: 2px solid #a4d7cb !important;
      }
      /* warning toast */
      .css-zqqgfp {
        background: linear-gradient(180deg, #e7b283, #8e5c49) !important;
        border: 2px solid #ffe0bb !important;
      }
      /* error toast */
      .css-mu48c4 {
        background: linear-gradient(180deg, #fe7a7a, #e05e55) !important;
        border: 2px solid #f5a98d !important;
      }
      /* hide toast status logo */
      .css-14ogjxt {
        display: none !important;
      }
      /* toast content max width for mobile */
      .chakra-toast > div > div > div > div > div > div > div {
        max-width: calc(100vw - 108px);
      }
      @media (max-width: 480px) {
        .chakra-toast {
          margin-bottom: 80px !important;
        }
      }
      /* menu + popover styling */
      .chakra-menu__menu-list,
      .chakra-popover__content {
        background: linear-gradient(
          rgba(163, 121, 189, 0.8) 0%,
          rgba(90, 81, 152, 0.8) 100%
        ) !important;
        backdrop-filter: blur(10px);
        border: 1px solid #b68bcc !important;
      }
      .chakra-menu__menuitem {
        background: transparent !important;
      }
      .css-1slra81 {
        background-color: var(--chakra-colors-blackAlpha-500) !important;
      }
      .css-1lh2krs:focus,
      .css-18esm8n:focus {
        background-color: var(--chakra-colors-blackAlpha-300) !important;
      }
      .chakra-popover__arrow {
        background: #86629c !important;
        box-shadow: none !important;
      }
      .chakra-popover__popper[data-popper-placement='right']
        .chakra-popover__arrow {
        background: #705992 !important;
      }
      .chakra-popover__popper[data-popper-placement='top-end']
        .chakra-popover__arrow {
        background: #514984 !important;
      }
      .chakra-popover__popper[data-popper-placement='top']
        .chakra-popover__arrow {
        background: #514984 !important;
      }
      #chakra-toast-manager-top-left {
        top: 20% !important;
        left: 2vh !important;
        max-width: 30vh !important;
      }
      /* The toast hangs on the reading-start side, which is
         the right edge under RTL. */
      [dir='rtl'] #chakra-toast-manager-top-left {
        left: auto !important;
        right: 2vh !important;
      }
      /* Directional glyphs (prev/next arrows) opt in via
         this class; symmetric icons never need it. */
      [dir='rtl'] .mirror-rtl {
        transform: scaleX(-1);
      }
      /* Chakra zeroes input-group join corners against the
         THEME direction (permanently LTR here), so under RTL
         the flat edges face outward. These logical-property
         overrides are browser-resolved and identical to
         Chakra's own output in LTR. An addon always joins
         the input on its inline side: left-addon on its end,
         right-addon on its start. */
      .chakra-input__left-addon {
        border-start-start-radius: var(--chakra-radii-md) !important;
        border-end-start-radius: var(--chakra-radii-md) !important;
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
      }
      .chakra-input__right-addon {
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: var(--chakra-radii-md) !important;
        border-end-end-radius: var(--chakra-radii-md) !important;
      }
      .chakra-input__group > .chakra-input__left-addon + .chakra-input {
        border-start-start-radius: 0 !important;
        border-end-start-radius: 0 !important;
        border-start-end-radius: var(--chakra-radii-md) !important;
        border-end-end-radius: var(--chakra-radii-md) !important;
      }
      .chakra-input__group > .chakra-input:has(+ .chakra-input__right-addon) {
        border-start-end-radius: 0 !important;
        border-end-end-radius: 0 !important;
        border-start-start-radius: var(--chakra-radii-md) !important;
        border-end-start-radius: var(--chakra-radii-md) !important;
      }
      // HACK: mobile lesson button hover disabled
      .css-fhy18r:hover:disabled,
      .css-fhy18r[data-hover]:disabled,
      .css-fhy18r:hover[disabled],
      .css-fhy18r[data-hover][disabled],
      .css-fhy18r:hover[aria-disabled='true'],
      .css-fhy18r[data-hover][aria-disabled='true'],
      .css-fhy18r:hover[data-disabled],
      .css-fhy18r[data-hover][data-disabled] {
        background: linear-gradient(
          135.91deg,
          #b06fd8 29.97%,
          #597aee 99.26%
        ) !important;
      }
      @keyframes pulse {
        0% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.5;
        }
      }
      .css-fb-button {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-self: center;
        background-color: #1877f2;
        color: #fff;
        font-weight: 600;
        font-size: 0.9rem;
        border: none;
        border-radius: 6px;
        padding: 0 8px 0 48px;
        cursor: pointer;
        transition: background 0.2s;
        height: 40px;
        min-width: 200px;
        box-shadow: none;
        outline: none;
        position: relative;
        line-height: 1;
        white-space: nowrap;
      }
      .css-fb-button:hover {
        background-color: #166fe5;
      }
      .css-fb-button::before {
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-image: url('/images/stamp/Facebook_Logo_Secondary.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 28px 28px;
      }
    `}
  />
)

export default AppGlobalStyles
