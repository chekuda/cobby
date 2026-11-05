// Spanish texts. The copy comes from docs/05-copy.md.
// `{shopName}` is filled in from config/shop.ts; `{ownerName}`, `{taxId}`,
// `{address}` and `{email}` from config/legal.ts.

import type { Family } from "@/lib/flavors"

const es = {
  meta: {
    title: "Cobby · Guarda tu café. Prepáralo mejor.",
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
    tag: "Beta privada",
    title: "Guarda tu café. Prepáralo mejor.",
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
        text: "Elige método y tazas. Cobby te da la receta, y tú la ajustas a tu gusto.",
      },
    ],
  },
  shelf: {
    title: "Tu estantería de cafés",
    text: "Todos los cafés que has probado, en un solo sitio: la foto de la bolsa, el origen, las notas, la fecha de tueste y tu puntuación. Entras con un código que te llega por email, sin contraseñas, y tus cafés se guardan en servidores de la Unión Europea.",
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
    text: "Recetas para siete métodos: V60, Chemex, AeroPress, prensa francesa, espresso, moka y cold brew. Con «Ajustar a mi gusto» te guardas tu propia versión para cada café, hasta con los clics de tu molino. Y después de cada taza, Cobby te sugiere qué cambiar.",
    soonTag: "Próximamente",
    soon: "Un temporizador que te guía vertido a vertido.",
    // "Tune it to my taste" demo (grill round 7, Q52)
    calculator: {
      label: "Pruébalo: ajústala a tu gusto",
      method: "Método",
      perCup: "Para 1 taza",
      perShot: "Para 1 shot",
      base: "Receta base",
      yours: "Tu versión",
      reset: "Volver a la receta original",
      lower: "Bajar: {label}",
      raise: "Subir: {label}",
      clicks: "Clics de tu molino",
      ratio: "Proporción",
      stronger: "Más intenso que la receta base",
      milder: "Más suave que la receta base",
      same: "Igual de intenso que la receta base",
      note: "Así funciona «Ajustar a mi gusto» en la app: tu versión se guarda para ese café y Cobby nunca toca tus números.",
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
  // What's inside the app today (grill round 7, Q47–Q51)
  highlights: {
    title: "Todo lo que hay dentro",
    lead: "Lo que ya funciona en la beta, además de guardar y preparar tus cafés.",
    items: [
      {
        title: "Recetas a tu gusto",
        text: "Ajusta gramos, agua, temperatura y los clics de tu molino. Cobby guarda tu versión para cada café.",
      },
      {
        title: "Cafés para ti",
        text: "Tu perfil de sabor y cafés parecidos a los que te gustan, del catálogo de {shopName}.",
      },
      {
        title: "Precio a la vista",
        text: "Cada café de la tienda con su precio y el tamaño de la bolsa, y un botón para comprarlo en {shopName}.",
      },
      {
        title: "Retos y misiones",
        text: "Un reto nuevo cada mes y misiones con premios de la tienda.",
      },
      {
        title: "Pegatinas",
        text: "Se consiguen solas con lo que apuntas: tu primer café, orígenes distintos, todos los métodos…",
      },
      {
        title: "Invita a un amigo",
        text: "Comparte tu enlace y, cuando tu amigo apunte su primera cata, los dos ganáis premio.",
      },
      {
        title: "Para tus stories",
        text: "Tarjetas de tus catas, tus recetas y tu mes en café, listas para compartir.",
      },
      {
        title: "Avisos que importan",
        text: "Solo si quieres: misiones nuevas o un premio a punto de caducar. Como mucho cuatro al mes.",
      },
    ],
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
    comingLater: "Un panel para tu tienda, con tu catálogo y tus clientes.",
    // Sales levers already in the app (grill round 7, Q54)
    leversTitle: "Herramientas para vender más",
    levers: [
      {
        title: "Reto del mes",
        text: "Propón un café, un origen o un proceso cada mes y empuja lo que quieres mover.",
      },
      {
        title: "Misiones con premio",
        text: "Tus clientes completan misiones en la app y ganan un premio para su próxima compra.",
      },
      {
        title: "Invita a un amigo",
        text: "Cada cliente puede traer a otro, con un premio para los dos.",
      },
      {
        title: "Avisos que traen de vuelta",
        text: "Cobby recuerda a cada cliente sus premios del mes, solo si los ha activado y sin coste por aviso.",
      },
      {
        title: "Lo que gusta a tus clientes",
        text: "Qué cafés, orígenes y procesos puntúan mejor, con notas reales.",
      },
      {
        title: "Ventas que se ven",
        text: "Los botones de compra llegan a tu tienda etiquetados, y las estadísticas no usan cookies.",
      },
    ],
    foundingPartners: "Buscamos tiendas socias fundadoras. Hablemos.",
    cta: "Lleva Cobby a tu tienda",
    example: "Así se vería con {shopName}.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Dónde se guardan mis cafés?",
        a: "En tu cuenta, en servidores de la Unión Europea. Entras con un código que te llega por email, sin contraseña, y puedes descargar tus datos o borrar tu cuenta cuando quieras.",
      },
      { q: "¿Cuesta algo?", a: "Es gratis para los amantes del café." },
      {
        q: "¿Tengo que descargar algo?",
        a: "No. Funciona en el navegador del móvil y puedes añadirlo a tu pantalla de inicio.",
      },
      { q: "¿En qué idiomas está?", a: "En español y en inglés." },
      {
        q: "¿Cuándo puedo usarlo?",
        a: "Ahora está en beta privada con un grupo pequeño. Déjanos tu email y te damos acceso.",
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
      title: "Pide acceso a la beta",
      email: "Email",
      placeholder: "tu@email.com",
      submit: "Pedir acceso",
      success: "¡Apuntado! Te escribimos pronto.",
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
            "Formulario de acceso a la beta: tu email y el idioma de la página.",
            "Una cookie técnica (cobby-lang) que solo recuerda el idioma que eliges.",
            "Estadísticas de visitas anónimas, sin cookies (Vercel Web Analytics).",
          ],
        },
        {
          title: "Para qué los usamos",
          paragraphs: [
            "Para responder a las tiendas que nos escriben y para darte acceso a Cobby. No los usamos para nada más ni los vendemos.",
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
            "Esta web presenta Cobby, una app en beta privada. La información puede cambiar mientras la desarrollamos.",
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
