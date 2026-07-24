/**
 * CoCo-1 Landing Page - JavaScript
 * Vanilla JS - Bilingual (ES/EN)
 */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  es: {
    // Navigation
    nav_features: 'Características',
    nav_showcase: 'IA',
    nav_testimonials: 'Testimonios',
    nav_preorder: 'Comprar',

    // Hero
    hero_badge: '¡El primer micro-ordenador programable por la IA!',
    hero_title: 'CoCo-1',
    hero_title_suffix: ' BASIC Microcomputer',
    hero_description: 'El primer micro-ordenador personal programable completamente desde tu agente de IA de una forma interactiva, rápida y sin necesidad de conocimientos previos de programación en BASIC.',
    hero_cta_primary: 'Comprar ahora',
    hero_cta_secondary: 'Saber más',
    launch_price: 'Desde',
    old_price: '',
    new_price: '49,99€',

    // Features
    features_title: 'Características',
    features_subtitle: 'Todo lo que necesitas en un microordenador compacto y potente',
    feature_1_title: 'Salida VGA',
    feature_1_desc: 'Resolución 640x480 monocromo o 320x240 con soporte de hasta 16 colores.',
    feature_2_title: 'Teclado USB',
    feature_2_desc: 'Compatible con cualquier teclado PC estándar. Configurable para ES, US, UK, DE, FR. Mayúsculas y minúsculas acentuadas y caracteres especiales como la ñ en el teclado español.',
    feature_3_title: 'BASIC avanzado',
    feature_3_desc: 'Intérprete de BASIC compatible con Microsoft BASIC, con soporte para comandos gráficos, sonido y aritmética 64 bits. Editor incorporado para la edición de programas con sintaxis coloreada.',
    feature_4_title: 'Almacenamiento SD',
    feature_4_desc: 'Tarjeta SD hasta 32GB FAT16/FAT32. LED de actividad para lectura/escritura.',
    feature_5_title: 'Gráficos y sonido',
    feature_5_desc: 'Gráficos 16 colores, sonido estéreo, 8 tipos de letra, sprites ... Incluye 5 juegos: Tetris, Asteroids, Space Invaders, PacMan y Flappy Bird.',
    feature_6_title: 'Interfaces',
    feature_6_desc: '2 puertos serie RS-232, VGA, USB para teclado, conector de expansión con 11 pines de Entrada/Salida digitales o analógicas, Interruptor y alimentación por USB-C.',

    // Showcase
    showcase_title: 'Diseñado para la IA',
    showcase_subtitle: 'Explora las posibilidades de la IA con CoCo-1',
    showcase_features: 'Configura el modo IA',
    check_vga: 'Compatible con los agentes de IA más populares: Claude Code, OpenAI Codex, GitHub Copilot, OpenCode, etc',
    check_keyboard: 'Conecta el CoCo-1 a tu ordenador Windows, Mac o Linux mediante el puerto serie (puede ser necesario un adaptador USB a Serie en el PC)',
    check_basic: 'Abre tu agente de IA y selecciona la skill de programación de CoCo-1 suministrada',
    check_sd: 'A partir de ahora ya puedes chatear con tu agente de IA y pedirle que codifique el programa que quieras hacer. De forma interactiva verás en la pantalla del CoCo-1 cómo va editando el programa y depurándolo hasta que funcione como tú deseas',
    check_sound: 'Una vez programado, el código queda guardado en el CoCo-1 para ejecutarlo o modificarlo a tu gusto',
    specs_title: 'Especificaciones',
    spec_cpu: 'Procesador',
    spec_speed: 'Velocidad BASIC',
    spec_memory: 'Memoria',
    spec_storage: 'Almacenamiento',
    spec_display: 'Display',
    spec_audio: 'Audio',
    spec_power: 'Alimentación',
    spec_dimensions: 'Dimensiones',

    // Testimonials
    testimonials_title: 'Lo que dicen nuestros testers',
    testimonials_subtitle: 'Descubre qué opinan los primeros usuarios del CoCo-1',
    testimonial_1_quote: 'He probado otros proyectos retro, pero el CoCo-1 me ha sorprendido. La velocidad del BASIC es increíble y el hecho de tener VGA y USB es genial.',
    testimonial_1_author: 'Carlos Martínez',
    testimonial_1_role: 'Entusiasta retro',
    testimonial_2_quote: 'Perfecto para enseñar programación a mis hijos. La curva de aprendizaje es suave pero permite hacer cosas muy complejas cuando quieres.',
    testimonial_2_author: 'María García',
    testimonial_2_role: 'Profesora de informática',
    testimonial_3_quote: 'Lo uso como consola de desarrollo para mis proyectos de electrónica. Tener un intérprete BASIC rápido y un puerto de expansión no tiene precio.',
    testimonial_3_author: 'Antonio Ruiz',
    testimonial_3_role: 'Ingeniero electrónico',

    // Preorder
    preorder_title: '¡Compra ahora!',
    preorder_subtitle: 'Asegura tu CoCo-1 al precio especial de lanzamiento',
    preorder_description: 'El precio de lanzamiento de 49,99€ está disponible exclusivamente para las primeras compras. Incluye 2 años de garantía.',
    benefit_1: 'Precio especial de lanzamiento',
    benefit_2: 'Garantía de 2 años',
    benefit_3: 'Acceso prioritario',
    benefit_4: 'Soporte técnico incluido',
    benefit_5: 'Manual en español',
    form_title: 'Formulario de compra',
    form_subtitle: 'Cumplimenta el formulario con tus datos para procesar la compra',
    label_name: 'Nombre completo',
    label_email: 'Correo electrónico',
    label_phone: 'Teléfono (opcional)',
    label_address: 'Dirección',
    label_province: 'Provincia',
    label_postal_code: 'Código postal',
    placeholder_address: 'Calle, número, piso',
    placeholder_postal_code: '00000',
    label_country: 'País',
    label_quantity: 'Cantidad',
    label_case: 'Carcasa',
    case_yes: 'PCB+Carcasa',
    case_no: 'Sólo PCB',
    label_shipping: 'Envío',
    shipping_standard: 'Estándar (5-7 días) - 10€',
    shipping_express: 'Exprés (2-3 días) - 15€',
    price_subtotal: 'Subtotal',
    price_shipping: 'Envío',
    price_total: 'Total',
    btn_pay: 'Pagar con PayPal',
    btn_bizum: 'Pagar con Bizum',
    secure_payment: 'Pago con PayPal.Me o Bizum',
    select_option: 'Seleccionar...',

    // Footer
    footer_description: '"Ideas fantásticas para un mundo fantástico"',
    footer_product: 'Manual de usuario',
    footer_company: 'Contacto',
    footer_copyright: 'Copyright © 2026 COSSIO COMPUTER. Todos los derechos reservados.',

    // Notifications
    notification_preorder_success: '¡Compra recibida! Recibirá noticias nuestras muy pronto.',
    notification_preorder_error: 'Error de procesamiento. Por favor, inténtelo nuevamente.',
    notification_email_invalid: 'Por favor, indique un correo electrónico válido.',
    notification_name_required: 'Introduzca su nombre, si es tan amable.',
    notification_province_required: 'Seleccione una provincia.',
    notification_postal_code_invalid: 'El código postal no corresponde a la provincia seleccionada.',
    notification_payment_link_missing: 'Falta configurar el enlace PayPal.Me.',
    notification_order_endpoint_missing: 'Falta configurar la clave de Web3Forms.',
    notification_order_submit_error: 'No se han podido enviar los datos. Inténtelo de nuevo.',
    notification_order_submit_success: 'Datos enviados correctamente.',
    notification_bizum_phone_missing: 'Falta configurar el teléfono de Bizum.',
    notification_copied: 'Copiado.',
    bizum_modal_title: 'Pagar con Bizum',
    bizum_modal_text: 'Abre tu app bancaria y envía un Bizum con estos datos:',
    bizum_phone_label: 'Teléfono',
    bizum_amount_label: 'Importe',
    bizum_concept_label: 'Concepto',
    bizum_copy: 'Copiar',
    bizum_modal_note: 'El pago se confirma manualmente tras recibir el Bizum.',
  },

  en: {
    // Navigation
    nav_features: 'Features',
    nav_showcase: 'AI',
    nav_testimonials: 'Testimonials',
    nav_preorder: 'Buy',

    // Hero
    hero_badge: 'The first AI-programmable microcomputer!',
    hero_title: 'CoCo-1',
    hero_title_suffix: ' BASIC Microcomputer',
    hero_description: 'The first personal microcomputer fully programmable from your AI agent in an interactive, fast way, with no prior BASIC programming knowledge required.',
    hero_cta_primary: 'Buy Now',
    hero_cta_secondary: 'Learn More',
    launch_price: 'From',
    old_price: '',
    new_price: '49,99€',

    // Features
    features_title: 'Features',
    features_subtitle: 'Everything you need in a compact, powerful microcomputer',
    feature_1_title: 'VGA Output',
    feature_1_desc: '640x480 monochrome resolution or 320x240 with support for up to 16 colors.',
    feature_2_title: 'USB Keyboard',
    feature_2_desc: 'Compatible with any standard PC keyboard. Configurable for ES, US, UK, DE, FR layouts. Accented uppercase and lowercase letters and special characters such as ñ on the Spanish keyboard.',
    feature_3_title: 'Advanced BASIC',
    feature_3_desc: 'BASIC interpreter compatible with Microsoft BASIC, with support for graphics commands, sound, and 64-bit arithmetic. Built-in editor for program editing with syntax highlighting.',
    feature_4_title: 'SD Storage',
    feature_4_desc: 'SD card up to 32GB FAT16/FAT32. Activity LED for read/write operations.',
    feature_5_title: 'Graphics & Sound',
    feature_5_desc: '16-color graphics, stereo sound, 8 font types, sprites ... Includes 5 games: Tetris, Asteroids, Space Invaders, PacMan, and Flappy Bird.',
    feature_6_title: 'Interfaces',
    feature_6_desc: '2 RS-232 serial ports, VGA, USB for keyboard, expansion connector with 11 digital or analog input/output pins, switch, and USB-C power.',

    // Showcase
    showcase_title: 'Designed for AI',
    showcase_subtitle: 'Explore the possibilities of AI with CoCo-1',
    showcase_features: 'Configure AI mode',
    check_vga: 'Compatible with the most popular AI agents: Claude Code, OpenAI Codex, GitHub Copilot, OpenCode, etc',
    check_keyboard: 'Connect CoCo-1 to your Windows, Mac, or Linux computer through the serial port (a USB-to-serial adapter may be required on the PC)',
    check_basic: 'Open your AI agent and select the included CoCo-1 programming skill',
    check_sd: 'From now on, you can chat with your AI agent and ask it to code the program you want to create. Interactively, you will see on the CoCo-1 screen how it edits and debugs the program until it works the way you want',
    check_sound: 'Once programmed, the code remains saved on the CoCo-1 so you can run it or modify it however you like',
    specs_title: 'Specifications',
    spec_cpu: 'Processor',
    spec_speed: 'BASIC Speed',
    spec_memory: 'Memory',
    spec_storage: 'Storage',
    spec_display: 'Display',
    spec_audio: 'Audio',
    spec_power: 'Power',
    spec_dimensions: 'Dimensions',

    // Testimonials
    testimonials_title: 'What our testers say',
    testimonials_subtitle: 'Discover what early CoCo-1 users think',
    testimonial_1_quote: 'I\'ve tried many retro projects, but the CoCo-1 has surprised me. The BASIC speed is incredible and having VGA and USB is great.',
    testimonial_1_author: 'Carlos Martínez',
    testimonial_1_role: 'Retro enthusiast',
    testimonial_2_quote: 'Perfect for teaching my kids programming. The learning curve is gentle but allows for very complex things when you want.',
    testimonial_2_author: 'María García',
    testimonial_2_role: 'Computer science teacher',
    testimonial_3_quote: 'I use it as a development console for my electronic projects. Having a fast BASIC interpreter and an expansion port is invaluable.',
    testimonial_3_author: 'Antonio Ruiz',
    testimonial_3_role: 'Electronics engineer',

    // Preorder
    preorder_title: 'Buy Now!',
    preorder_subtitle: 'Get your CoCo-1 at the special launch price',
    preorder_description: 'The launch price of 49,99€ is available exclusively for early purchases. Includes 2-year warranty.',
    benefit_1: 'Special launch price',
    benefit_2: '2-year warranty',
    benefit_3: 'Priority access',
    benefit_4: 'Technical support included',
    benefit_5: 'Manual in Spanish',
    form_title: 'Purchase Form',
    form_subtitle: 'Complete your details to process your purchase',
    label_name: 'Full name',
    label_email: 'Email address',
    label_phone: 'Phone (optional)',
    label_address: 'Address',
    label_province: 'Province',
    label_postal_code: 'Postal code',
    placeholder_address: 'Street, number, apartment',
    placeholder_postal_code: 'Postal code',
    label_country: 'Country',
    label_quantity: 'Quantity',
    label_case: 'Case',
    case_yes: 'PCB+Case',
    case_no: 'PCB only',
    label_shipping: 'Shipping',
    shipping_standard: 'Standard (5-7 days) - €10',
    shipping_express: 'Express (2-3 days) - €15',
    price_subtotal: 'Subtotal',
    price_shipping: 'Shipping',
    price_total: 'Total',
    btn_pay: 'Pay with PayPal',
    btn_bizum: 'Pay with Bizum',
    secure_payment: 'Payment via PayPal.Me or Bizum',
    select_option: 'Select...',

    // Footer
    footer_description: '"Fantastic ideas for a fantastic world"',
    footer_product: 'User Manual',
    footer_company: 'Contact',
    footer_copyright: 'Copyright © 2026 COSSIO COMPUTER. All rights reserved.',

    // Notifications
    notification_preorder_success: 'Purchase received! We\'ll contact you soon.',
    notification_preorder_error: 'Error processing. Please try again.',
    notification_email_invalid: 'Please enter a valid email.',
    notification_name_required: 'Name is required.',
    notification_province_required: 'Please select a province.',
    notification_postal_code_invalid: 'The postal code does not match the selected province.',
    notification_payment_link_missing: 'PayPal.Me link is not configured.',
    notification_order_endpoint_missing: 'Web3Forms access key is not configured.',
    notification_order_submit_error: 'Could not send the details. Please try again.',
    notification_order_submit_success: 'Details sent successfully.',
    notification_bizum_phone_missing: 'Bizum phone number is not configured.',
    notification_copied: 'Copied.',
    bizum_modal_title: 'Pay with Bizum',
    bizum_modal_text: 'Open your banking app and send a Bizum payment with these details:',
    bizum_phone_label: 'Phone',
    bizum_amount_label: 'Amount',
    bizum_concept_label: 'Reference',
    bizum_copy: 'Copy',
    bizum_modal_note: 'Payment is confirmed manually after the Bizum transfer is received.',
  }
};

