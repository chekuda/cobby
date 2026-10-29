// English texts. The copy comes from docs/05-copy.md.
// `{shopName}` is filled in from config/shop.ts; `{ownerName}`, `{taxId}`,
// `{address}` and `{email}` from config/legal.ts.

import type { Dictionary } from "./es"

const en: Dictionary = {
  meta: {
    title: "Cobby · Snap your bag. Brew it better.",
    description:
      "Cobby reads the bag, keeps your coffees and guides every brew. Then finds similar coffees at your favorite shop.",
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
    tag: "Early access",
    title: "Snap your bag. Brew it better.",
    subtitle:
      "Cobby reads the bag, keeps your coffees and guides every brew. Then finds similar coffees at your favorite shop.",
    primary: "Bring Cobby to your shop",
    secondary: "I want to try it",
    note: "Works in your phone's browser. Nothing to download.",
  },
  // Example coffee shown inside the phone mockup (an illustration, not a real product)
  mockup: {
    label: "Example of the Cobby app: a saved coffee's card",
    screenTitle: "My coffees",
    coffeeName: "Guji Hambela",
    origin: "Ethiopia · Guji",
    process: "Washed",
    notesLabel: "Tasting notes",
    notes: ["Jasmine", "Peach", "Bergamot"],
    roasted: "Roasted Oct 15",
    ratingLabel: "Your rating",
    brew: "Brew it",
    similar: "Similar at {shopName}",
  },
  howItWorks: {
    title: "Four steps, from bag to cup",
    steps: [
      { title: "Snap it", text: "Point at the bag's label. Any roaster works." },
      {
        title: "Cobby reads it",
        text: "It picks out the name, origin, process and tasting notes. If something's off, you fix it.",
      },
      {
        title: "Save it",
        text: "Every coffee lands on your shelf, with its photo and notes.",
      },
      {
        title: "Brew it",
        text: "Pick a method and cups. Cobby gives you the recipe and the timer.",
      },
    ],
  },
  shelf: {
    title: "Your coffee shelf",
    text: "Every coffee you've tried, in one place: the bag photo, origin, notes, roast date and your rating. Saved on your phone, with no account or password.",
    // Example coffees for the illustration
    label: "Example of the coffee shelf in Cobby",
    items: [
      { name: "Guji Hambela", detail: "Ethiopia · Washed", rating: 4 },
      { name: "La Esperanza", detail: "Colombia · Honey", rating: 5 },
      { name: "Huila Pink Bourbon", detail: "Colombia · Natural", rating: 3 },
    ],
  },
  brew: {
    title: "Brew it better",
    text: "Recipes for V60, AeroPress, French press and espresso, with a timer that guides every pour. Then rate the cup, and Cobby tells you what to adjust next time.",
    calculator: {
      label: "Try it",
      method: "Method",
      cups: "Cups",
      shots: "Shots",
      fewer: "One less",
      more: "One more",
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
    comingLater: "Which flavors and origins your customers prefer.",
    foundingPartners: "We're looking for founding partner shops. Let's talk.",
    cta: "Bring Cobby to your shop",
    example: "Here's how it looks with {shopName}.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Which bags work?",
        a: "Any bag with a printed label. It works best with specialty coffee, which usually lists origin and notes.",
      },
      {
        q: "Where are my coffees saved?",
        a: "On your phone, in the browser. You don't need an account.",
      },
      { q: "Does it cost anything?", a: "It's free for coffee lovers." },
      {
        q: "Do I need to download anything?",
        a: "No. It works in your phone's browser, and you can add it to your home screen.",
      },
      { q: "Which languages?", a: "Spanish and English." },
      {
        q: "When can I use it?",
        a: "We're in early access. Leave your email and we'll let you know.",
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
      title: "Let me know when it's ready",
      email: "Email",
      placeholder: "you@email.com",
      submit: "Get early access",
      success: "You're on the list! We'll let you know.",
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
            "To reply to coffee shops that write to us, and to let you know when Cobby is available. We don't use it for anything else, and we don't sell it.",
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
            "This site presents Cobby, an app in early access. The information may change while we build it.",
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
