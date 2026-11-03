// Spanish texts. The copy comes from docs/05-copy.md.
// `{shopName}` is filled in from config/shop.ts; `{ownerName}`, `{taxId}`,
// `{address}` and `{email}` from config/legal.ts.

import type { Family } from "@/lib/flavors"

const es = {
  meta: {
    title: "Cobby · Haz una foto a tu café. Prepáralo mejor.",
    description:
      "Cobby guarda tus cafés y te guía al prepararlos. Y te descubre cafés parecidos en tu tienda favorita.",
  },
  header: {
    homeLabel: "Cobby, inicio",
    nav: {
      howItWorks: "Cómo funciona",
      brew: "Prepara",
      forShops: "Para tiendas",
      faq: "Preguntas",
    },
    cta: "Lleva Cobby a tu tienda",
    menu: "Menú",
    languageLabel: "Idioma",
  },
  hero: {
    tag: "Acceso anticipado",
    title: "Haz una foto a tu café. Prepáralo mejor.",
    subtitle:
      "Cobby guarda tus cafés y te guía al prepararlos. Y te descubre cafés parecidos en tu tienda favorita.",
    primary: "Lleva Cobby a tu tienda",
    secondary: "Quiero probarlo",
    note: "Funciona en el navegador del móvil. Sin descargas.",
  },
  // Flavor families, as in the app (stickers on the shelf, the similar coffees and the mockup)
  families: {
    fruity: "Frutal",
    floral: "Floral",
    sweet: "Dulce",
    nutty: "Frutos secos",
    spicy: "Especiado",
  },
  // Example tasting share card shown inside the phone mockup (an illustration, not a real product)
  mockup: {
    label: "Ejemplo de la app Cobby: la tarjeta para compartir una cata",
    byShop: "por {shopName}",
    coffeeName: "Guji Hambela",
    details: "Etiopía · Guji · Lavado",
    stars: 4,
    outOf: "{n} de 5",
    method: "V60",
    notes: ["Jazmín", "Melocotón", "Bergamota"],
  },
  howItWorks: {
    title: "Tres pasos, de la bolsa a la taza",
    // "Cobby reads the label" is out until the app reads labels (grill round 6, Q45)
    steps: [
      {
        title: "Haz la foto",
        text: "Hazle una foto a la bolsa y busca el café en la tienda o escribe sus datos. Vale cualquier tostador.",
      },
      {
        title: "Guárdalo",
        text: "Cada café queda en tu estantería, con su foto y sus notas.",
      },
      {
        title: "Prepáralo",
        text: "Elige método y tazas. Cobby te da la receta y el temporizador.",
      },
    ],
  },
  shelf: {
    title: "Tu estantería de cafés",
    text: "Todos los cafés que has probado, en un solo sitio: la foto de la bolsa, el origen, las notas, la fecha de tueste y tu puntuación. Se guardan en tu móvil, sin cuentas ni contraseñas.",
    // Example coffees for the illustration
    label: "Ejemplo de la estantería de cafés en Cobby",
    items: [
      { name: "Guji Hambela", detail: "Etiopía · Lavado", rating: 4, family: "floral" as Family },
      { name: "La Esperanza", detail: "Colombia · Honey", rating: 5, family: "sweet" as Family },
      { name: "Huila Pink Bourbon", detail: "Colombia · Natural", rating: 3, family: "fruity" as Family },
    ],
  },
  brew: {
    title: "Prepáralo mejor",
    text: "Recetas para V60, AeroPress, prensa francesa y espresso, con un temporizador que te guía vertido a vertido. Después, puntúa la taza y Cobby te dice qué ajustar la próxima vez.",
    calculator: {
      label: "Pruébalo",
      method: "Método",
      cups: "Tazas",
      shots: "Shots",
      fewer: "Una menos",
      more: "Una más",
      coffee: "Café",
      water: "Agua",
      yield: "En la taza",
      temperature: "Temperatura",
      grind: "Molienda",
      methods: {
        v60: "V60",
        aeropress: "AeroPress",
        frenchPress: "Prensa francesa",
        espresso: "Espresso",
      },
      grinds: {
        fine: "Fina",
        mediumFine: "Media-fina",
        mediumCoarse: "Media-gruesa",
        coarse: "Gruesa",
      },
    },
  },
  similar: {
    title: "Descubre tu próximo favorito",
    text: "Cobby se fija en los cafés que mejor puntúas (afrutados, dulces, florales…) y te sugiere cafés parecidos en {shopName}.",
    link: "Ver los cafés de {shopName}",
    familiesLabel: "Familias de sabor",
  },
  cobby: {
    title: "Este es Cobby",
    text: "Cobby también es un personaje. Te acompaña en la app y, cuando puntúas un café, pone la cara por ti: de «meh» a «¡me encanta!».",
    label: "Cobby, guiñando un ojo",
    facesLabel: "Las caras de Cobby, de 1 a 5 estrellas",
    faces: ["Meh", "¡Anda!", "Rico", "Me gusta", "¡Me encanta!"],
    stars: "{n} de 5 estrellas",
  },
  shops: {
    title: "Para tiendas y tostadores",
    lead: "Dale a tus clientes una forma de disfrutar más tu café, y de volver a por más.",
    benefits: [
      { title: "Con tu marca", text: "Tu logo y tu nombre en Cobby." },
      {
        title: "Tu catálogo",
        text: "Las sugerencias de cafés parecidos enlazan a tu tienda.",
      },
      {
        title: "Clientes que repiten",
        text: "Quien disfruta un café sabe dónde volver a comprarlo.",
      },
      {
        title: "Junto a tu tienda online",
        text: "Funciona al lado de la tienda que ya tienes.",
      },
    ],
    comingLaterTag: "Próximamente",
    comingLater: "Qué sabores y orígenes prefieren tus clientes.",
    foundingPartners: "Buscamos tiendas socias fundadoras. Hablemos.",
    cta: "Lleva Cobby a tu tienda",
    example: "Así se vería con {shopName}.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Dónde se guardan mis cafés?",
        a: "En tu móvil, dentro del navegador. No necesitas cuenta.",
      },
      { q: "¿Cuesta algo?", a: "Es gratis para los amantes del café." },
      {
        q: "¿Tengo que descargar algo?",
        a: "No. Funciona en el navegador del móvil y puedes añadirlo a tu pantalla de inicio.",
      },
      { q: "¿En qué idiomas está?", a: "En español y en inglés." },
      {
        q: "¿Cuándo puedo usarlo?",
        a: "Estamos en acceso anticipado. Déjanos tu email y te avisamos.",
      },
    ],
  },
  forms: {
    consentBefore: "He leído y acepto la ",
    consentLink: "política de privacidad",
    consentAfter: ".",
    sending: "Enviando…",
    invalid: "Revisa los campos marcados.",
    invalidEmail: "Escribe un email válido.",
    required: "Este campo es obligatorio.",
    consentRequired: "Necesitamos tu consentimiento para guardar tus datos.",
    error: "No se ha podido enviar. Inténtalo de nuevo.",
    shop: {
      title: "¿Tienes una tienda de café?",
      text: "Cuéntanos un poco y te escribimos.",
      name: "Nombre",
      shopName: "Nombre de la tienda",
      email: "Email",
      website: "Web (opcional)",
      message: "Mensaje (opcional)",
      submit: "Enviar",
      success: "¡Gracias! Te escribimos pronto.",
    },
    buyer: {
      title: "Avísame cuando esté listo",
      email: "Email",
      placeholder: "tu@email.com",
      submit: "Quiero acceso anticipado",
      success: "¡Apuntado! Te avisaremos.",
    },
    // The app is a private test for now (grill round 6, Q44)
    app: {
      tag: "Beta privada",
      text: "La app ya funciona con un grupo pequeño. Escanea el código para abrirla en el móvil y, si aún no tienes acceso, pídelo con tu email aquí arriba.",
      textPhone: "La app ya funciona con un grupo pequeño. Ábrela y, si aún no tienes acceso, pídelo con tu email aquí arriba.",
      qrLabel: "Código QR para abrir la app de Cobby en el móvil",
      open: "Abrir la app",
    },
  },
  footer: {
    line: "Cobby: guarda, prepara y descubre café de especialidad.",
    privacy: "Privacidad",
    legal: "Aviso legal",
    contact: "Contacto",
  },
  // Legal pages. Not legal advice: have the final texts checked (docs/05-copy.md).
  legal: {
    missing: "[pendiente de completar]",
    back: "Volver a Cobby",
    privacy: {
      title: "Política de privacidad",
      sections: [
        {
          title: "Quién es el responsable",
          paragraphs: [
            "{ownerName}, con NIF {taxId} y domicilio en {address}. Puedes escribirnos a {email}.",
          ],
        },
        {
          title: "Qué datos recogemos",
          paragraphs: [
            "Formulario de tiendas: nombre, nombre de la tienda, email y, si los das, web y mensaje.",
            "Formulario de acceso anticipado: tu email y el idioma de la página.",
            "Una cookie técnica (cobby-lang) que solo recuerda el idioma que eliges.",
            "Estadísticas de visitas anónimas, sin cookies (Vercel Web Analytics).",
          ],
        },
        {
          title: "Para qué los usamos",
          paragraphs: [
            "Para responder a las tiendas que nos escriben y para avisarte cuando Cobby esté disponible. No los usamos para nada más ni los vendemos.",
          ],
        },
        {
          title: "Base legal",
          paragraphs: [
            "Tu consentimiento, que das al marcar la casilla del formulario. Puedes retirarlo cuando quieras.",
          ],
        },
        {
          title: "Cuánto tiempo los guardamos",
          paragraphs: [
            "Hasta que nos pidas borrarlos o hasta que dejen de ser necesarios para estos fines.",
          ],
        },
        {
          title: "Quién más los trata",
          paragraphs: [
            "Google, porque los formularios se guardan en una hoja de cálculo de Google, y Vercel, que aloja esta web y mide las visitas. Ambos actúan como encargados del tratamiento.",
          ],
        },
        {
          title: "Tus derechos",
          paragraphs: [
            "Puedes pedir el acceso, la rectificación, la supresión, la oposición, la limitación y la portabilidad de tus datos escribiendo a {email}.",
            "Si crees que no los tratamos bien, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
          ],
        },
      ],
    },
    notice: {
      title: "Aviso legal",
      sections: [
        {
          title: "Titular",
          paragraphs: [
            "{ownerName}, con NIF {taxId} y domicilio en {address}. Contacto: {email}.",
          ],
        },
        {
          title: "Uso de esta web",
          paragraphs: [
            "Esta web presenta Cobby, una app en acceso anticipado. La información puede cambiar mientras la desarrollamos.",
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "Los textos, el diseño y la marca Cobby pertenecen a su titular. Los nombres y marcas de las tiendas pertenecen a sus dueños.",
          ],
        },
      ],
    },
  },
}

export default es
export type Dictionary = typeof es
