export interface CtaLink {
  label: string;
  href: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface AvailabilityData {
  status: string;
  location: string;
  isAvailable: boolean;
}

export interface HeroData {
  statusGreeting: string;
  location: string;
  headline: string;
  headlineHighlight: string;
  disciplines: string;
  subdescription: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustBadges: TrustBadge[];
  portraitImage: string;
  portraitAlt: string;
  portraitKicker: string;
  portraitSubtitle: string;
}

export interface AudioTrackItem {
  id: string;
  title: string;
  category: 'storybook' | 'science' | 'character';
  categoryLabel: string;
  categoryVariant?: 'primary' | 'secondary' | 'tertiary';
  description: string;
  durationSeconds: number;
  durationFormatted: string;
  audioPath: string;
  tags: string[];
  initialPlaying?: boolean;
  initialProgress?: number;
  initialElapsedFormatted?: string;
}

export interface BookProjectItem {
  id: string;
  title: string;
  category: 'storybook' | 'science' | 'encyclopedia';
  categoryLabel: string;
  role: string;
  ageRange: string;
  summary: string;
  publisher: string;
  pageCount: number;
  coverImage: string;
  altText: string;
  categoryBadgeVariant?: 'primary' | 'secondary' | 'tertiary';
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  tintVariant: 'surface' | 'secondary' | 'tertiary' | 'primary';
}

export interface EventHighlightItem {
  id: string;
  title: string;
  role: string;
  date: string;
  location: string;
  audience: string;
  description: string;
  image: string;
  altText: string;
  tags: string[];
}

export interface ClientPartnerItem {
  name: string;
  icon: string;
  iconColorClass: string;
}

export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
  colorVariant: 'primary' | 'secondary' | 'tertiary';
}

export interface AboutData {
  kicker: string;
  headline: string;
  bioParagraphs: string[];
  quote: string;
  quoteAuthor: string;
  capabilities: CapabilityItem[];
}

export interface DirectContactChannel {
  id: string;
  type: 'whatsapp' | 'email';
  title: string;
  value: string;
  href: string;
  icon: string;
  iconBgClass: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  href: string;
  icon: string;
}

export interface ContactData {
  kicker: string;
  headline: string;
  description: string;
  directChannels: DirectContactChannel[];
  socialLinks: SocialLink[];
  serviceOptions: string[];
}
