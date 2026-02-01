// ============================================
// SURGEON WEBSITE TEMPLATE V2 — SITE CONFIG
// ============================================
// Change these values to customize for any practice.
// Every text, color, feature toggle, and SEO field
// is controlled from this single file.
// ============================================

const SITE_CONFIG = {
  // ==========================================
  // PRACTICE INFORMATION
  // ==========================================
  practiceName: "Premier Plastic Surgery",
  practiceNameShort: "Premier PS",
  doctorName: "Dr. Jane Smith",
  doctorCredentials: "MD, FACS",
  doctorTitle: "Board-Certified Plastic Surgeon",
  tagline: "Where Artistry Meets Precision",
  heroHeadline: "Beauty Speaks Through You",
  heroSubheadline: "The Art of Transformation — Beverly Hills",
  heroDescription: "Experience world-class care and natural-looking results with a surgeon who combines artistic vision with surgical precision.",
  yearEstablished: 2005,

  // ==========================================
  // SOCIAL PROOF / STATS (shown in counter bar)
  // ==========================================
  stats: {
    proceduresPerformed: 15000,
    yearsExperience: 20,
    googleRating: 4.9,
    googleReviewCount: 487,
    photoGalleryCount: 5000,
    countriesServed: 30
  },

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  phone: "(555) 123-4567",
  phoneClean: "5551234567",
  fax: "(555) 123-4568",
  email: "info@premierplasticsurgery.com",
  textNumber: "5551234567",

  // ==========================================
  // LOCATION
  // ==========================================
  address: {
    street: "123 Medical Plaza Drive, Suite 200",
    city: "Beverly Hills",
    state: "CA",
    zip: "90210",
    full: "123 Medical Plaza Drive, Suite 200, Beverly Hills, CA 90210"
  },
  geo: {
    lat: 34.0736,
    lng: -118.4004
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sus",

  // Additional locations (set to null or [] if single location)
  additionalLocations: [],

  // ==========================================
  // OFFICE HOURS
  // ==========================================
  hours: {
    display: [
      { days: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
      { days: "Friday", time: "8:00 AM – 3:00 PM" },
      { days: "Saturday – Sunday", time: "Closed" }
    ],
    schema: [
      { days: ["Monday","Tuesday","Wednesday","Thursday"], opens: "08:00", closes: "17:00" },
      { days: ["Friday"], opens: "08:00", closes: "15:00" }
    ]
  },

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  social: {
    facebook: "https://facebook.com/premierplasticsurgery",
    instagram: "https://instagram.com/premierplasticsurgery",
    youtube: "https://youtube.com/@premierplasticsurgery",
    tiktok: "",
    twitter: "",
    realself: "https://www.realself.com/find/premier-plastic-surgery",
    linkedin: ""
  },

  // ==========================================
  // SEO SETTINGS
  // ==========================================
  seo: {
    primaryCity: "Beverly Hills",
    primaryState: "CA",
    stateFullName: "California",
    serviceArea: "Beverly Hills, Los Angeles, and Southern California",
    homeMetaDescription: "Premier Plastic Surgery in Beverly Hills offers breast augmentation, facelifts, tummy tucks & mommy makeovers. Board-certified plastic surgeon Dr. Jane Smith. Schedule your consultation today.",
    homeMetaKeywords: "plastic surgeon Beverly Hills, breast augmentation Beverly Hills, facelift, tummy tuck, mommy makeover, board certified plastic surgeon, liposuction",
    businessType: "PlasticSurgery",
    canonicalDomain: "https://premierplasticsurgery.com"
  },

  // ==========================================
  // ABOUT / DOCTOR BIO
  // ==========================================
  about: {
    shortBio: "Dr. Jane Smith is a double board-certified plastic surgeon serving Beverly Hills and the greater Los Angeles area. With over 20 years of experience and more than 15,000 procedures performed, she combines surgical precision with an artistic eye to deliver natural, beautiful results.",
    philosophy: "We believe that the best plastic surgery enhances your natural beauty — not changes who you are. Every procedure is personalized, every patient is unique, and every result should look like the best version of you.",
    credentials: [
      "Double Board Certified — American Board of Plastic Surgery & American Board of Surgery",
      "Fellow of the American College of Surgeons (FACS)",
      "Active Member — American Society of Plastic Surgeons (ASPS)",
      "Active Member — The Aesthetic Society (ASAPS)",
      "Castle Connolly Top Doctor — 10 Consecutive Years"
    ],
    education: [
      { institution: "Harvard University", degree: "Bachelor of Science, Magna Cum Laude" },
      { institution: "Johns Hopkins School of Medicine", degree: "Doctor of Medicine" },
      { institution: "UCLA Medical Center", degree: "General Surgery Residency" },
      { institution: "NYU Langone Health", degree: "Plastic Surgery Fellowship" }
    ],
    awards: [
      "Castle Connolly Top Doctor (2015–2025)",
      "Newsweek America's Best Plastic Surgeons",
      "RealSelf Top Doctor — Hall of Fame",
      "Best of Beverly Hills — Plastic Surgery"
    ],
    memberships: [
      { name: "American Board of Plastic Surgery", logo: "assets/logo-abps.png" },
      { name: "American Society of Plastic Surgeons", logo: "assets/logo-asps.png" },
      { name: "The Aesthetic Society", logo: "assets/logo-aesthetic.png" },
      { name: "Fellow, American College of Surgeons", logo: "assets/logo-facs.png" }
    ]
  },

  // ==========================================
  // TEAM (additional providers)
  // ==========================================
  team: [
    // { name: "Sarah Johnson, PA-C", title: "Physician Assistant & Aesthetics Specialist", photo: "images/team-sarah.jpg", bio: "..." },
  ],

  // ==========================================
  // SIGNATURE / BRANDED PROCEDURES
  // ==========================================
  signatureProcedures: [
    {
      name: "Natural Contour Mommy Makeover™",
      tagline: "Restore. Reshape. Reclaim.",
      description: "Our signature combination procedure addresses all post-pregnancy changes in a single session with accelerated recovery protocols.",
      link: "services/mommy-makeover.html",
      image: "images/mommy-feature.jpg"
    },
    {
      name: "Precision Breast Augmentation",
      tagline: "Personalized to your body, not a catalog.",
      description: "Using 3D imaging and meticulous planning, we create results that look and feel naturally yours.",
      link: "services/breast-augmentation.html",
      image: "images/breast-feature.jpg"
    },
    {
      name: "Timeless Lift Facelift",
      tagline: "Turn back the clock — without looking like you did.",
      description: "Our advanced deep-plane technique delivers dramatic, long-lasting rejuvenation with hidden incisions and rapid recovery.",
      link: "services/facelift.html",
      image: "images/facelift-feature.jpg"
    }
  ],

  // ==========================================
  // SERVICES OFFERED
  // ==========================================
  services: {
    breast: {
      enabled: true,
      icon: "fa-heart",
      label: "Breast",
      procedures: [
        { name: "Breast Augmentation", slug: "breast-augmentation", enabled: true },
        { name: "Breast Lift", slug: "breast-lift", enabled: true },
        { name: "Breast Reduction", slug: "breast-reduction", enabled: true },
        { name: "Breast Implant Revision", slug: "breast-implant-revision", enabled: true },
        { name: "Breast Implant Removal", slug: "breast-implant-removal", enabled: true }
      ]
    },
    body: {
      enabled: true,
      icon: "fa-spa",
      label: "Body",
      procedures: [
        { name: "Tummy Tuck", slug: "tummy-tuck", enabled: true },
        { name: "Liposuction", slug: "liposuction", enabled: true },
        { name: "Mommy Makeover", slug: "mommy-makeover", enabled: true },
        { name: "Body Contouring", slug: "body-contouring", enabled: true },
        { name: "Arm Lift", slug: "arm-lift", enabled: true },
        { name: "Thigh Lift", slug: "thigh-lift", enabled: true },
        { name: "Brazilian Butt Lift", slug: "bbl", enabled: true },
        { name: "Male Breast Reduction", slug: "male-breast-reduction", enabled: true }
      ]
    },
    face: {
      enabled: true,
      icon: "fa-user",
      label: "Face",
      procedures: [
        { name: "Facelift", slug: "facelift", enabled: true },
        { name: "Neck Lift", slug: "neck-lift", enabled: true },
        { name: "Eyelid Surgery", slug: "eyelid-surgery", enabled: true },
        { name: "Brow Lift", slug: "brow-lift", enabled: true },
        { name: "Rhinoplasty", slug: "rhinoplasty", enabled: true },
        { name: "Chin Surgery", slug: "chin-surgery", enabled: true }
      ]
    },
    nonSurgical: {
      enabled: true,
      icon: "fa-magic",
      label: "Non-Surgical",
      procedures: [
        { name: "Botox & Dysport", slug: "botox", enabled: true },
        { name: "Dermal Fillers", slug: "fillers", enabled: true },
        { name: "CoolSculpting", slug: "coolsculpting", enabled: true },
        { name: "Morpheus8", slug: "morpheus8", enabled: true },
        { name: "Laser Treatments", slug: "laser-treatments", enabled: true },
        { name: "Chemical Peels", slug: "chemical-peels", enabled: true }
      ]
    }
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      name: "Sarah M.",
      procedure: "Mommy Makeover",
      rating: 5,
      text: "Dr. Smith gave me my confidence back. After three kids, I never thought I'd feel like myself again. The results are beyond what I imagined — natural, beautiful, and life-changing.",
      location: "Beverly Hills, CA",
      platform: "Google",
      videoUrl: null
    },
    {
      name: "Jennifer L.",
      procedure: "Breast Augmentation",
      rating: 5,
      text: "From the consultation to recovery, every step was handled with incredible care. My results look so natural — even my closest friends couldn't tell. Just that I looked amazing.",
      location: "Los Angeles, CA",
      platform: "RealSelf",
      videoUrl: null
    },
    {
      name: "Amanda K.",
      procedure: "Facelift",
      rating: 5,
      text: "I look 15 years younger but still look like ME. That was my biggest fear and Dr. Smith completely understood. Her artistry is unmatched.",
      location: "Santa Monica, CA",
      platform: "Google",
      videoUrl: null
    },
    {
      name: "Rachel D.",
      procedure: "Tummy Tuck",
      rating: 5,
      text: "The office, the staff, the results — everything was five-star. I only wish I had done this sooner. If you're on the fence, just book the consultation.",
      location: "Pasadena, CA",
      platform: "Yelp",
      videoUrl: null
    }
  ],

  // ==========================================
  // GALLERY
  // ==========================================
  gallery: {
    enabled: true,
    disclaimer: "Individual results may vary. Photos are of actual patients who have given consent for their use.",
    categories: ["Breast Augmentation", "Breast Lift", "Tummy Tuck", "Mommy Makeover", "Facelift", "Liposuction", "Body Contouring"]
  },

  // ==========================================
  // FINANCING
  // ==========================================
  financing: {
    enabled: true,
    providers: [
      { name: "CareCredit", logo: "assets/logo-carecredit.png", url: "https://www.carecredit.com" },
      { name: "Prosper Healthcare Lending", logo: "assets/logo-prosper.png", url: "https://www.prosperhealthcare.com" },
      { name: "PatientFi", logo: "assets/logo-patientfi.png", url: "https://www.patientfi.com" }
    ],
    headline: "Beautiful Results, Flexible Payments",
    description: "We believe everyone deserves to feel confident. Our financing partners make it easy with low monthly payments, quick approvals, and competitive rates.",
    features: [
      "Plans starting as low as $99/month",
      "Quick online pre-qualification (no impact on credit)",
      "0% APR promotional periods available",
      "Apply in minutes, get approved the same day"
    ]
  },

  // ==========================================
  // FEATURES TOGGLES
  // ==========================================
  features: {
    heroVideo: false,                // Set true + provide heroVideoUrl
    heroVideoUrl: "",                // MP4 URL for hero background
    virtualConsultation: true,       // Show virtual consult CTA
    virtualConsultUrl: "",           // Link to virtual consult booking
    chatWidget: true,                // Show floating chat/text button
    chatProvider: "sms",             // "sms" | "intercom" | "drift" | "custom"
    blogEnabled: true,               // Show blog link in nav
    instagramFeed: false,            // Show Instagram feed section
    instagramHandle: "",
    flyInProgram: false,             // Show fly-in/travel program section
    beforeAfterSlider: true,         // Interactive B/A slider in gallery
    procedureQuiz: true,             // "Find Your Procedure" quiz
    darkMode: false,                 // Enable dark mode toggle
    multiDoctor: false,              // Multiple doctor profiles
    medSpa: false,                   // Show Med Spa section/nav
    patientPortal: false,            // Show patient portal link
    patientPortalUrl: "",
    appointmentBooking: true,        // Online booking integration
    appointmentBookingUrl: "",       // Calendly/Jane/etc URL
    googleReviewsWidget: true,       // Pull live Google reviews
    googlePlaceId: ""                // Google Place ID for reviews
  },

  // ==========================================
  // DESIGN / THEME
  // ==========================================
  theme: {
    // Color palette — luxury medical aesthetic
    colorPrimary: "#1a1f2e",          // Deep navy (headers, nav, dark sections)
    colorPrimaryLight: "#2d3548",     // Lighter navy
    colorSecondary: "#c9a96e",        // Warm gold (accents, CTAs, highlights)
    colorSecondaryDark: "#b08d4f",    // Darker gold for hover
    colorAccent: "#8b6f4e",           // Bronze accent
    colorText: "#2c2c2c",            // Near-black body text
    colorTextLight: "#5a5a5a",       // Muted text
    colorTextOnDark: "#f5f0eb",      // Light text on dark backgrounds
    colorBackground: "#ffffff",       // Main background
    colorBackgroundAlt: "#faf8f5",   // Warm off-white sections
    colorBackgroundDark: "#1a1f2e",  // Dark sections
    colorBorder: "#e8e3dc",          // Subtle warm border
    colorSuccess: "#4a7c59",         // Green for trust/success
    colorError: "#c0392b",           // Error states

    // Typography
    fontHeading: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontAccent: "'Cormorant Garamond', Georgia, serif",  // For pull quotes, special text

    // Layout
    containerMax: "1320px",
    containerNarrow: "960px",
    borderRadius: "8px",
    borderRadiusLg: "16px",

    // Hero style
    heroOverlayColor: "rgba(26, 31, 46, 0.55)",
    heroMinHeight: "90vh"
  },

  // ==========================================
  // PROCEDURE QUIZ CONFIGURATION
  // ==========================================
  quiz: {
    headline: "Not Sure Where to Start?",
    subheadline: "Take our 60-second quiz to find the right procedure for you.",
    questions: [
      {
        question: "What area would you most like to improve?",
        options: [
          { text: "Breasts", icon: "fa-heart", tags: ["breast"] },
          { text: "Stomach & Body", icon: "fa-spa", tags: ["body"] },
          { text: "Face & Neck", icon: "fa-user", tags: ["face"] },
          { text: "Multiple Areas", icon: "fa-star", tags: ["combo"] }
        ]
      },
      {
        question: "What's your primary concern?",
        options: [
          { text: "Size or volume", tags: ["augmentation"] },
          { text: "Sagging or drooping", tags: ["lift"] },
          { text: "Excess skin or fat", tags: ["contouring"] },
          { text: "Signs of aging", tags: ["rejuvenation"] },
          { text: "Post-pregnancy changes", tags: ["mommy"] }
        ]
      },
      {
        question: "Have you had children?",
        options: [
          { text: "Yes, and I'm done having kids", tags: ["mommy-candidate"] },
          { text: "Yes, but may have more", tags: ["wait-recommended"] },
          { text: "No", tags: ["no-children"] }
        ]
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
