import {
  PiVaultFill,
  PiChartLineUpFill,
  PiCodeFill,
  PiUserGearFill,
  PiShieldStarFill,
  PiChartPieFill,
  PiMegaphoneFill,
  PiChartBarFill,
  PiSmileyWinkFill,
  PiGraduationCapFill,
  PiNewspaperFill,
} from 'react-icons/pi'
import { BsIncognito } from 'react-icons/bs'
import { TbMoodBitcoin, TbContract } from 'react-icons/tb'
import { GiSpermWhale, GiWoodFrame, GiParachute } from 'react-icons/gi'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { FaVoteYea } from 'react-icons/fa'
import { ImEvil } from 'react-icons/im'

// React-icons implementation of archetype visuals
export const archetypeVisuals: Record<string, JSX.Element> = {
  hodler: <PiVaultFill size={40} color="#63b3ed" />,
  degenerate: <ImEvil size={40} color="#fc8181" />,
  whale: <GiSpermWhale size={40} color="#9ae6b4" />,
  pumpDumper: <PiChartLineUpFill size={40} color="#fbd38d" />,
  maximalist: <TbMoodBitcoin size={40} color="#fbb6ce" />,
  protocolDev: <PiCodeFill size={40} color="#a3bffa" />,
  smartContractWizard: <TbContract size={40} color="#c3dafe" />,
  founder: <PiUserGearFill size={40} color="#cbd5e0" />,
  whiteHat: <PiShieldStarFill size={40} color="#e2e8f0" />,
  tokenomicsArchitect: <PiChartPieFill size={40} color="#d6bcfa" />,
  nftCollector: <GiWoodFrame size={40} color="#81e6d9" />,
  daoVoter: <FaVoteYea size={40} color="#faf089" />,
  airdropFarmer: <GiParachute size={40} color="#9ae6b4" />,
  stakingEnthusiast: <FaHandHoldingDollar size={40} color="#fed7d7" />,
  privacyAdvocate: <BsIncognito size={40} color="#d6bcfa" />,
  ctInfluencer: <PiMegaphoneFill size={40} color="#63b3ed" />,
  onChainAnalyst: <PiChartBarFill size={40} color="#4fd1c5" />,
  memeLord: <PiSmileyWinkFill size={40} color="#fbd38d" />,
  educator: <PiGraduationCapFill size={40} color="#81e6d9" />,
  journalist: <PiNewspaperFill size={40} color="#b794f4" />,
}

