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
  discount?: string;
  freeDomain?: boolean;
  freeDomainNote?: string;
}

export interface HostingPlan {
  id: string;
  name: string;
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
      name: "Basic",
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/basic",
      features: [
        "1 Website",
        "5 GB SSD Storage",
        "50 GB Monthly Bandwidth",
        "1 Email Account (500 MB)",
        "2 Databases & 5 Subdomains",
        "Free SSL Certificate",
        "One-Click WordPress Installation",
        "Daily Backups (3-Day Retention)*",
        "1 Standard Website Migration",
        "Standard Hosting Support"
      ],
      pricing: {
        monthly: {
          inr: "₹149",
          usd: "$1.79",
          totalInr: "₹149 each month",
          totalUsd: "$1.79 each month",
          periodLabel: "each month",
          freeDomain: false
        },
        quarterly: {
          inr: "₹139",
          usd: "$1.69",
          totalInr: "₹417 every 3 months",
          totalUsd: "$5.07 every 3 months",
          periodLabel: "every 3 months",
          freeDomain: false
        },
        semiannual: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹714 every 6 months",
          totalUsd: "$8.70 every 6 months",
          periodLabel: "every 6 months",
          freeDomain: false
        },
        annual: {
          inr: "₹99",
          usd: "$1.19",
          totalInr: "₹1,188 every year",
          totalUsd: "$14.28 every year",
          periodLabel: "every year",
          freeDomain: false
        },
        biennial: {
          inr: "₹69",
          usd: "$0.85",
          totalInr: "₹1,656 billed upfront for 2 years",
          totalUsd: "$19.99 billed upfront for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 54% compared with monthly billing",
          freeDomain: true,
          freeDomainNote: "1 domain FREE for the first year"
        }
      }
    },
    starter: {
      id: "starter",
      name: "Starter",
      badge: "Recommended",
      isPopular: true,
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/starter",
      features: [
        "5 Websites",
        "15 GB SSD Storage",
        "150 GB Monthly Bandwidth",
        "5 Email Accounts (1 GB each)",
        "10 Databases & 15 Subdomains",
        "Free SSL Certificates (All Sites)",
        "WordPress + Softaculous 1-Click",
        "LiteSpeed Server",
        "Imunify360 Server Security",
        "Daily Backups (3-Day Retention)*"
      ],
      pricing: {
        monthly: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹249 each month",
          totalUsd: "$2.99 each month",
          periodLabel: "each month",
          freeDomain: false
        },
        quarterly: {
          inr: "₹229",
          usd: "$2.75",
          totalInr: "₹687 every 3 months",
          totalUsd: "$8.25 every 3 months",
          periodLabel: "every 3 months",
          freeDomain: false
        },
        semiannual: {
          inr: "₹199",
          usd: "$2.39",
          totalInr: "₹1,194 every 6 months",
          totalUsd: "$14.34 every 6 months",
          periodLabel: "every 6 months",
          freeDomain: false
        },
        annual: {
          inr: "₹159",
          usd: "$1.89",
          totalInr: "₹1,908 every year",
          totalUsd: "$22.68 every year",
          periodLabel: "every year",
          freeDomain: false
        },
        biennial: {
          inr: "₹119",
          usd: "$1.45",
          totalInr: "₹2,856 billed upfront for 2 years",
          totalUsd: "$34.80 billed upfront for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 52% compared with monthly billing",
          freeDomain: true,
          freeDomainNote: "1 domain FREE for the first year"
        }
      }
    },
    elite: {
      id: "elite",
      name: "Elite",
      orderUrl: "https://hostamble.com/dash/store/sharedhosting/elite",
      features: [
        "20 Websites",
        "50 GB NVMe Storage",
        "500 GB Monthly Bandwidth",
        "20 Email Accounts (1 GB each)",
        "40 Databases & 50 Subdomains",
        "Free SSL Certificates (All Sites)",
        "WordPress + Softaculous 1-Click",
        "LiteSpeed Server",
        "Imunify360 Server Security",
        "Daily Backups (3-Day Retention)*",
        "Free Migration",
        "Standard Hosting Support"
      ],
      pricing: {
        monthly: {
          inr: "₹399",
          usd: "$4.79",
          totalInr: "₹399 each month",
          totalUsd: "$4.79 each month",
          periodLabel: "each month",
          freeDomain: false
        },
        quarterly: {
          inr: "₹349",
          usd: "$4.19",
          totalInr: "₹1,047 every 3 months",
          totalUsd: "$12.57 every 3 months",
          periodLabel: "every 3 months",
          freeDomain: false
        },
        semiannual: {
          inr: "₹299",
          usd: "$3.59",
          totalInr: "₹1,794 every 6 months",
          totalUsd: "$21.54 every 6 months",
          periodLabel: "every 6 months",
          freeDomain: false
        },
        annual: {
          inr: "₹249",
          usd: "$2.99",
          totalInr: "₹2,988 every year",
          totalUsd: "$35.88 every year",
          periodLabel: "every year",
          freeDomain: false
        },
        biennial: {
          inr: "₹199",
          usd: "$2.39",
          totalInr: "₹4,776 billed upfront for 2 years",
          totalUsd: "$57.36 billed upfront for 2 years",
          periodLabel: "billed upfront for 2 years",
          discount: "Save 50% compared with monthly billing",
          freeDomain: true,
          freeDomainNote: "1 domain FREE for the first year"
        }
      }
    }
  }
};

