// English texts. The copy comes from docs/05-copy.md.
// `{shopName}` is filled in from config/shop.ts; `{ownerName}`, `{taxId}`,
// `{address}` and `{email}` from config/legal.ts.

import type { Dictionary } from "./es"

const en: Dictionary = {
  meta: {
    title: "Cobby · Snap your bag. Brew it better. Share it.",
    description:
      "Cobby keeps your coffees and guides every brew. Then finds similar coffees at your favorite shop.",
  },
  header: {
    homeLabel: "Cobby, home",
    nav: {
      howItWorks: "How it works",
      brew: "Brew",
      forShops: "For coffee shops",
      faq: "FAQ",
    },
    cta: "Bring Cobby to your shop",
    menu: "Menu",
    languageLabel: "Language",
  },
  hero: {
    tag: "Private beta",
    title: "Snap your bag. Brew it better. Share it.",
    subtitle:
      "Cobby keeps your coffees and guides every brew. Then finds similar coffees at your favorite shop.",
    primary: "Bring Cobby to your shop",
    secondary: "I want to try it",
    note: "Works in your phone's browser. Nothing to download.",
  },
  // Example coffee shown inside the phone mockup (an illustration, not a real product)
  families: {
    fruity: "Fruity",
    floral: "Floral",
    sweet: "Sweet",
    nutty: "Nutty",
    spicy: "Spicy",
  },
  mockup: {
    label: "Example of the Cobby app: a tasting share card",
    byShop: "by {shopName}",
    coffeeName: "Guji Hambela",
    details: "Ethiopia · Guji · Washed",
    stars: 4,
    outOf: "{n} out of 5",
    method: "V60",
    notes: ["Jasmine", "Peach", "Bergamot"],
  },
  howItWorks: {
    title: "Three steps, from bag to cup",
    steps: [
      {
        title: "Snap it",
        text: "Take a photo of the bag, then find the coffee in the shop or type in its details. Any roaster works.",
      },
      {
        title: "Save it",
        text: "Every coffee lands on your shelf, with its photo and notes.",
      },
      {
        title: "Brew it",
        text: "Pick a method and cups. Cobby gives you the recipe, and you tune it to your taste.",
      },
    ],
  },
  shelf: {
    title: "Your coffee shelf",
    text: "Every coffee you've tried, in one place: the bag photo, origin, notes, roast date and your rating. You sign in with a code sent to your email, no password, and your coffees are kept on servers in the European Union.",
    // Example coffees for the illustration
    label: "Example of the coffee shelf in Cobby",
    items: [
      { name: "Guji Hambela", detail: "Ethiopia · Washed", rating: 4, family: "floral" },
      { name: "La Esperanza", detail: "Colombia · Honey", rating: 5, family: "sweet" },
      { name: "Huila Pink Bourbon", detail: "Colombia · Natural", rating: 3, family: "fruity" },
    ],
  },
  brew: {
    title: "Brew it better",
    text: "Recipes for seven methods: V60, Chemex, AeroPress, French press, espresso, moka pot and cold brew. With “Tune it to my taste” you keep your own version for each coffee, down to your grinder's clicks. And after every cup, Cobby suggests what to change.",
    soonTag: "Coming soon",
    soon: "A timer that guides you pour by pour.",
    calculator: {
      label: "Try it: tune it to your taste",
      method: "Method",
      perCup: "For 1 cup",
      perShot: "For 1 shot",
      base: "Base recipe",
      yours: "Your version",
      reset: "Back to the original recipe",
      lower: "Lower: {label}",
      raise: "Raise: {label}",
      clicks: "Your grinder's clicks",
      ratio: "Ratio",
      stronger: "Stronger than the base recipe",
      milder: "Milder than the base recipe",
      same: "As strong as the base recipe",
      note: "This is how “Tune it to my taste” works in the app: your version is saved for that coffee, and Cobby never touches your numbers.",
      coffee: "Coffee",
      water: "Water",
      yield: "In the cup",
      temperature: "Temperature",
      grind: "Grind",
      methods: {
        v60: "V60",
        aeropress: "AeroPress",
        frenchPress: "French press",
        espresso: "Espresso",
      },
      grinds: {
        fine: "Fine",
        mediumFine: "Medium-fine",
        mediumCoarse: "Medium-coarse",
        coarse: "Coarse",
      },
    },
  },
  similar: {
    title: "Find your next favorite",
    text: "Cobby looks at the coffees you rate highest (fruity, sweet, floral…) and suggests similar ones at {shopName}.",
    link: "See the coffees at {shopName}",
    familiesLabel: "Flavor families",
  },
  cobby: {
    title: "Meet Cobby",
    text: "Cobby is also a character. He keeps you company in the app, and when you rate a coffee, he pulls the face for you: from “meh” to “love it!”.",
    label: "Cobby, winking",
    facesLabel: "Cobby's faces, from 1 to 5 stars",
    faces: ["Meh", "Oh!", "Nice", "Like it", "Love it!"],
    stars: "{n} out of 5 stars",
  },
  highlights: {
    title: "Everything inside",
    lead: "What already works in the beta, on top of saving and brewing your coffees.",
    items: [
      {
        title: "Recipes your way",
        text: "Tune the grams, water, temperature and your grinder's clicks. Cobby keeps your version for each coffee.",
      },
      {
        title: "Coffees for you",
        text: "Your flavor profile, and coffees like the ones you love from the {shopName} catalog.",
      },
      {
        title: "Prices up front",
        text: "Every shop coffee with its price and bag size, and a button to buy it at {shopName}.",
      },
      {
        title: "Challenges and missions",
        text: "A new challenge every month, and missions with prizes from the shop.",
      },
      {
        title: "Stickers",
        text: "They come on their own from what you log: your first coffee, new origins, every brew method…",
      },
      {
        title: "Invite a friend",
        text: "Share your link, and when your friend logs their first tasting, you both get a prize.",
      },
      {
        title: "Made for stories",
        text: "Cards of your tastings, your recipes and your month in coffee, ready to share.",
      },
      {
        title: "Notices that matter",
        text: "Only if you want them: new missions or a prize about to expire. Four a month at most.",
      },
    ],
  },
  shops: {
    title: "For coffee shops and roasters",
    lead: "Give your customers a way to enjoy your coffee more, and to come back for more.",
    benefits: [
      { title: "Your brand", text: "Your logo and name on Cobby." },
      { title: "Your catalog", text: "Similar-coffee suggestions link to your shop." },
      {
        title: "Customers who come back",
        text: "When someone loves a coffee, they know where to buy it again.",
      },
      {
        title: "Next to your online store",
        text: "It works alongside the shop you already have.",
      },
    ],
    comingLaterTag: "Coming later",
    comingLater: "A dashboard for your shop, with your catalog and your customers.",
    leversTitle: "Tools to sell more",
    levers: [
      {
        title: "Challenge of the month",
        text: "Pick a coffee, an origin or a process each month and push what you want to sell.",
      },
      {
        title: "Missions with a prize",
        text: "Your customers complete missions in the app and earn a prize for their next order.",
      },
      {
        title: "Invite a friend",
        text: "Each customer can bring another one, with a prize for both.",
      },
      {
        title: "Notices that bring them back",
        text: "Cobby reminds each customer of their monthly prizes, only if they turned notices on, at no cost per notice.",
      },
      {
        title: "What your customers like",
        text: "Which coffees, origins and processes score best, from real ratings.",
      },
      {
        title: "Sales you can see",
        text: "Buy buttons reach your shop tagged, and the stats use no cookies.",
      },
    ],
    foundingPartners: "We're looking for founding partner shops. Let's talk.",
    cta: "Bring Cobby to your shop",
    example: "Here's how it looks with {shopName}.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Where are my coffees saved?",
        a: "In your account, on servers in the European Union. You sign in with a code sent to your email, no password, and you can download your data or delete your account whenever you like.",
      },
      { q: "Does it cost anything?", a: "It's free for coffee lovers." },
      {
        q: "Do I need to download anything?",
        a: "No. It works in your phone's browser, and you can add it to your home screen.",
      },
      { q: "Which languages?", a: "Spanish and English." },
      {
        q: "When can I use it?",
        a: "It's in a private beta with a small group right now. Leave your email and we'll give you access.",
      },
    ],
  },
  forms: {
    consentBefore: "I have read and accept the ",
    consentLink: "privacy policy",
    consentAfter: ".",
    sending: "Sending…",
    invalid: "Please check the marked fields.",
    invalidEmail: "Enter a valid email.",
    required: "This field is required.",
    consentRequired: "We need your consent to keep your details.",
    error: "Couldn't send it. Please try again.",
    shop: {
      title: "Do you run a coffee shop?",
      text: "Tell us a bit and we'll get back to you.",
      name: "Name",
      shopName: "Shop name",
      email: "Email",
      website: "Website (optional)",
      message: "Message (optional)",
      submit: "Send",
      success: "Thanks! We'll be in touch soon.",
    },
    buyer: {
      title: "Ask for beta access",
      email: "Email",
      placeholder: "you@email.com",
      submit: "Ask for access",
      success: "You're on the list! We'll be in touch soon.",
    },
    app: {
      tag: "Private beta",
      text: "The app is already up and running with a small group. Scan the code to open it on your phone, and if you don't have access yet, ask for it with your email above.",
      textPhone: "The app is already up and running with a small group. Open it, and if you don't have access yet, ask for it with your email above.",
      qrLabel: "QR code to open the Cobby app on your phone",
      open: "Open the app",
    },
  },
  footer: {
    line: "Cobby: save, brew and discover specialty coffee.",
    privacy: "Privacy",
    legal: "Legal notice",
    contact: "Contact",
  },
  // Legal pages. Not legal advice: have the final texts checked (docs/05-copy.md).
  legal: {
    missing: "[to be completed]",
    back: "Back to Cobby",
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          title: "Who is responsible",
          paragraphs: [
            "{ownerName}, tax ID {taxId}, registered at {address}. You can write to {email}.",
          ],
        },
        {
          title: "What data we collect",
          paragraphs: [
            "Coffee-shop form: name, shop name, email and, if you give them, website and message.",
            "Early-access form: your email and the page language.",
            "A technical cookie (cobby-lang) that only remembers the language you choose.",
            "Anonymous visit statistics, without cookies (Vercel Web Analytics).",
          ],
        },
        {
          title: "What we use it for",
          paragraphs: [
            "To reply to coffee shops that write to us, and to give you access to Cobby. We don't use it for anything else, and we don't sell it.",
          ],
        },
        {
          title: "Legal basis",
          paragraphs: [
            "Your consent, given by ticking the box on the form. You can withdraw it at any time.",
          ],
        },
        {
          title: "How long we keep it",
          paragraphs: [
            "Until you ask us to delete it, or until it's no longer needed for these purposes.",
          ],
        },
        {
          title: "Who else handles it",
          paragraphs: [
            "Google, because the forms are saved in a Google spreadsheet, and Vercel, which hosts this site and counts visits. Both act as data processors.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You can ask to access, correct, delete, object to, restrict or move your data by writing to {email}.",
            "If you think we don't handle it properly, you can complain to the Spanish Data Protection Agency (aepd.es).",
          ],
        },
      ],
    },
    notice: {
      title: "Legal notice",
      sections: [
        {
          title: "Owner",
          paragraphs: [
            "{ownerName}, tax ID {taxId}, registered at {address}. Contact: {email}.",
          ],
        },
        {
          title: "Use of this site",
          paragraphs: [
            "This site presents Cobby, an app in a private beta. The information may change while we build it.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "The texts, design and the Cobby brand belong to their owner. Shop names and brands belong to their owners.",
          ],
        },
      ],
    },
  },
}

export default en
