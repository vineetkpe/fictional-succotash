/**
 * ==============================================================================
 * HOSTAMBLE CENTRAL PRICING CONFIGURATION (ORIGIN FILE)
 * ==============================================================================
 * Manage all plan prices, domain rates, durations, and currency mappings from this
 * single file. Any update here reflects across the entire website automatically.
 * 
 * Rules:
 * - Every price has both `inr` (e.g. "₹59") and `usd` (e.g. "$0.79")
 * - Formats can include duration suffixes when needed (e.g. "₹49 /mo")
 * ==============================================================================
 */

export interface PricePair {
  inr: string;
  usd: string;
}

export interface PlanPeriodDetail extends PricePair {
  totalInr?: string;
  totalUsd?: string;
  periodLabel?: string;
  originalInr?: string;
  originalUsd?: string;
  saveInr?: string;
  saveUsd?: string;
  discount?: string;
  firstPaymentInr?: string;
  firstPaymentUsd?: string;
  renewalRateInr?: string;
  renewalRateUsd?: string;
  renewalPaymentInr?: string;
  renewalPaymentUsd?: string;
  renewalInr?: string;
  renewalUsd?: string;
  freeDomain?: boolean;
  freeDomainNote?: string;
  cartUrl?: string;
}

export interface HostingPlan {
  id: string;
  name: string;
  tagline?: string;
  badge?: string;
  isPopular?: boolean;
  orderUrl?: string;
  features?: string[];
  pricing: {
    monthly: PlanPeriodDetail;
    quarterly?: PlanPeriodDetail;
    semiannual?: PlanPeriodDetail;
    annual: PlanPeriodDetail;
    biennial?: PlanPeriodDetail;
    yearly?: PlanPeriodDetail;
  };
}

export interface WordPressPlan {
  id: string;
  name: string;
  isPopular?: boolean;
  pricing: {
    monthly: PricePair;
    yearly: PricePair;
  };
}

export interface SslPlan {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  price: PricePair;
  warranty: string;
  subdomains: string;
  validation: string;
  issuance: string;
}

export interface EmailPlan {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  pricing: {
    monthly: PricePair;
    annual: PricePair;
  };
}

export interface DomainTld {
  tld: string;
  category: string;
  badge?: string;
  register: PricePair;
  originalRegister?: PricePair;
  renew: PricePair;
  transfer: PricePair;
}

/* ==============================================================================
 * 1. SHARED HOSTING PRICING
 * ============================================================================== */