/* ==============================================================================
 * 2. WORDPRESS HOSTING PRICING
 * ============================================================================== */
export const wordpressHosting = {
  heroStartPrice: { inr: "₹ 59/mo", usd: "$0.79/mo" },
  plans: {
    starter: {
      id: "starter",
      name: "Starter",
      pricing: {
        monthly: { inr: "₹59", usd: "$0.79" },
        quarterly: { inr: "₹177", usd: "$2.35" },
        semiannual: { inr: "₹354", usd: "$4.70" },
        annual: { inr: "₹708", usd: "$8.40" },
        yearly: { inr: "₹708", usd: "$8.40" }
      }
    },
    essential: {
      id: "essential",
      name: "Essential",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹99", usd: "$1.19" },
        quarterly: { inr: "₹297", usd: "$3.55" },
        semiannual: { inr: "₹594", usd: "$7.10" },
        annual: { inr: "₹1188", usd: "$14.15" },
        yearly: { inr: "₹1188", usd: "$14.15" }
      }
    },
    growth: {
      id: "growth",
      name: "Growth",
      pricing: {
        monthly: { inr: "₹139", usd: "$1.65" },
        quarterly: { inr: "₹417", usd: "$4.95" },
        semiannual: { inr: "₹834", usd: "$9.90" },
        annual: { inr: "₹1668", usd: "$19.80" },
        yearly: { inr: "₹1668", usd: "$19.80" }
      }
    },
    prime: {
      id: "prime",
      name: "Prime",
      pricing: {
        monthly: { inr: "₹179", usd: "$2.15" },
        quarterly: { inr: "₹537", usd: "$6.45" },
        semiannual: { inr: "₹1074", usd: "$12.90" },
        annual: { inr: "₹2148", usd: "$25.60" },
        yearly: { inr: "₹2148", usd: "$25.60" }
      }
    },
    personal: {
      id: "personal",
      name: "Starter",
      pricing: {
        monthly: { inr: "₹59", usd: "$0.79" },
        quarterly: { inr: "₹177", usd: "$2.35" },
        semiannual: { inr: "₹354", usd: "$4.70" },
        annual: { inr: "₹708", usd: "$8.40" },
        yearly: { inr: "₹708", usd: "$8.40" }
      }
    },
    plus: {
      id: "plus",
      name: "Essential",
      isPopular: true,
      pricing: {
        monthly: { inr: "₹99", usd: "$1.19" },
        quarterly: { inr: "₹297", usd: "$3.55" },
        semiannual: { inr: "₹594", usd: "$7.10" },
        annual: { inr: "₹1188", usd: "$14.15" },
        yearly: { inr: "₹1188", usd: "$14.15" }
      }
    },
    expert: {
      id: "expert",
      name: "Growth",
      pricing: {
        monthly: { inr: "₹139", usd: "$1.65" },
        quarterly: { inr: "₹417", usd: "$4.95" },
        semiannual: { inr: "₹834", usd: "$9.90" },
        annual: { inr: "₹1668", usd: "$19.80" },
        yearly: { inr: "₹1668", usd: "$19.80" }
      }
    },
    ultimate: {
      id: "ultimate",
      name: "Prime",
      pricing: {
        monthly: { inr: "₹179", usd: "$2.15" },
        quarterly: { inr: "₹537", usd: "$6.45" },
        semiannual: { inr: "₹1074", usd: "$12.90" },
        annual: { inr: "₹2148", usd: "$25.60" },
        yearly: { inr: "₹2148", usd: "$25.60" }
      }
    }
  }
};

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

