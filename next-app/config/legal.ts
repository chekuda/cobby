// Legal details for the privacy policy and legal notice pages (docs/01-landing.md).
// TODO(user): fill these in yourself. Don't paste them into the chat.

export type LegalConfig = {
  /** Person or company legally responsible for the site and the form data. */
  ownerName: string
  /** Tax ID (NIF / CIF). */
  taxId: string
  /** Postal address. */
  address: string
  /** Email for privacy requests (access, deletion…). */
  email: string
}

export const legal: LegalConfig = {
  ownerName: "",
  taxId: "",
  address: "",
  email: "",
}