// ============================================
// STATE
// ============================================
let currentLang = 'es';
let formData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  province: '',
  postalCode: '',
  country: 'ES',
  quantity: 1,
  caseOption: 'no',
  shipping: 'standard'
};
const PAYPAL_ME_LINK = 'https://paypal.me/cossiocomputer';
const WEB3FORMS_ACCESS_KEY = '6b3962f8-decd-45a1-b57d-6b22d498f1a1';
const BIZUM_PHONE = '655131003';
const BIZUM_CONCEPT = 'CoCo-1';
const SPANISH_PROVINCES = [
  { code: '01', name: 'Álava' },
  { code: '02', name: 'Albacete' },
  { code: '03', name: 'Alicante' },
  { code: '04', name: 'Almería' },
  { code: '05', name: 'Ávila' },
  { code: '06', name: 'Badajoz' },
  { code: '07', name: 'Illes Balears' },
  { code: '08', name: 'Barcelona' },
  { code: '09', name: 'Burgos' },
  { code: '10', name: 'Cáceres' },
  { code: '11', name: 'Cádiz' },
  { code: '12', name: 'Castellón' },
  { code: '13', name: 'Ciudad Real' },
  { code: '14', name: 'Córdoba' },
  { code: '15', name: 'A Coruña' },
  { code: '16', name: 'Cuenca' },
  { code: '17', name: 'Girona' },
  { code: '18', name: 'Granada' },
  { code: '19', name: 'Guadalajara' },
  { code: '20', name: 'Gipuzkoa' },
  { code: '21', name: 'Huelva' },
  { code: '22', name: 'Huesca' },
  { code: '23', name: 'Jaén' },
  { code: '24', name: 'León' },
  { code: '25', name: 'Lleida' },
  { code: '26', name: 'La Rioja' },
  { code: '27', name: 'Lugo' },
  { code: '28', name: 'Madrid' },
  { code: '29', name: 'Málaga' },
  { code: '30', name: 'Murcia' },
  { code: '31', name: 'Navarra' },
  { code: '32', name: 'Ourense' },
  { code: '33', name: 'Asturias' },
  { code: '34', name: 'Palencia' },
  { code: '35', name: 'Las Palmas' },
  { code: '36', name: 'Pontevedra' },
  { code: '37', name: 'Salamanca' },
  { code: '38', name: 'Santa Cruz de Tenerife' },
  { code: '39', name: 'Cantabria' },
  { code: '40', name: 'Segovia' },
  { code: '41', name: 'Sevilla' },
  { code: '42', name: 'Soria' },
  { code: '43', name: 'Tarragona' },
  { code: '44', name: 'Teruel' },
  { code: '45', name: 'Toledo' },
  { code: '46', name: 'Valencia' },
  { code: '47', name: 'Valladolid' },
  { code: '48', name: 'Bizkaia' },
  { code: '49', name: 'Zamora' },
  { code: '50', name: 'Zaragoza' },
  { code: '51', name: 'Ceuta' },
  { code: '52', name: 'Melilla' }
];