// Visual representations for each archetype using SVG
export const archetypeVisualsSVG: Record<string, JSX.Element> = {
  hodler: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="hodlerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63b3ed" />
          <stop offset="100%" stopColor="#90cdf4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#hodlerGradient)" />
      <rect
        x="35"
        y="30"
        width="30"
        height="45"
        rx="4"
        fill="#2c5282"
        stroke="#1a365d"
        strokeWidth="1"
      />
      <rect
        x="42"
        y="23"
        width="16"
        height="8"
        rx="2"
        fill="#2c5282"
        stroke="#1a365d"
        strokeWidth="1"
      />
      <path
        d="M43 40 H57 M43 50 H57 M43 60 H57"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M30 70 Q50 85 70 70"
        stroke="#2c5282"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="50" cy="50" r="5" fill="#ebf8ff" opacity="0.5" />
    </svg>
  ),
  degenerate: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="degenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fc8181" />
          <stop offset="100%" stopColor="#feb2b2" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#degenGradient)" />
      <path
        d="M30 70 L50 30 L70 70 Z"
        fill="#742a2a"
        stroke="#631818"
        strokeWidth="1"
      />
      <text
        x="50"
        y="60"
        fontSize="30"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        !
      </text>
      <path d="M25 25 L35 35 M65 25 L75 35" stroke="#742a2a" strokeWidth="3" />
      <path
        d="M25 80 L35 75 L50 80 L65 75 L75 80"
        stroke="#742a2a"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="30" cy="45" r="3" fill="#fed7d7" />
      <circle cx="70" cy="45" r="3" fill="#fed7d7" />
    </svg>
  ),
  whale: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ae6b4" />
          <stop offset="100%" stopColor="#c6f6d5" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#whaleGradient)" />
      <path
        d="M20 50 Q30 35 45 45 L55 45 Q70 35 80 50 Q70 65 55 55 L45 55 Q30 65 20 50 Z"
        fill="#276749"
        stroke="#22543d"
        strokeWidth="1"
      />
      <circle cx="35" cy="45" r="3" fill="white" />
      <path
        d="M70 45 Q75 55 65 55"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path d="M75 40 L80 35" stroke="#276749" strokeWidth="2" />
      <ellipse cx="50" cy="70" rx="15" ry="5" fill="#9ae6b4" opacity="0.5" />
    </svg>
  ),
  pumpDumper: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="pumpDumpGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#fbd38d" />
          <stop offset="100%" stopColor="#feebc8" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#pumpDumpGradient)" />
      <path
        d="M20 60 L30 50 L40 70 L50 30 L60 50 L70 40 L80 60"
        stroke="#744210"
        strokeWidth="4"
        fill="none"
      />
      <path d="M40 40 L35 30 L45 30 Z" fill="#744210" />
      <path d="M60 70 L55 80 L65 80 Z" fill="#744210" />
      <circle cx="30" cy="50" r="3" fill="#744210" />
      <circle cx="50" cy="30" r="3" fill="#744210" />
      <circle cx="70" cy="40" r="3" fill="#744210" />
    </svg>
  ),
  maximalist: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="maxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbb6ce" />
          <stop offset="100%" stopColor="#fed7e2" />
        </linearGradient>
        <radialGradient
          id="maxCore"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#97266d" />
          <stop offset="100%" stopColor="#702459" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#maxGradient)" />
      <circle cx="50" cy="50" r="20" fill="url(#maxCore)" />
      <path
        d="M50 20 L50 30 M50 70 L50 80 M20 50 L30 50 M70 50 L80 50"
        stroke="#702459"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M35 35 L42 42 M65 35 L58 42 M35 65 L42 58 M65 65 L58 58"
        stroke="#702459"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="5" fill="#fbb6ce" opacity="0.6" />
    </svg>
  ),
  protocolDev: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3bffa" />
          <stop offset="100%" stopColor="#c3dafe" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#devGradient)" />
      <path
        d="M30 30 L70 30 L70 70 L30 70 Z"
        stroke="#3c366b"
        strokeWidth="3"
        fill="#4c51bf"
        fillOpacity="0.2"
      />
      <text
        x="50"
        y="55"
        fontSize="24"
        fontWeight="bold"
        fill="#3c366b"
        textAnchor="middle"
      >{`< />`}</text>
      <path
        d="M25 40 L35 40 M25 50 L35 50 M25 60 L35 60"
        stroke="#3c366b"
        strokeWidth="2"
        strokeDasharray="2,2"
      />
    </svg>
  ),
  smartContractWizard: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="wizardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c3dafe" />
          <stop offset="100%" stopColor="#ebf4ff" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#wizardGradient)" />
      <path
        d="M50 20 L65 50 L50 80 L35 50 Z"
        fill="#4c51bf"
        filter="url(#glow)"
      />
      <circle cx="50" cy="50" r="10" fill="white" />
      <path
        d="M30 30 Q40 40 30 50 Q40 60 30 70"
        stroke="#4c51bf"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M70 30 Q60 40 70 50 Q60 60 70 70"
        stroke="#4c51bf"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="50" r="5" fill="#4c51bf" />
    </svg>
  ),
  founder: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="founderGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#cbd5e0" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#founderGradient)" />
      <circle cx="50" cy="35" r="15" fill="#2d3748" />
      <path
        d="M30 85 Q50 65 70 85"
        stroke="#2d3748"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M35 30 L30 20 M65 30 L70 20" stroke="#2d3748" strokeWidth="2" />
      <path d="M45 35 L55 35" stroke="white" strokeWidth="2" />
      <path d="M40 75 L60 75" stroke="#4a5568" strokeWidth="2" />
    </svg>
  ),
  whiteHat: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="whiteHatGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#f7fafc" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#whiteHatGradient)" />
      <path
        d="M30 50 L35 35 H65 L70 50 Q50 60 30 50 Z"
        fill="#f7fafc"
        stroke="#4a5568"
        strokeWidth="2"
      />
      <path
        d="M30 50 Q50 60 70 50 Q60 80 40 80 Z"
        fill="#f7fafc"
        stroke="#4a5568"
        strokeWidth="2"
      />
      <path d="M40 45 L45 55 M55 45 L60 55" stroke="#4a5568" strokeWidth="2" />
      <path
        d="M45 70 L55 70"
        stroke="#4a5568"
        strokeWidth="1.5"
        strokeDasharray="2,1"
      />
    </svg>
  ),
  tokenomicsArchitect: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d6bcfa" />
          <stop offset="100%" stopColor="#e9d8fd" />
        </linearGradient>
        <filter id="tokenGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#tokenGradient)" />
      <circle cx="40" cy="40" r="10" fill="#553c9a" filter="url(#tokenGlow)" />
      <circle cx="65" cy="35" r="7" fill="#553c9a" filter="url(#tokenGlow)" />
      <circle cx="60" cy="60" r="12" fill="#553c9a" filter="url(#tokenGlow)" />
      <path
        d="M40 40 L65 35 M65 35 L60 60 M60 60 L40 40"
        stroke="#553c9a"
        strokeWidth="2"
      />
      <text x="40" y="43" fontSize="10" fill="white" textAnchor="middle">
        $
      </text>
      <text x="60" y="63" fontSize="10" fill="white" textAnchor="middle">
        %
      </text>
    </svg>
  ),
  nftCollector: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="nftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81e6d9" />
          <stop offset="100%" stopColor="#b2f5ea" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#nftGradient)" />
      <rect x="25" y="30" width="20" height="25" rx="2" fill="#234e52" />
      <rect x="55" y="30" width="20" height="40" rx="2" fill="#234e52" />
      <rect x="35" y="65" width="30" height="15" rx="2" fill="#234e52" />
      <path
        d="M30 40 L40 40 M30 45 L40 45 M60 40 L70 40 M60 50 L70 50 M60 60 L70 60 M45 70 L55 70"
        stroke="white"
        strokeWidth="1"
      />
      <circle cx="35" cy="35" r="3" fill="#b2f5ea" />
      <circle cx="65" cy="35" r="3" fill="#b2f5ea" />
      <path
        d="M30 50 L40 50"
        stroke="#b2f5ea"
        strokeWidth="1"
        strokeDasharray="1,1"
      />
    </svg>
  ),
  daoVoter: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="daoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf089" />
          <stop offset="100%" stopColor="#fefcbf" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#daoGradient)" />
      <path
        d="M35 30 H65 V70 H35 Z"
        fill="#744210"
        stroke="#5F370E"
        strokeWidth="1"
      />
      <path d="M45 40 L55 40 L55 50 L45 50 Z" fill="white" />
      <path d="M40 60 L60 60" stroke="white" strokeWidth="3" />
      <text x="50" y="47" fontSize="8" fill="#744210" textAnchor="middle">
        VOTE
      </text>
      <path d="M40 25 L60 25" stroke="#744210" strokeWidth="2" />
    </svg>
  ),
  airdropFarmer: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="airdropGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9ae6b4" />
          <stop offset="100%" stopColor="#c6f6d5" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#airdropGradient)" />
      <path d="M50 20 L50 80" stroke="#276749" strokeWidth="4" />
      <path
        d="M30 40 Q40 25 50 40 Q60 25 70 40"
        stroke="#276749"
        strokeWidth="3"
        fill="none"
      />
      <path d="M40 50 L60 50 M43 45 L57 45" stroke="#276749" strokeWidth="2" />
      <circle cx="50" cy="30" r="8" fill="#276749" />
      <path
        d="M35 65 Q50 75 65 65"
        stroke="#276749"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="30" r="3" fill="#c6f6d5" />
    </svg>
  ),
  stakingEnthusiast: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="stakingGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#fed7d7" />
          <stop offset="100%" stopColor="#feb2b2" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#stakingGradient)" />
      <path
        d="M40 70 L40 40 L60 40 L60 70"
        fill="#fed7d7"
        stroke="#742a2a"
        strokeWidth="3"
      />
      <circle cx="50" cy="30" r="10" fill="#742a2a" />
      <path d="M43 50 L57 50 M43 60 L57 60" stroke="#742a2a" strokeWidth="2" />
      <path d="M30 75 L70 75" stroke="#742a2a" strokeWidth="4" />
      <text x="50" y="33" fontSize="10" fill="white" textAnchor="middle">
        %
      </text>
      <path d="M35 40 L65 40" stroke="#742a2a" strokeWidth="1" />
    </svg>
  ),
  privacyAdvocate: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="privacyGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#d6bcfa" />
          <stop offset="100%" stopColor="#e9d8fd" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#privacyGradient)" />
      <path d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50 Z" fill="#553c9a" />
      <circle cx="50" cy="45" r="5" fill="white" />
      <path
        d="M35 55 Q50 65 65 55"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path d="M30 30 L70 70 M70 30 L30 70" stroke="#553c9a" strokeWidth="3" />
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#553c9a"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
      />
    </svg>
  ),
  ctInfluencer: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="ctGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63b3ed" />
          <stop offset="100%" stopColor="#90cdf4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#ctGradient)" />
      <path d="M30 30 Q50 20 70 30 L70 60 Q50 70 30 60 Z" fill="#2c5282" />
      <path d="M50 30 L50 60" stroke="white" strokeWidth="2" />
      <path d="M45 40 L55 40 M40 50 L60 50" stroke="white" strokeWidth="2" />
      <circle
        cx="50"
        cy="25"
        r="5"
        fill="#2c5282"
        stroke="white"
        strokeWidth="1"
      />
      <path
        d="M25 40 Q15 50 25 60"
        stroke="#2c5282"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M75 40 Q85 50 75 60"
        stroke="#2c5282"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
  onChainAnalyst: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="analystGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4fd1c5" />
          <stop offset="100%" stopColor="#81e6d9" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#analystGradient)" />
      <path
        d="M20 70 L40 40 L60 60 L80 30"
        stroke="#234e52"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="40" r="5" fill="#234e52" />
      <circle cx="60" cy="60" r="5" fill="#234e52" />
      <circle cx="80" cy="30" r="5" fill="#234e52" />
      <path d="M25 30 L25 70 L80 70" stroke="#234e52" strokeWidth="2" />
      <path
        d="M30 65 L30 55 L40 55"
        stroke="#234e52"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
    </svg>
  ),
  memeLord: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient id="memeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbd38d" />
          <stop offset="100%" stopColor="#feebc8" />
        </linearGradient>
        <filter id="memeGlow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#memeGradient)" />
      <circle cx="40" cy="40" r="5" fill="#744210" />
      <circle cx="60" cy="40" r="5" fill="#744210" />
      <path
        d="M35 60 Q50 75 65 60"
        stroke="#744210"
        strokeWidth="3"
        fill="none"
      />
      <path d="M25 25 L35 35 M75 25 L65 35" stroke="#744210" strokeWidth="2" />
      <path
        d="M20 50 L30 50 M70 50 L80 50"
        stroke="#744210"
        strokeWidth="1.5"
        strokeDasharray="2,2"
      />
      <text
        x="50"
        y="25"
        fontSize="12"
        fill="#744210"
        textAnchor="middle"
        filter="url(#memeGlow)"
      >
        LOL
      </text>
    </svg>
  ),
  educator: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="educatorGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#81e6d9" />
          <stop offset="100%" stopColor="#b2f5ea" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#educatorGradient)" />
      <path
        d="M30 40 H70 V75 H30 Z"
        fill="#234e52"
        stroke="#1D4044"
        strokeWidth="1"
      />
      <path
        d="M40 30 H60 V40 H40 Z"
        fill="#234e52"
        stroke="#1D4044"
        strokeWidth="1"
      />
      <path
        d="M35 50 L65 50 M35 60 L65 60 M35 70 L65 70"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="50" cy="35" r="3" fill="white" />
      <path
        d="M25 45 L25 70"
        stroke="#234e52"
        strokeWidth="1.5"
        strokeDasharray="2,2"
      />
      <path
        d="M75 45 L75 70"
        stroke="#234e52"
        strokeWidth="1.5"
        strokeDasharray="2,2"
      />
    </svg>
  ),
  journalist: (
    <svg viewBox="0 0 100 100" width="64px" height="64px">
      <defs>
        <linearGradient
          id="journalistGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#b794f4" />
          <stop offset="100%" stopColor="#d6bcfa" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#journalistGradient)" />
      <path
        d="M30 35 H70 V75 H30 Z"
        fill="#553c9a"
        stroke="#44337A"
        strokeWidth="1"
      />
      <path d="M40 30 V40 M60 30 V40" stroke="#553c9a" strokeWidth="3" />
      <path
        d="M35 45 L65 45 M35 55 L55 55 M35 65 L60 65"
        stroke="white"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="50"
        r="5"
        fill="#553c9a"
        stroke="white"
        strokeWidth="1"
      />
      <path d="M20 50 L15 45 M20 50 L15 55" stroke="white" strokeWidth="1" />
      <path
        d="M70 35 L75 35 L75 45 L70 45"
        stroke="#553c9a"
        strokeWidth="1"
        fill="#d6bcfa"
      />
    </svg>
  ),
}
