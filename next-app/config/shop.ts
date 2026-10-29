// The coffee shop shown on Cobby (docs/01-landing.md).
// This is the ONLY place where shop details live: to use Cobby for another
// shop, edit this file and nothing else. There is no color field on purpose:
// Ember is the accent for every shop (docs/03-design.md).

export type ShopConfig = {
  /** Shop name, as shown on the page. */
  name: string
  /** Logo file in `public/` (SVG or PNG), e.g. "/shop-logo.svg". Empty: the name is shown as text. */
  logo: string
  /** Shop home page. */
  websiteUrl: string
  /** Page with all the coffees: where "Find similar coffees" links to. */
  shopUrl: string
  /** Where coffee shops and buyers can write. */
  contactEmail: string
  /** Optional short line about the shop, in both languages. */
  tagline: { es: string; en: string }
}

export const shop: ShopConfig = {
  name: "specialtyCoffeeMarket",
  logo: "", // TODO(user): add the logo to public/ and write its path here
  websiteUrl: "https://www.specialtycoffeemarket.es",
  shopUrl: "https://www.specialtycoffeemarket.es/category/all-products",
  contactEmail: "", // TODO(user): type the contact email here
  tagline: { es: "", en: "" },
}