// ============================================
// DOM ELEMENTS
// ============================================
const langBtns = document.querySelectorAll('.lang-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const fadeElements = document.querySelectorAll('.fade-in');
const preorderForm = document.getElementById('preorderForm');
const quantitySelect = document.getElementById('quantity');
const caseSelect = document.getElementById('caseOption');
const shippingSelect = document.getElementById('shipping');
const countrySelect = document.getElementById('country');
const provinceSelect = document.getElementById('provinceInput');
const paypalBtn = document.querySelector('.btn-paypal');
const bizumBtn = document.querySelector('.btn-bizum');
const bizumModal = document.getElementById('bizumModal');
const bizumModalClose = document.getElementById('bizumModalClose');
const copyBtns = document.querySelectorAll('.copy-btn');

// ============================================
// LANGUAGE SWITCHING
// ============================================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active language button
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all text elements
  const t = translations[lang];

  // Navigation
  navLinks.forEach(link => {
    const key = link.dataset.i18n;
    if (key && t[key]) {
      link.textContent = t[key];
    }
  });

  // Hero
  document.querySelector('.hero-badge').textContent = t.hero_badge;
  document.getElementById('heroTitleSuffix').textContent = t.hero_title_suffix;
  document.getElementById('heroDescription').textContent = t.hero_description;
  document.getElementById('heroCtaPrimary').textContent = t.hero_cta_primary;
  document.getElementById('heroCtaSecondary').textContent = t.hero_cta_secondary;
  document.getElementById('launchPriceLabel').textContent = t.launch_price;
  document.getElementById('oldPrice').textContent = t.old_price;
  document.getElementById('newPrice').textContent = t.new_price;

  // Features
  document.getElementById('featuresTitle').textContent = t.features_title;
  document.getElementById('featuresSubtitle').textContent = t.features_subtitle;
  document.getElementById('feature1Title').textContent = t.feature_1_title;
  document.getElementById('feature1Desc').textContent = t.feature_1_desc;
  document.getElementById('feature2Title').textContent = t.feature_2_title;
  document.getElementById('feature2Desc').textContent = t.feature_2_desc;
  document.getElementById('feature3Title').textContent = t.feature_3_title;
  document.getElementById('feature3Desc').textContent = t.feature_3_desc;
  document.getElementById('feature4Title').textContent = t.feature_4_title;
  document.getElementById('feature4Desc').textContent = t.feature_4_desc;
  document.getElementById('feature5Title').textContent = t.feature_5_title;
  document.getElementById('feature5Desc').textContent = t.feature_5_desc;
  document.getElementById('feature6Title').textContent = t.feature_6_title;
  document.getElementById('feature6Desc').textContent = t.feature_6_desc;

  // Showcase
  document.getElementById('showcaseTitle').textContent = t.showcase_title;
  document.getElementById('showcaseSubtitle').textContent = t.showcase_subtitle;
  document.getElementById('showcaseFeatures').textContent = t.showcase_features;
  document.getElementById('checkVga').textContent = t.check_vga;
  document.getElementById('checkKeyboard').textContent = t.check_keyboard;
  document.getElementById('checkBasic').textContent = t.check_basic;
  document.getElementById('checkSd').textContent = t.check_sd;
  document.getElementById('checkSound').textContent = t.check_sound;
  // Testimonials
  document.getElementById('testimonialsTitle').textContent = t.testimonials_title;
  document.getElementById('testimonialsSubtitle').textContent = t.testimonials_subtitle;
  document.getElementById('testimonial1Quote').textContent = t.testimonial_1_quote;
  document.getElementById('testimonial1Author').textContent = t.testimonial_1_author;
  document.getElementById('testimonial1Role').textContent = t.testimonial_1_role;
  document.getElementById('testimonial2Quote').textContent = t.testimonial_2_quote;
  document.getElementById('testimonial2Author').textContent = t.testimonial_2_author;
  document.getElementById('testimonial2Role').textContent = t.testimonial_2_role;
  document.getElementById('testimonial3Quote').textContent = t.testimonial_3_quote;
  document.getElementById('testimonial3Author').textContent = t.testimonial_3_author;
  document.getElementById('testimonial3Role').textContent = t.testimonial_3_role;

  // Preorder
  document.getElementById('preorderTitle').textContent = t.preorder_title;
  document.getElementById('preorderSubtitle').textContent = t.preorder_subtitle;
  document.getElementById('preorderDescription').textContent = t.preorder_description;
  document.getElementById('benefit1').textContent = t.benefit_1;
  document.getElementById('benefit2').textContent = t.benefit_2;
  document.getElementById('benefit3').textContent = t.benefit_3;
  document.getElementById('benefit4').textContent = t.benefit_4;
  document.getElementById('benefit5').textContent = t.benefit_5;
  document.getElementById('formTitle').textContent = t.form_title;
  document.getElementById('formSubtitle').textContent = t.form_subtitle;
  document.getElementById('labelName').textContent = t.label_name;
  document.getElementById('labelEmail').textContent = t.label_email;
  document.getElementById('labelPhone').textContent = t.label_phone;
  document.getElementById('labelAddress').textContent = t.label_address;
  document.getElementById('labelProvince').textContent = t.label_province;
  document.getElementById('labelPostalCode').textContent = t.label_postal_code;
  document.getElementById('addressInput').placeholder = t.placeholder_address;
  document.getElementById('postalCodeInput').placeholder = t.placeholder_postal_code;
  document.getElementById('labelCountry').textContent = t.label_country;
  document.getElementById('labelQuantity').textContent = t.label_quantity;
  document.getElementById('labelCase').textContent = t.label_case;
  document.getElementById('caseNo').textContent = t.case_no;
  document.getElementById('caseYes').textContent = t.case_yes;
  document.getElementById('labelShipping').textContent = t.label_shipping;
  document.getElementById('shippingStandard').textContent = t.shipping_standard;
  document.getElementById('shippingExpress').textContent = t.shipping_express;
  document.getElementById('priceSubtotalLabel').textContent = t.price_subtotal;
  document.getElementById('priceShippingLabel').textContent = t.price_shipping;
  document.getElementById('priceTotalLabel').textContent = t.price_total;
  document.getElementById('btnPay').textContent = t.btn_pay;
  document.getElementById('btnBizum').textContent = t.btn_bizum;
  document.getElementById('securePayment').textContent = t.secure_payment;
  document.getElementById('bizumModalTitle').textContent = t.bizum_modal_title;
  document.getElementById('bizumModalText').textContent = t.bizum_modal_text;
  document.getElementById('bizumPhoneLabel').textContent = t.bizum_phone_label;
  document.getElementById('bizumAmountLabel').textContent = t.bizum_amount_label;
  document.getElementById('bizumConceptLabel').textContent = t.bizum_concept_label;
  document.getElementById('bizumModalNote').textContent = t.bizum_modal_note;
  copyBtns.forEach(btn => {
    btn.textContent = t.bizum_copy;
  });

  // Footer
  document.getElementById('footerDescription').textContent = t.footer_description;
  document.getElementById('footerProduct').textContent = t.footer_product;
  document.getElementById('footerCompany').textContent = t.footer_company;
  document.getElementById('footerCopyright').textContent = t.footer_copyright;

  // Update country select options
  updateCountryOptions();
  updateProvinceOptions();

  // Update prices display
  updatePrices();
}

