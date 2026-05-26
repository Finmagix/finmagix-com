// Inline Lucide-style icons. 1.5px stroke, currentColor.
// Source: prototype/site/icons.jsx — copied as components are built.
// Add icons here as new components need them. Keep the icon set minimal —
// don't import the full Lucide React package; this keeps the client bundle small.

import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill" | "stroke"> & {
  size?: number;
};

function Icon({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </Icon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </Icon>
  );
}

// Module icons — used by ModuleCard for the 3 featured modules on home
// (health/stress/tax) and for the full set on /platform and /pricing
// when those pages get built. Add more as needed; keep tree-shakable.
export function ActivityIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </Icon>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1L4 2Z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </Icon>
  );
}

// Proof-strip icons — added 2026-05-24 for the consolidated hero rebuild.
// SVG paths sourced from prototype/site/icons.jsx (Lucide-style, 1.5px).

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

export function ScrollTextIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </Icon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </Icon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </Icon>
  );
}

// Partners icons + Check — added 2026-05-24 for /partners batch.
export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}

export function Building2Icon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </Icon>
  );
}

export function LandmarkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </Icon>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Icon>
  );
}

// Auth-pages icons — added 2026-05-24 for /sign-in + /sign-up redesign.
export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

// Module-grid icons — added 2026-05-25 for the home closing-band
// redesign (12 module tiles). Ports of the same Lucide-style paths
// from prototype/site/icons.jsx so the existing module catalog's
// icon names resolve without changes.
export function WalletIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </Icon>
  );
}

export function UmbrellaIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12a10 10 0 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </Icon>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </Icon>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </Icon>
  );
}

export function TreePineIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
      <path d="M12 22v-3" />
    </Icon>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </Icon>
  );
}

// Icon resolver — used by ModuleCard when iterating over module data.
// Returns null for unknown names; consumer can fall back to a placeholder.
const iconMap = {
  Activity: ActivityIcon,
  Shield: ShieldIcon,
  Receipt: ReceiptIcon,
  ArrowRight: ArrowRightIcon,
  ArrowUpRight: ArrowUpRightIcon,
  Menu: MenuIcon,
  X: XIcon,
  Users: UsersIcon,
  ScrollText: ScrollTextIcon,
  Sparkles: SparklesIcon,
  Compass: CompassIcon,
  Landmark: LandmarkIcon,
  Wallet: WalletIcon,
  Umbrella: UmbrellaIcon,
  GraduationCap: GraduationCapIcon,
  Flame: FlameIcon,
  TreePine: TreePineIcon,
  HeartPulse: HeartPulseIcon,
} as const;

export type IconName = keyof typeof iconMap;

export function IconByName({ name, size }: { name: IconName; size?: number }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
}