export const sharedHosting = {
  heroStartPrice: { inr: "₹69 /mo", usd: "$0.85 /mo" },
  plans: {
    basic: {
      id: "basic",
      name: "Shared Basic",
      tagline: "For a first website, personal portfolio or small blog",
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/basic",
      features: [
        "1 website",
        "5 GB SSD storage",
        "50 GB monthly bandwidth",
        "1 email account — 500 MB",
        "Free SSL certificate",
        "WordPress + Softaculous installer",
        "2 databases + 5 subdomains",
        "Daily backups — 3-day retention",
        "1 standard website migration"
      ],
      pricing: {
        monthly: {
          inr: "₹149",
          usd: "$1.79",
          totalInr: "₹149 for 1 month",
          totalUsd: "$1.79 for 1 month",
          firstPaymentInr: "₹149 for 1 month",
          firstPaymentUsd: "$1.79 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹199",
          renewalRateUsd: "$2.39",
          renewalPaymentInr: "₹199/month",
          renewalPaymentUsd: "$2.39/month",
          renewalInr: "Renews at ₹199/month",
          renewalUsd: "Renews at $2.39/month",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/basic?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹714 for 6 months",
          totalUsd: "$8.70 for 6 months",
          firstPaymentInr: "₹714 for 6 months",
          firstPaymentUsd: "$8.70 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹149",
          renewalRateUsd: "$1.79",
          renewalPaymentInr: "₹894 every 6 months",
          renewalPaymentUsd: "$10.74 every 6 months",
          renewalInr: "Renews at ₹894 / 6 mos (₹149/mo)",
          renewalUsd: "Renews at $10.74 / 6 mos ($1.79/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/basic?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹99",
          usd: "$1.19",
          totalInr: "₹1,188 for 1 year",
          totalUsd: "$14.28 for 1 year",
          firstPaymentInr: "₹1,188 for 1 year",
          firstPaymentUsd: "$14.28 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹129",
          renewalRateUsd: "$1.55",
          renewalPaymentInr: "₹1,548/year",
          renewalPaymentUsd: "$18.60/year",
          renewalInr: "Renews at ₹1,548/yr (₹129/mo)",
          renewalUsd: "Renews at $18.60/yr ($1.55/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/basic?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹69",
          usd: "$0.85",
          totalInr: "₹1,656 upfront for 2 years",
          totalUsd: "$19.99 upfront for 2 years",
          firstPaymentInr: "₹1,656 for 2 years",
          firstPaymentUsd: "$19.99 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 54%",
          renewalRateInr: "₹99",
          renewalRateUsd: "$1.19",
          renewalPaymentInr: "₹2,376 every 2 years",
          renewalPaymentUsd: "$28.56 every 2 years",
          renewalInr: "Renews at ₹2,376 (₹99/mo)",
          renewalUsd: "Renews at $28.56 ($1.19/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/basic?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    },
    starter: {
      id: "starter",
      name: "Shared Starter",
      badge: "Recommended",
      isPopular: true,
      tagline: "For customers managing several small websites",
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/starter",
      features: [
        "5 websites",
        "15 GB SSD storage",
        "150 GB monthly bandwidth",
        "5 email accounts — 1 GB each",
        "Free SSL for all hosted websites",
        "WordPress + Softaculous installer",
        "LiteSpeed Server",
        "Imunify360 security protection",
        "Daily backups — 3-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹249 for 1 month",
          totalUsd: "$2.99 for 1 month",
          firstPaymentInr: "₹249 for 1 month",
          firstPaymentUsd: "$2.99 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹329",
          renewalRateUsd: "$3.99",
          renewalPaymentInr: "₹329/month",
          renewalPaymentUsd: "$3.99/month",
          renewalInr: "Renews at ₹329/month",
          renewalUsd: "Renews at $3.99/month",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/starter?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹199",
          usd: "$2.39",
          totalInr: "₹1,194 for 6 months",
          totalUsd: "$14.34 for 6 months",
          firstPaymentInr: "₹1,194 for 6 months",
          firstPaymentUsd: "$14.34 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹249",
          renewalRateUsd: "$2.99",
          renewalPaymentInr: "₹1,494 every 6 months",
          renewalPaymentUsd: "$17.94 every 6 months",
          renewalInr: "Renews at ₹1,494 / 6 mos (₹249/mo)",
          renewalUsd: "Renews at $17.94 / 6 mos ($2.99/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/starter?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹159",
          usd: "$1.89",
          totalInr: "₹1,908 for 1 year",
          totalUsd: "$22.68 for 1 year",
          firstPaymentInr: "₹1,908 for 1 year",
          firstPaymentUsd: "$22.68 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹199",
          renewalRateUsd: "$2.39",
          renewalPaymentInr: "₹2,388/year",
          renewalPaymentUsd: "$28.68/year",
          renewalInr: "Renews at ₹2,388/yr (₹199/mo)",
          renewalUsd: "Renews at $28.68/yr ($2.39/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/starter?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹2,856 upfront for 2 years",
          totalUsd: "$34.80 upfront for 2 years",
          firstPaymentInr: "₹2,856 for 2 years",
          firstPaymentUsd: "$34.80 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 52%",
          renewalRateInr: "₹159",
          renewalRateUsd: "$1.89",
          renewalPaymentInr: "₹3,816 every 2 years",
          renewalPaymentUsd: "$45.36 every 2 years",
          renewalInr: "Renews at ₹3,816 (₹159/mo)",
          renewalUsd: "Renews at $45.36 ($1.89/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/starter?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    },
    elite: {
      id: "elite",
      name: "Shared Elite",
      tagline: "For customers managing a larger collection of websites",
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/elite",
      features: [
        "20 websites",
        "50 GB NVMe SSD storage",
        "500 GB monthly bandwidth",
        "20 email accounts — 1 GB each",
        "Free SSL for all hosted websites",
        "WordPress + Softaculous installer",
        "LiteSpeed Server",
        "Imunify360 security protection",
        "Daily backups — 3-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹399",
          usd: "$4.79",
          totalInr: "₹399 for 1 month",
          totalUsd: "$4.79 for 1 month",
          firstPaymentInr: "₹399 for 1 month",
          firstPaymentUsd: "$4.79 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹499",
          renewalRateUsd: "$5.99",
          renewalPaymentInr: "₹499/month",
          renewalPaymentUsd: "$5.99/month",
          renewalInr: "Renews at ₹499/month",
          renewalUsd: "Renews at $5.99/month",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/elite?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹299",
          usd: "$3.59",
          totalInr: "₹1,794 for 6 months",
          totalUsd: "$21.54 for 6 months",
          firstPaymentInr: "₹1,794 for 6 months",
          firstPaymentUsd: "$21.54 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹399",
          renewalRateUsd: "$4.79",
          renewalPaymentInr: "₹2,394 every 6 months",
          renewalPaymentUsd: "$28.74 every 6 months",
          renewalInr: "Renews at ₹2,394 / 6 mos (₹399/mo)",
          renewalUsd: "Renews at $28.74 / 6 mos ($4.79/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/elite?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹2,988 for 1 year",
          totalUsd: "$35.88 for 1 year",
          firstPaymentInr: "₹2,988 for 1 year",
          firstPaymentUsd: "$35.88 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹329",
          renewalRateUsd: "$3.99",
          renewalPaymentInr: "₹3,948/year",
          renewalPaymentUsd: "$47.88/year",
          renewalInr: "Renews at ₹3,948/yr (₹329/mo)",
          renewalUsd: "Renews at $47.88/yr ($3.99/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/elite?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹199",
          usd: "$2.39",
          totalInr: "₹4,776 upfront for 2 years",
          totalUsd: "$57.36 upfront for 2 years",
          firstPaymentInr: "₹4,776 for 2 years",
          firstPaymentUsd: "$57.36 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 50%",
          renewalRateInr: "₹269",
          renewalRateUsd: "$3.25",
          renewalPaymentInr: "₹6,456 every 2 years",
          renewalPaymentUsd: "$78.00 every 2 years",
          renewalInr: "Renews at ₹6,456 (₹269/mo)",
          renewalUsd: "Renews at $78.00 ($3.25/mo)",
          cartUrl: "https://hostamble.com/dash/store/sharedhosting/elite?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    }
  }
};

/* ==============================================================================
 * 2. WORDPRESS HOSTING PRICING
 * ============================================================================== */
export const wordpressHosting = {
  heroStartPrice: { inr: "₹69 /mo", usd: "$0.85 /mo" },
  plans: {
    starter: {
      id: "starter",
      name: "WordPress Starter",
      tagline: "For one small WordPress website",
      orderUrl: "https://hostamble.com/dash/store/wordpresshosting/starter",
      features: [
        "1 WordPress website",
        "5 GB NVMe SSD storage",
        "50 GB monthly bandwidth",
        "1 email account — 500 MB",
        "Free SSL certificate",
        "WordPress + Softaculous with automatic core updates",
        "LiteSpeed Server + configured LiteSpeed Cache",
        "Imunify360 security protection",
        "Daily backups — 3-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹149",
          usd: "$1.79",
          totalInr: "₹149 for 1 month",
          totalUsd: "$1.79 for 1 month",
          firstPaymentInr: "₹149 for 1 month",
          firstPaymentUsd: "$1.79 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹199",
          renewalRateUsd: "$2.39",
          renewalPaymentInr: "₹199/month",
          renewalPaymentUsd: "$2.39/month",
          renewalInr: "Renews at ₹199/month",
          renewalUsd: "Renews at $2.39/month",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/starter?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹714 for 6 months",
          totalUsd: "$8.70 for 6 months",
          firstPaymentInr: "₹714 for 6 months",
          firstPaymentUsd: "$8.70 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹149",
          renewalRateUsd: "$1.79",
          renewalPaymentInr: "₹894 every 6 months",
          renewalPaymentUsd: "$10.74 every 6 months",
          renewalInr: "Renews at ₹894 / 6 mos (₹149/mo)",
          renewalUsd: "Renews at $10.74 / 6 mos ($1.79/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/starter?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹99",
          usd: "$1.19",
          totalInr: "₹1,188 for 1 year",
          totalUsd: "$14.28 for 1 year",
          firstPaymentInr: "₹1,188 for 1 year",
          firstPaymentUsd: "$14.28 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹129",
          renewalRateUsd: "$1.55",
          renewalPaymentInr: "₹1,548/year",
          renewalPaymentUsd: "$18.60/year",
          renewalInr: "Renews at ₹1,548/yr (₹129/mo)",
          renewalUsd: "Renews at $18.60/yr ($1.55/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/starter?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹69",
          usd: "$0.85",
          totalInr: "₹1,656 upfront for 2 years",
          totalUsd: "$19.99 upfront for 2 years",
          firstPaymentInr: "₹1,656 for 2 years",
          firstPaymentUsd: "$19.99 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 54%",
          renewalRateInr: "₹99",
          renewalRateUsd: "$1.19",
          renewalPaymentInr: "₹2,376 every 2 years",
          renewalPaymentUsd: "$28.56 every 2 years",
          renewalInr: "Renews at ₹2,376 (₹99/mo)",
          renewalUsd: "Renews at $28.56 ($1.19/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/starter?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    },
    essential: {
      id: "essential",
      name: "WordPress Essential",
      badge: "Recommended",
      isPopular: true,
      tagline: "For customers managing several small websites",
      orderUrl: "https://hostamble.com/dash/store/wordpresshosting/essential",
      features: [
        "3 WordPress websites",
        "10 GB NVMe SSD storage",
        "100 GB monthly bandwidth",
        "3 email accounts — 1 GB each",
        "Free SSL for all hosted websites",
        "WordPress + Softaculous with automatic core updates",
        "LiteSpeed Server + configured LiteSpeed Cache",
        "Imunify360 security protection",
        "Daily backups — 7-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹249 for 1 month",
          totalUsd: "$2.99 for 1 month",
          firstPaymentInr: "₹249 for 1 month",
          firstPaymentUsd: "$2.99 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹329",
          renewalRateUsd: "$3.99",
          renewalPaymentInr: "₹329/month",
          renewalPaymentUsd: "$3.99/month",
          renewalInr: "Renews at ₹329/month",
          renewalUsd: "Renews at $3.99/month",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/essential?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹199",
          usd: "$2.39",
          totalInr: "₹1,194 for 6 months",
          totalUsd: "$14.34 for 6 months",
          firstPaymentInr: "₹1,194 for 6 months",
          firstPaymentUsd: "$14.34 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹249",
          renewalRateUsd: "$2.99",
          renewalPaymentInr: "₹1,494 every 6 months",
          renewalPaymentUsd: "$17.94 every 6 months",
          renewalInr: "Renews at ₹1,494 / 6 mos (₹249/mo)",
          renewalUsd: "Renews at $17.94 / 6 mos ($2.99/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/essential?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹159",
          usd: "$1.89",
          totalInr: "₹1,908 for 1 year",
          totalUsd: "$22.68 for 1 year",
          firstPaymentInr: "₹1,908 for 1 year",
          firstPaymentUsd: "$22.68 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹199",
          renewalRateUsd: "$2.39",
          renewalPaymentInr: "₹2,388/year",
          renewalPaymentUsd: "$28.68/year",
          renewalInr: "Renews at ₹2,388/yr (₹199/mo)",
          renewalUsd: "Renews at $28.68/yr ($2.39/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/essential?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹2,856 upfront for 2 years",
          totalUsd: "$34.80 upfront for 2 years",
          firstPaymentInr: "₹2,856 for 2 years",
          firstPaymentUsd: "$34.80 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 52%",
          renewalRateInr: "₹159",
          renewalRateUsd: "$1.89",
          renewalPaymentInr: "₹3,816 every 2 years",
          renewalPaymentUsd: "$45.36 every 2 years",
          renewalInr: "Renews at ₹3,816 (₹159/mo)",
          renewalUsd: "Renews at $45.36 ($1.89/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/essential?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    },
    growth: {
      id: "growth",
      name: "WordPress Growth",
      tagline: "For fast-growing WordPress websites",
      orderUrl: "https://hostamble.com/dash/store/wordpresshosting/growth",
      features: [
        "10 WordPress websites",
        "25 GB NVMe SSD storage",
        "250 GB monthly bandwidth",
        "10 email accounts — 1 GB each",
        "Free SSL for all hosted websites",
        "WordPress + Softaculous with automatic core updates",
        "LiteSpeed Server + configured LiteSpeed Cache",
        "Imunify360 security protection",
        "Daily backups — 7-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹349",
          usd: "$4.19",
          totalInr: "₹349 for 1 month",
          totalUsd: "$4.19 for 1 month",
          firstPaymentInr: "₹349 for 1 month",
          firstPaymentUsd: "$4.19 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹449",
          renewalRateUsd: "$5.39",
          renewalPaymentInr: "₹449/month",
          renewalPaymentUsd: "$5.39/month",
          renewalInr: "Renews at ₹449/month",
          renewalUsd: "Renews at $5.39/month",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/growth?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹269",
          usd: "$3.25",
          totalInr: "₹1,614 for 6 months",
          totalUsd: "$19.50 for 6 months",
          firstPaymentInr: "₹1,614 for 6 months",
          firstPaymentUsd: "$19.50 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹349",
          renewalRateUsd: "$4.19",
          renewalPaymentInr: "₹2,094 every 6 months",
          renewalPaymentUsd: "$25.14 every 6 months",
          renewalInr: "Renews at ₹2,094 / 6 mos (₹349/mo)",
          renewalUsd: "Renews at $25.14 / 6 mos ($4.19/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/growth?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹219",
          usd: "$2.65",
          totalInr: "₹2,628 for 1 year",
          totalUsd: "$31.80 for 1 year",
          firstPaymentInr: "₹2,628 for 1 year",
          firstPaymentUsd: "$31.80 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹279",
          renewalRateUsd: "$3.35",
          renewalPaymentInr: "₹3,348/year",
          renewalPaymentUsd: "$40.20/year",
          renewalInr: "Renews at ₹3,348/yr (₹279/mo)",
          renewalUsd: "Renews at $40.20/yr ($3.35/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/growth?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹169",
          usd: "$2.05",
          totalInr: "₹4,056 upfront for 2 years",
          totalUsd: "$49.20 upfront for 2 years",
          firstPaymentInr: "₹4,056 for 2 years",
          firstPaymentUsd: "$49.20 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 52%",
          renewalRateInr: "₹219",
          renewalRateUsd: "$2.65",
          renewalPaymentInr: "₹5,256 every 2 years",
          renewalPaymentUsd: "$63.60 every 2 years",
          renewalInr: "Renews at ₹5,256 (₹219/mo)",
          renewalUsd: "Renews at $63.60 ($2.65/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/growth?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    },
    prime: {
      id: "prime",
      name: "WordPress Prime",
      tagline: "For dynamic stores & high-traffic WordPress portfolios",
      orderUrl: "https://hostamble.com/dash/store/wordpresshosting/prime",
      features: [
        "20 WordPress websites",
        "50 GB NVMe SSD storage",
        "500 GB monthly bandwidth",
        "20 email accounts — 1 GB each",
        "Free SSL for all hosted websites",
        "WordPress + Softaculous with automatic core updates",
        "LiteSpeed Server + configured LiteSpeed Cache",
        "Imunify360 security protection",
        "Daily backups — 14-day retention"
      ],
      pricing: {
        monthly: {
          inr: "₹499",
          usd: "$5.99",
          totalInr: "₹499 for 1 month",
          totalUsd: "$5.99 for 1 month",
          firstPaymentInr: "₹499 for 1 month",
          firstPaymentUsd: "$5.99 for 1 month",
          periodLabel: "each month",
          renewalRateInr: "₹649",
          renewalRateUsd: "$7.79",
          renewalPaymentInr: "₹649/month",
          renewalPaymentUsd: "$7.79/month",
          renewalInr: "Renews at ₹649/month",
          renewalUsd: "Renews at $7.79/month",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/prime?billingcycle=monthly",
          freeDomain: false
        },
        semiannual: {
          inr: "₹399",
          usd: "$4.79",
          totalInr: "₹2,394 for 6 months",
          totalUsd: "$28.74 for 6 months",
          firstPaymentInr: "₹2,394 for 6 months",
          firstPaymentUsd: "$28.74 for 6 months",
          periodLabel: "every 6 months",
          renewalRateInr: "₹499",
          renewalRateUsd: "$5.99",
          renewalPaymentInr: "₹2,994 every 6 months",
          renewalPaymentUsd: "$35.94 every 6 months",
          renewalInr: "Renews at ₹2,994 / 6 mos (₹499/mo)",
          renewalUsd: "Renews at $35.94 / 6 mos ($5.99/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/prime?billingcycle=semiannually",
          freeDomain: false
        },
        annual: {
          inr: "₹299",
          usd: "$3.59",
          totalInr: "₹3,588 for 1 year",
          totalUsd: "$43.08 for 1 year",
          firstPaymentInr: "₹3,588 for 1 year",
          firstPaymentUsd: "$43.08 for 1 year",
          periodLabel: "every year",
          renewalRateInr: "₹399",
          renewalRateUsd: "$4.79",
          renewalPaymentInr: "₹4,788/year",
          renewalPaymentUsd: "$57.48/year",
          renewalInr: "Renews at ₹4,788/yr (₹399/mo)",
          renewalUsd: "Renews at $57.48/yr ($4.79/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/prime?billingcycle=annually",
          freeDomain: false
        },
        biennial: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹5,976 upfront for 2 years",
          totalUsd: "$71.76 upfront for 2 years",
          firstPaymentInr: "₹5,976 for 2 years",
          firstPaymentUsd: "$71.76 for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 50%",
          renewalRateInr: "₹329",
          renewalRateUsd: "$3.95",
          renewalPaymentInr: "₹7,896 every 2 years",
          renewalPaymentUsd: "$94.80 every 2 years",
          renewalInr: "Renews at ₹7,896 (₹329/mo)",
          renewalUsd: "Renews at $94.80 ($3.95/mo)",
          cartUrl: "https://hostamble.com/dash/store/wordpresshosting/prime?billingcycle=biennially",
          freeDomain: true,
          freeDomainNote: "1 domain free for 1 year — two-year plan only"
        }
      }
    }
  }
};

// Aliases for any legacy references
(wordpressHosting.plans as any).personal = wordpressHosting.plans.starter;
(wordpressHosting.plans as any).plus = wordpressHosting.plans.essential;
(wordpressHosting.plans as any).expert = wordpressHosting.plans.growth;
(wordpressHosting.plans as any).ultimate = wordpressHosting.plans.prime;

/* ==============================================================================
 * TECHNICAL SPECIFICATIONS COMPARISON DATA
 * (Kept in separate comparison table below cards)
 * ============================================================================== */
export interface PlanSpecDetail {
  planName: string;
  planId: string;
  databases: string;
  subdomains: string;
  migrations: string;
}

export const sharedPlanSpecs: PlanSpecDetail[] = [
  { planName: "Shared Basic", planId: "basic", databases: "2", subdomains: "5", migrations: "1" },
  { planName: "Shared Starter", planId: "starter", databases: "10", subdomains: "15", migrations: "Up to 3" },
  { planName: "Shared Elite", planId: "elite", databases: "40", subdomains: "50", migrations: "Up to 5" }
];

export const wordpressPlanSpecs: PlanSpecDetail[] = [
  { planName: "WordPress Starter", planId: "starter", databases: "2", subdomains: "5", migrations: "1" },
  { planName: "WordPress Essential", planId: "essential", databases: "5", subdomains: "10", migrations: "Up to 3" },
  { planName: "WordPress Growth", planId: "growth", databases: "20", subdomains: "25", migrations: "Up to 5" },
  { planName: "WordPress Prime", planId: "prime", databases: "40", subdomains: "50", migrations: "Up to 10" }
];

/* ==============================================================================
 * 3. VPS SERVERS PRICING
 * ============================================================================== */
export const vpsHosting = {
  heroStartPrice: { inr: "₹499 /mo", usd: "$5.99 /mo" },
  plans: {
    starter: {
      id: "vps-starter",
      name: "VPS Starter",
      pricing: {
        monthly: { inr: "₹499", usd: "$5.99" },
        quarterly: { inr: "₹1425", usd: "$17.10" },
        semiannual: { inr: "₹2695", usd: "$32.35" },
        annual: { inr: "₹4990", usd: "$59.90" }
      }
    },
    growth: {
      id: "vps-growth",
      name: "VPS Growth",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹899", usd: "$10.79" },
        quarterly: { inr: "₹2560", usd: "$30.70" },
        semiannual: { inr: "₹4850", usd: "$58.20" },
        annual: { inr: "₹8990", usd: "$107.90" }
      }
    },
    pro: {
      id: "vps-pro",
      name: "VPS Pro",
      pricing: {
        monthly: { inr: "₹1699", usd: "$20.39" },
        quarterly: { inr: "₹4840", usd: "$58.10" },
        semiannual: { inr: "₹9170", usd: "$110.10" },
        annual: { inr: "₹16990", usd: "$203.90" }
      }
    },
    enterprise: {
      id: "vps-enterprise",
      name: "VPS Enterprise",
      pricing: {
        monthly: { inr: "₹3199", usd: "$38.39" },
        quarterly: { inr: "₹9115", usd: "$109.40" },
        semiannual: { inr: "₹17275", usd: "$207.30" },
        annual: { inr: "₹31990", usd: "$383.90" }
      }
    }
  }
};

/* ==============================================================================
 * 4. N8N AUTOMATION SERVERS PRICING
 * ============================================================================== */
export const n8nHosting = {
  heroStartPrice: { inr: "₹399 /mo", usd: "$4.79 /mo" },
  savingsHeadline: { inr: "₹65,000+ /yr", usd: "$800+ /yr" },
  plans: {
    starter: {
      id: "n8n-starter",
      name: "n8n Starter",
      pricing: {
        monthly: { inr: "₹399", usd: "$4.79" },
        quarterly: { inr: "₹1140", usd: "$13.65" },
        semiannual: { inr: "₹2150", usd: "$25.80" },
        annual: { inr: "₹3990", usd: "$47.90" }
      }
    },
    pro: {
      id: "n8n-pro",
      name: "n8n Pro",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹799", usd: "$9.59" },
        quarterly: { inr: "₹2275", usd: "$27.30" },
        semiannual: { inr: "₹4315", usd: "$51.75" },
        annual: { inr: "₹7990", usd: "$95.90" }
      }
    },
    enterprise: {
      id: "n8n-enterprise",
      name: "n8n Enterprise",
      pricing: {
        monthly: { inr: "₹1499", usd: "$17.99" },
        quarterly: { inr: "₹4270", usd: "$51.25" },
        semiannual: { inr: "₹8095", usd: "$97.15" },
        annual: { inr: "₹14990", usd: "$179.90" }
      }
    }
  }
};

/* ==============================================================================
 * 5. BUSINESS EMAIL PRICING
 * ============================================================================== */
export const businessEmail = {
  heroStartPrice: { inr: "₹39 /mo", usd: "$0.49 /mo" },
  plans: {
    starter: {
      id: "email-starter",
      name: "Email Starter",
      subtitle: "For solo entrepreneurs & freelancers",
      pricing: {
        monthly: { inr: "₹39", usd: "$0.49" },
        annual: { inr: "₹390", usd: "$4.90" }
      }
    },
    pro: {
      id: "email-pro",
      name: "Email Pro",
      subtitle: "For growing businesses & active teams",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹79", usd: "$0.99" },
        annual: { inr: "₹790", usd: "$9.90" }
      }
    },
    enterprise: {
      id: "email-enterprise",
      name: "Email Enterprise",
      subtitle: "For high-volume corporate inboxes",
      pricing: {
        monthly: { inr: "₹149", usd: "$1.79" },
        annual: { inr: "₹1490", usd: "$17.90" }
      }
    }
  }
};

/* ==============================================================================
 * 6. GOOGLE WORKSPACE PRICING
 * ============================================================================== */
export const googleWorkspace = {
  heroStartPrice: { inr: "₹149 /mo", usd: "$1.79 /mo" },
  plans: {
    starter: {
      id: "gw-starter",
      name: "Business Starter",
      pricing: {
        monthly: { inr: "₹149", usd: "$1.79" },
        annual: { inr: "₹1788", usd: "$21.45" }
      }
    },
    standard: {
      id: "gw-standard",
      name: "Business Standard",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹699", usd: "$8.39" },
        annual: { inr: "₹8388", usd: "$100.65" }
      }
    },
    plus: {
      id: "gw-plus",
      name: "Business Plus",
      pricing: {
        monthly: { inr: "₹1299", usd: "$15.59" },
        annual: { inr: "₹15588", usd: "$187.05" }
      }
    }
  }
};

/* ==============================================================================
 * 7. SSL CERTIFICATES PRICING
 * ============================================================================== */
export const sslCertificates = {
  heroStartPrice: { inr: "₹599 /yr", usd: "$7.19 /yr" },
  plans: {
    positiveSsl: {
      id: "positive-ssl",
      name: "PositiveSSL (DV)",
      subtitle: "Standard Domain Validation",
      price: { inr: "₹599", usd: "$7.19" },
      warranty: "$10,000",
      subdomains: "1 Domain",
      validation: "Domain Validation",
      issuance: "< 10 Mins"
    },
    wildcardSsl: {
      id: "wildcard-ssl",
      name: "Wildcard SSL (DV)",
      subtitle: "1 Domain + Unlimited Subdomains",
      isPopular: true,
      price: { inr: "₹2499", usd: "$29.99" },
      warranty: "$250,000",
      subdomains: "Unlimited (*.domain)",
      validation: "Domain Validation",
      issuance: "< 15 Mins"
    },
    evSsl: {
      id: "ev-ssl",
      name: "EV Business SSL",
      subtitle: "Extended Business Verification",
      price: { inr: "₹5999", usd: "$71.99" },
      warranty: "$1,750,000",
      subdomains: "1 Domain (Multi available)",
      validation: "Full Legal Business Vetting",
      issuance: "1 - 3 Days"
    }
  }
};

/* ==============================================================================
 * 8. DOMAINS & TLD PRICING
 * ============================================================================== */
export const domainPricing = {
  heroStartPrice: { inr: "₹139 /yr", usd: "$1.65 /yr" },

  // Featured TLDs displayed on Homepage hero pill bar
  homepageTlds: [
    { name: ".com", original: { inr: "₹1999", usd: "$23.99" }, discount: { inr: "₹1299", usd: "$15.49" } },
    { name: ".online", original: { inr: "₹1679", usd: "$19.99" }, discount: { inr: "₹299", usd: "$3.59" } },
    { name: ".site", original: { inr: "₹643", usd: "$7.69" }, discount: { inr: "₹199", usd: "$2.39" } },
    { name: ".xyz", original: { inr: "₹883", usd: "$10.59" }, discount: { inr: "₹338", usd: "$4.09" } },
    { name: ".shop", original: { inr: "₹867", usd: "$10.39" }, discount: { inr: "₹266", usd: "$3.19" } }
  ],

  // Featured TLDs on Domain Search page
  searchTlds: [
    { name: ".Com", original: { inr: "₹1265", usd: "$14.99" }, discount: { inr: "₹999", usd: "$11.99" } },
    { name: ".Net", original: { inr: "₹1679", usd: "$19.99" }, discount: { inr: "₹1399", usd: "$16.65" } },
    { name: ".Org", original: { inr: "₹643", usd: "$7.65" }, discount: { inr: "₹139", usd: "$1.65" } },
    { name: ".Xyz", original: { inr: "₹883", usd: "$10.50" }, discount: { inr: "₹699", usd: "$8.30" } },
    { name: ".Co.in", original: { inr: "₹723", usd: "$8.60" }, discount: { inr: "₹499", usd: "$5.95" } }
  ],

  // Featured TLDs on Domain Transfer page
  transferTlds: [
    { name: ".Com", original: { inr: "₹1794", usd: "$21.35" }, discount: { inr: "₹986", usd: "$11.75" } },
    { name: ".Net", original: { inr: "₹1899", usd: "$22.60" }, discount: { inr: "₹599", usd: "$7.15" } },
    { name: ".Org", original: { inr: "₹1299", usd: "$15.45" }, discount: { inr: "₹499", usd: "$5.95" } },
    { name: ".in", original: { inr: "₹867", usd: "$10.30" }, discount: { inr: "₹699", usd: "$8.30" } },
    { name: ".Co.in", original: { inr: "₹987", usd: "$11.75" }, discount: { inr: "₹699", usd: "$8.30" } }
  ],

  // Complete TLD rate card displayed on /tld-pricing
  allTlds: [
    {
      tld: ".com",
      category: "popular business",
      badge: "Hot",
      register: { inr: "₹999 /yr", usd: "$11.99 /yr" },
      originalRegister: { inr: "₹1265", usd: "$14.99" },
      renew: { inr: "₹1265 /yr", usd: "$14.99 /yr" },
      transfer: { inr: "₹986", usd: "$11.75" }
    },
    {
      tld: ".in",
      category: "popular india",
      badge: "India",
      register: { inr: "₹499 /yr", usd: "$5.95 /yr" },
      originalRegister: { inr: "₹723", usd: "$8.60" },
      renew: { inr: "₹699 /yr", usd: "$8.30 /yr" },
      transfer: { inr: "₹599", usd: "$7.15" }
    },
    {
      tld: ".co.in",
      category: "india business",
      register: { inr: "₹399 /yr", usd: "$4.75 /yr" },
      originalRegister: { inr: "₹599", usd: "$7.15" },
      renew: { inr: "₹549 /yr", usd: "$6.55 /yr" },
      transfer: { inr: "₹499", usd: "$5.95" }
    },
    {
      tld: ".net",
      category: "popular tech",
      register: { inr: "₹1399 /yr", usd: "$16.65 /yr" },
      originalRegister: { inr: "₹1679", usd: "$19.99" },
      renew: { inr: "₹1679 /yr", usd: "$19.99 /yr" },
      transfer: { inr: "₹1399", usd: "$16.65" }
    },
    {
      tld: ".org",
      category: "popular business",
      register: { inr: "₹1199 /yr", usd: "$14.30 /yr" },
      originalRegister: { inr: "₹1499", usd: "$17.90" },
      renew: { inr: "₹1499 /yr", usd: "$17.90 /yr" },
      transfer: { inr: "₹1199", usd: "$14.30" }
    },
    {
      tld: ".io",
      category: "popular tech",
      badge: "Startup",
      register: { inr: "₹3499 /yr", usd: "$41.99 /yr" },
      originalRegister: { inr: "₹4199", usd: "$50.00" },
      renew: { inr: "₹4199 /yr", usd: "$50.00 /yr" },
      transfer: { inr: "₹3499", usd: "$41.99" }
    },
    {
      tld: ".ai",
      category: "popular tech",
      badge: "AI Trending",
      register: { inr: "₹6499 /yr", usd: "$77.99 /yr" },
      originalRegister: { inr: "₹7999", usd: "$95.50" },
      renew: { inr: "₹7999 /yr", usd: "$95.50 /yr" },
      transfer: { inr: "₹6499", usd: "$77.99" }
    },
    {
      tld: ".store",
      category: "business",
      register: { inr: "₹299 /yr", usd: "$3.59 /yr" },
      originalRegister: { inr: "₹3499", usd: "$41.99" },
      renew: { inr: "₹3499 /yr", usd: "$41.99 /yr" },
      transfer: { inr: "₹299", usd: "$3.59" }
    },
    {
      tld: ".shop",
      category: "business",
      register: { inr: "₹266 /yr", usd: "$3.19 /yr" },
      originalRegister: { inr: "₹867", usd: "$10.39" },
      renew: { inr: "₹2499 /yr", usd: "$29.90 /yr" },
      transfer: { inr: "₹266", usd: "$3.19" }
    },
    {
      tld: ".tech",
      category: "tech",
      register: { inr: "₹399 /yr", usd: "$4.79 /yr" },
      originalRegister: { inr: "₹3899", usd: "$46.50" },
      renew: { inr: "₹3899 /yr", usd: "$46.50 /yr" },
      transfer: { inr: "₹399", usd: "$4.79" }
    },
    {
      tld: ".online",
      category: "popular",
      register: { inr: "₹299 /yr", usd: "$3.59 /yr" },
      originalRegister: { inr: "₹1679", usd: "$19.99" },
      renew: { inr: "₹2699 /yr", usd: "$32.20 /yr" },
      transfer: { inr: "₹299", usd: "$3.59" }
    },
    {
      tld: ".site",
      category: "popular",
      register: { inr: "₹199 /yr", usd: "$2.39 /yr" },
      originalRegister: { inr: "₹643", usd: "$7.69" },
      renew: { inr: "₹1999 /yr", usd: "$23.90 /yr" },
      transfer: { inr: "₹199", usd: "$2.39" }
    },
    {
      tld: ".xyz",
      category: "popular tech",
      register: { inr: "₹338 /yr", usd: "$4.09 /yr" },
      originalRegister: { inr: "₹883", usd: "$10.59" },
      renew: { inr: "₹999 /yr", usd: "$11.95 /yr" },
      transfer: { inr: "₹338", usd: "$4.09" }
    },
    {
      tld: ".app",
      category: "tech",
      register: { inr: "₹1299 /yr", usd: "$15.55 /yr" },
      originalRegister: { inr: "₹1599", usd: "$19.10" },
      renew: { inr: "₹1599 /yr", usd: "$19.10 /yr" },
      transfer: { inr: "₹1299", usd: "$15.55" }
    },
    {
      tld: ".dev",
      category: "tech",
      register: { inr: "₹1199 /yr", usd: "$14.35 /yr" },
      originalRegister: { inr: "₹1499", usd: "$17.90" },
      renew: { inr: "₹1499 /yr", usd: "$17.90 /yr" },
      transfer: { inr: "₹1199", usd: "$14.35" }
    },
    {
      tld: ".co",
      category: "popular business",
      register: { inr: "₹699 /yr", usd: "$8.30 /yr" },
      originalRegister: { inr: "₹2499", usd: "$29.90" },
      renew: { inr: "₹2499 /yr", usd: "$29.90 /yr" },
      transfer: { inr: "₹699", usd: "$8.30" }
    },
    {
      tld: ".biz",
      category: "business",
      register: { inr: "₹499 /yr", usd: "$5.95 /yr" },
      originalRegister: { inr: "₹1299", usd: "$15.50" },
      renew: { inr: "₹1299 /yr", usd: "$15.50 /yr" },
      transfer: { inr: "₹499", usd: "$5.95" }
    }
  ]
};