function updateCountryOptions() {
  const countries = currentLang === 'es' ? [
    { code: 'ES', name: 'España' },
    { code: 'MX', name: 'México' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
    { code: 'PE', name: 'Perú' },
    { code: 'US', name: 'Estados Unidos' },
    { code: 'GB', name: 'Reino Unido' },
    { code: 'DE', name: 'Alemania' },
    { code: 'FR', name: 'Francia' },
    { code: 'PT', name: 'Portugal' },
    { code: 'IT', name: 'Italia' },
    { code: 'OTHER', name: 'Otro' }
  ] : [
    { code: 'ES', name: 'Spain' },
    { code: 'MX', name: 'Mexico' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
    { code: 'PE', name: 'Peru' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'PT', name: 'Portugal' },
    { code: 'IT', name: 'Italy' },
    { code: 'OTHER', name: 'Other' }
  ];

  const select = document.getElementById('country');
  const currentValue = select.value || formData.country || 'ES';
  select.innerHTML = `<option value="">${translations[currentLang].select_option}</option>` +
    countries.map(c => `<option value="${c.code}" ${c.code === currentValue ? 'selected' : ''}>${c.name}</option>`).join('');
  formData.country = select.value;
}

function updateProvinceOptions() {
  const currentValue = provinceSelect.value;
  provinceSelect.innerHTML = `<option value="">${translations[currentLang].select_option}</option>` +
    SPANISH_PROVINCES.map(province => (
      `<option value="${province.code}" ${province.code === currentValue ? 'selected' : ''}>${province.name}</option>`
    )).join('');
}

// ============================================
// PRICE CALCULATION
// ============================================
const UNIT_PRICE = 49.99;
const UNIT_PRICE_WITH_CASE = 99.99;
const SHIPPING_STANDARD = 10;
const SHIPPING_EXPRESS = 15;

function formatPrice(amount) {
  return `${amount.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}€`;
}

function getCurrentTotal() {
  const quantity = parseInt(quantitySelect?.value || 1);
  const unitPrice = caseSelect?.value === 'yes' ? UNIT_PRICE_WITH_CASE : UNIT_PRICE;
  const shipping = shippingSelect?.value || 'standard';
  const shippingCost = shipping === 'express' ? SHIPPING_EXPRESS : SHIPPING_STANDARD;

  return unitPrice * quantity + shippingCost;
}

function updatePrices() {
  const quantity = parseInt(quantitySelect?.value || 1);
  const unitPrice = caseSelect?.value === 'yes' ? UNIT_PRICE_WITH_CASE : UNIT_PRICE;
  const shipping = shippingSelect?.value || 'standard';
  const shippingCost = shipping === 'express' ? SHIPPING_EXPRESS : SHIPPING_STANDARD;
  const subtotal = unitPrice * quantity;
  const total = getCurrentTotal();

  document.getElementById('qtyDisplay').textContent = quantity;
  document.getElementById('unitPriceDisplay').textContent = formatPrice(unitPrice);
  document.getElementById('subtotalAmount').textContent = formatPrice(subtotal);
  document.getElementById('shippingAmount').textContent = formatPrice(shippingCost);
  document.getElementById('totalAmount').textContent = formatPrice(total);
  document.getElementById('bizumAmountValue').textContent = formatPrice(total);
}

// ============================================
// PAYPAL.ME PAYMENT LINK
// ============================================
function initPayPalPayment() {
  preorderForm?.addEventListener('submit', handlePayment);
  bizumBtn?.addEventListener('click', handleBizumPayment);
  bizumModalClose?.addEventListener('click', closeBizumModal);
  bizumModal?.addEventListener('click', (e) => {
    if (e.target === bizumModal) closeBizumModal();
  });
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => copyTextFromTarget(btn.dataset.copyTarget));
  });
}

