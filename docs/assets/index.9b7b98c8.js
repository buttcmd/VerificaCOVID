const V=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};V();const B="modulepreload",h={},O="./",C=function(i,n){return!n||n.length===0?i():Promise.all(n.map(t=>{if(t=`${O}${t}`,t in h)return;h[t]=!0;const s=t.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":B,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((l,M)=>{o.addEventListener("load",l),o.addEventListener("error",M)})})).then(()=>i())};var Q="Sun Oct 17 2021 23:11:28 GMT+0200 (Central European Summer Time)",_=`/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

html {
	-moz-tab-size: 4;
	-o-tab-size: 4;
	   tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
	margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
	font-family:
		system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	-webkit-text-decoration: underline dotted;
	        text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Tailwind custom reset styles
 */

/**
 * 1. Use the user's configured \`sans\` font-family (with Tailwind's default
 *    sans-serif font stack as a fallback) as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 *    to override it to ensure consistency even when using the default theme.
 */

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}


/**
 * Inherit font-family and line-height from \`html\` so users can set them as
 * a class directly on the \`html\` element.
 */

body {
  font-family: inherit;
  line-height: inherit;
}

/**
 * 1. Prevent padding and border from affecting element width.
 *
 *    We used to set this in the html element and inherit from
 *    the parent element for everything else. This caused issues
 *    in shadow-dom-enhanced elements like <details> where the content
 *    is wrapped by a div with box-sizing set to \`content-box\`.
 *
 *    https://github.com/mozdevs/cssremedy/issues/4
 *
 *
 * 2. Allow adding a border to an element by just adding a border-width.
 *
 *    By default, the way the browser specifies that an element should have no
 *    border is by setting it's border-style to \`none\` in the user-agent
 *    stylesheet.
 *
 *    In order to easily add borders to elements by just setting the \`border-width\`
 *    property, we change the default border-style for all elements to \`solid\`, and
 *    use border-width to hide them instead. This way our \`border\` utilities only
 *    need to set the \`border-width\` property instead of the entire \`border\`
 *    shorthand, making our border utilities much more straightforward to compose.
 *
 *    https://github.com/tailwindcss/tailwindcss/pull/116
 */

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

/*
 * Ensure horizontal rules are visible by default
 */

hr {
  border-top-width: 1px;
}

/**
 * Undo the \`border-style: none\` reset that Normalize applies to images so that
 * our \`border-{width}\` utilities have the expected effect.
 *
 * The Normalize reset is unnecessary for us since we default the border-width
 * to 0 on all elements.
 *
 * https://github.com/tailwindcss/tailwindcss/issues/362
 */

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

/**
 * Override legacy focus reset from Normalize with modern Firefox focus styles.
 *
 * This is actually an improvement over the new defaults in Firefox in our testing,
 * as it triggers the better focus styles even for links, which still use a dotted
 * outline in Firefox by default.
 */
 
:-moz-focusring {
	outline: auto;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */

a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */

pre,
code,
kbd,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/**
 * 1. Make replaced elements \`display: block\` by default as that's
 *    the behavior you want almost all of the time. Inspired by
 *    CSS Remedy, with \`svg\` added as well.
 *
 *    https://github.com/mozdevs/cssremedy/issues/14
 * 
 * 2. Add \`vertical-align: middle\` to align replaced elements more
 *    sensibly by default when overriding \`display\` by adding a
 *    utility like \`inline\`.
 *
 *    This can trigger a poorly considered linting error in some
 *    tools but is included by design.
 * 
 *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
 */

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/**
 * Constrain images and videos to the parent width and preserve
 * their intrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
video {
  max-width: 100%;
  height: auto;
}

/**
 * Ensure the default browser behavior of the \`hidden\` attribute.
 */

[hidden] {
  display: none;
}

*, ::before, ::after {
	--tw-border-opacity: 1;
	border-color: rgba(229, 231, 235, var(--tw-border-opacity));
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
	--tw-shadow: 0 0 #0000;
	--tw-blur: var(--tw-empty,/*!*/ /*!*/);
	--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
	--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
	--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
	--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
	--tw-invert: var(--tw-empty,/*!*/ /*!*/);
	--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
	--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
	--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
	--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.container {
	width: 100%;
}\r
@media (min-width: 640px) {

	.container {
		max-width: 640px;
	}
}\r
@media (min-width: 768px) {

	.container {
		max-width: 768px;
	}
}\r
@media (min-width: 1024px) {

	.container {
		max-width: 1024px;
	}
}\r
@media (min-width: 1280px) {

	.container {
		max-width: 1280px;
	}
}\r
@media (min-width: 1536px) {

	.container {
		max-width: 1536px;
	}
}\r
.btn {
	border-radius: 0.5rem;
	--tw-bg-opacity: 1;
	background-color: rgba(145, 149, 151, var(--tw-bg-opacity));
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 1rem;
	padding-right: 1rem;
	font-weight: 600;
	--tw-text-opacity: 1;
	color: rgba(255, 255, 255, var(--tw-text-opacity));
	--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.visible {
	visibility: visible;
}\r
.static {
	position: static;
}\r
.mx-auto {
	margin-left: auto;
	margin-right: auto;
}\r
.my-3 {
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
}\r
.my-6 {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}\r
.mx-6 {
	margin-left: 1.5rem;
	margin-right: 1.5rem;
}\r
.mt-6 {
	margin-top: 1.5rem;
}\r
.mb-1 {
	margin-bottom: 0.25rem;
}\r
.mb-3 {
	margin-bottom: 0.75rem;
}\r
.mt-10 {
	margin-top: 2.5rem;
}\r
.mb-2 {
	margin-bottom: 0.5rem;
}\r
.block {
	display: block;
}\r
.inline-block {
	display: inline-block;
}\r
.flex {
	display: flex;
}\r
.table {
	display: table;
}\r
.contents {
	display: contents;
}\r
.hidden {
	display: none;
}\r
.max-w-screen-md {
	max-width: 768px;
}\r
.items-center {
	align-items: center;
}\r
.justify-between {
	justify-content: space-between;
}\r
.rounded-md {
	border-radius: 0.375rem;
}\r
.border-2 {
	border-width: 2px;
}\r
.bg-gray-gene {
	--tw-bg-opacity: 1;
	background-color: rgba(145, 149, 151, var(--tw-bg-opacity));
}\r
.py-3 {
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}\r
.py-2 {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}\r
.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}\r
.px-6 {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
}\r
.py-4 {
	padding-top: 1rem;
	padding-bottom: 1rem;
}\r
.pl-4 {
	padding-left: 1rem;
}\r
.pr-4 {
	padding-right: 1rem;
}\r
.pl-6 {
	padding-left: 1.5rem;
}\r
.pt-4 {
	padding-top: 1rem;
}\r
.pt-6 {
	padding-top: 1.5rem;
}\r
.pl-2 {
	padding-left: 0.5rem;
}\r
.pb-4 {
	padding-bottom: 1rem;
}\r
.text-center {
	text-align: center;
}\r
.text-2xl {
	font-size: 1.5rem;
	line-height: 2rem;
}\r
.text-lg {
	font-size: 1.125rem;
	line-height: 1.75rem;
}\r
.text-xl {
	font-size: 1.25rem;
	line-height: 1.75rem;
}\r
.font-semibold {
	font-weight: 600;
}\r
.text-white {
	--tw-text-opacity: 1;
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}\r
.shadow-lg {
	--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
	--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.filter {
	filter: var(--tw-filter);
}\r
.transition {
	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}\r
@media (min-width: 768px) {

	.md\\:text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
}\r
`;class y extends Error{constructor(...i){super(...i);Error.captureStackTrace&&Error.captureStackTrace(this,y),this.name="Warning"}}async function S(e,i,...n){}async function K(e,...i){{let n=e;try{n=new y(e).stack}catch{}console.warn(e,...i),S("W",n,...i)}}async function G(e,...i){let n=e;try{n=new Error(e).stack}catch{}console.error(n,...i),S("E",n,...i)}async function U(){}async function Y(){}var r={mywarn:K,myerror:G,recentLogs:U,clearLogs:Y},N={$intro01:{en:"This application allows the verification of COVID certificates issued by EU Member States and also certificates issued by the UK Government with the same format as the EU Digital COVID Certificate",es:"Esta aplicaci\xF3n permite la verificaci\xF3n de certificados COVID emitidos por los Estados Miembro de la UE y tambi\xE9n los certificados emitidos por el Reino Unido con el mismo formato que el Certificado COVID Digital de la UE",ca:"Aquesta aplicaci\xF3 permet la verificaci\xF3 dels certificats COVID emesos pels Estats membres de la UE i tamb\xE9 els certificats emesos pel Regne Unit en el mateix format que el Certificat COVID digital de la UE",fr:"Cette application permet de v\xE9rifier les certificats COVID \xE9mis par les \xC9tats membres de l'UE, ainsi que les certificats \xE9mis par le gouvernement britannique sous le m\xEAme format que le certificat COVID num\xE9rique de l'UE.",de:"Diese Anwendung erm\xF6glicht die \xDCberpr\xFCfung von COVID-Zertifikaten, die von EU-Mitgliedstaaten ausgestellt wurden, sowie von Zertifikaten, die von der britischen Regierung ausgestellt wurden und dasselbe Format wie das digitale COVID-Zertifikat der EU haben.",it:"Questa applicazione consente di verificare i certificati COVID rilasciati dagli stati membri dell'UE nonch\xE9 i certificati rilasciati dal governo del Regno Unito con lo stesso formato del certificato digitale COVID UE"},"EU Digital COVID Credential Verifier":{es:"Verificador de Credenciales COVID",ca:"Verificador de Credencials COVID",fr:"Outil de v\xE9rification num\xE9rique des justificatifs COVID de l'UE",de:"Digitale COVID-Anmeldeinformations\xFCberpr\xFCfung in der EU",it:"Strumento di verifica del certificato digitale COVID UE"},"Start verifying":{es:"Comenzar a verificar",ca:"Comen\xE7a a verificar",fr:"Commencer la v\xE9rification",de:"\xDCberpr\xFCfung beginnen",it:"Avvia la verifica"},"Verify another":{es:"Verificar otro",ca:"Verificar-ne un altre",fr:"Nouveau Scan",de:"Ein weiteres \xFCberpr\xFCfen",it:"Verifica un altro documento"},"Privacy policy":{es:"Pol\xEDtica de privacidad",ca:"Pol\xEDtica de privacitat",fr:"Politique de confidentialit\xE9",de:"Datenschutzbestimmungen",it:"Informativa sulla privacy"},"Terms & Conditions":{es:"T\xE9rminos y condiciones",ca:"Termes d'\xFAs",fr:"Conditions g\xE9n\xE9rales",de:"Allgemeine Gesch\xE4ftsbedingungen",it:"Condizioni d'uso"},"This website does not use cookies":{es:"Este sitio web no usa cookies"},Camera:{es:"C\xE1mara",ca:"C\xE0mera",fr:"Cam\xE9ra",de:"Kamera",it:"Camera"},Language:{es:"Idioma",ca:"Idioma",fr:"Langue",de:"Sprache",it:"Lingua"},"Update public keys":{es:"Actualizar claves p\xFAblicas",ca:"Actualitza claus p\xFAbliques",fr:"Mise \xE0 jour des cl\xE9s publiques",de:"\xD6ffentliche Schl\xFCssel aktualisieren",it:"Aggiorna chiavi pubbliche"},"Easy & Secure":{es:"F\xE1cil y Seguro",ca:"F\xE0cil i Segur",fr:"Simple et s\xE9curis\xE9",de:"Einfach und sicher",it:"Facile e sicuro"},"We don't save data":{es:"No guardamos ning\xFAn dato",ca:"No emmagatzemem cap dada",fr:"Nous ne conservons pas les donn\xE9es",de:"Wir speichern keine Daten",it:"I dati non vengono memorizzati"},"No installs":{es:"Sin instalaci\xF3n",ca:"Sense instal\xB7laci\xF3",fr:"Pas d'installation n\xE9cessaire",de:"Keine Installationen",it:"No installazioni"},"Free of cookies":{es:"Libre de cookies",ca:"Sense cookies",fr:"Sans cookie",de:"Frei von Cookies",it:"Senza cookie"},$callus:{en:"If you are a public or private organization and want more information about this or similar solutions from Evidence Ledger, you can contact us via email",es:"Si usted es una entidad p\xFAblica o privada y desea m\xE1s informaci\xF3n sobre esta soluci\xF3n o similares de Evidence Ledger, puede contactarnos via email",ca:"Si ets una entitat p\xFAblica o privada i vols m\xE9s informaci\xF3 sobre aquesta soluci\xF3 o similars Evidence Ledger, pots contactar amb nosaltres per correu electr\xF2nic",fr:"Si vous \xEAtes une organisation publique ou une entreprise priv\xE9e et que vous souhaitez en savoir plus sur cette solution ou d'autres solutions similaires d'Evidence Ledger, vous pouvez nous contacter par e-mail.",de:"Wenn Sie eine \xF6ffentliche oder private Organisation sind und weitere Informationen \xFCber diese oder \xE4hnliche L\xF6sungen von Evidence Ledger w\xFCnschen, k\xF6nnen Sie uns per E-Mail kontaktieren.",it:"Che rappresentiate organizzazioni pubbliche o private, non esitate a contattarci per maggiori informazioni su questa o altre soluzioni fornite da Evidence Ledger."},"Application updated":{es:"Aplicaci\xF3n actualizada",ca:"Aplicaci\xF3 actualitzada",fr:"Application mise \xE0 jour",de:"Anwendung aktualisiert",it:"L'applicazione \xE8 stata aggiornata"},"There is a new version of the application and it has already been updated.":{es:"Se ha actualizado con una nueva versi\xF3n de la aplicaci\xF3n.",ca:"Actualitzat amb una nova versi\xF3 de l'aplicaci\xF3.",fr:"Il existe une nouvelle version de l'application et elle a d\xE9j\xE0 \xE9t\xE9 mise \xE0 jour.",de:"Es gibt eine neue Version der Anwendung und sie ist bereits aktualisiert worden.",it:"Una nuova versione dell'applicazione \xE8 disponibile ed \xE8 gi\xE0 stata aggiornata."},"Please click Accept to refresh the page.":{es:"Por favor presione Aceptar para refrescar la p\xE1gina",ca:"Premeu Acceptar per actualitzar la p\xE0gina",fr:"Veuillez cliquer sur Accepter pour rafra\xEEchir la page.",de:"Bitte klicken Sie auf Akzeptieren, um die Seite zu aktualisieren.",it:"Fare click su Accetta per aggiornare la pagina."},"Verification keys updated":{es:"Claves de verificaci\xF3n actualizadas",ca:"Claus de verificaci\xF3 actualitzades",fr:"Cl\xE9s de v\xE9rification mises \xE0 jour",de:"Verifizierungsschl\xFCssel aktualisiert",it:"Chiavi di verifica aggiornate"},Accept:{es:"Aceptar",ca:"Acceptar",fr:"Accepter",de:"Akzeptieren",it:"Accetta"},"Certificate is expired.":{es:"El certificado est\xE1 expirado.",ca:"El certificat ha caducat.",fr:"Le certificat a expir\xE9",de:"Zertifikat ist abgelaufen",it:"Il certificato \xE8 scaduto"},"Vaccination not completed.":{es:"Pauta de vacunaci\xF3n no completada.",ca:"El calendari de vacunaci\xF3 no s'ha completat.",fr:"La vaccination n'est pas complete.",de:"Impfung nicht abgeschlossen",it:"Vaccinazione non completata"},"Certificate is not yet valid as vaccination is too recent.":{es:"Certificado no v\xE1lido porque la vacunaci\xF3n es demasiado reciente.",ca:"Certificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent."},"Signature validation failed. The certificate is not valid.":{es:"Error en verificaci\xF3n de firma. Certificado inv\xE1lido",ca:"Signature validation failed. The certificate is not valid.",fr:"La validation de la signature a \xE9chou\xE9. Le certificat n'est pas valable.",de:"Signatur\xFCberpr\xFCfung fehlgeschlagen. Das Zertifikat ist ung\xFCltig.",it:"La verifica della firma non \xE8 andata a buon fine. Il certificato non risulta valido."},$warningmsg:{en:"The certificate is not valid for travel, even if it is correctly signed with a PRE key.",es:"El certificado no es v\xE1lido para viajar, aunque est\xE1 correctamente firmado con una clave de PRE.",ca:"El certificat no \xE9s v\xE0lid per viatjar tot i que est\xE0 correctament signat amb una clau de PRE.",fr:"Le certificat n'est pas valable pour voyager, m\xEAme s'il est sign\xE9 en bonne et due forme avec une cl\xE9 pr\xE9-partag\xE9e.",de:"Das Zertifikat ist f\xFCr Reisen ung\xFCltig, auch wenn es korrekt mit einem PRE-Schl\xFCssel signiert ist.",it:"Il certificato non risulta valido per viaggiare, sebbene sia stato firmato correttamente con la chiave PRE."},Validated:{es:"Validado",ca:"Validat",fr:"Valid\xE9",de:"Validiert",it:"Verificato con successo"},Warning:{es:"Atenci\xF3n",ca:"Atenci\xF3",fr:"Attention",de:"Warnung",it:"Attenzione!"},"Not Validated":{es:"No Validado",ca:"No Validat",fr:"Non Valid\xE9",de:"Nicht Validiert",it:"Non Validato"},"The certificate is valid.":{es:"El certificado es v\xE1lido",ca:"El certificat \xE9s v\xE0lid",fr:"Le certificat est valable.",de:"Das Zertifikat ist g\xFCltig.",it:"Il certificato \xE8 valido."},"EU DIGITAL COVID CERTIFICATE":{es:"CERTIFICADO COVID DIGITAL DE LA EU",ca:"CERTIFICAT COVID DIGITAL DE LA EU",fr:"CERTIFICAT NUM\xC9RIQUE COVID DE L'UE",de:"EU DIGITALES COVID ZERTIFIKAT",it:"CERTIFICATO DIGITALE COVID UE"},Vaccination:{es:"Vacunaci\xF3n",ca:"Vacunaci\xF3",fr:"Vaccination",de:"Impfung",it:"Vaccino"},"Surname and forename":{es:"Apellidos y Nombre",ca:"Cognoms i nom",fr:"Nom et pr\xE9nom",de:"Nachname und Vorname",it:"Cognome e nome"},"Date of birth":{es:"Fecha de nacimiento",ca:"Data de naixement",fr:"Date de naissance",de:"Geburtsdatum",it:"Data di nascita"},"Certificate identifier":{es:"Identificador del certificado",ca:"Identificador del certificat",fr:"Identifiant du certificat",de:"Kennung des Zertifikats",it:"Numero di identificazione del certificato"},"Certificate issuer":{es:"Emisor del certificado",ca:"Emissor del certificat",fr:"\xC9metteur du certificat",de:"Zertifikatsaussteller",it:"Ente che ha rilasciato il certificato"},"Disease targeted":{es:"Enfermedad que se previene",ca:"Malaltia que prev\xE9",fr:"Maladie cibl\xE9e",de:"Zielgerichtete Krankheit",it:"Patologia"},"Vaccine/prophylaxis":{es:"Tipo de vacuna",ca:"Tipus de vacuna",fr:"Vaccin/prophylaxie",de:"Impfung/Prophylaxe",it:"Vaccino/profilassi"},"Vaccine medicinal product":{es:"Vacuna administrada",ca:"Vacuna administrada",fr:"M\xE9dicament vaccinal",de:"Impfstoff-Medizinprodukt",it:"Prodotto medico per la vaccinazione"},Manufacturer:{es:"Fabricante",ca:"Fabricant",fr:"Fabricant",de:"Hersteller",it:"Produttore"},"Dose number/Total doses":{es:"N\xFAmero de dosis/Total",ca:"N\xFAmero dosi/Total",fr:"Nombre de doses/Doses totales",de:"Anzahl der Dosen/Gesamtdosen",it:"Numero di dosi/Dosi totali"},"Date of vaccination":{es:"Fecha de vacunaci\xF3n",ca:"Data de vacunaci\xF3",fr:"Date de la vaccination",de:"Datum der Impfung",it:"Data della vaccinazione"},"Member State of vaccination":{es:"Estado miembro de la vacunaci\xF3n",ca:"Estat membre de la vacunaci\xF3",fr:"\xC9tat membre o\xF9 a \xE9t\xE9 effectu\xE9e la vaccination",de:"Mitgliedstaat der Impfung",it:"Paese membro in cui \xE8 stata effettuata la vaccinazione"}},z={"0L7AaIwu+EY=":{co:"DE",kid:"0L7AaIwu+EY=",jwk:{kty:"EC","x5t#S256":"0L7AaIwu-EbkrTSIRA5WLXt7ylS-tCXSLfXKTu-wMH4",use:"sig",crv:"P-256",kid:"0L7AaIwu+EY=",x:"UdPPsk9xzY1vM1zdjgvHDsRCST55Y9SJBJUXI5uqGb4",y:"nJKU-8UBRm5vlhkLhSfRNMN2csqm_T_27DCUJiZK6ZI"}},"1+da8dKEjlE=":{co:"DE",kid:"1+da8dKEjlE=",jwk:{kty:"EC","x5t#S256":"1-da8dKEjlG3e33N-3hzXGwTVPpwtE6ZO-0MR6W3XLY",use:"sig",crv:"P-256",kid:"1+da8dKEjlE=",x:"qD56CIMWer5HDRhCpUrq5lZ6F8WrFPy_IDwjgb44oE0",y:"gRC5NcQW4178-5Ej6X946ePMDyO1li3Mf1eStQOqGzQ"}},"2BGoyFIyYPs=":{co:"DE",kid:"2BGoyFIyYPs=",jwk:{kty:"EC","x5t#S256":"2BGoyFIyYPvvSNrVQKxtVzAxLVXJJcAvsrb-bgk45kg",use:"sig",crv:"P-256",kid:"2BGoyFIyYPs=",x:"tGEETBc2arnjxxBWO3aDW-rwFgwmhqPbxhaUuOEC6kk",y:"Hdxj4ZlzxWCrZhTOCEA49Qn6rtmyB2ukahfbhDG7ccE"}},"2JelGO/ymxQ=":{co:"DE",kid:"2JelGO/ymxQ=",jwk:{kty:"EC","x5t#S256":"2JelGO_ymxTkn_NAT7T9ump9DpveX44uzauJdlTvNUM",use:"sig",crv:"P-256",kid:"2JelGO/ymxQ=",x:"eL12fn7-nUNW-9T9zJLaiZF18rfzL1I735fT-3zuKrw",y:"kdytqDCDAQxW66y1b2t1HjhGWs_rFMFClhzINh4ELbY"}},"3LCRmucB9kU=":{co:"DE",kid:"3LCRmucB9kU=",jwk:{kty:"EC","x5t#S256":"3LCRmucB9kXIskHtE2CqQuz82j7x1mtN60qYFeJN2Tg",use:"sig",crv:"P-256",kid:"3LCRmucB9kU=",x:"tgz2ifmTj_vZbBaz6xlNCdQlw4FQU7v3dUrJYQEigk4",y:"C8_HWNXN6Rs2Dt90464Df0J_sh2mDB5evtOhpOwLlus"}},"3jqajzfHpKE=":{co:"DE",kid:"3jqajzfHpKE=",jwk:{kty:"EC","x5t#S256":"3jqajzfHpKHtVFGoUOJWH-tzuACc061HQ4vH5bBhomE",use:"sig",crv:"P-256",kid:"3jqajzfHpKE=",x:"8nZrLqMlw5EvdfvJXgxb2rXj9OBT2UWBqAFLeCoQXuY",y:"PmDmSaVLS-MBUBzBj278qFr73H1ra892Vx8GmooEBvw"}},"3lrBUHc4iQE=":{co:"DE",kid:"3lrBUHc4iQE=",jwk:{kty:"EC","x5t#S256":"3lrBUHc4iQFFT4ijNwQ0XQ3JBXYGflkGmvw8IPBqCqE",use:"sig",crv:"P-256",kid:"3lrBUHc4iQE=",x:"71N2pH6YyC6gfUHwiEJDzIxwMIW_Hs-Cgn_gPQbZAkE",y:"XMl_y0xNo9oGQ_IS7OeUxK00yqJLx5KxDlrR2JCA4ck"}},"3oYtiEZ9wp4=":{co:"DE",kid:"3oYtiEZ9wp4=",jwk:{kty:"EC","x5t#S256":"3oYtiEZ9wp7-LJlqmCoXomD__1zifwmgzNUYOy4DrH0",use:"sig",crv:"P-256",kid:"3oYtiEZ9wp4=",x:"5sqOpW4x66Hmcposox406LFRWyGIvH2CA-Di7pgvWYI",y:"CS1-7KExN-mCsed7z2EVISrc3sSe5yPdDLQpYOjbEwM"}},"5xtSr6KkAGA=":{co:"DE",kid:"5xtSr6KkAGA=",jwk:{kty:"EC","x5t#S256":"5xtSr6KkAGCKZUV0K9U2AYQPgxpC8Tfgkpum3cs7vxg",use:"sig",crv:"P-256",kid:"5xtSr6KkAGA=",x:"zma5iz5ZBIh1KDZhj9fSnqJoKK9weOGB_91w6FpdAUg",y:"xRChg6YY_zHRkX1a6P4Esh0YaWkIIWSV0QxAjrkgM6k"}},"6FNkACSMLEc=":{co:"DE",kid:"6FNkACSMLEc=",jwk:{kty:"EC","x5t#S256":"6FNkACSMLEcjKozFVKIjAQ7G0cCj3LxgjtX_hEnNmQc",use:"sig",crv:"P-256",kid:"6FNkACSMLEc=",x:"8xghqNrE21susvTQHV9fwN3RWhBIdCYBu3laCz66Nas",y:"Ksqrk-OzyV7jon0lIjWNv6jsg7rtAHvDCiB3lJjecHQ"}},"6VdOPLF8/Fg=":{co:"DE",kid:"6VdOPLF8/Fg=",jwk:{kty:"EC","x5t#S256":"6VdOPLF8_Fh3xVqjvoX56hVYN3YXa7WtPE0A5S9-ibI",use:"sig",crv:"P-256",kid:"6VdOPLF8/Fg=",x:"HrXK9pJSpMrEB4xUrXTTnb7RakIRzDtNh6ugnjfV510",y:"zRbLuayqKSWGAzpPwX8uTMjboOpw95EklFMucnj64Jg"}},"72XVTQ2A9Jw=":{co:"DE",kid:"72XVTQ2A9Jw=",jwk:{kty:"EC","x5t#S256":"72XVTQ2A9Jy1Xm2iwMsMVgMXr8Loesi539JiPI-G7xY",use:"sig",crv:"P-256",kid:"72XVTQ2A9Jw=",x:"rm7fxPeto31KuUPtQl6VxVchANLA6NTLFaFJ5bupx2U",y:"rAbCAppN9rKseOv2Qhwpohahsn2L_SMWrU6z9t95-c8"}},"7XLhQx1KXdQ=":{co:"DE",kid:"7XLhQx1KXdQ=",jwk:{kty:"EC","x5t#S256":"7XLhQx1KXdTDHuhabTJrmpuyrTe1wyGo7BUYX-nTCVA",use:"sig",crv:"P-256",kid:"7XLhQx1KXdQ=",x:"kkxNdS0EZvjP8j17j2k92vHZpX3qSNMDbCqBYPvmqzg",y:"9Y5zRKrAGUqfLqacKEoYJkD3VEpguY70miND4iEVCYY"}},"7byt9scureM=":{co:"DE",kid:"7byt9scureM=",jwk:{kty:"EC","x5t#S256":"7byt9scureMCcb2NiLlaigxujehi_7jWnxKrLT2E0ns",use:"sig",crv:"P-256",kid:"7byt9scureM=",x:"ZftKRdrOhX1qx8KzPyrbXB_V8TYi2ZAsEwcr5gkoSkg",y:"j1sjfix9AWkcBuh26n46aoHRc7cI-jyEYrEyEOi2Fyk"}},"8AnF/hcilSo=":{co:"DE",kid:"8AnF/hcilSo=",jwk:{kty:"EC","x5t#S256":"8AnF_hcilSrBZdnzWKGe0JqqYbbN_fBXjLDJUrGhb48",use:"sig",crv:"P-256",kid:"8AnF/hcilSo=",x:"Ol2NFM-2gkakrrAa7g-F7KOXRziS4ydbxiNbm3XTu-I",y:"_Sz_qEijCzniTgXIyQN0aq6gIln6DK4lhndC0WDOk1k"}},"9IZVOkJRZPQ=":{co:"DE",kid:"9IZVOkJRZPQ=",jwk:{kty:"EC","x5t#S256":"9IZVOkJRZPQlcH_i8mu2ajp4NFhgQ35P4zUfZxac8W0",use:"sig",crv:"P-256",kid:"9IZVOkJRZPQ=",x:"65QJlG4NQ1UKM3_5Yf6n9u430S0gtEarOF4e-WrILwU",y:"GppLDtsyX0oAMFyVdmc83pzUZpdYhX33X-Fe8sc4C1M"}},"9v3FozjKAUo=":{co:"DE",kid:"9v3FozjKAUo=",jwk:{kty:"EC","x5t#S256":"9v3FozjKAUqiedlFvFFydFBz-_VipHqOFZO__LkTZk4",use:"sig",crv:"P-256",kid:"9v3FozjKAUo=",x:"zIzHRqk76vDGIUAj3dIo3UVev41tak5P5oxO-zaOlsI",y:"p8VDW6PcqiHKTqO7LSPFi64n-EUWomaENLb2oUhx9os"}},"AQCGDydsS1Q=":{co:"DE",kid:"AQCGDydsS1Q=",jwk:{kty:"EC","x5t#S256":"AQCGDydsS1SrTLpOO4BoDq4Bkkp4MzKODdwPiXVRH58",use:"sig",crv:"P-256",kid:"AQCGDydsS1Q=",x:"M7zYPRk1r4viA_oG6BxLec1shhb0JoDGjLAUuPxmGSM",y:"MPmgkGVHGOTLVKp1Q98f_5L4rhWQ7pn-uYtFdaOxrHs"}},"CvktK3hdjeY=":{co:"DE",kid:"CvktK3hdjeY=",jwk:{kty:"EC","x5t#S256":"CvktK3hdjebD5OXrksqfmu5lko49q3X8_0-SzucpccE",use:"sig",crv:"P-256",kid:"CvktK3hdjeY=",x:"uCgNX5VUmp7_lN7_UDF5kRDz7qvWnpgFOKwv1AxJXbQ",y:"r8CY-QAzj_cBgLKHKEibT69y2425qgKp3a4K9_N9frY"}},"DusseXrzqO8=":{co:"DE",kid:"DusseXrzqO8=",jwk:{kty:"EC","x5t#S256":"DusseXrzqO84DsUlO-upPN6-Rgnup9BpT31nHd771rw",use:"sig",crv:"P-256",kid:"DusseXrzqO8=",x:"xfciFuh1jL3LBPzaNAVmmVTL87eJ6wVctSg393nUcXw",y:"VS9b-bwoKeo1pUXSYJVSY_I0RtE3xdzi4w1BwD59qwM"}},"EDSWY8Hnul4=":{co:"DE",kid:"EDSWY8Hnul4=",jwk:{kty:"EC","x5t#S256":"EDSWY8Hnul5OEcvGPA7p9QyYBsWIZ8IwUEYo0PvKs-Y",use:"sig",crv:"P-256",kid:"EDSWY8Hnul4=",x:"6JUSmYQDMdlfXO6t5UIh71Hhib6DZ7VFVaRHqIiSem4",y:"m5QigCfW0kKBCQ45fs611QW502WCQLRV7flQaiM6udQ"}},"IKMstf8yj/4=":{co:"DE",kid:"IKMstf8yj/4=",jwk:{kty:"EC","x5t#S256":"IKMstf8yj_7J2v2Z7kuNIKTVoMBhPSiKvCZSQLP3bo8",use:"sig",crv:"P-256",kid:"IKMstf8yj/4=",x:"Sb7iWoF0mDYKwlP2EkoD9oJdt0Ew3tomFYMPK51gX10",y:"FYEDzBgFIcIoE0xq0ibE_Oua-rLISksttMc7KzGd27k"}},"IZftFLRmKGY=":{co:"DE",kid:"IZftFLRmKGY=",jwk:{kty:"EC","x5t#S256":"IZftFLRmKGZivlPYjwzMZvLYCIne8epGsiBrUiXDRGM",use:"sig",crv:"P-256",kid:"IZftFLRmKGY=",x:"yxW76RQrbDUSOEHxYksWk5CaGGygxDJJ7A9jRiop-Fk",y:"acJj0XhU5iTVUTAoxOesystaMXYuClwhyP8iSLsOM1s"}},"L7XIA2gi2ps=":{co:"DE",kid:"L7XIA2gi2ps=",jwk:{kty:"EC","x5t#S256":"L7XIA2gi2ptXxahyfyOWtEHjbMlLN4Ij_XEM-Uj5Z7Y",use:"sig",crv:"P-256",kid:"L7XIA2gi2ps=",x:"orGGRfEic2GL5o9XnITdq3nd9d7pWDvy6waSkDMI630",y:"_sLwpbkgVd61kf0JC9xXX6XC9hTglmgEef7FzooaX68"}},"M8bcnysCMj4=":{co:"DE",kid:"M8bcnysCMj4=",jwk:{kty:"EC","x5t#S256":"M8bcnysCMj6GRnB8f2wQAW2eGX2NJFnHZHLwV_ZzdPQ",use:"sig",crv:"P-256",kid:"M8bcnysCMj4=",x:"qXPIlxahww0kgegwTgRNQWpChqH2PfXelyd1D77uo8c",y:"ctPLZQ4bBO86cs1l32U1ADMT7YMPiU6omi9RULb3ZMg"}},"MxhfdcoHinc=":{co:"DE",kid:"MxhfdcoHinc=",jwk:{kty:"EC","x5t#S256":"MxhfdcoHiner068ldBnuRylgVUMKNrXnx58fGyxqUPE",use:"sig",crv:"P-256",kid:"MxhfdcoHinc=",x:"KPuGAJsDLPU7vw4aDg52nFxuxz3AsJtWUmtsY7tQegw",y:"AlX5ZfnubECbusuQmZzg_oCnTCn547ge9fc_7RfagfY"}},"NCdyt3s+cak=":{co:"DE",kid:"NCdyt3s+cak=",jwk:{kty:"EC","x5t#S256":"NCdyt3s-cakVp9DHZFZRcrCgZ2K_ZXME1fbQVwnFEQg",use:"sig",crv:"P-256",kid:"NCdyt3s+cak=",x:"szk-l0BVoDOXZg5SKeeNbLUAggqLKB2a3NlMXWfxfdc",y:"HR7D6qpSlnBU2Qcw9_5CMsSYua5cZNVJNibBTRG47e8"}},"OKpEjMo/2MY=":{co:"DE",kid:"OKpEjMo/2MY=",jwk:{kty:"EC","x5t#S256":"OKpEjMo_2Mb-DavBfrmMZdjHQuDUv10q0KSwqDCFhSg",use:"sig",crv:"P-256",kid:"OKpEjMo/2MY=",x:"UCSPQOg4hIgEJzD2PHFjccnQzSQIvYs-gbBuJqHxv7s",y:"QgBKchI-VyH443zIzcQPrKPgHWchH8LM4Sq9gNf51Uk"}},"R7q7yd90ZPU=":{co:"DE",kid:"R7q7yd90ZPU=",jwk:{kty:"EC","x5t#S256":"R7q7yd90ZPUuLc9kHTVh8zzVx9aCfIAv5k2i-6rlx8s",use:"sig",crv:"P-256",kid:"R7q7yd90ZPU=",x:"_eGWuKcNV_od7Eh4EJuiqBPv-0yP4q-qzhOlNFdkzus",y:"lsupfoYY1R8XX8aeFw1bzlFdg_cH3_Nf7TXwbnOKQpg"}},"TGjTR+Re+yk=":{co:"DE",kid:"TGjTR+Re+yk=",jwk:{kty:"EC","x5t#S256":"TGjTR-Re-ylVtGGlp2kxyH-dzipfuMVRxauV7VAGkVg",use:"sig",crv:"P-256",kid:"TGjTR+Re+yk=",x:"h4UMl8PsQUsu36Hq7xK-dyGWGrELxsfzVOny20ZnkHg",y:"cgWMQVCBqBxGJe9G6c4xQSTeFixrYpWQ_9Gi1hP_spM"}},"TpQIkAHAym4=":{co:"DE",kid:"TpQIkAHAym4=",jwk:{kty:"EC","x5t#S256":"TpQIkAHAym6d8Ydd8vJXs1olxVD1hxo1c2OO8yx4qpY",use:"sig",crv:"P-256",kid:"TpQIkAHAym4=",x:"s77Dr92zb-HOBL9gdfCWOwkna-9D3Kdq0HgUqpVByi4",y:"5KspETwBSj2QQO-9asqActLhxYXWCMzQD83R4-yqz7A"}},"Uj77p+qIQNs=":{co:"DE",kid:"Uj77p+qIQNs=",jwk:{kty:"EC","x5t#S256":"Uj77p-qIQNu6AVowa4D5pty5y_tgjNbdxJ-xvOdkiic",use:"sig",crv:"P-256",kid:"Uj77p+qIQNs=",x:"opaKkUUE4nCgNpRBE9ugmShuJd907aOocVvFvxPLxiI",y:"eaqkNqavxlbKuVX_9Ff29Vd6wKCjvGzL8T-I5E1k8ak"}},"XkVWZqUeeFc=":{co:"DE",kid:"XkVWZqUeeFc=",jwk:{kty:"EC","x5t#S256":"XkVWZqUeeFc0suP6qTJGG-C723_K_z2geLisE5wmluI",use:"sig",crv:"P-256",kid:"XkVWZqUeeFc=",x:"h934IiMCsXp977pDeG7Wi11S-uGGoem6nSNbtCILcSQ",y:"-PvxahpSzgSbyGT0od4Ux8dle1fty86oukdnWoTp6P4"}},"XuCERkHu8kY=":{co:"DE",kid:"XuCERkHu8kY=",jwk:{kty:"EC","x5t#S256":"XuCERkHu8kYEmcX5BsPTeizGD9m6v8WAeVrRNXGUiMM",use:"sig",crv:"P-256",kid:"XuCERkHu8kY=",x:"yV_EBSORniEE7SMMNmvSWT3dOAuDuviDHFv7rvnrcZ0",y:"sMn0JCI8mD5K7VaxsIjXcDnGxyq3gdnlupYv_nw0DxA"}},"Yr8a8Rd+zqI=":{co:"DE",kid:"Yr8a8Rd+zqI=",jwk:{kty:"EC","x5t#S256":"Yr8a8Rd-zqJs00pi4eXOLYCEtNmQvtqv6gjDTY-HHa4",use:"sig",crv:"P-256",kid:"Yr8a8Rd+zqI=",x:"5eOmRsTsPlyUVzKnWK3xYlY04-DOffgg07nWx4FTa4k",y:"qLl0PZ3wsZjB4Kbmb9kcW1Us2M3sI3JimpJzRGA3QnU"}},"ZDoFfkn+yhY=":{co:"DE",kid:"ZDoFfkn+yhY=",jwk:{kty:"EC","x5t#S256":"ZDoFfkn-yhaz3n8XD9R3y3dJeQj_dusOVbWxVzKzAWs",use:"sig",crv:"P-256",kid:"ZDoFfkn+yhY=",x:"HZM5AMBImcqdKPFM6P5xx0LmZxo81NcnuydrdPUQaaY",y:"tDYbEXLbl-KgfGEndqRtdopcEknxHII7vCOwLBSUgDk"}},"bKmas9wa5tc=":{co:"DE",kid:"bKmas9wa5tc=",jwk:{kty:"EC","x5t#S256":"bKmas9wa5tdCg-Mqip2wZ4NF2HwirVKeBee36ose3WM",use:"sig",crv:"P-256",kid:"bKmas9wa5tc=",x:"aOhuajeY34pPu_12SnuMv2qlG8ErMOj7s0eAEM2679Y",y:"Fc7ImViyKdUtYzVrKCCSUxIi1lLY9ZqgrDDkd4AOwgQ"}},"c1XrnEBoj/c=":{co:"DE",kid:"c1XrnEBoj/c=",jwk:{kty:"EC","x5t#S256":"c1XrnEBoj_ee3RFQDz8mlpbduar3rP65U0Lvwq44GJs",use:"sig",crv:"P-256",kid:"c1XrnEBoj/c=",x:"UtMktlZKpvOfwhumIvsvpKMWE1LyMq32RkRCbVM5TBA",y:"cR7AlGHV0o26jyt3GfLWJApHGJcpbim0Dvvh2krBo0k"}},"dhSzPDr4G2M=":{co:"DE",kid:"dhSzPDr4G2M=",jwk:{kty:"EC","x5t#S256":"dhSzPDr4G2ONgZYpJtfqI5rADFSfd---DA8BZR7VAZQ",use:"sig",crv:"P-256",kid:"dhSzPDr4G2M=",x:"sLa_zRhSxxsmrPE_RwPNKXGblvI4JrdqfPNYpuPn3To",y:"ZBMW_76HddTLluwYrJphK2XCQvqFriLVtVB_sHFxyXE"}},"hWoyHrtJs+E=":{co:"DE",kid:"hWoyHrtJs+E=",jwk:{kty:"EC","x5t#S256":"hWoyHrtJs-FifBB7JG2BWrKYoPRKDeRGZqEm8cTiBEY",use:"sig",crv:"P-256",kid:"hWoyHrtJs+E=",x:"xfzglJTFBrKFErvCRkqtHq0U7O7SmxzRntsiUENJFzk",y:"KcQ9Kx7PtB-kG9t1lImg3t-vIjq1nzZNN7jhI74ibq4"}},"i5SVuCsR5TA=":{co:"DE",kid:"i5SVuCsR5TA=",jwk:{kty:"EC","x5t#S256":"i5SVuCsR5TDDPk16KDqH_zQdgG6gOMvAPkT6OEA-USA",use:"sig",crv:"P-256",kid:"i5SVuCsR5TA=",x:"5D4cdY3G91kHagLyAGon0ufC2jqzQ17V1wjvYHOLxZQ",y:"mNXr5kFYaLyFVEvQFOWe92nlvvtmcjVBYOy__WZNRO4"}},"izUDZjGtHWY=":{co:"DE",kid:"izUDZjGtHWY=",jwk:{kty:"EC","x5t#S256":"izUDZjGtHWZQQ-NkNguubTegCFdkFabjEbbro4Pay2I",use:"sig",crv:"P-256",kid:"izUDZjGtHWY=",x:"pobykjScOX2uy-5C_BYBXDRcVUVOBDWLUgUaIhP2q0E",y:"qBfBQQQ2AY8daXloX-DXfq7YwYr6-Vg3BZozFZ_hVc4"}},"juskqrNQf6k=":{co:"DE",kid:"juskqrNQf6k=",jwk:{kty:"EC","x5t#S256":"juskqrNQf6mMkFceGXcgvv__vSiwbjuqI-eSJXZJi8Q",use:"sig",crv:"P-256",kid:"juskqrNQf6k=",x:"gxLpjMDX1_tMRghYLQKMI0nK4UkZuK9pnAAJTC7BeQU",y:"Gh2BaeKSZAvM_1R3Fu-AqcE3k0SE87ODGX5ZDf1h7ak"}},"kjEx2H7huNE=":{co:"DE",kid:"kjEx2H7huNE=",jwk:{kty:"EC","x5t#S256":"kjEx2H7huNFl-233AhNFUd1KiMYFvaZFehoCjZJ8WQs",use:"sig",crv:"P-256",kid:"kjEx2H7huNE=",x:"tLZ1N2Y7UQHgRO3yKGyRTsJWdYFGDld5kbglFGHrMvY",y:"UMGuV6AXJR_cU6z93V3E7II55pex8eWGTpxh4STK3p8"}},"nHmZ5K96UY4=":{co:"DE",kid:"nHmZ5K96UY4=",jwk:{kty:"EC","x5t#S256":"nHmZ5K96UY4Dod3mgs9fFIoY30K8gw34rwYoUmEJsyw",use:"sig",crv:"P-256",kid:"nHmZ5K96UY4=",x:"x4HHLyxeH1wp_aPCCwyRxWVEcfUALP66kgwanudG4b8",y:"LqbxhTLFV6c4NKIRD2q1WvddgPVAbgpIwzOoxQLIGSE"}},"nPKEYm3gXzU=":{co:"DE",kid:"nPKEYm3gXzU=",jwk:{kty:"EC","x5t#S256":"nPKEYm3gXzWH_yQisF1kcwMY6eJHqqWQRs2FQuo0Ej0",use:"sig",crv:"P-256",kid:"nPKEYm3gXzU=",x:"Jmki-G1pd9DNiLX_eT709p_ZeCd_mcjrmRLoTgP6nlA",y:"6icVL2dK0OuMvy49lZOXoRh7blf0ZsrjVyWMRQefG3Q"}},"nTrG8glLUls=":{co:"DE",kid:"nTrG8glLUls=",jwk:{kty:"EC","x5t#S256":"nTrG8glLUlvrsSR5KvYKPiIPR_rsm-AyFNSW8JPsHew",use:"sig",crv:"P-256",kid:"nTrG8glLUls=",x:"d-grPnJ58prZvOeLC3vi9P2mnqlvvGNfsbT0HmxAVHA",y:"KDQe9z09ePSIRloTWRUjBUXpe77vL4uMD6GkriI62j8"}},"npo0ZWgdQSY=":{co:"DE",kid:"npo0ZWgdQSY=",jwk:{kty:"EC","x5t#S256":"npo0ZWgdQSa0UGAmDwQhIZnHdMwZkbd1KqrPir6cyCI",use:"sig",crv:"P-256",kid:"npo0ZWgdQSY=",x:"PdriVdFsidKrE0nr7S-75iO7-8LOtzFp99--4BLqKKM",y:"Cp_5gF74JCJxDecarIn02BVpPSpi3FBmw_XbcEJWgPs"}},"r9YkEJZgi9k=":{co:"DE",kid:"r9YkEJZgi9k=",jwk:{kty:"EC","x5t#S256":"r9YkEJZgi9mQZtiTcH3d-8vueMJfg1ItE9Qib3Hp_ZU",use:"sig",crv:"P-256",kid:"r9YkEJZgi9k=",x:"7f4SNNst1BMsb6Ub0yVCz01aDWB9I2_ajVbLyJpTr2o",y:"SsEqHEKYjNJnMvV1_nTGGJVGkFQTpraBP_358PMNrww"}},"rKMDA66RiLE=":{co:"DE",kid:"rKMDA66RiLE=",jwk:{kty:"EC","x5t#S256":"rKMDA66RiLEWKx3M1CG-cypSfMYddvS1roloyb71bV0",use:"sig",crv:"P-256",kid:"rKMDA66RiLE=",x:"bQZPoqfjpTx8m_wAZZWk3uoDxzfpiISsNSuZg_-9VN8",y:"3Enn6xBxUb0MDNgIzerzo4c1THY2deDEkSVDCRLvOS8"}},"rXP9L7xddL8=":{co:"DE",kid:"rXP9L7xddL8=",jwk:{kty:"EC","x5t#S256":"rXP9L7xddL8yTzBblruK_cJIN-FiRMJ_pfTRXwfdBt8",use:"sig",crv:"P-256",kid:"rXP9L7xddL8=",x:"-fBKs9tgAlGoiBIglL4JDLpguDzBcXqCuIulrUkBy_w",y:"Gaybb-37Iq1P2Ar3J-9Kz8zApaKnjxKAzwn9cFl_A6c"}},"sYXcYixrOGA=":{co:"DE",kid:"sYXcYixrOGA=",jwk:{kty:"EC","x5t#S256":"sYXcYixrOGAFoeElmKAYYmal4KvzrtFr2lg22sOz60o",use:"sig",crv:"P-256",kid:"sYXcYixrOGA=",x:"40rFr8baZEDNvONEE-Rxf5ePnZLLmqR-5Uwx_S5I2yk",y:"TIo2cmeHNpA9zskx5X0zWtZktPc151zSSqmcqotxhkM"}},"vjm0I2ATJ+Y=":{co:"DE",kid:"vjm0I2ATJ+Y=",jwk:{kty:"EC","x5t#S256":"vjm0I2ATJ-aFG04BjW-oSvUAOyECTAaOD33dp0c4TRI",use:"sig",crv:"P-256",kid:"vjm0I2ATJ+Y=",x:"2TqSv2wB9nB0Ev3u5VmckxWzq_L0fvl1HVI3ZBXCF-4",y:"5OeW6NM1AAVDwc-v3tT2g8QwiEvPjcm626VE98OQ9yM"}},"vq08l/LTxhk=":{co:"DE",kid:"vq08l/LTxhk=",jwk:{kty:"EC","x5t#S256":"vq08l_LTxhmTdGB2otiLSrhMTuKX_Y8UmAuUnTRDsG8",use:"sig",crv:"P-256",kid:"vq08l/LTxhk=",x:"DRVIqu7uo4HOgXlXyxYBl2L1arxxvDfwfgnYHjgVKQo",y:"RRI_oVfWBI0hAiUvmK4Rq-UV2VO3kcyr3yrUSNTzmsM"}},"wb/2450PPrc=":{co:"DE",kid:"wb/2450PPrc=",jwk:{kty:"EC","x5t#S256":"wb_2450PPrfgoBgStK78QjyEa_DQz2Z2TT6GxE2mVKU",use:"sig",crv:"P-256",kid:"wb/2450PPrc=",x:"lGYxcioPZFzAfJHtsB07FzUDpJlc6C18W2kcnCGEE1s",y:"o2oYrCumbxPlKEhoeAARjUDl_EcqTKeLfG84-1QKiO8"}},"wtYpyAmNmdk=":{co:"DE",kid:"wtYpyAmNmdk=",jwk:{kty:"EC","x5t#S256":"wtYpyAmNmdl5iVmp-87jCSfcj8B2O2wylC7fkk9Jrs4",use:"sig",crv:"P-256",kid:"wtYpyAmNmdk=",x:"6_QS0f7r433yqdq7XKh3OOKhOEigg-VVixYEToozbg8",y:"UIAKgAyGWA3t1hEJzvLvH6nc3dqLlWaOePxnNd4LM2A"}},"yWCRdph8XJs=":{co:"DE",kid:"yWCRdph8XJs=",jwk:{kty:"EC","x5t#S256":"yWCRdph8XJsbsnzH7bDul9pZsflGDL_dLNWbPkP0cUU",use:"sig",crv:"P-256",kid:"yWCRdph8XJs=",x:"gMhpOktfDD7Vn7Wm-BlHabFbpOs2UmCVrtIpcOFpIlo",y:"_PtsBz-f1UlGbJRMUqNvOH6cLqCeXinIw7r5Qj42TYU"}},"7z8+6oww2a8=":{co:"NO",kid:"7z8+6oww2a8=",jwk:{kty:"EC","x5t#S256":"7z8-6oww2a-UMGx64UCO1I7OD-OGAWtfPDYd_AzqMd8",crv:"P-256",kid:"7z8+6oww2a8=",x:"rbWQM5hj5SeR23DzCV0TVKrFhfYsmNVVSbPFxwyw4ZE",y:"H3q7Gd26dofq8NgYWy281R2SMFn54Wime9viXIlJLBU"}},"Er5OTMwLd78=":{co:"NO",kid:"Er5OTMwLd78=",jwk:{kty:"EC","x5t#S256":"Er5OTMwLd7_5zgX6kmv_WBiAyYesn6UnTpKQdqa-EeA",crv:"P-256",kid:"Er5OTMwLd78=",x:"fBeQBQBjyKpvjsCujqi15xnygRMyhjNsEy198LzTYuA",y:"fjI3tZcSLz2JHzvzxB0BYAOdoJ9umxwlxO-RlqqulDM"}},"cdm9Ymfwn2I=":{co:"NO",kid:"cdm9Ymfwn2I=",jwk:{kty:"EC","x5t#S256":"cdm9Ymfwn2IdP75j53-pa8iFnG3fziNR8_vG2I7UIxQ",crv:"P-256",kid:"cdm9Ymfwn2I=",x:"lH46JUamhvfj2ocSTxw9Eq7nVdP9OzBOxQ_zaWNXN5s",y:"nGoJWup67janw4mV0DHM-IKWeqXI7SZfsa2tgE82fT8"}},"BKBFhNFXWAU=":{co:"FI",kid:"BKBFhNFXWAU=",jwk:{kty:"EC","x5t#S256":"BKBFhNFXWAXpNBeRrjYnzNa6_qBqchgpbpS9oXn-FNM",use:"sig",crv:"P-256",kid:"BKBFhNFXWAU=",x:"epKcLfnTZIej9gSNJVmR8sRYMMgztnG9h0ZGWx7D1X0",y:"YN9lfxrSXOeR5KB_r6pG5ISiZ7wwSdSXbG5CipgSW9k"}},"ODqaG8mnbro=":{co:"BE",kid:"ODqaG8mnbro=",jwk:{kty:"EC","x5t#S256":"ODqaG8mnbroTgFCocQOAs0JYAh5GgBqHf6Mgp22ETNQ",crv:"P-256",kid:"ODqaG8mnbro=",x:"U_f_KsmP3NasU_jZo7aulTrd9GHoznfnwWvX8xmHtK4",y:"PRKKGzABuy4V56S0PmkcJpp0jHCFsvMD8TPEAzAVLcg"}},"KG9lzdohSY0=":{co:"PT",kid:"KG9lzdohSY0=",jwk:{kty:"EC","x5t#S256":"KG9lzdohSY3NIqr8IxfKJSFBX-svQMeALqy-rgoTpTs",crv:"P-256",kid:"KG9lzdohSY0=",x:"njK8A8ato900a-wQ1IaxJyaeUGQ5lwsYOCRlq47X4DI",y:"hnvj9y9trrWHBk1rQnpAamq3BM80hx_1_rOWnhEIGGA"}},"Jjql9rBrjHI=":{co:"BG",kid:"Jjql9rBrjHI=",jwk:{kty:"EC","x5t#S256":"Jjql9rBrjHLQMj5L09VoNRyb32McfGVQPT93jCLQ5lo",crv:"P-256",kid:"Jjql9rBrjHI=",x:"myxlsE2inBusapxY7LvRiPN0s-dsHnakaaa9M_5NDZY",y:"U5Y0mQs3iu-31jvTBUXBgl600GlzRNxYZFePmvdoUWs"}},"NAyCKly+hCg=":{co:"DK",kid:"NAyCKly+hCg=",jwk:{kty:"EC","x5t#S256":"NAyCKly-hCi4iWbIctz-PDhNvI3hpJZlcvsdX8DfyDA",crv:"P-256",kid:"NAyCKly+hCg=",x:"BmdgY_VORsecXxY_0xNNOzoJNRaVnMMmHs5jiXrGvaA",y:"zstY8w1Dsr0fvicYH9PmLhsqef1AGNECIe-W_iUJ5Rw"}},"7AfAwcpWOv0=":{co:"LT",kid:"7AfAwcpWOv0=",jwk:{kty:"RSA","x5t#S256":"7AfAwcpWOv3Yzs6M0T1pLauzkl4EoOLZ47KmcP-lg8Q",e:"AQAB",kid:"7AfAwcpWOv0=",n:"sIcppmCVhq96vMc4NtW8X-yV6O1oC7hfKnewK1_pxfByqlVTPpETDLAjNq9knNQpCs7vGjadCbDAylsQRK7qfU3sUUKamh6FgDhFo1dzC4mUHCy3XBL04XJie2eT_a6Wgjrn6NjEFk5M4Jl4N8u_RbfaVxqaOjUM0hBfuzfZeL2LT30POqDHj1hcyod1fIbG4vv2Upqxe3OX_WLr-WzSPbRkPwxcJjmYeNYODT0rEcd9VSzJpljaK-eDVwxT0wMRnCH2QLxdw8sR-oDYDTZBaabeHYyZ0CfYzSoBOZT3fVMAbjkVAl8GFyH8tUm4lMQbYEMbl_FkftcZQicaqvRdQQ"}},"lshLbYfCWRg=":{co:"LT",kid:"lshLbYfCWRg=",jwk:{kty:"RSA","x5t#S256":"lshLbYfCWRh3u6SgX7hMRwaahK1SSpscpRRNqleCix4",e:"AQAB",kid:"lshLbYfCWRg=",n:"nhBpxzeGXNlQs7U-j_Av1BUZ6CCgMR3bFLT4rRjO8KQ4IpAKqSCQ3j57MJqdumk3AUfHO5zhMZF4Awy0wqV3oFlyP49_56KKZxGARe5UkyfPjVbl8AZpLmgYoS_Ior53TLrwmT_-zvXynzFYbOi2OtCtqanG-9OUhSVRrXEEB-56PpCltE31wemX1behxDuCbE4tuqyTYODFw9Le3dGCbHWdjxi5W3XIUNo8j2u2PKue0KS76Xv0zAYItTgChgv7mM55_G109m4MfeU7AHah43bJth8K8y-SxG3RYHskmNZ7sfn3w8w7WyW7D3_tKHcMt3hgIh9z3DuWeR1C296JyQ"}},"02vdAOY/+gI=":{co:"LU",kid:"02vdAOY/+gI=",jwk:{kty:"EC","x5t#S256":"02vdAOY_-gKmnwVyS8JSbr0SeMhaGsNpKTlxF-VgMXE",crv:"P-256",kid:"02vdAOY/+gI=",x:"5EtYbOu-RuUcFAu1NN1rqsuKqNzpl0Y6bgg9wNKcmVI",y:"83wTvNYx9nXLqR7SpaezMuShowsgQCr4yVEhP35w3eY"}},"0kAwFy+vLpg=":{co:"LU",kid:"0kAwFy+vLpg=",jwk:{kty:"EC","x5t#S256":"0kAwFy-vLpiPZ7c145j7J-2K9HgoEu9TdVqwOwCC50k",crv:"P-256",kid:"0kAwFy+vLpg=",x:"vIs_H8NhtE23q5tR84V9WwbbdGDc3hh7mjrXom4PRzg",y:"xkbkr3wvTiBS7UczqIbHZ23BOthVjfhc9PboCXGqobQ"}},"Amn7EaBy1ag=":{co:"LU",kid:"Amn7EaBy1ag=",jwk:{kty:"EC","x5t#S256":"Amn7EaBy1agClrQZZiLrnq8E8xsZNC9F-QMyU49opEo",crv:"P-256",kid:"Amn7EaBy1ag=",x:"7U8cYsFNOZawVgxC9FBfvNzL05Xetv6jVxj-aii7IkU",y:"3FwiIkbK7gHawBwiwraQ4CBc8C7BTcCbOWRbvvJa-p8"}},"bBnmkeVMV6A=":{co:"LU",kid:"bBnmkeVMV6A=",jwk:{kty:"EC","x5t#S256":"bBnmkeVMV6BQTvnKKOUMvtFNkuhrJRUsdWYUgvUwQsk",crv:"P-256",kid:"bBnmkeVMV6A=",x:"HTBJY0Z-T5I8EmqQmrbZAr8equIcKKE-YriIGw_AKJw",y:"sNGQI9Q3djEUzN_gBIjQEcVyBdPGtq4VLxQsshwidgw"}},"ln8K+9SqfuA=":{co:"LU",kid:"ln8K+9SqfuA=",jwk:{kty:"EC","x5t#S256":"ln8K-9SqfuDXnhld3cqBgP_xScoV_pHHZdGKsDEQuYU",crv:"P-256",kid:"ln8K+9SqfuA=",x:"ExXQauou3f3g77qOsZ0rSPFjoTDiKQDhG-Bpf34Yyoc",y:"hZGDATC_PdCmqpmS-LnswXPMcYNX9e9KnGVhyC46eKs"}},"o11W81MgYYg=":{co:"LU",kid:"o11W81MgYYg=",jwk:{kty:"EC","x5t#S256":"o11W81MgYYj2COP0F9vfqig9Z4i3dm_YqKzzaXzc4YI",crv:"P-256",kid:"o11W81MgYYg=",x:"HcMt1ez6jhOR9UBCXlFg__cHD_JoypGzNaG4C_gYl4o",y:"kHTflZ7O_4nX_AzuhZOc_mIfiP70OL1EOW1mUsEcFCY"}},"fNstNUxgGSI=":{co:"FO",kid:"fNstNUxgGSI=",jwk:{kty:"EC","x5t#S256":"fNstNUxgGSJzFAgrGpP4Vhm4LWZDqdVg-cIzvpDu3dg",crv:"P-256",kid:"fNstNUxgGSI=",x:"yOmUr7E52s-yofKQE_TmtLQxLPEpZnZMA_OL647R1ZY",y:"Rvjt7QOxdwnzF5oGWVeDjo7qGgG4B4dNReTHRINXkKY"}},"l8W4rhh9nTs=":{co:"FO",kid:"l8W4rhh9nTs=",jwk:{kty:"EC","x5t#S256":"l8W4rhh9nTsO1k7GCYxvcHDHC13St3dV6DjLaUIHz9w",crv:"P-256",kid:"l8W4rhh9nTs=",x:"Ip1kjKkjq85G7p7edy5EfNsWF0l4XZu5Rz-nL3viEVM",y:"_6omWFsLEN9EVzA8IsXBVyNrUs37vNid9XSBBkNwnqI"}},"25QCxBrBJvA=":{co:"HR",kid:"25QCxBrBJvA=",jwk:{kty:"EC","x5t#S256":"25QCxBrBJvBBALjD4A0vE9it6S_EOnuAU4l0vQbPwmU",crv:"P-256",kid:"25QCxBrBJvA=",x:"t5hwD0cJUB5TeQIAaE7nLjeef0vV5mamR30kjErGOcQ",y:"Xhnt-3Q65hQHjqiC2o0E4gV83Jz2jMVlHfUivWUXsc0"}},"MrT00mhDxLQ=":{co:"LV",kid:"MrT00mhDxLQ=",jwk:{kty:"EC","x5t#S256":"MrT00mhDxLSKKsuPfK3tumLbTbH-9-TT9ZjfgQJFevc",crv:"P-256",kid:"MrT00mhDxLQ=",x:"5_m2YdN8L81Ajoi-2brFJbul628alfXRXU26t7hRYEs",y:"77G--LUlZtg5vXG7oa4BSfv8F3nHcYdLU0hwpDHwdIU"}},"hFpY/ySOrwI=":{co:"LV",kid:"hFpY/ySOrwI=",jwk:{kty:"EC","x5t#S256":"hFpY_ySOrwJ3CHBv31aUeAOJpHV2R4WK5KVg6iWfkC0",crv:"P-256",kid:"hFpY/ySOrwI=",x:"PUwE7htr-kD1eVnJBfRf5tx0kA17qu4p1wRz3EKPxsI",y:"csiM5yKq_fh7JzHe5PSA_39HXqoz_Hbpc0tnBa1VZxU"}},"26Fcjnjuf2s=":{co:"FR",kid:"26Fcjnjuf2s=",jwk:{kty:"EC","x5t#S256":"26Fcjnjuf2t1FHqvxQt3igOPnQVoJRBkvCsgC9DM0IE",crv:"P-256",kid:"26Fcjnjuf2s=",x:"mRk7MSZQCX2u4UIQgVzma1JEo3yASVafls_5nw_V9T4",y:"nuRG7CuuDDNCobDx_Wiv2hJUbdfkcbXdQLB1b7ECYys"}},"2Yv0kajsIlA=":{co:"FR",kid:"2Yv0kajsIlA=",jwk:{kty:"EC","x5t#S256":"2Yv0kajsIlCKnDqWf0h5pZm71Svtfb1b-RI0Zos4Hq0",crv:"P-256",kid:"2Yv0kajsIlA=",x:"0xTgG-IpxKsG43aa1bGa5tRfC9WC2oCkA08Jz8vHcrY",y:"HIlTqq3h5MnB0RdBCDPTuhvSwgcqWrYkN1aCg5FFcCM"}},"AX/m4PDDCXE=":{co:"FR",kid:"AX/m4PDDCXE=",jwk:{kty:"EC","x5t#S256":"AX_m4PDDCXGjs-ualwtWwsb3MuJYE9ts_poKrS5-acA",crv:"P-256",kid:"AX/m4PDDCXE=",x:"f41NUAppbywsMdA5DQSf_UbbtGTCmVAv1h5lFKWpxvs",y:"rA5XMvXvGonSEZ4TpKJ-l98SYOJ-XVPVJILtIRD0RQ8"}},"Cj0KwOpRFvQ=":{co:"FR",kid:"Cj0KwOpRFvQ=",jwk:{kty:"EC","x5t#S256":"Cj0KwOpRFvRkzWnv22QNrr60THix84Gv2u1AaBZhF88",crv:"P-256",kid:"Cj0KwOpRFvQ=",x:"2KIu7zh4VbMsB2Y8H2VRojkDFFA8hQwDsYjuAuxqIvo",y:"qsdEY479PrXh7HbSMHV1uX9wayKeQ-Vl2z3nIZPZ0fc"}},"CvmI4xOoMj4=":{co:"FR",kid:"CvmI4xOoMj4=",jwk:{kty:"EC","x5t#S256":"CvmI4xOoMj5qGN9oHxdUlyJN94VP0t8CBLwXEdpc7Ng",crv:"P-256",kid:"CvmI4xOoMj4=",x:"sNCxAUi67vlLEBaGIqAk259l-dk6_Yw7hZL4JFqT6M8",y:"5gVyHOz_pmbSvdNyl4lWXpW6BAjjqExv_tp1RBYWmbg"}},"G3jDFQ1oK0Q=":{co:"FR",kid:"G3jDFQ1oK0Q=",jwk:{kty:"EC","x5t#S256":"G3jDFQ1oK0TFTZH73fI4Pqf5jaqrgqpWbURX9kQkGCg",crv:"P-256",kid:"G3jDFQ1oK0Q=",x:"EGSSdtJPZeYWU3QrR2cR4M2Cv6sYKuY870qkBKKREtk",y:"UnpeAsaX5vBJz2fjj1VQ18QK1nWEdDKCyujsfWhCJJs"}},"IMgNr10pfPQ=":{co:"FR",kid:"IMgNr10pfPQ=",jwk:{kty:"EC","x5t#S256":"IMgNr10pfPR2uyENjReGb2roflG5VgtJHyi4Ss6alJg",crv:"P-256",kid:"IMgNr10pfPQ=",x:"Cmvd9b56sHucHEi7GBjqapZy6IAZ4MFIFg7Acr85jXo",y:"f6AUjcxQT_Qp5LMC0eb8Jq_N-rkvSS-bHXcy0-CuPuQ"}},"M+R7JFFk6G8=":{co:"FR",kid:"M+R7JFFk6G8=",jwk:{kty:"EC","x5t#S256":"M-R7JFFk6G_IvN60I0TZAk1i7H0Skwn6g-CpkbYuR-I",crv:"P-256",kid:"M+R7JFFk6G8=",x:"B5mLr8niSSWcqZ3EbDPjFseikZTP0rPRJPDW1-hvblE",y:"Alo5hDrFhIl0PO0VErQKzWm2fSTMrEHHIG2-SCe22zs"}},"MJuQDybecd4=":{co:"FR",kid:"MJuQDybecd4=",jwk:{kty:"EC","x5t#S256":"MJuQDybecd5x_6Ea3hwT4maemp6D5kgYhD78uaMmSfE",crv:"P-256",kid:"MJuQDybecd4=",x:"RSQZ3mIam9saggM_z1bCW2-wGPWF6yNJN7qrsTLHntw",y:"RLtiaTyUTz_OuoCVSLB5iDKlPyoPwZ0NW2-onGMaXE4"}},"Xo78qgBEx8k=":{co:"FR",kid:"Xo78qgBEx8k=",jwk:{kty:"EC","x5t#S256":"Xo78qgBEx8lxHv1EPn97CBnSRK4DWTrDYzjpJ2nI72c",crv:"P-256",kid:"Xo78qgBEx8k=",x:"lKFq4PSBlVJuySoXP3gAMLo6v8B_MCODYRK1OFUmBk4",y:"yf5H50Zr_2upLASIIcIw3OJ2cddiClL4abmpFZIUxsU"}},"YDAy+yvD5lU=":{co:"FR",kid:"YDAy+yvD5lU=",jwk:{kty:"EC","x5t#S256":"YDAy-yvD5lUD1uFJDZ4zBZ6f2hRbXU62SCBLll0hkek",crv:"P-256",kid:"YDAy+yvD5lU=",x:"bGQa07BM7QEDU6l68C2n6ZHM7ZxZmHQNdBf-6uo5tDc",y:"8Xvn5sGlpabKmKWH9iAsZb4C-jMeRk757NXrygkKMR4"}},"YVpBYnLh1Hs=":{co:"FR",kid:"YVpBYnLh1Hs=",jwk:{kty:"EC","x5t#S256":"YVpBYnLh1Hu5lKpwfXKMPA7U0WaOo7xXLQ_9yicwvHU",crv:"P-256",kid:"YVpBYnLh1Hs=",x:"8SjDdFFGxTunJ0RQyxdGDbBKVUjHz9gKydhpKuTZAvY",y:"GTMxlVVezWISRkKjqeDsesFN8vs2Ouup3wHmgD3CDUc"}},"e+bFdywyJQE=":{co:"FR",kid:"e+bFdywyJQE=",jwk:{kty:"EC","x5t#S256":"e-bFdywyJQFs9jVxPy4gfyHW8eqMMGDE04puvDqkMXo",crv:"P-256",kid:"e+bFdywyJQE=",x:"RuPqA8PXwAZlb3MnIn-3UajY2JjRkt4v3rI4nUuQjh0",y:"t52Wf96w6mifCW6MPqShYHVgOdbGeqUCMiF--sGH6wo"}},"eQOY6BDp+vM=":{co:"FR",kid:"eQOY6BDp+vM=",jwk:{kty:"EC","x5t#S256":"eQOY6BDp-vNhfby793-jYrh53j3w7EKc8H--NBY7gdI",crv:"P-256",kid:"eQOY6BDp+vM=",x:"x2sQ7slwQ-IQrSLZwgIfafTa2g144vB8OXnI5WU67BE",y:"302s7D3HzW1lI-bqv3xQeRBG5WkhKUQOWMIcnwBCLeI"}},"eUVY16rD2Kc=":{co:"FR",kid:"eUVY16rD2Kc=",jwk:{kty:"EC","x5t#S256":"eUVY16rD2KdTOw671Ixz-YfbiXEkJYpieIHykgIxsV4",crv:"P-256",kid:"eUVY16rD2Kc=",x:"x2HtKUYnSxJw_bgED-2LJQMAIjyA-I2plnVS50JCXaI",y:"ACyrLWnN-8AdZVL2rH3b2xPpzWwrzJBj3TIy5bjH094"}},"fGLuvg6n5wk=":{co:"FR",kid:"fGLuvg6n5wk=",jwk:{kty:"EC","x5t#S256":"fGLuvg6n5wkxhiuHx3qRTCmFHOEcu1b_Yqkf4dShYg4",crv:"P-256",kid:"fGLuvg6n5wk=",x:"ImIFaugzwB5f_VyfQ3KTfTSoukwAPVSgHZWrtrc2j4E",y:"bgFKcPzm0ZwPaQYzfx3VHNc3JfUjv77AhJx5F4cY8-E"}},"lrxgMs2Duac=":{co:"FR",kid:"lrxgMs2Duac=",jwk:{kty:"EC","x5t#S256":"lrxgMs2DuacfGrkjdqhA1Fb4FZZhUJi0x-IH_TDWXCw",crv:"P-256",kid:"lrxgMs2Duac=",x:"7jO1wt-KJfoKi9O5dydU--nfENeQWdVACVEwAdquyYQ",y:"-ghFn6NcRtbVHDISiCO-1yWxivh9p8gLgrCdIE30-ZU"}},"mo/w8S8rZ0Q=":{co:"FR",kid:"mo/w8S8rZ0Q=",jwk:{kty:"EC","x5t#S256":"mo_w8S8rZ0QQtukx_Q5E55lBvOVjomU3fM5-QK9xXrk",crv:"P-256",kid:"mo/w8S8rZ0Q=",x:"1PApTQ_nFA6JcYUuo7GgP-gPSKf98BQh88IKHOt_yNQ",y:"vGa48Yy_pVWOhB-MskHW0GRqkvXdknuXcTcMeQt48ZA"}},"pe6raiG2dWE=":{co:"FR",kid:"pe6raiG2dWE=",jwk:{kty:"EC","x5t#S256":"pe6raiG2dWGJvn7IeixRv_NPBSP_jZWaosYKh42kALs",crv:"P-256",kid:"pe6raiG2dWE=",x:"YhbzpGUwWZsuCEA81oAyfP87n5PwahJ99Q7M7t8AyNk",y:"-0Fb99Jl_hlEzd2lm_dfdN1L438EZQiUIgu6S3IY5Mw"}},"rLMiGt6uB3U=":{co:"FR",kid:"rLMiGt6uB3U=",jwk:{kty:"EC","x5t#S256":"rLMiGt6uB3UBPe-Kfh9Ma-0SkIroQVj1RM_IehCSZZU",crv:"P-256",kid:"rLMiGt6uB3U=",x:"zL6Rlb4x8PsN6Knac1E-85lkIce-1Zn53WIrFVIAAaU",y:"zneD-mab3fjCzi83SW8YTDxePOdbPasV8zASDHr0izA"}},"FhciF/j3plg=":{co:"UA",kid:"FhciF/j3plg=",jwk:{kty:"EC","x5t#S256":"FhciF_j3plg9xW1AC_2kui3pQAwmR-o6NfT1gjCvGO0",use:"sig",crv:"P-256",kid:"FhciF/j3plg=",x:"d22zt56DQx1ao5dd4u6jU3KPELJdcWfl0-FJ6cVhCb8",y:"LNEpkJXhbUvZuUUKlc2wa_yZ1H6lWY76zxc8KW4HTHk"}},"4GkJs9YsYS4=":{co:"HU",kid:"4GkJs9YsYS4=",jwk:{kty:"EC","x5t#S256":"4GkJs9YsYS5Xhqs7YqGwjuJIF7eYjY-P9lXONAkWcD8",crv:"P-256",kid:"4GkJs9YsYS4=",x:"yN8tlsHEJlHHmms_54jGukHiHadMS0ckg70EQkyDuX4",y:"wNNN7ggomU6JCrqyEtfRDgJUBS0wi61Se9gnEk-_h_w"}},"Z7k1XpIWZOE=":{co:"SE",kid:"Z7k1XpIWZOE=",jwk:{kty:"EC","x5t#S256":"Z7k1XpIWZOHPEXBg3qNQHkGEOrdXrefPiS6ghhje2mk",use:"enc",crv:"P-256",kid:"Z7k1XpIWZOE=",x:"aLOo1IGTspZSdr2BqdAvKjZjHfW_Zq8VDrI6nEhBlXU",y:"K91Qg5c4616Ob-osdqhfUQskibB4GcVK6lkKRUG62zM"}},"ZpnsokK1DgM=":{co:"MA",kid:"ZpnsokK1DgM=",jwk:{kty:"EC","x5t#S256":"ZpnsokK1DgPmjiqGzPPH15HV92Caee7WPQ8dFuejsdk",use:"sig",crv:"P-256",kid:"ZpnsokK1DgM=",x:"vILEthEWN9hu06zQ9GCUCthQJ9OAa_0eskYOKbfQZVE",y:"H_ZDczxB_am1a8L6_I4cCi-giqFwHnzS5awSmfjLac4"}},"90CNG8dcdn0=":{co:"SI",kid:"90CNG8dcdn0=",jwk:{kty:"EC","x5t#S256":"90CNG8dcdn1gEIm_D82XAsQ9eOd7XE9urjXV0MZyuCU",crv:"P-256",kid:"90CNG8dcdn0=",x:"EmxEg2iFDaol9DVnrqIY5zkPXrBANQlakmUfrBhogaA",y:"wtmWe35ENiHDiYBBeK0Esm9-IOYw8PPIO0GiJJ2iyjM"}},"FtUwA9uHJoo=":{co:"MC",kid:"FtUwA9uHJoo=",jwk:{kty:"EC","x5t#S256":"FtUwA9uHJoq6QPqaeJHvh2P4jKteSCutjPOSFkClEaQ",crv:"P-256",kid:"FtUwA9uHJoo=",x:"_XCqYpwUi4RLldTOqsukogo6l4ZUIXO4ZtjkUxEpDTo",y:"GCxSNLgKbdSl0n6bJ_BHzRj2lhfmFtgdUCqWwrW7WRY"}},"Pcl7yBWEQ7c=":{co:"MC",kid:"Pcl7yBWEQ7c=",jwk:{kty:"EC","x5t#S256":"Pcl7yBWEQ7fXlLRDbf7ffSkyPTBjvWNACGERxcF-L9s",crv:"P-256",kid:"Pcl7yBWEQ7c=",x:"crxlv5_uGbsaXM_QMSpvZV2iNtF0o4QBech6LGpy3OE",y:"Hn2yS3_uIqiNfUDVrVFxI5TDMrQePtREix3V8pIuV9o"}},"6CDB1hL+uKU=":{co:"SK",kid:"6CDB1hL+uKU=",jwk:{kty:"EC","x5t#S256":"6CDB1hL-uKWVBtXsXk3Oiz_L5ozZgTsG5dPxG9YoWMY",crv:"P-256",kid:"6CDB1hL+uKU=",x:"6qxT6sSK3TDheWFHTBkfveooRhtUWqEqrELD9B7aAk4",y:"8Yz0tzARE7Zp1m-J0cwSDbxcKyw8UAqk1_CXr6d93OE"}},"r9RtWK9x7dM=":{co:"SM",kid:"r9RtWK9x7dM=",jwk:{kty:"EC","x5t#S256":"r9RtWK9x7dNyHXcNpROeTGV53cvlBr2485hf5jxujXI",crv:"P-256",kid:"r9RtWK9x7dM=",x:"H2-GOTdCPhSUdDZmaM7hq_hRJkZCd3wPyOwB8lS30s4",y:"DfNa-Fxab9WHr_tW3weANe9wwcoWciCpHZ2XPxX2gF0"}},"PBpDVqnJ7Us=":{co:"IE",kid:"PBpDVqnJ7Us=",jwk:{kty:"EC","x5t#S256":"PBpDVqnJ7UubC6KtAsZiBINQLJPN0TylSWFH9AgYkxE",crv:"P-256",kid:"PBpDVqnJ7Us=",x:"TPE5ItolrGzLQLPqYxOT-orVmYJusLDsPWLwrK-bbJI",y:"gQbVwbKw9j8v6LFmK_SxeX3zkac8ZgVEJs6eyuLj4iM"}},"eNNsg2jd4wA=":{co:"IE",kid:"eNNsg2jd4wA=",jwk:{kty:"EC","x5t#S256":"eNNsg2jd4wBSYFAv2Bx_NsJ13l5-6KoTQZGxOAm7BDU",crv:"P-256",kid:"eNNsg2jd4wA=",x:"ZfUiZPt-jvUVd8fpPkv2xoXxluGZwuvys0oXWRnPOBc",y:"A3hpnDLMye4EDSktMTmd98bWP_a4Yr5o1VOuyB3ATPE"}},"KjE8h58xh7A=":{co:"MK",kid:"KjE8h58xh7A=",jwk:{kty:"RSA","x5t#S256":"KjE8h58xh7BpvPp3qYqbihoo7lKx5rS7ob0OD9RdfJM",e:"AQAB",kid:"KjE8h58xh7A=",n:"y4Z5U8Qb5fGFqBdFLyUhGP4ZlweYKLIA0BUXsuNB1h4EkNmF9tfcGsaDDBwmH5feGWlxaiPmHgpm8ewKbtrNusMz9t2YuZz78f9Pdk6Cjhh7A1O7abtmonpEGNbUnmQr1xmp2y33RM-p-kG2YzwWhlVStm4OjJNmnuLplbCfLi8MZaqUxRvV8irjTLubqUCsgH1yOOLNnB00OVTog7oqDGGD5Lesj_7H7T7pqDH-DNvj1BnFVMDm1DbYGOd0NXZH7gr-Twi3a5Ogtrm6XYG65RuDO2IetJJzmME_FyMBgYntmu97eCDoKy1rdpA8GUMWOk9Mic2MD9d2DLlOjtbPUV63KkeuClZYLUN77tl06qUJRD6vSNLCnzxSQzhq_qmr8Bq5t0XCywl1ViaCFknPtZBTxszi_GbrzjQQUEwWl7rJKZQQTLifAifc7atDZHRhSzBTJ2IcxEppTllMEss2Wyk5OzhjILauTGk640q5nbr0mix7yDKW5Us5tzMvgQcd4Cp3E1USGBjKoLs-yT9C3skVA5Tjt6k4tc1B1sR-EftWaX3gEtl6XM2S9JZl1YNYyOjXNW5PRy-FmpWuEVBTBN8czKnqvi67dCZmgLIkv1ABw00XlWPoH6kAnKFCV9zShC6o9Ef7UX2hHchOLdjZxIJCY4nTu3OfC4rqey3EPGE"}},"qEgQcWPd3xU=":{co:"MK",kid:"qEgQcWPd3xU=",jwk:{kty:"RSA","x5t#S256":"qEgQcWPd3xXh3Q8IKmFansI8lfOZGCpBZDj2F6_O7TA",e:"AQAB",kid:"qEgQcWPd3xU=",n:"144Qzvk4vkmWoGZUPGRepcNVPCbXy0tLeaxmuDuTbJIfyO0TwxrQllUOF-pni559-knMmUUk7PqfvU8fsbrNXHn4Wh1LzIVZkz_GuiQ44bR3b7k9kcS9vfOx14WiP41zx_vOmQXWaGx-mzC-RD6-w5T8hAdRjol6nUHAvstL0MbIylv-Fhi4s1qpmr1rR5liG_KI3uzaMjJvQC6d3R9Ee-q3ULTJ81-WyVe9sK9hY5Z_KzFrMbnbH2Y1_voIcLc-vjjVCOFJKkXhjz00_wu6NalMMN6MC-G9gZMHp69CJPB45hIBiAKfGEI4dq8lCthqi2orRoXmAyf6LxSBL6wZVu-naTXUJMVoXjFNXIyszm1MRQiagaoqOyctY_bg_RQgVSDrjtEN4MeMArSbehogEZuYL8GRRrnOEbWb86DEwMAYDbbPFEab3hsyZejJ3bxZdylWNj1V8QPyP2uvOLAFGwsvSzw7E34b0RcpEeOoQeKrT8nKPpFOFIQ3gBxyqlw4T-v_iENIxDWoWdvUO2_bkidNXecSn3XlzTT7OW8IbJ0M7D9htz_SPd55XP5sU5gF3wnwuWMIq1auj_LXwbRAh63OiUG-Bo4ssL7AkMcOpkYl25QZQOXzWykI0_ZZ8Hu_968eoYvMxbQD4EARMGDMwdkU5G-nuHniTS52kONbrZU"}},"EzYR1uk/E0I=":{co:"EE",kid:"EzYR1uk/E0I=",jwk:{kty:"EC","x5t#S256":"EzYR1uk_E0K-BbHtFA8_bV6Gl4veveR7CiYnwg74dYQ",crv:"P-256",kid:"EzYR1uk/E0I=",x:"vW8QeGk0YQMGQ_wG2vpPalRdoKNfd48O2qW5uP6gmgQ",y:"ZtTp60K9oLR91ysTX1Q3rjbqnqJrEkZA1mtw16sC3OA"}},"cS/wou0g/po=":{co:"IL",kid:"cS/wou0g/po=",jwk:{kty:"EC","x5t#S256":"cS_wou0g_pp-iw4rykL3WlSc2xsADO3dF6mV_m_iQcU",crv:"P-256",kid:"cS/wou0g/po=",x:"cw-UZUnryP4rqSw-a8xQw4wLHZkcu4MDjJP7QeBUEpA",y:"7fMYeIuEUiARCawZALpEkqG0Q5MDG9HUgrFsCtK3zIE"}},"mqWkXpNR0Rk=":{co:"AD",kid:"mqWkXpNR0Rk=",jwk:{kty:"EC","x5t#S256":"mqWkXpNR0Rm6GmFvdJO7lRG5K1-eO3gKZ3smYDcVB40",crv:"P-256",kid:"mqWkXpNR0Rk=",x:"GvHqf7SYtlvevOyA_no-i1_WcmS0bOYP1bgP-pJTjTk",y:"ATqUIvn-yHuuNeVhZfWqKszJikSZhOlK-B_m_VW2uxQ"}},"2eCjZcuOoEo=":{co:"CH",kid:"2eCjZcuOoEo=",jwk:{kty:"RSA","x5t#S256":"2eCjZcuOoEreopL1_ylezinonMMsp7JG5tEbCJq4oik",e:"AQAB",kid:"2eCjZcuOoEo=",n:"0wSNYJMn6P_DgJDmQKobZubHIBOAlIEG7dI-6p4uXZqyw-gXcUXaaTEEn5F9i-OMAz9GdiTlXo6dPr7LNOm0yoNWNJMcmW4ePGWKpTm70Ie3YhkAzLiZ2kvTUnAKJj3q49IttvL6gj1pOOGroUyLBB44JOvd21GSW2N5LCZU9JlGXmVe_xPirbMFgQx9hgcwPlmzY3OGHGwdosO6aEew8fBvgHwyJfqbALRF757EpA_qNfLH-QwinigkIl613yghzslRzoejvyOz4UkKOQm18fAbBF173J_Uur4yLF7voui03QK2we21sLlW8WkS4xKDnlL_rKvnsSyTEFqsC0Jxjw"}},"Ll3NP03zOxY=":{co:"CH",kid:"Ll3NP03zOxY=",jwk:{kty:"RSA","x5t#S256":"Ll3NP03zOxYSw6HRJR3HbI-TjLwk_Zni8IcXMMpL2ss",e:"AQAB",kid:"Ll3NP03zOxY=",n:"tk_51stJXU48RqD2lh4IdsxFrjlJfmTCrLr3cQNEXkrEoI3OEV8NnotE1RjVmQrqLTT04oxpWlcbMolXtJBtu3rOiLNwQvyVEbj_xSc6KT84Tp7GBo1P_kkunY-Vmab6HUCV_oGZYmsdiUP_OnTPX6Wy6delDhnrgHIDti73_TSsG7Zl1V6km7-KIkjAkVCEDkkUD7uffd4G-GBZ0B9F1KOT0IcFQNvDm0zlROVoGFlmPS8DWlrLHuIdMbB281uiDjcN-kNUt7rUyyj6TFgX9WCgEB_5mQBMRaaXK1zeDTaNkmC2S7IWxhMQsMBXJyAdbD9AnQOZc6XRjBauO7gz0w"}},"d+WbDD8Gr5g=":{co:"CH",kid:"d+WbDD8Gr5g=",jwk:{kty:"RSA","x5t#S256":"d-WbDD8Gr5i3RH34_INLq_8AopA24OxQQCzFk7dxbG8",e:"AQAB",kid:"d+WbDD8Gr5g=",n:"2MyDsFqh2Xhdc6PUbR-0alU0hD8tT6BSJpCbigvdZAbz5slDPAIrXvyz2Aac79U6jvyyMHHDbIOL1DxU1_pc7shgd_B0btHJogwQQUxyh149GnA8e1i3LLJhu8dtC4LxBPZK91nknkgrKyYU55sJiQTnx2VYuF6WDBXFW4Q2EHsN-KIC68uDNousFHdw4Dk9rb4vEHLqsbY_afEZ1HmWbrvN-6pPyPFh43ogvYWkVcn5JahOXQqpoePVFUAq0sdqG9DluoSXWqpyNfcTQp3WCVldqsyMfAzGwceR_hKohMDXBmxAAbv5h8U05KX1xHgwAWfPPiITtqqIKt0EvFJPzw"}},"hGUS4Zj9fLM=":{co:"CH",kid:"hGUS4Zj9fLM=",jwk:{kty:"RSA","x5t#S256":"hGUS4Zj9fLO0HOqVPBgU0M4jhP-wLy0dLO3a2_6W_FI",e:"AQAB",kid:"hGUS4Zj9fLM=",n:"0urbzgg7-VIvee9-u7TiW-a-xDKAhqh9CXfPS-Lydi9Y527boI6bbqZxA2qhFVWp4FFzxRYRy6pVfReokpgSQvcjoR6YvRNi_HK4c44tLvz5gymhX_80oR43Gr_vOUkvne3c3SD8BN-tZlJScIt7MrIm0KNWjGGBoCnswxcn2dYGNoYFvHVN_3exg-oC4oO5QU3rNyFh3PWSHIn3svZAAeT3NLLdZ2inGoRyGTY3IYcPk6vj2y69wDxz_rO3kV2SpwHMCkKqcwwsdlOiqS6nd6AvOpQYMRRC5mEFbB1J0g7z73YdH-WNzEsa_B25xzDrIWi_sul2INhd3q0OTw2vqQ"}},"l+UqotarLJc=":{co:"CH",kid:"l+UqotarLJc=",jwk:{kty:"RSA","x5t#S256":"l-UqotarLJfgp1ZH7z5B5dnmiVJCSBf4kg9KR-e8FSQ",e:"AQAB",kid:"l+UqotarLJc=",n:"195RM978uHXQTBanwOqW5vt6WBnO8skLa7kiY4q4l8MOgSrIitQvBcnuJFiTazMTjJpdEAblB0E4mZuzvn2p1I7SrFL7mwqQFrQ9GXvNp6gwBHYJrMci-J0FshxnWc9EYFFbnmixdSsyla5c4W8b_pfasFYWkuCwUCGLrspMrkJ_gsWcj4h0HvlCO9hHsHlLqD_kY0y0VGUAizsah255YZhTeB4ag60E93wUHt6HX0q4ngCk05S04aH9eaBF9GIuRhxrI4GEDcYIPB8GasrKPIS8ufOMQsSE8uJkPhJGQblDh-fPZb2bnUPX9vUSBPTJD5XgHsPGancWrpzBGttO3w"}},"ohI9KlFR2P8=":{co:"CH",kid:"ohI9KlFR2P8=",jwk:{kty:"RSA","x5t#S256":"ohI9KlFR2P_eA4JSUJUxSfKyU46AlB-jCzf3S59Y-9Y",e:"AQAB",kid:"ohI9KlFR2P8=",n:"5G85GgStNuJe4lqs7Jkb7_3tBfhNTs0DDuxm0XpJIptqBLFvTLllQqMO8QI_lx1266VlfthTASK2ZpnQC6Ids_NEdNrLHuGIRNktd7oaq3Priz7f96TnXiW9qX_WLL55wpXcHSmLyvEfdP7BSdyQ9xrzm8bwg8cD638e69lScBeGpG04Z8hOVSQAQOBzAjSGkWPzhkah001vVev9CNcZBiL56iVox6nIJ_sgbzOlvwJDaXnKZOOXRk-xKQA-BDjjBfmvq6KvKoiRoGhvmG3gtMFvXPEr-mvBkbHvzswPr6aKpbm4sFzDbbgsSb6zGJcPLhs6aMm0FaIuetyc0lxfSQ"}},"rVPuf3yKLBg=":{co:"CH",kid:"rVPuf3yKLBg=",jwk:{kty:"RSA","x5t#S256":"rVPuf3yKLBjSP2uDYwn0ZsijcgLrzNclv4cQP9Q7EXQ",e:"AQAB",kid:"rVPuf3yKLBg=",n:"phhhJq5dIl4yUEbliJyckuldKiylWZZfTRQNx_k0xUFU60n9tUR4Ky1AibJHIiN_nIhSZTgwSSuALWinuEriI1ROb--TsQODtC3dDFFbNIwq1sVuT1TI7o6nnGTRHxwJckNP5--obdKSZtUfT6LOClxFsNoYl2EAzwb8YdcOiWNEB8gj7aY-vPL9BmECb9IRxPwhOxzPYkgLUkvqzt2UzV6CFKM5t4LxM4pTICy9vlIViZTcx6FDJ78AuT2C5AbW-ILYmc6_V189uga2_PTyEJyABw3gRg2BItkwy1flAjQcNIhKzshorcwGPD9EtuqpWF26DyU_HIQUabptMC6PCw"}},"GvVR3e6VJIM=":{co:"MT",kid:"GvVR3e6VJIM=",jwk:{kty:"EC","x5t#S256":"GvVR3e6VJIPphwZ9N0I7Y2mN8V4LjB_FFcsCdFhlr20",crv:"P-256",kid:"GvVR3e6VJIM=",x:"1kpyGGbMShwokxGdJmH_WPJDcDONYigpXr7Z8jiiX9M",y:"D9X5I77B3eBpHHxx7a67LK9hS0f5ua4CNyIOcQyyVnU"}},"QacbC7DdD4U=":{co:"MT",kid:"QacbC7DdD4U=",jwk:{kty:"EC","x5t#S256":"QacbC7DdD4Wz73sW1EfU3R5hwqlFmmvgRuv7mqJyHXY",crv:"P-256",kid:"QacbC7DdD4U=",x:"fapP8-QeyFgXVvY41YkQudlUUh7IZBBpIdOJ34xYmxA",y:"hLh121VBarfyUp26VbBrHe2QT1Iy9ruSrPZqATAxDy4"}},"UZ1cSMaPcaQ=":{co:"MT",kid:"UZ1cSMaPcaQ=",jwk:{kty:"EC","x5t#S256":"UZ1cSMaPcaSGpl1kt7j-WgZ6SXJ2lDQeGtQpcOwQc68",crv:"P-256",kid:"UZ1cSMaPcaQ=",x:"1q1nvgXLGIbibQuYQU-f-Xs-mcbPmukAc3KQAyy_5KY",y:"R_p-ReGxuFdFyI6YV9Pd2MR4dSWx1js7oSrmp_RW6Mg"}},"bfoj2trt6bE=":{co:"MT",kid:"bfoj2trt6bE=",jwk:{kty:"EC","x5t#S256":"bfoj2trt6bGT-vf82PeELpWi79O_9NDwlyA_2A8w6Cw",crv:"P-256",kid:"bfoj2trt6bE=",x:"4DsoM1rJFjHyQPcX6WKDWZkouBehfQGxqOgwFAYyRKU",y:"260ri_rZM_LCX6PHY37LkESw0rmcbndCDrDAfWLEzKY"}},"ccgQ13tmkU8=":{co:"MT",kid:"ccgQ13tmkU8=",jwk:{kty:"EC","x5t#S256":"ccgQ13tmkU_IGa3FP9BzbeUCWaivVvc81P6KCF_934Y",crv:"P-256",kid:"ccgQ13tmkU8=",x:"Xj9fU7e4KVYe1VakCDZjYquHzkoxSHT8D33zeMDfyLY",y:"2IvxklaSkLT8AT2ZT8eua9im9sGqyCvAYMUoLELzCGo"}},"f6J92LRKpj0=":{co:"MT",kid:"f6J92LRKpj0=",jwk:{kty:"EC","x5t#S256":"f6J92LRKpj3rKUWUXOq0_mXKxXxvwaebEKm1nh1DFH4",crv:"P-256",kid:"f6J92LRKpj0=",x:"DSjY8ob2FU6g06KQpeZ2BAjhXnNxdEOMdex6l563qlM",y:"7zbGOmdsY1aA58fRJZ7OoW3kYzcA_i38KvE5_dkH5OE"}},"HeWuzGwEM5c=":{co:"IS",kid:"HeWuzGwEM5c=",jwk:{kty:"EC","x5t#S256":"HeWuzGwEM5c4ZAy3dWtSKZ7Rc1OowEcVHr-bPRr_zkc",crv:"P-256",kid:"HeWuzGwEM5c=",x:"vwlwjQL5cId7nINp_A_b-XNY_WzgX9sIOde8ggZmZjU",y:"7yGIQ4c-xb7OdqM5namrQ6d8iMD6a-pwDJmjU49CnWY"}},"Pbydc1LscXo=":{co:"IS",kid:"Pbydc1LscXo=",jwk:{kty:"EC","x5t#S256":"Pbydc1LscXpFpq56-LRLzLtXTAUvQLxIJchUVLo1I7Q",crv:"P-256",kid:"Pbydc1LscXo=",x:"O42X7C2X5bSDTnfSJwnk4qAjSk2m11Cy_mmFqryl7J0",y:"TIa2Q38u-5MuLktKNYltfNRL-dZgIltCd4t0nimHhDs"}},"NJpCsMLQco4=":{co:"IT",kid:"NJpCsMLQco4=",jwk:{kty:"EC","x5t#S256":"NJpCsMLQco5pJbcmDRgT7bJxxUQKoPU8f92i_qiXabs",crv:"P-256",kid:"NJpCsMLQco4=",x:"nL9-WnIp9fvbcocZSGUFlSw9ffW_jbMONzcvm1X4c-o",y:"VzjxLOwuP_N_j8UvEsHmtoYJv7SreDyNM_MIJyHoaI8"}},"crm1HLAeaTo=":{co:"VA",kid:"crm1HLAeaTo=",jwk:{kty:"EC","x5t#S256":"crm1HLAeaToIJOs5McoDpv5dr_a73x5Yd64D1wrfJLY",use:"enc",crv:"P-256",kid:"crm1HLAeaTo=",x:"I6Q_krjPDaHJ2WsrBzR9sGYnYjFqkflAAWhJgXbXt3Q",y:"blFXybeHOdzer_SdgRN5D6glZfRW2K8KkNL2fj7OXvk"}},"hHffSLS1AIU=":{co:"AL",kid:"hHffSLS1AIU=",jwk:{kty:"EC","x5t#S256":"hHffSLS1AIXYSQoO4XcHZB9RWRyh8dsGM2lp3v-PMuc",use:"sig",crv:"P-256",kid:"hHffSLS1AIU=",x:"NFtonAma5ngnltfk78rprtlz8Cue6_t2XzvM_OR3wOk",y:"_9Zw-EA1kz9CoxrBbYifNAHneYENCWzF1C_DNpkMkD8"}},"vvYa1vaWkGg=":{co:"GR",kid:"vvYa1vaWkGg=",jwk:{kty:"EC","x5t#S256":"vvYa1vaWkGgsAumqgApI-8JmS1mJur496VbRXhZNL4I",crv:"P-256",kid:"vvYa1vaWkGg=",x:"aI7Y-lpY9cv5h5gKDrAzpkhl5bFPen_ohAMuJXU4uFc",y:"0LtFJ0gwhbf2x01nKisWHIpPGH5xflGUljihNzLJZRE"}},"/IcqIBnnZzc=":{co:"ES",kid:"/IcqIBnnZzc=",jwk:{kty:"EC","x5t#S256":"_IcqIBnnZzefMCgbTN9cCnD5PZL964iGmySbY2lLPO4",use:"sig",crv:"P-256",kid:"/IcqIBnnZzc=",x:"bxlQ_UTz0AxZWF-xQs-w-xveq5Eche9zf16LnDFYY_I",y:"vKWeperG9ipV8PGf5MKKc827-Swl9VcS7BjvUbPTsy4"}},"3IsdmTYkAAM=":{co:"ES",kid:"3IsdmTYkAAM=",jwk:{kty:"EC","x5t#S256":"3IsdmTYkAAN0vEzzv8wckxEw1-U1D1N-KsDzC-YRZaY",use:"sig",crv:"P-256",kid:"3IsdmTYkAAM=",x:"ManlPIcO9J8UBpHCAbku_KkAfiBrGLIre1buTIzhhok",y:"3C9GCDvg0Pbj7OlH8zyl80Ku_dVeSOWr4ZqUOo9sxbE"}},"4Qmniw7B0gc=":{co:"ES",kid:"4Qmniw7B0gc=",jwk:{kty:"EC","x5t#S256":"4Qmniw7B0gc96RZu354uwKsarncrg0dlvXm6XHqebtg",use:"sig",crv:"P-256",kid:"4Qmniw7B0gc=",x:"GwQNm-R4gtY5wWQTeJ9_kH1TqtnzC97I1EZQTE54p2Y",y:"yYV7y89iBZEOwkEHm0pO3MIIpEwznL0EoOdCcLqTDXw"}},"6ag2wJkSHtk=":{co:"ES",kid:"6ag2wJkSHtk=",jwk:{kty:"EC","x5t#S256":"6ag2wJkSHtnU_JHYmO9xwHnnQ8YRJORgaz464cMIlic",use:"sig",crv:"P-256",kid:"6ag2wJkSHtk=",x:"qF22rG5bDXpWn_tKy358h2KwYyaSKzCZV0HJptUQq7s",y:"FsX3gxPOh0qHmwa6Tr6Y4WV9v2ZExf2EZZIdM7Z5HJc"}},"ARrNkCRtprY=":{co:"ES",kid:"ARrNkCRtprY=",jwk:{kty:"EC","x5t#S256":"ARrNkCRtprbn6nuUoq8yW8dCGZKQ7JNgXDA7bOrTl-A",use:"sig",crv:"P-256",kid:"ARrNkCRtprY=",x:"blis8RR4Oc4Xqq4RZdhrJ0DnkAvK4vY8AamWbFg9T7M",y:"htey2vEyWE6txaiSXeSrbUz-9RqI8URdERCqRfrsALc"}},"BEnvMVnNFK8=":{co:"ES",kid:"BEnvMVnNFK8=",jwk:{kty:"EC","x5t#S256":"BEnvMVnNFK-d3PwvrxJrKsBwsUarHBGZ3M_4-wsNsOY",use:"sig",crv:"P-256",kid:"BEnvMVnNFK8=",x:"e1XUTCn6DkdbSOKlyzczFWQfDvtP31uGdjzVCzAkuxo",y:"KzXhF9xfNu4J8nC_5k80ZvJXw8c-uJRFHE8MNCO7p8A"}},"GMFMBu1RlCg=":{co:"ES",kid:"GMFMBu1RlCg=",jwk:{kty:"EC","x5t#S256":"GMFMBu1RlCjYQ-npp4hLqoyKY3kXPHgMjT2A-8E58FI",use:"sig",crv:"P-256",kid:"GMFMBu1RlCg=",x:"t3OX-XF_LZlHff6ZWiHRqQu4WBrgzNZYz4wFJkwkBmk",y:"P89ETrCyeBZcDiz7NnFBCCFdD7tXJp54L2uvhM0KWwA"}},"GuQPQRxbMsU=":{co:"ES",kid:"GuQPQRxbMsU=",jwk:{kty:"EC","x5t#S256":"GuQPQRxbMsVgY7dhAoT1J_TizNHhCwZ5FMJYbJK2dew",use:"sig",crv:"P-256",kid:"GuQPQRxbMsU=",x:"KMpkfLlexSZAyOl3FjSomlb4P8POpQb7PYz1bg8uca8",y:"kv5f4aT4ltFNgseYElb6HRCTiXXGzDAoEaBhx3cA_tU"}},"IaGR283U1jA=":{co:"ES",kid:"IaGR283U1jA=",jwk:{kty:"EC","x5t#S256":"IaGR283U1jAgl3B4ZTXhMyLC3l4UtsZendAbZTVGsL4",use:"sig",crv:"P-256",kid:"IaGR283U1jA=",x:"j_wPWM6e8JDYxW9673ivEvwlu2JAZpsNBrr2sQW5ppk",y:"Luq3KiVCseym739mcdQCXiEu_j0KtojXLoHw_kQv1X0"}},"JHd4CkNzadI=":{co:"ES",kid:"JHd4CkNzadI=",jwk:{kty:"EC","x5t#S256":"JHd4CkNzadJokWCr43qHdjraCRDd4ATWBIRUJNw2HP0",use:"sig",crv:"P-256",kid:"JHd4CkNzadI=",x:"DvCuOC6NlQCaL18-CEn4sbjC3NNnN4jBAmZo6lrGXbg",y:"yHwEN2Fpl3N4Ki50havOBBFevtjxcvcsi4KuCZhQHww"}},"MtI93IMknMk=":{co:"ES",kid:"MtI93IMknMk=",jwk:{kty:"EC","x5t#S256":"MtI93IMknMmRFOYlHBhFWYiDA71bBOhX_eEzzPx19NE",use:"sig",crv:"P-256",kid:"MtI93IMknMk=",x:"62orr7HL0POyQCqmgbbEqfcbcdcT4vyfQZEPYfxk69Y",y:"Ub_U_CMup1gMhIxdFcb5J3woP8fbooORxVq6XnVthKc"}},"NCc6YSsVioM=":{co:"ES",kid:"NCc6YSsVioM=",jwk:{kty:"EC","x5t#S256":"NCc6YSsVioMqVU_0VQGgB-WbsvN8-1WdphfeCNanEsk",use:"sig",crv:"P-256",kid:"NCc6YSsVioM=",x:"Uvljql1ZGpwzC92AbO4J751kqnIEXaCI8hYUIEArhRc",y:"qiXMeagpQBkpAxXG60z1fVrlLZg0PzaaFfhHo6gZpco"}},"YRYidQ+wetg=":{co:"ES",kid:"YRYidQ+wetg=",jwk:{kty:"EC","x5t#S256":"YRYidQ-wetjtUYj1OKaH-l1KNfRfWWaOpn3sUhRGqEw",use:"sig",crv:"P-256",kid:"YRYidQ+wetg=",x:"tdieg6q-5HvrfAd3ufPZthIWeQX4B_ytBp8iYAGpaJk",y:"pZCJnpZsj1nQABB-CT17nFzrAHD9bTerzpJNHh3l4B8"}},"YU9+X9nepqU=":{co:"ES",kid:"YU9+X9nepqU=",jwk:{kty:"EC","x5t#S256":"YU9-X9nepqX4bXSv-RaEcJiP23gjUPjMXsGfo2FQSRw",use:"sig",crv:"P-256",kid:"YU9+X9nepqU=",x:"gOuoVfBtfKWYpcffhNWfiCf4g4oZBdaPcdrn0HBtkQ8",y:"_cWKehZXxQD9WXtvS2jNXppxcY8kDVldynjZqHP7xWA"}},"ZcfkloEvfGQ=":{co:"ES",kid:"ZcfkloEvfGQ=",jwk:{kty:"EC","x5t#S256":"ZcfkloEvfGSuXvyPZV3YD_ujHUwWcu2lu63rTVLxktI",use:"sig",crv:"P-256",kid:"ZcfkloEvfGQ=",x:"V61Sl3v6NzBqyCbqSb8_fBodGle-b3RJ7Utk-uExDwY",y:"zsc0v_9hlE0RSluN6abJMq9xutP8XiQmnje0vQr7LHY"}},"e9SH8dtWwdY=":{co:"ES",kid:"e9SH8dtWwdY=",jwk:{kty:"EC","x5t#S256":"e9SH8dtWwdZ0IzPID5f-Jrx3ZXdcsBN_BvtYQj-hK7s",use:"sig",crv:"P-256",kid:"e9SH8dtWwdY=",x:"HZjrINN6u-ZGfRqaYqgqL-yZZCDlu-PKPCkVS_ysPos",y:"K6J7cJYc52z7KuVvndjcsV3mlAE_pU8kSstTQMThagA"}},"hgpHHrTb4ws=":{co:"ES",kid:"hgpHHrTb4ws=",jwk:{kty:"EC","x5t#S256":"hgpHHrTb4wswCsq78TQsEpgyinNyC1zpkCQlNM8inCI",use:"sig",crv:"P-256",kid:"hgpHHrTb4ws=",x:"li8eKthiom9EydKvhg7LHXj_f88_ZeNUpfEFm6kIAr0",y:"ytTQkUr9YKyZzYgXPZb4ILQI6hR0Ehk6L7UXBh3FbkQ"}},"qFNF2dC+mjQ=":{co:"ES",kid:"qFNF2dC+mjQ=",jwk:{kty:"EC","x5t#S256":"qFNF2dC-mjSR0IGpTUjjlt-SBep2WuO7oW4ZsojRXtQ",use:"sig",crv:"P-256",kid:"qFNF2dC+mjQ=",x:"3KVI7Sy-id-bprJ8Eh9AHtW-1qeC4qoHH1oK7HN87UI",y:"h_SsUIsdI6tEckm9nPuQjfpGwH7GBL1C3x06M9hVs1k"}},"tCM87WnaaQE=":{co:"ES",kid:"tCM87WnaaQE=",jwk:{kty:"EC","x5t#S256":"tCM87WnaaQGOLK-5bUR843ApnjIT2cWJyuftKuyAv-A",use:"sig",crv:"P-256",kid:"tCM87WnaaQE=",x:"DOg7lpxitz9-ytOAKFXxS7F4qc9IfKWrj388ETiCbLE",y:"ELqGHlhKfuMFzywhe0UaYOmcbfYhhvd2QMMZfINOTmo"}},"ub6Qmv9xtAo=":{co:"ES",kid:"ub6Qmv9xtAo=",jwk:{kty:"EC","x5t#S256":"ub6Qmv9xtAqgzif0xaYrDxyYRYVv5RSlPSZNRj7FYS8",use:"sig",crv:"P-256",kid:"ub6Qmv9xtAo=",x:"he-kvml2tx_-_wipHR5ttSw1PdmWGLpoEqzNiel2mWs",y:"GaL30gUfic64uzaR_LPEQUpxA3NJEE5dnUohAsvQ-OU"}},"x3ch4ml934I=":{co:"ES",kid:"x3ch4ml934I=",jwk:{kty:"EC","x5t#S256":"x3ch4ml934K1xSR9U9i77PgzgZsdlGx1pg2Q_7wn6uE",use:"sig",crv:"P-256",kid:"x3ch4ml934I=",x:"eC6-zmnjgdAUmYG4kIPJsMwSFSJclYoKuHKcIQ5PpX4",y:"MSsjN-hqdn5CrwEW8iWI3blPCczvZ60iC1cY7ikWqRc"}},"Ui7DXQikstE=":{co:"PA",kid:"Ui7DXQikstE=",jwk:{kty:"EC","x5t#S256":"Ui7DXQikstG1Z8yn0PqcyaKCFUh37pUfkVATIbs92A0",crv:"P-256",kid:"Ui7DXQikstE=",x:"6B5cdgxOlktZr67WAjgdIgoJwG5ZSTRBM6yEZb0y3ro",y:"5SB0Ivea5SjunRbUMaOa0T2WI71km2qlQYL23NHY3Mc"}},"Is2JtrOJhik=":{co:"AT",kid:"Is2JtrOJhik=",jwk:{kty:"EC","x5t#S256":"Is2JtrOJhinpnQsaO73CXL3yZEx1jbytAn55PJ52JfU",crv:"P-256",kid:"Is2JtrOJhik=",x:"YE24qIKmdcfRWUh2TqklkfZ6nyNBpX4VHeLMxfFl8rk",y:"EPGZLtG3Jx-TmV3JJErfrSrPhRmfbSidVbTQ5nnZS-s"}},"7rZbUrXNlLk=":{co:"CY",kid:"7rZbUrXNlLk=",jwk:{kty:"EC","x5t#S256":"7rZbUrXNlLnQGiFeDlx4K5jUnCQx999TWiOKJmsE2Jo",crv:"P-256",kid:"7rZbUrXNlLk=",x:"7S_R06707Glu721qJqvxIFzQ2LSbq9P2uu6nRKCBLsE",y:"-a8j98F6YIC-oRodPNBeOtmxi07iP4V68RAdpEdlY8M"}},"e4lH6I4iMIM=":{co:"CZ",kid:"e4lH6I4iMIM=",jwk:{kty:"EC","x5t#S256":"e4lH6I4iMIMy1-9oEcKQdBq4tYiImWxzOjo7VZyuf-U",crv:"P-256",kid:"e4lH6I4iMIM=",x:"UIzSq5MMYg2oez_kdjVH73ZPmI3lAQZTJsLOGqhJNcY",y:"obJ_pubxS3jg1hTOv4V0Bki-erCI2yjK2Gte5SjQClM"}},"fNf883wPIEg=":{co:"CZ",kid:"fNf883wPIEg=",jwk:{kty:"EC","x5t#S256":"fNf883wPIEjxL_f14ybtwtvkhv7WINEpCCMMO8UL-b8",crv:"P-256",kid:"fNf883wPIEg=",x:"8Dj2k2EY_UqgKsSGvIwPRhLiMa2kYm-y02Sam1DJusQ",y:"CRTqWx2p5fcDPfFNsZ_WK6T4igl8J2kj4nl8l-xrJDo"}},"AN1EeLIMAmo=":{co:"PL",kid:"AN1EeLIMAmo=",jwk:{kty:"EC","x5t#S256":"AN1EeLIMAmqDUZSd_iEM4lWlHmE_fIMn5HCcHLhlrbU",crv:"P-256",kid:"AN1EeLIMAmo=",x:"RG4yI_SSv70zEtVjzIrn_CypR1e0BZO5u8bIgltZico",y:"4Pvfdp9muxrnMSus8vdcavBfFx-wdEiVO-apK_GdXfQ"}},"FDNJjaSCWi0=":{co:"PL",kid:"FDNJjaSCWi0=",jwk:{kty:"EC","x5t#S256":"FDNJjaSCWi24bflAWChU5rMog7UKeqC4ESgOFyL2Zp4",crv:"P-256",kid:"FDNJjaSCWi0=",x:"dxvWMfuk6CHCbffZWPS6bRgVYglYdED1NT1FCfXstUY",y:"fNQFpmDoerW2YDhfTjNZc6naRQ9bjphGdAPF12JpAdQ"}},"HhkeqvrtQ0U=":{co:"PL",kid:"HhkeqvrtQ0U=",jwk:{kty:"EC","x5t#S256":"HhkeqvrtQ0WdjNhplLpXTylB8zhZiRTjJBp_mk1K-sU",crv:"P-256",kid:"HhkeqvrtQ0U=",x:"gUesihG8ECIDnqxEoU9RouOR9y3NVLBUlpZ-ri-Ur7Q",y:"0CzkUAxN7PzOShhJZcAm7IE-nF1AE_JLp9dpjnCbe_I"}},"JkFekJel6/o=":{co:"LI",kid:"JkFekJel6/o=",jwk:{kty:"EC","x5t#S256":"JkFekJel6_o5qcYKV6J-r4XE4XRSndzyApPtGtYrAOk",crv:"P-256",kid:"JkFekJel6/o=",x:"BnFUjr8FpfpVaVFtCUW7Yg6JBk_n1TlJKEKpm_rZOvA",y:"BMyqcKEwqV6Vzz9Ujxob0F8yfouHQUB4G3cNkg6XGZk"}},"e/YRqyv++qY=":{co:"LI",kid:"e/YRqyv++qY=",jwk:{kty:"EC","x5t#S256":"e_YRqyv--qYkeb2tMnbk50CeKbJ7wO1KEH9vwG77pC0",crv:"P-256",kid:"e/YRqyv++qY=",x:"mCCGUDO95y6Rj40KX74cFgc99I9BnFoPBkZ3kcAyo2o",y:"v7JjeIG2FpKwtljBK7DfM2d-wvUYQBpR2AzfLTyW4gM"}},"jYpr5GHCDiQ=":{co:"LI",kid:"jYpr5GHCDiQ=",jwk:{kty:"EC","x5t#S256":"jYpr5GHCDiRmmYwxtuPM-HGgDmK6ds89vgfnZKiBAMs",crv:"P-256",kid:"jYpr5GHCDiQ=",x:"lHOTKQPe3GZKCAIsaBbPpAfJZ30ftIUsb_r6gHu19cI",y:"NtVzH4mQ0LiN8HvNns7Jsoy_4369c5UWKly5m6jq5CQ"}},"hA1+pwEOxCI=":{co:"RO",kid:"hA1+pwEOxCI=",jwk:{kty:"EC","x5t#S256":"hA1-pwEOxCJQVdJCo1UF20qctj0mp-xVM9O_oWi7NN0",crv:"P-256",kid:"hA1+pwEOxCI=",x:"IQ5LJGhrs3m__HC60__4N8WDL1DiHJRUTirld4U9ebA",y:"WGLE7cVpJxhtFLaJ9dsfMgx5u8Ju2kaBYXeTMVuBuXM"}},"0JzyumjttZU=":{co:"NL",kid:"0JzyumjttZU=",jwk:{kty:"EC","x5t#S256":"0JzyumjttZV1k8BIlZ_4DG-bieppH2ao5a5cLQwVP94",crv:"P-256",kid:"0JzyumjttZU=",x:"NlKRwpA1S14Zfx6LZuAWm9ExHy86o7O9ijCq4AmZ1dE",y:"btndsKMHcpScwL221bEdUaMXzST88uXcLvTbJtD77BI"}},"2Bh+2HrOg0c=":{co:"NL",kid:"2Bh+2HrOg0c=",jwk:{kty:"EC","x5t#S256":"2Bh-2HrOg0fUIxvqfMKUqvEAOvAkw_NNfF9a8wiTWwM",crv:"P-256",kid:"2Bh+2HrOg0c=",x:"KBG1WklnURluKXTg5-tm6_S7pMFLBE8cZ5xNxnCCAL4",y:"Z71Iuic0oE4wJjmlDT11cLwNk2JfxpCTW4eE2szHhd8"}},"3lTmAZX19GQ=":{co:"NL",kid:"3lTmAZX19GQ=",jwk:{kty:"EC","x5t#S256":"3lTmAZX19GQszm-yiitK_9hTftnElUPZI2StHXj3Rbo",crv:"P-256",kid:"3lTmAZX19GQ=",x:"_DBnhBhTf8TkfsTn4tLEb3mQLCsONkZbY4I5i0zh0Wg",y:"bA7qQ7IRp7uExOAIB-mP7gZ7Cfg-kJFQIpM2v67cPPc"}},"4Ss2raOqhTw=":{co:"NL",kid:"4Ss2raOqhTw=",jwk:{kty:"EC","x5t#S256":"4Ss2raOqhTy89Z3SK-_Oc31thecuN3yfr0E-G838H80",crv:"P-256",kid:"4Ss2raOqhTw=",x:"Qb-DcAtDpjI4ftm5ICNC5KGz10zJvY682GDCREwLups",y:"wte0M1hb3OktI25NjSbdlWOVeLL49hXyxpElm1KlBZ0"}},"H6b6bQ8qij4=":{co:"NL",kid:"H6b6bQ8qij4=",jwk:{kty:"EC","x5t#S256":"H6b6bQ8qij703ejNBVMp5VtbCS4m_rRyMCFc2wKQdiQ",crv:"P-256",kid:"H6b6bQ8qij4=",x:"awHNq4c7wLusLEYNhn7CBSqk6bdY7Phqjt1-Q-CVRHo",y:"gRX0kX1hvvXYKBDAXRR2NdoOKrDt5509j-KoQA8CL54"}},"JsReuAsmza8=":{co:"NL",kid:"JsReuAsmza8=",jwk:{kty:"EC","x5t#S256":"JsReuAsmza-V4BLM6BU5PT59AreZWchc1aW3OsZ-8ho",crv:"P-256",kid:"JsReuAsmza8=",x:"Rw-zOjyFNs4ntgwxcvouetTqlBIztiTtJhOi8DesKXs",y:"-bl_5taVQG2Irpv34crtCGgXodw1Ti3yybT2lBMfHos"}},"T8kbYovQlYU=":{co:"NL",kid:"T8kbYovQlYU=",jwk:{kty:"EC","x5t#S256":"T8kbYovQlYUKlCOdKo-BAwScemN2nnMVnIwYTUEDlUg",crv:"P-256",kid:"T8kbYovQlYU=",x:"PVZAyUlqrJ3XW8kCQu401SKWJ1GjF-LBjT16DUZO0RY",y:"kXQD7CsfBVAcKkQbZ_HT8yD_hFg1-4lKabhtEzZLd1I"}},"f+4yAPIGTWg=":{co:"NL",kid:"f+4yAPIGTWg=",jwk:{kty:"EC","x5t#S256":"f-4yAPIGTWgdZBliDCTlCY9f-uP7vx-cFb6eAcTbeHg",crv:"P-256",kid:"f+4yAPIGTWg=",x:"RyOtPhis4M-vOSM-4AoqtBot3s7AGrqQOSA2ZY3a25w",y:"-XuEJUaRMXdUt_fQgA76OY9Dcqq5v2s64RSLEgHPBSI"}},"lzGYCpOBQsU=":{co:"NL",kid:"lzGYCpOBQsU=",jwk:{kty:"EC","x5t#S256":"lzGYCpOBQsVUVIvSLhvCH08IGMPijhpXpLjWku4r6oE",crv:"P-256",kid:"lzGYCpOBQsU=",x:"f85n2j7jSWalqCH8Dquo5E3uyYIwYReoWWAiPkIvnwY",y:"mqD1LeNuzosxr0Rd-ZdMDw-s0pG4kGcViNQzGn_lHl0"}},"pSEfhlMubh4=":{co:"NL",kid:"pSEfhlMubh4=",jwk:{kty:"EC","x5t#S256":"pSEfhlMubh6v9PGy_Jv3i0bXKcFoDZeYNC-zfrrU5nU",crv:"P-256",kid:"pSEfhlMubh4=",x:"iY-AGRWtd8tCUb5PQdEPaCWAZl0D_SIOtcDH8R8yrp8",y:"yU_DJjMVf8DNeVomX9PRMst4iV8BU_vWDgsqwQPwno4"}},"ryvXsisPPeU=":{co:"NL",kid:"ryvXsisPPeU=",jwk:{kty:"EC","x5t#S256":"ryvXsisPPeWSlzSE_fGzBnVg_sq5_YBTIEZ2KB_P7VI",crv:"P-256",kid:"ryvXsisPPeU=",x:"cI1v9r69Swup7ghwGhCA5xoG8SopLiD2DnfkhTydslY",y:"UAR3Pk7onmddWh2JA_dYJp4EV0bBlPE6MPyxKCj5Mrk"}},"ypEjzbYNqEw=":{co:"NL",kid:"ypEjzbYNqEw=",jwk:{kty:"EC","x5t#S256":"ypEjzbYNqEzIZwjPC7ULJ6GkHn9mqBsMV8ZXcGPabuA",crv:"P-256",kid:"ypEjzbYNqEw=",x:"nRYo0qQ5BM-B3lWzaaqBhgTqQ99wnzj078WYakRSXv4",y:"y8iW89tRBhEJDaXt1DpRDV-UO0Xc5K61xW7O6R3zQ6c"}},"gEIK4Q/lAG0=":{co:"TR",kid:"gEIK4Q/lAG0=",jwk:{kty:"EC","x5t#S256":"gEIK4Q_lAG02nE4ak00w3Vg047qiYq_N45b7R3Wllpk",crv:"P-256",kid:"gEIK4Q/lAG0=",x:"4gGExz9UXm77v21gaWNSjjtigr9VIyGL9S92FqnF99Y",y:"Kkv3pKy1r1uDen5h31Ek_VSSyVWgfbj90l9a15X6u5Y"}}},F=["6l81l8ozsOU=","+/bbaA9m0j0=","+3CK4II5kAg=","+Z3fx3xOKAQ=","/IcqIBnnZzc=","0J/NOaUzCAg=","19qvyYakWNI=","1vxpTLgc6ws=","2Rk3X8HntrI=","2c6RCwOmTGI=","3H2QEFR6mNI=","3IsdmTYkAAM=","428FOlUxNRM=","4Qmniw7B0gc=","5QR1PW8i5fU=","67BzmdT5oYo=","6EjzyhNlGDQ=","6ag2wJkSHtk=","6ek0DM8iSCs=","6jqyJk80bUU=","7/MOPvQI+WY=","727mZUPbpyc=","7JQ83GRvK3A=","9YMMwrfDdoo=","9cWXDDA52FQ=","ARrNkCRtprY=","Ayod4P+EpW8=","B2tu82ZFDgE=","B4BbJQx1lYQ=","BEnvMVnNFK8=","BkMNTz/RKb8=","CFUoOhVtOgo=","CtDYk/6d0xw=","DBCmGJjweMM=","DEsVUSvpFAE=","DhspllZjSVY=","FOKoNhMEwl0=","GMFMBu1RlCg=","GO0rf1TneQQ=","GZ2cfMLwyK8=","H6KcgU3y0DY=","HLY9BHAuz7E=","IaGR283U1jA=","JHd4CkNzadI=","JLxre3vSwyg=","Jj+9Dw7DUVU=","KFP4Rwxlab8=","Ks/eWTAFo+I=","Ld1KH5MrFsY=","MI7hF0OCF8Y=","MiLjTTO/H+I=","N1SUO3VrfMk=","NCc6YSsVioM=","NJpCsMLQco4=","OTAXaM3aBRM=","Ol12Ruv8LLo=","P8Gvy67UYZI=","R2I8VTnOBa4=","Rl7ZUeTLAC4=","SPQ+0opWAuM=","STPDGKKF4N8=","Sti09mkj+lQ=","TfwLMHDXIws=","Tn6X6w0+iBM=","U5vvB3k2Cj4=","Uy2dYAJ4Rdw=","VjUQ+HzmZm0=","WgxNQJs1Iwo=","X3SRAZXFzss=","XmYhV1P+0D4=","YRYidQ+wetg=","YTA6V2K8xQY=","YU9+X9nepqU=","ZcfkloEvfGQ=","b0RhLyvUxgs=","bIwe3F4lAk4=","cKqkRgtW0Xw=","coWnRsJwd/s=","dAacIEGMNcE=","dZl5Qc0tmyE=","dsXHUWEsRfA=","e9SH8dtWwdY=","eZx0UBq8T1E=","f1sfUVIx8CA=","f4ialzEsfzU=","ffE6u4r3Db0=","gklWpqtW+Tg=","gtsQTR82V6w=","hgpHHrTb4ws=","hyJmFP5BVx8=","jrxzCm2qFug=","kP2/7BRoXEs=","kcJv+6yBWTg=","kwL2uX0ViAA=","l3DTTvY1/h0=","lHHRhMo9GWg=","lrXFYdYTLMY=","m3TMC91/ewg=","mRxapyixSJ0=","mamG6Tt5Jl8=","mkooSvJQkZ0=","nSdp31pPUvQ=","oeoGLaBuFPY=","onphe00laog=","pXjP4Y6sns4=","pt8xqyMH4uE=","rjvkUVBSdaE=","snqSuA/dvgk=","tCM87WnaaQE=","u5Tohz8Qb+w=","uE7ViYTSegg=","ub6Qmv9xtAo=","uxvl+dsyrBw=","v58a8hf49kE=","wGR6OwOYF4k=","wRkEAKayPrE=","wTHYuP2pg1k=","xKOXcpzMVb0=","xZ7EcIR8I4Y=","xZUU+IopoVk=","y3g27v8r51I=","yLHLNvSl428=","yM/UEbTW72k=","yWoEMegrayo=","zMq8VEXlueo="],H={"country-2-codes.json":{valueSetId:"country-2-codes",valueSetDate:"2019-11-01",valueSetValues:{AD:{display:"Andorra",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AE:{display:"United Arab Emirates",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AF:{display:"Afghanistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AG:{display:"Antigua and Barbuda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AI:{display:"Anguilla",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AL:{display:"Albania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AM:{display:"Armenia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AO:{display:"Angola",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AQ:{display:"Antarctica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AR:{display:"Argentina",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AS:{display:"American Samoa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AT:{display:"Austria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AU:{display:"Australia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AW:{display:"Aruba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AX:{display:"\xC5land Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},AZ:{display:"Azerbaijan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BA:{display:"Bosnia and Herzegovina",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BB:{display:"Barbados",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BD:{display:"Bangladesh",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BE:{display:"Belgium",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BF:{display:"Burkina Faso",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BG:{display:"Bulgaria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BH:{display:"Bahrain",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BI:{display:"Burundi",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BJ:{display:"Benin",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BL:{display:"Saint Barth\xE9lemy",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BM:{display:"Bermuda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BN:{display:"Brunei Darussalam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BO:{display:"Bolivia, Plurinational State of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BQ:{display:"Bonaire, Sint Eustatius and Saba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BR:{display:"Brazil",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BS:{display:"Bahamas",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BT:{display:"Bhutan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BV:{display:"Bouvet Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BW:{display:"Botswana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BY:{display:"Belarus",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},BZ:{display:"Belize",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CA:{display:"Canada",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CC:{display:"Cocos (Keeling) Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CD:{display:"Congo, the Democratic Republic of the",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CF:{display:"Central African Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CG:{display:"Congo",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CH:{display:"Switzerland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CI:{display:"C\xF4te d''Ivoire",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CK:{display:"Cook Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CL:{display:"Chile",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CM:{display:"Cameroon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CN:{display:"China",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CO:{display:"Colombia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CR:{display:"Costa Rica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CU:{display:"Cuba",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CV:{display:"Cabo Verde",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CW:{display:"Cura\xE7ao",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CX:{display:"Christmas Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CY:{display:"Cyprus",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},CZ:{display:"Czechia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DE:{display:"Germany",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DJ:{display:"Djibouti",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DK:{display:"Denmark",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DM:{display:"Dominica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DO:{display:"Dominican Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},DZ:{display:"Algeria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EC:{display:"Ecuador",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EE:{display:"Estonia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EG:{display:"Egypt",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},EH:{display:"Western Sahara",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ER:{display:"Eritrea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ES:{display:"Spain",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ET:{display:"Ethiopia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FI:{display:"Finland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FJ:{display:"Fiji",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FK:{display:"Falkland Islands (Malvinas)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FM:{display:"Micronesia, Federated States of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FO:{display:"Faroe Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},FR:{display:"France",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GA:{display:"Gabon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GB:{display:"United Kingdom of Great Britain and Northern Ireland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GD:{display:"Grenada",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GE:{display:"Georgia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GF:{display:"French Guiana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GG:{display:"Guernsey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GH:{display:"Ghana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GI:{display:"Gibraltar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GL:{display:"Greenland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GM:{display:"Gambia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GN:{display:"Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GP:{display:"Guadeloupe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GQ:{display:"Equatorial Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GR:{display:"Greece",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GS:{display:"South Georgia and the South Sandwich Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GT:{display:"Guatemala",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GU:{display:"Guam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GW:{display:"Guinea-Bissau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},GY:{display:"Guyana",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HK:{display:"Hong Kong",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HM:{display:"Heard Island and McDonald Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HN:{display:"Honduras",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HR:{display:"Croatia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HT:{display:"Haiti",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},HU:{display:"Hungary",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ID:{display:"Indonesia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IE:{display:"Ireland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IL:{display:"Israel",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IM:{display:"Isle of Man",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IN:{display:"India",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IO:{display:"British Indian Ocean Territory",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IQ:{display:"Iraq",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IR:{display:"Iran, Islamic Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IS:{display:"Iceland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},IT:{display:"Italy",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JE:{display:"Jersey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JM:{display:"Jamaica",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JO:{display:"Jordan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},JP:{display:"Japan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KE:{display:"Kenya",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KG:{display:"Kyrgyzstan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KH:{display:"Cambodia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KI:{display:"Kiribati",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KM:{display:"Comoros",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KN:{display:"Saint Kitts and Nevis",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KP:{display:"Korea, Democratic People''s Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KR:{display:"Korea, Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KW:{display:"Kuwait",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KY:{display:"Cayman Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},KZ:{display:"Kazakhstan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LA:{display:"Lao People''s Democratic Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LB:{display:"Lebanon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LC:{display:"Saint Lucia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LI:{display:"Liechtenstein",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LK:{display:"Sri Lanka",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LR:{display:"Liberia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LS:{display:"Lesotho",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LT:{display:"Lithuania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LU:{display:"Luxembourg",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LV:{display:"Latvia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},LY:{display:"Libya",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MA:{display:"Morocco",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MC:{display:"Monaco",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MD:{display:"Moldova, Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ME:{display:"Montenegro",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MF:{display:"Saint Martin (French part)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MG:{display:"Madagascar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MH:{display:"Marshall Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MK:{display:"Macedonia, the former Yugoslav Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ML:{display:"Mali",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MM:{display:"Myanmar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MN:{display:"Mongolia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MO:{display:"Macao",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MP:{display:"Northern Mariana Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MQ:{display:"Martinique",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MR:{display:"Mauritania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MS:{display:"Montserrat",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MT:{display:"Malta",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MU:{display:"Mauritius",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MV:{display:"Maldives",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MW:{display:"Malawi",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MX:{display:"Mexico",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MY:{display:"Malaysia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},MZ:{display:"Mozambique",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NA:{display:"Namibia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NC:{display:"New Caledonia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NE:{display:"Niger",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NF:{display:"Norfolk Island",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NG:{display:"Nigeria",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NI:{display:"Nicaragua",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NL:{display:"Netherlands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NO:{display:"Norway",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NP:{display:"Nepal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NR:{display:"Nauru",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NU:{display:"Niue",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},NZ:{display:"New Zealand",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},OM:{display:"Oman",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PA:{display:"Panama",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PE:{display:"Peru",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PF:{display:"French Polynesia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PG:{display:"Papua New Guinea",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PH:{display:"Philippines",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PK:{display:"Pakistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PL:{display:"Poland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PM:{display:"Saint Pierre and Miquelon",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PN:{display:"Pitcairn",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PR:{display:"Puerto Rico",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PS:{display:"Palestine, State of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PT:{display:"Portugal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PW:{display:"Palau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},PY:{display:"Paraguay",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},QA:{display:"Qatar",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RE:{display:"R\xE9union",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RO:{display:"Romania",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RS:{display:"Serbia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RU:{display:"Russian Federation",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},RW:{display:"Rwanda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SA:{display:"Saudi Arabia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SB:{display:"Solomon Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SC:{display:"Seychelles",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SD:{display:"Sudan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SE:{display:"Sweden",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SG:{display:"Singapore",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SH:{display:"Saint Helena, Ascension and Tristan da Cunha",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SI:{display:"Slovenia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SJ:{display:"Svalbard and Jan Mayen",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SK:{display:"Slovakia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SL:{display:"Sierra Leone",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SM:{display:"San Marino",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SN:{display:"Senegal",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SO:{display:"Somalia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SR:{display:"Suriname",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SS:{display:"South Sudan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ST:{display:"Sao Tome and Principe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SV:{display:"El Salvador",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SX:{display:"Sint Maarten (Dutch part)",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SY:{display:"Syrian Arab Republic",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},SZ:{display:"Swaziland",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TC:{display:"Turks and Caicos Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TD:{display:"Chad",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TF:{display:"French Southern Territories",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TG:{display:"Togo",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TH:{display:"Thailand",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TJ:{display:"Tajikistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TK:{display:"Tokelau",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TL:{display:"Timor-Leste",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TM:{display:"Turkmenistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TN:{display:"Tunisia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TO:{display:"Tonga",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TR:{display:"Turkey",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TT:{display:"Trinidad and Tobago",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TV:{display:"Tuvalu",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TW:{display:"Taiwan, Province of China",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},TZ:{display:"Tanzania, United Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UA:{display:"Ukraine",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UG:{display:"Uganda",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UM:{display:"United States Minor Outlying Islands",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},US:{display:"United States of America",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UY:{display:"Uruguay",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},UZ:{display:"Uzbekistan",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VA:{display:"Holy See",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VC:{display:"Saint Vincent and the Grenadines",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VE:{display:"Venezuela, Bolivarian Republic of",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VG:{display:"Virgin Islands, British",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VI:{display:"Virgin Islands,",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VN:{display:"Viet Nam",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},VU:{display:"Vanuatu",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},WF:{display:"Wallis and Futuna",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},WS:{display:"Samoa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},YE:{display:"Yemen",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},YT:{display:"Mayotte",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZA:{display:"South Africa",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZM:{display:"Zambia",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""},ZW:{display:"Zimbabwe",lang:"en",active:!0,system:"urn:iso:std:iso:3166",version:""}}},"disease-agent-targeted.json":{valueSetId:"disease-agent-targeted",valueSetDate:"2021-04-27",valueSetValues:{"840539006":{display:"COVID-19",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"}}},"test-manf.json":{valueSetId:"covid-19-lab-test-manufacturer-and-name",valueSetDate:"2021-10-14",valueSetValues:{"308":{display:"PCL Inc, PCL COVID19 Ag Rapid FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"344":{display:"SD BIOSENSOR Inc, STANDARD F COVID-19 Ag FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"345":{display:"SD BIOSENSOR Inc, STANDARD Q COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"768":{display:"ArcDia International Ltd, mariPOC SARS-CoV-2",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:19:16 CEST"},"770":{display:"Assure Tech. (Hangzhou) Co., Ltd, ECOTEST COVID-19 Antigen Rapid Test Device",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:38:51 CEST"},"1065":{display:"Becton Dickinson, BD Veritor\u2122 System for Rapid Detection of SARS CoV 2",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:13:00 CEST"},"1097":{display:"Quidel Corporation, Sofia SARS Antigen FIA",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1114":{display:"Sugentech, Inc, SGTi-flex COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:25:03 CEST"},"1144":{display:"Green Cross Medical Science Corp., GENEDIA W COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1162":{display:"Nal von minden GmbH, NADAL COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1173":{display:"CerTest Biotec, CerTest SARS-CoV-2 Card test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1178":{display:"Shenzhen Microprofit Biotech Co., Ltd, SARS-CoV-2 Spike Protein Test Kit (Colloidal Gold Chromatographic Immunoassay)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:19:10 CEST"},"1180":{display:"MEDsan GmbH, MEDsan SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1190":{display:"m\xF6Lab, m\xF6-screen Corona Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:14 CEST"},"1197":{display:"Goldsite Diagnostics Inc, SARS-CoV-2 Antigen Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 06:05:32 CEST"},"1199":{display:"Oncosem Onkolojik Sistemler San. ve Tic. A.S., CAT",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:41 CEST"},"1201":{display:"ScheBo Biotech AG, ScheBo SARS CoV-2 Quick Antigen",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:24:39 CEST"},"1215":{display:"Hangzhou Laihe Biotech Co., Ltd, LYHER Novel Coronavirus (COVID-19) Antigen Test Kit(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:53 CEST"},"1216":{display:"Guangdong Longsee Biomedical Co., Ltd, COVID-19 Ag Rapid Test Kit (Immuno-Chromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:42:33 CEST"},"1218":{display:"Siemens Healthineers, CLINITEST Rapid Covid-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1223":{display:"BIOSYNEX S.A., BIOSYNEX COVID-19 Ag BSS",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1225":{display:"DDS DIAGNOSTIC, Test Rapid Covid-19 Antigen (tampon nazofaringian)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:47 CEST"},"1232":{display:"Abbott Rapid Diagnostics, Panbio Covid-19 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1236":{display:"BTNX Inc, Rapid Response COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:40 CEST"},"1242":{display:"Bionote, Inc, NowCheck COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:07:07 CEST"},"1243":{display:"Edinburgh Genetics Limited, ActivXpress+ COVID-19 Antigen Complete Testing Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:50:37 CEST"},"1244":{display:"GenBody, Inc, Genbody COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:53 CEST"},"1253":{display:"GenSure Biotech Inc, GenSure COVID-19 Antigen Rapid Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:59 CEST"},"1257":{display:"Hangzhou AllTest Biotech Co., Ltd, COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-06-16 00:00:00 CEST"},"1263":{display:"Humasis, Humasis COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1266":{display:"Labnovation Technologies Inc, SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:22:32 CEST"},"1267":{display:"LumiQuick Diagnostics Inc, QuickProfile COVID-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1268":{display:"LumiraDX, LumiraDx SARS-CoV-2 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1271":{display:"Precision Biosensor, Inc, Exdia COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:54 CEST"},"1278":{display:"Xiamen Boson Biotech Co. Ltd, Rapid SARS-CoV-2 Antigen Test Card",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1286":{display:"BIOHIT HealthCare (Hefei) Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit (Fluorescence Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:12:43 CEST"},"1295":{display:"Zhejiang Anji Saianfu Biotech Co., Ltd, reOpenTest COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:26:30 CEST"},"1296":{display:"Zhejiang Anji Saianfu Biotech Co., Ltd, Andlucky\u2122 COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:26:23 CEST"},"1304":{display:"AMEDA Labordiagnostik GmbH, AMP Rapid Test SARS-CoV-2 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1319":{display:"SGA Medikal, V-Chek SARS-CoV-2 Ag Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:24:45 CEST"},"1324":{display:"Guangzhou Decheng Biotechnology Co., LTD, V-CHEK, 2019-nCoV Ag Rapid Test Kit (Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:06:03 CEST"},"1331":{display:"Beijing Lepu Medical Technology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1333":{display:"Joinstar Biomedical Technology Co., Ltd, COVID-19 Rapid Antigen Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1341":{display:"Qingdao Hightop Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:59 CEST"},"1343":{display:"Zhejiang Orient Gene Biotech Co.,Ltd., Coronavirus Ag Rapid Test Cassette (Swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1357":{display:"SGA Medikal, V-Chek SARS-CoV-2 Rapid Ag Test (colloidal gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:10:17 CEST"},"1360":{display:"Guangdong Wesail Biotech Co., Ltd, COVID-19 Ag Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:35 CEST"},"1363":{display:"Hangzhou Clongene Biotech Co., Ltd, Covid-19 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1365":{display:"Hangzhou Clongene Biotech Co., Ltd, COVID-19/Influenza A+B Antigen Combo Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:41 CEST"},"1375":{display:"DIALAB GmbH, DIAQUICK COVID-19 Ag Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1392":{display:"Hangzhou Testsea Biotechnology Co., Ltd, COVID-19 Antigen Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:22:21 CEST"},"1420":{display:"NanoEntek, FREND COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:26 CEST"},"1437":{display:"Guangzhou Wondfo Biotech Co., Ltd, Wondfo 2019-nCoV Antigen Test (Lateral Flow Method)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1443":{display:"Vitrosens Biotechnology Co., Ltd, RapidFor SARS-CoV-2 Rapid Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:25:23 CEST"},"1456":{display:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:26:12 CEST"},"1457":{display:"Acon Biotech (Hangzhou) Co., Ltd, Flowflex SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:52:09 CEST"},"1465":{display:"Triplex International Biosciences Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:59:28 CEST"},"1466":{display:"TODA PHARMA, TODA CORONADIAG Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1468":{display:"ACON Laboratories, Inc, Flowflex SARS-CoV-2 Antigen rapid test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1481":{display:"MP Biomedicals, Rapid SARS-CoV-2 Antigen Test Card",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1484":{display:"Beijing Wantai Biological Pharmacy Enterprise Co., Ltd, Wantai SARS-CoV-2 Ag Rapid Test (FIA)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:18 CEST"},"1485":{display:"Beijing Wantai Biological Pharmacy Enterprise Co., Ltd, WANTAI SARS-CoV-2 Ag Rapid Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-14 02:19:53 CEST"},"1489":{display:"Safecare Biotech (Hangzhou) Co. Ltd, COVID-19 Antigen Rapid Test Kit (Swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-06-16 00:00:00 CEST"},"1490":{display:"Safecare Biotech (Hangzhou) Co. Ltd, Multi-Respiratory Virus Antigen Test Kit(Swab)  (Influenza A+B/ COVID-19)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:24:07 CEST"},"1494":{display:"BIOSYNEX S.A., BIOSYNEX COVID-19 Ag+ BSS",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:08:11 CEST"},"1495":{display:"Prognosis Biotech, Rapid Test Ag 2019-nCov",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:06:58 CEST"},"1501":{display:"New Gene (Hangzhou) Bioengineering Co., Ltd, COVID-19 Antigen Detection Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:34 CEST"},"1574":{display:"Shenzhen Zhenrui Biotechnology Co., Ltd, Zhenrui \xAECOVID-19 Antigen Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:24:58 CEST"},"1581":{display:"CTK Biotech, Inc, OnSite COVID-19 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:10:05 CEST"},"1599":{display:"Biomerica, Inc., Biomerica COVID-19 Antigen Rapid Test (nasopharyngeal swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:10:27 CEST"},"1604":{display:"Roche (SD BIOSENSOR), SARS-CoV-2 Rapid Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1606":{display:"RapiGEN Inc, BIOCREDIT COVID-19 Ag - SARS-CoV 2 Antigen test",lang:"en",active:!1,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:19:06 CEST"},"1610":{display:"Hangzhou Clongene Biotech Co., Ltd, COVID-19 Antigen Rapid Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:10:38 CEST"},"1618":{display:"Artron Laboratories Inc, Artron COVID-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:53:59 CEST"},"1654":{display:"Asan Pharmaceutical CO., LTD, Asan Easy Test COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:19:48 CEST"},"1736":{display:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:19:10 CEST"},"1739":{display:"Eurobio Scientific, EBS SARS-CoV-2 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:06:15 CEST"},"1747":{display:"Guangdong Hecin Scientific, Inc., 2019-nCoV Antigen Test Kit (colloidal gold method)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:29 CEST"},"1759":{display:"Hubei Jinjian Biology Co., Ltd, SARS-CoV-2 Antigen Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:17:19 CEST"},"1762":{display:"Novatech, SARS CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-23 09:12:05 CEST"},"1763":{display:"Xiamen AmonMed Biotechnology Co., Ltd, COVID-19 Antigen Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:26:04 CEST"},"1764":{display:"JOYSBIO (Tianjin) Biotechnology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:22:26 CEST"},"1767":{display:"Healgen Scientific, Coronavirus Ag Rapid Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-02-17 00:00:00 CET"},"1768":{display:"Shenzhen Watmind Medical Co., Ltd, SARS-CoV-2 Ag Diagnostic Test Kit (Immuno-fluorescence)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:10:50 CEST"},"1769":{display:"Shenzhen Watmind Medical Co., Ltd, SARS-CoV-2 Ag Diagnostic Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1773":{display:"Wuhan Life Origin Biotech Joint Stock Co., Ltd., The SARS-CoV-2 Antigen Assay Kit (Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 06:02:47 CEST"},"1775":{display:"MEXACARE GmbH, MEXACARE COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:13:13 CEST"},"1800":{display:"AVALUN SAS, Ksmart\xAE SARS-COV2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:12:25 CEST"},"1815":{display:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit (Colloidal Gold) - Nasal Swab",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:18:58 CEST"},"1820":{display:"Getein Biotech, Inc, SARS-CoV-2 Antigen (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 06:00:24 CEST"},"1822":{display:"Anbio (Xiamen) Biotechnology Co., Ltd, Rapid COVID-19 Antigen Test(Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:18:51 CEST"},"1833":{display:"AAZ-LMB, COVID-VIRO",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1844":{display:"Hangzhou Immuno Biotech Co.,Ltd, Immunobio SARS-CoV-2 Antigen ANTERIOR NASAL Rapid Test Kit (minimal invasive)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:47 CEST"},"1855":{display:"GA Generic Assays GmbH, GA CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:16:51 CEST"},"1870":{display:"Beijing Hotgen Biotech Co., Ltd, Novel Coronavirus 2019-nCoV Antigen Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1884":{display:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:26:18 CEST"},"1906":{display:"Azure Biotech Inc, COVID-19 Antigen Rapid Test Device",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:10 CEST"},"1919":{display:"Core Technology Co., Ltd, Coretests COVID-19 Ag Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-05-11 00:00:00 CEST"},"1920":{display:"Jiangsu Diagnostics Biotechnology Co.,Ltd., COVID-19 Antigen Rapid Test Cassette (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:48:08 CEST"},"1934":{display:"Tody Laboratories Int., Coronavirus (SARS-CoV 2) Antigen - Oral Fluid",lang:"en",active:!1,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 06:06:56 CEST"},"1957":{display:"Zhuhai Lituo Biotechnology Co., Ltd, COVID-19 Antigen Detection Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 06:03:58 CEST"},"1967":{display:"Shenzhen Microprofit Biotech Co., Ltd, SARS-CoV-2 Antigen Test Kit (Colloidal Gold Chromatographic Immunoassay)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:07:15 CEST"},"1989":{display:"Boditech Med Inc, AFIAS COVID-19 Ag",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:15:14 CEST"},"2006":{display:"Jiangsu Medomics medical technology Co.,Ltd., SARS-CoV-2 antigen Test Kit (LFIA)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:13:27 CEST"},"2010":{display:"Atlas Link Technology Co., Ltd., NOVA Test\xAE SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold Immunochromatography)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:19:54 CEST"},"2012":{display:"Genrui Biotech Inc, SARS-CoV-2 Antigen Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:08:01 CEST"},"2013":{display:"Biotical Health S.L.U., biotical SARS-CoV-2 Ag Card",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:14:13 CEST"},"2017":{display:"Shenzhen Ultra-Diagnostics Biotec.Co.,Ltd, SARS-CoV-2 Antigen Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-06-16 00:00:00 CEST"},"2029":{display:"Merlin Biomedical (Xiamen) Co., Ltd., SARS-CoV-2 Antigen Rapid Test Cassette",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:09 CEST"},"2031":{display:"Bio-Rad Laboratories / Zhejiang Orient Gene Biotech, Coronavirus Ag Rapid Test Cassette (Swab)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:08:22 CEST"},"2035":{display:"BioMaxima SA, SARS-CoV-2 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:13:31 CEST"},"2052":{display:"SD BIOSENSOR Inc, STANDARD Q COVID-19 Ag Test Nasal",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:13:37 CEST"},"2067":{display:"BIOTEKE CORPORATION (WUXI) CO., LTD, SARS-CoV-2 Antigen Test Kit (colloidal gold method)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:51:35 CEST"},"2072":{display:"Beijing Jinwofu Bioengineering Technology Co.,Ltd., Novel Coronavirus (SARS-CoV-2) Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:54:34 CEST"},"2074":{display:"Triplex International Biosciences (China) Co., LTD., SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:25:18 CEST"},"2078":{display:"ArcDia International Oy Ltd, mariPOC Respi+",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:52:37 CEST"},"2079":{display:"ArcDia International Oy Ltd, mariPOC Quick Flu+",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:53:23 CEST"},"2090":{display:"Wuhan UNscience Biotechnology Co., Ltd., SARS-CoV-2 Antigen Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:13:58 CEST"},"2098":{display:"Wuhan EasyDiagnosis Biomedicine Co., Ltd., COVID-19 (SARS-CoV-2) Antigen Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:25:36 CEST"},"2101":{display:"AXIOM Gesellschaft f\xFCr Diagnostica und Biochemica mbH, COVID-19 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:20:03 CEST"},"2103":{display:"VivaChek Biotech (Hangzhou) Co., Ltd, VivaDiag Pro SARS-CoV-2 Ag Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:25:29 CEST"},"2104":{display:"Nal von minden GmbH, NADAL COVID -19 Ag +Influenza A/B Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:20 CEST"},"2107":{display:"Jiangsu Bioperfectus Technologies Co., Ltd., Novel Corona Virus (SARS-CoV-2) Ag Rapid Test Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:43:08 CEST"},"2108":{display:"AESKU.DIAGNOSTICS GmbH & Co. KG, AESKU.RAPID SARS-CoV-2",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-06-16 00:00:00 CEST"},"2109":{display:"Shenzhen Lvshiyuan Biotechnology Co., Ltd., Green Spring SARS-CoV-2 Antigen-Rapid test-Set",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:24:52 CEST"},"2116":{display:"PerGrande BioTech Development Co., Ltd., SARS-CoV-2 Antigen Detection Kit (Colloidal Gold Immunochromatographic Assay)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:23:47 CEST"},"2128":{display:"Lumigenex (Suzhou) Co., Ltd, PocRoc\xAESARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:22:40 CEST"},"2130":{display:"Affimedix, Inc., TestNOW\xAE - COVID-19 Antigen Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:18:37 CEST"},"2139":{display:"HANGZHOU LYSUN BIOTECHNOLOGY CO., LTD., COVID-19 Antigen Rapid Test Device\uFF08Colloidal Gold\uFF09",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:22:14 CEST"},"2147":{display:"Fujirebio, ESPLINE SARS-CoV-2",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:12:38 CEST"},"2183":{display:"Getein Biotech, Inc., One Step Test for SARS-CoV-2 Antigen (Colloidal Gold)",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:21:07 CEST"},"2200":{display:"NanoRepro AG, NanoRepro SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-13 05:55:54 CEST"},"2228":{display:"Roche (SD BIOSENSOR), SARS-CoV-2 Rapid Antigen Test Nasal",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:05:08 CEST"},"2241":{display:"NESAPOR EUROPA SL, MARESKIT",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:17:55 CEST"},"2242":{display:"DNA Diagnostic, COVID-19 Antigen Detection Kit",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:16:00 CEST"},"2243":{display:"PCL Inc., PCL COVID19 Ag Gold",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-07 05:12:48 CEST"},"2247":{display:"BioGnost Ltd, CoviGnost AG Test Device 1x20",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:11:38 CEST"},"2290":{display:"Rapid Pathogen Screening, Inc., LIAISON\xAE Quick Detect Covid Ag Assay",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:18:29 CEST"},"2317":{display:"Hangzhou Immuno Biotech Co.,Ltd, SARS-CoV-2 Antigen Rapid Test",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-23 12:29:27 CEST"},"2350":{display:"Assure Tech. (Hangzhou) Co., Ltd., ECOTEST COVID-19 Antigen Rapid Test Device",lang:"en",active:!0,system:"https://covid-19-diagnostics.jrc.ec.europa.eu/devices",version:"2021-07-22 01:10:53 CEST"}}},"test-result.json":{valueSetId:"covid-19-lab-result",valueSetDate:"2021-04-27",valueSetValues:{"260373001":{display:"Detected",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},"260415000":{display:"Not detected",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"}}},"test-type.json":{valueSetId:"covid-19-lab-test-type",valueSetDate:"2021-04-27",valueSetValues:{"LP6464-4":{display:"Nucleic acid amplification with probe detection",lang:"en",active:!0,version:"2.69",system:"http://loinc.org"},"LP217198-3":{display:"Rapid immunoassay",lang:"en",active:!0,version:"2.69",system:"http://loinc.org"}}},"vaccine-mah-manf.json":{valueSetId:"vaccines-covid-19-auth-holders",valueSetDate:"2021-05-07",valueSetValues:{"ORG-100001699":{display:"AstraZeneca AB",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100030215":{display:"Biontech Manufacturing GmbH",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100001417":{display:"Janssen-Cilag International",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100031184":{display:"Moderna Biotech Spain S.L.",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100006270":{display:"Curevac AG",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100013793":{display:"CanSino Biologics",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100020693":{display:"China Sinopharm International Corp. - Beijing location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100010771":{display:"Sinopharm Weiqida Europe Pharmaceutical s.r.o. - Prague location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100024420":{display:"Sinopharm Zhijun (Shenzhen) Pharmaceutical Co. Ltd. - Shenzhen location",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"ORG-100032020":{display:"Novavax CZ AS",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""},"Gamaleya-Research-Institute":{display:"Gamaleya Research Institute",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Vector-Institute":{display:"Vector Institute",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Sinovac-Biotech":{display:"Sinovac Biotech",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"Bharat-Biotech":{display:"Bharat Biotech",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccinemanufacturer",version:"1.0"},"ORG-100001981":{display:"Serum Institute Of India Private Limited",lang:"en",active:!0,system:"https://spor.ema.europa.eu/v1/organisations",version:""}}},"vaccine-medicinal-product.json":{valueSetId:"vaccines-covid-19-names",valueSetDate:"2021-05-07",valueSetValues:{"EU/1/20/1528":{display:"Comirnaty",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/20/1507":{display:"Spikevax (previously COVID-19 Vaccine Moderna)",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/21/1529":{display:"Vaxzevria",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},"EU/1/20/1525":{display:"COVID-19 Vaccine Janssen",lang:"en",active:!0,system:"https://ec.europa.eu/health/documents/community-register/html/",version:""},CVnCoV:{display:"CVnCoV",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"Sputnik-V":{display:"Sputnik-V",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},Convidecia:{display:"Convidecia",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},EpiVacCorona:{display:"EpiVacCorona",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"BBIBP-CorV":{display:"BBIBP-CorV",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},"Inactivated-SARS-CoV-2-Vero-Cell":{display:"Inactivated SARS-CoV-2 (Vero Cell)",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},CoronaVac:{display:"CoronaVac",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},Covaxin:{display:"Covaxin (also known as BBV152 A, B, C)",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"},Covishield:{display:"Covishield (ChAdOx1_nCoV-19)",lang:"en",active:!0,system:"http://ec.europa.eu/temp/vaccineproductname",version:"1.0"}}},"vaccine-prophylaxis.json":{valueSetId:"sct-vaccines-covid-19",valueSetDate:"2021-04-27",valueSetValues:{"1119305005":{display:"SARS-CoV-2 antigen vaccine",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},"1119349007":{display:"SARS-CoV-2 mRNA vaccine",lang:"en",active:!0,version:"http://snomed.info/sct/900000000000207008/version/20210131",system:"http://snomed.info/sct"},J07BX03:{display:"covid-19 vaccines",lang:"en",active:!0,version:"2021-01",system:"http://www.whocc.no/atc"}}}},p=[{kid:"S2V5MVJF",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEtWokvmqrJOv/0PO9Vy8lpb6SgWw+rao0qIXntO/Bf7ExryL3yyKRI73IqAh38Lk4joqHrZK8XLZV9PMclgmTVg=="},{kid:"26YSc5g0nG8=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEr9bj163kKNBLl5bxWhZBlyJv3pHa2QMb24OAdXZwJN6xx2CR03VG4DhQmd9wzVuPmw164+T7/sDmoRNOh4QbQQ=="},{kid:"S2V5MlJF",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAauvVllnjXm0toiI2cUQfCTdZiDQ6kvtoo1bSnl8W3Rq7WyOeHWYKhBaQ4rEBceqNl5+v1ZLGj0WfnIhXh246Q=="},{kid:"S2V5M1JF",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE2ZpDNa1VV6g2PkmyKoL1INO0MtTqE5WT45i3QhY9FFMjbF9ieqnHV4R814wrN3f3vzkx0VN/YJZH4rI1GDlfqw=="},{kid:"S2V5NFJF",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE8g5iFLRT7NyRmKp7pcP8uEgoHFhfmcXOLLD4RUtX50/Rh4Cz7l/faAiODNMmCkcWLA1Z8WOZoNFQsdmeDjXuLQ=="},{kid:"S2V5NVJF",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEOFOUp1+SLuaM3NnV+OMZKZOoPg76T7D+vqRCasD0BrRZmlUH2gD+aVlpKvp+u7h8ywTR7T6Z6/iI2Qe6F5begg=="},{kid:"S2V5MVBSTw==",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEyfUqlGg4hfyPYgZJzl1KepkfTaX+F3592syCJ0ylVOHA4fE6vavLXE4cG+Whz/eqyW/rFuZ0HBHHEskmpCngOA=="},{kid:"S2V5MlBSTw==",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEP6P6ZlbhcW1xZpp91qagUY+iLIyuu+CynzAlrqiiseqmOYH8uJ71CkbEYhbVh8TemnbaR0unE2j9EPK7Y/x7Vg=="},{kid:"S2V5M1BSTw==",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErltiOh3nmU+x4p5r249O/2fBSnHkjJpas23lhMAtEYeQutHiw0G+zeEUNZ/n++/XbFoY5hH68d27cGaGW6uoxw=="},{kid:"S2V5NFBSTw==",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEfIefhjjacwZ+xxKudJGqdHr0j95tWtYIUGPeWV2XWmduygfe3oIFJu/A2kYGmeZ4u/ERSTNM2ZXuE9k19xVJQ=="},{kid:"S2V5NVBSTw==",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+4ukUdmm9f4AmyQBwTLQFKPPCQj4fP2BpQkIl2hb4p6FxPGDP9z3JkIo2w2xkoxqs2JrTHn2MCdyh3aeyZWD4A=="},{kid:"1J9pb87ndV0=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZ+fdcTa4UWA/6PT5V4a0+0j1/s++4JQEsW/HvGnxxP7mGfuQDfn/FRdUMGQtTkoCGaky1gpYVZXkkoYu9ZjlUw=="},{kid:"c3ByZGtleTE=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEPtYvyfeF/2VvzK7yZFtTzzZjvIzmdDCCHqeQi7/R/PiKJ9HL3exOeVzabVvBkW5uP/+5RnwfSvyxYW/xIhooNg=="},{kid:"c3ByZGtleTI=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELv/LGmc0H46LwmLHIRD89CmSRlW8aiFyniNkOgkpjpJ+sApFzfQScbmLlRJx1vZ+PYhWeL5Ktb6w+5ajWj8h5Q=="},{kid:"d3ByZGtleTE=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEzQtHAcVujgAyvWzHOx9mrtIW3muUpB0sCl22Kt3vMbTMN81yZnEoqkOyOBu3UHE9ifr+RoEVCgMZ7GcDF9Ix1A=="},{kid:"d3ByZGtleTI=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEPJq53/TUr83Jx/KibQsq/FsKOdUBogz9YsH157l/mlrmjEmdToz6vDFMxvvWfdRIvNL0LoRuTSg5XjIvoAYqZA=="},{kid:"osFRFyFIWdU=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE17Mn/OPO2RQfYEZM62rPQcvhfRd6ZTWo1MZnPvSBMCzjuY0ZdmtsXwDHH7wDOVcTs1NSylkb+/EmC1t/7XV0Ow=="},{kid:"I0+qkOLr2e0=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsrcO+nNM8OkcO7IhbRh4D4D++Tgr3PyGt9q6vXkSwIY6vctXRXke4WdrRtWbYzB8xGREifNxSgd6Fdik+bg44g=="},{kid:"jeetFC69E6o=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUQjAzEd62FL4s5OTPEOo7v0k//MUI3L99/10QFBMHH42q30Q8IrtpqgPGjgesWZFWWsoqGdXa1vHEsFGNtZNvw=="},{kid:"lYkujLws7SE=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKrPl/bqJRA4on2AtNgXUOhCwjkr8kUkeol8ZMH8d6+ILPJCgc3y4d2AnGcNMIxwk/JWVjD2V0lkxSB2Hh7shtA=="},{kid:"1PtilTAMiyk=",publicKey:"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEORjyQk/KOoCEJWGfLLyqyEcOqRRreyVdSH+ELi4GqqS17W4aYeOl2cvm/5unZwgCQUzB09uxYESXGmBJ3xgsEg=="}];window.appVersion=Q,window.localStorage.setItem("VERSION",appVersion),console.log("Version:",appVersion);var u=new Map;function E(e,i){console.log("ROUTER: register page:",e),u.set(e,i)}window.route=E;var c="intro";window.homePage=c;function f(e){c=e}window.setHomePage=f,window.addEventListener("popstate",async function(e){var i=c,n=void 0,t=e.state;t!=null&&(i=t.pageName,n=t.pageData),console.log("Popstate: ",i),await A(i,n,!0)});async function A(e,i,n){try{for(let[s,a]of u)a.domElem.style.display="none",s!==e&&a.exit&&await a.exit()}catch(s){console.error("Trying to call exit",s);return}let t=u.get(e);t===void 0&&(e="page404"),window.scrollTo(0,0);try{t.enter?await t.enter(i,n):t.style.display="block"}catch(s){console.error("Calling enter()",s);return}}async function v(){c!=null&&await g(c)}window.goHome=v;async function g(e,i){console.log("Inside gotPage",e),i||(i={}),u.get(e)===void 0&&(console.error("Target page does not exist: ",e),e="page404"),window.history.pushState({pageName:e,pageData:i},`${e}`),await A(e,i)}window.gotoPage=g;var w="ca";let x=localStorage.getItem("preferredLanguage");x&&(w=x),window.preferredLanguage=w;function d(e){if(window.preferredLanguage==="en"&&e.charAt(0)!="$")return e;let i=N[e];if(i===void 0)return e;let n=i[window.preferredLanguage];return n===void 0?e:n}window.T=d;function Z(){document.getElementById("mobileMenu").classList.toggle("hidden")}function m(){document.getElementById("mobileMenu").classList.add("hidden")}function W(e){m(),v()}function q(){m(),k(),v()}window.toggleMenu=Z,window.hideMenu=m,window.resetAndGoHome=W,window.reloadPublickeys=q;function I(){var e=`
    <nav class="bg-gray-gene shadow-lg py-3">
        <div class="flex justify-between">
            <div class="text-white text-2xl pl-4" onclick="resetAndGoHome()">VerificaCOVID.gencat.cat</div>
            <a class="text-white text-2xl pr-4" href="javascript:void(0)" onclick="toggleMenu()" >&#9776;</a>
        </div>
    </nav>

    <div class="hidden pl-6 bg-gray-gene" id="mobileMenu">
        <a class="block text-white text-lg py-2" onclick='gotoPage("refreshKeys")' href="javascript:void(0)">${d("Update public keys")}</a>
        <a class="block text-white text-lg py-2" onclick='gotoPage("selectLanguage")' href="javascript:void(0)">${d("Language")}</a>
        <a class="block text-white text-lg py-2" onclick='gotoPage("selectCamera")' href="javascript:void(0)">${d("Camera")}</a>
    </div>
`;document.querySelector("header").innerHTML=e}window.initialHeader=I;function b(){var e;e=`
        <div class="pt-4 text-center">
            <h2 class="px-4 text-2xl md:text-3xl font-semibold text-center" style="word-break:break-word">${d("EU Digital COVID Credential Verifier")}</h2>
            <p class="px-6">${d("$intro01")}</p>
    
            <button onclick='gotoPage("verifier")' class="btn mt-6">
                ${d("Start verifying")}</button>    
        </div>
        `,document.getElementById("intro").innerHTML=e}window.initialScreen=b,I();let j=document.createElement("div");j.id="intro",document.querySelector("main").append(j),b();var T=z;async function k(){let e=await fetch("./eu_jwk_keys.json");if(!e.ok){r.myerror("fetch for TL failed");return}T=await e.json()}window.refreshTrustedKeys=k;async function J(e){let i={kid:e,publicKey:void 0,list:void 0,format:void 0};if(!e)return r.myerror("kid is undefined"),i;let n=T[e];if(n)return console.log(`kid "${e}" found in EU_PRO trusted list`),{kid:e,publicKey:n.jwk,list:"EU_PRO",format:"jwk"};r.mywarn(`kid "${e}" not found in EU_PRO trusted list`);for(let t=0;t<p.length;t++)if(p[t].kid==e)return console.log(`kid "${e}" found in UK_PRO trusted list`),{kid:e,publicKey:p[t].publicKey,list:"UK_PRO",format:"spki"};return r.mywarn(`kid "${e}" not found in UK_PRO trusted list`),F.includes(e)?(r.mywarn(`kid "${e}" found in EU PREPRODUCTION trusted list`),{kid:e,publicKey:void 0,list:"EU_PREPRODUCTION",format:void 0}):(r.myerror(`KEY ${e} not found in any Trusted List`),i)}window.getTrustedKey=J;var X={get:function(e,i){if(!e)return"N/A";let n=H[i];if(!n)return e;let t=n.valueSetValues;if(!t)return e;let s=t[e];return s?s.display:e}};window.vs=X;function D(){const e=window.navigator.userAgent;let i=null;const n=(/iPad|iPhone|iPod/.test(e)||/Mac|Mac OS|MacIntel/gi.test(e)&&(navigator.maxTouchPoints>1||"ontouchend"in document))&&!window.MSStream;return/Macintosh|Mac|Mac OS|MacIntel|MacPPC|Mac68K/gi.test(e)?i="Mac OS":n?i="iOS":/'Win32|Win64|Windows|Windows NT|WinCE/gi.test(e)?i="Windows":/Android/gi.test(e)?i="Android":/Linux/gi.test(e)&&(i="Linux"),i}console.log(D()),window.defaultPreferredCamera=void 0,window.selectedCamera=void 0,window.videoDevices=[];async function R(){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices){console.log("enumerateDevices() not supported.");return}let e=await navigator.mediaDevices.enumerateDevices();window.videoDevices=e.filter(n=>n.kind==="videoinput");let i;if(window.videoDevices.length>0&&window.videoDevices.every(t=>t.label===""))try{i=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),e=await navigator.mediaDevices.enumerateDevices(),window.videoDevices=e.filter(t=>t.kind==="videoinput")}catch{}finally{i!==void 0&&i.getVideoTracks().forEach(t=>{t.stop()})}}window.getVideoDevices=R;async function P(){if(await R(),D()==="Android"){if(window.videoDevices.length>0)window.defaultPreferredCamera=window.videoDevices[window.videoDevices.length-1];else return;return window.defaultPreferredCamera}}window.getPreferredVideoDevice=P,document.addEventListener("DOMContentLoaded",async e=>{console.log("DOM fully loaded and parsed"),P()}),window.addEventListener("load",async e=>{k(),console.log("In production");var i=document.querySelector("main"),n=await C(()=>import("./all_pages.8d0b5773.js"),[]),t=n.pageDefs;for(let s=0;s<t.length;s++){let a=t[s].name,o=t[s].className,l=new o(a);i.append(l.domElem),E(a,l)}if(console.log("Home_page:",c),f(c),"serviceWorker"in navigator){const{Workbox:s}=await C(()=>import("./workbox-window.prod.es5.73a2a4cf.js"),[]),a=new s("./sw.js");a.addEventListener("message",o=>{if(o.data.type==="CACHE_UPDATED"){const{updatedURL:l}=o.data.payload;console.log(`A newer version of ${l} is available!`)}}),a.addEventListener("activated",async o=>{o.isUpdate?(console.log("Service worker has been updated."),await L()):(console.log("Service worker has been installed for the first time."),await L())}),a.addEventListener("waiting",o=>{console.log("A new service worker has installed, but it can't activateuntil all tabs running the current version have fully unloaded.")}),a.register()}await v()});async function L(){console.log("Performing Upgrade"),g("swnotify")}export{r as l};