function validatePaymentForm() {
  const t = translations[currentLang];
  const name = document.getElementById('nameInput')?.value;
  const email = document.getElementById('emailInput')?.value;
  const country = countrySelect?.value;
  const provinceCode = provinceSelect?.value;
  const postalCode = document.getElementById('postalCodeInput')?.value.trim();

  if (preorderForm && !preorderForm.reportValidity()) {
    return null;
  }

  // Validation
  if (!name || name.trim().length < 2) {
    showNotification(t.notification_name_required, 'error');
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showNotification(t.notification_email_invalid, 'error');
    return null;
  }

  if (country === 'ES') {
    const province = SPANISH_PROVINCES.find(item => item.code === provinceCode);

    if (!province) {
      showNotification(t.notification_province_required, 'error');
      return null;
    }

    if (!/^\d{5}$/.test(postalCode) || postalCode.slice(0, 2) !== province.code) {
      showNotification(t.notification_postal_code_invalid, 'error');
      return null;
    }
  }

  return { name: name.trim(), email };
}

function getSelectedText(select) {
  return select?.selectedOptions?.[0]?.textContent || '';
}

function getOrderData(paymentData, paymentMethod) {
  return {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `Compra CoCo-1 - ${paymentData.name}`,
    from_name: paymentData.name,
    paymentMethod,
    name: paymentData.name,
    email: paymentData.email,
    phone: document.getElementById('phoneInput')?.value || '-',
    address: document.getElementById('addressInput')?.value || '-',
    province: getSelectedText(provinceSelect),
    postalCode: document.getElementById('postalCodeInput')?.value || '-',
    country: getSelectedText(countrySelect),
    quantity: quantitySelect?.value || '1',
    caseOption: getSelectedText(caseSelect),
    shipping: getSelectedText(shippingSelect),
    total: formatPrice(getCurrentTotal()),
  };
}

async function sendOrderData(paymentData, paymentMethod) {
  const t = translations[currentLang];

  if (!WEB3FORMS_ACCESS_KEY) {
    showNotification(t.notification_order_endpoint_missing, 'error');
    return false;
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(getOrderData(paymentData, paymentMethod)),
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Web3Forms submit failed');
    }

    return true;
  } catch (error) {
    showNotification(t.notification_order_submit_error, 'error');
    return false;
  }
}

async function handlePayment(e) {
  e.preventDefault();

  const t = translations[currentLang];
  const paymentData = validatePaymentForm();

  if (!paymentData) return;

  if (!PAYPAL_ME_LINK) {
    showNotification(t.notification_payment_link_missing, 'error');
    return;
  }

  paypalBtn.classList.add('loading');
  paypalBtn.disabled = true;

  const orderSent = await sendOrderData(paymentData, 'PayPal.Me');

  if (!orderSent) {
    paypalBtn.classList.remove('loading');
    paypalBtn.disabled = false;
    return;
  }

  window.open(`${PAYPAL_ME_LINK}/${getCurrentTotal().toFixed(2)}`, '_blank', 'noopener');
}

function openBizumModal() {
  document.getElementById('bizumPhoneValue').textContent = BIZUM_PHONE;
  document.getElementById('bizumAmountValue').textContent = formatPrice(getCurrentTotal());
  document.getElementById('bizumConceptValue').textContent = BIZUM_CONCEPT;
  bizumModal?.classList.add('active');
  bizumModal?.setAttribute('aria-hidden', 'false');
}

function closeBizumModal() {
  bizumModal?.classList.remove('active');
  bizumModal?.setAttribute('aria-hidden', 'true');
}

async function copyTextFromTarget(targetId) {
  const value = document.getElementById(targetId)?.textContent || '';

  if (!value || !navigator.clipboard) return;

  try {
    await navigator.clipboard.writeText(value);
    showNotification(translations[currentLang].notification_copied, 'success');
  } catch (err) {
    showNotification(value, 'info');
  }
}

async function handleBizumPayment() {
  const t = translations[currentLang];
  const paymentData = validatePaymentForm();

  if (!paymentData) return;

  if (!BIZUM_PHONE) {
    showNotification(t.notification_bizum_phone_missing, 'error');
    return;
  }

  bizumBtn.classList.add('loading');
  bizumBtn.disabled = true;
  const orderSent = await sendOrderData(paymentData, 'Bizum');
  bizumBtn.classList.remove('loading');
  bizumBtn.disabled = false;

  if (!orderSent) return;

  openBizumModal();
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  const icon = document.createElement('span');
  icon.textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

  const text = document.createElement('span');
  text.textContent = message;

  notification.appendChild(icon);
  notification.appendChild(text);

  document.body.appendChild(notification);

  // Show
  setTimeout(() => notification.classList.add('show'), 10);

  // Hide after 4 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  navLinksContainer.classList.toggle('active');
}

mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
navLinksContainer?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function handleScroll() {
  const scrollY = window.scrollY;
  navbar?.classList.toggle('scrolled', scrollY > 50);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function handleScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// FORM HANDLERS
// ============================================
quantitySelect?.addEventListener('change', updatePrices);
caseSelect?.addEventListener('change', updatePrices);
shippingSelect?.addEventListener('change', updatePrices);

// Form input tracking
preorderForm?.querySelectorAll('input, select').forEach(input => {
  input.addEventListener('change', (e) => {
    formData[e.target.name] = e.target.value;
  });
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);

  // Initialize PayPal.Me payment link
  initPayPalPayment();

  // Initialize scroll animations
  handleScrollAnimations();

  // Populate country select
  updateCountryOptions();

  // Initialize prices
  updatePrices();
});

// Event listeners
langBtns.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

window.addEventListener('scroll', handleScroll);

// Expose functions globally
window.setLanguage = setLanguage;
window.showNotification = showNotification;
