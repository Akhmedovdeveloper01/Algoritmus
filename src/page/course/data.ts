export interface CourseLesson {
    id: number;
    theme: string;
    description: string;
    example: string;
    image?: string;
    note?: string;
    advice?: string;
    duration?: string;
}
export const HTML_CSS_COURSE: CourseLesson[] = [
    {
        id: 1,
        theme: "HTML nima?",
        description: `HTML (HyperText Markup Language) — veb-sahifalarni yaratish uchun ishlatiladigan standart belgilash (markup) tilidir. U veb-sahifa mazmunining tuzilishini (structure) belgilaydi va brauzerga matn, rasmlar, havolalar va boshqa elementlarni qanday ko'rsatish kerakligini aytadi. HTML dasturlash tili emas, balki sahifani "belgilash" tili hisoblanadi. U Tim Berners-Lee tomonidan 1989-1991 yillarda yaratilgan.`,
        example: `<!DOCTYPE html>
            <html>
            <head>
                <title>Salom Dunyo</title>
            </head>
            <body>
                <h1>Bu mening birinchi sahifam!</h1>
            </body>
            </html>`,
        image: "",
        note: `Eslatma: HTML faqat mazmun va tuzilishni belgilaydi. Dizayn (rang, shrift, joylashuv) uchun CSS, interaktivlik uchun esa JavaScript ishlatiladi.`,
        advice: `Har doim <!DOCTYPE html> bilan boshlang — bu brauzerga HTML5 versiyasini bildiradi.`,
    },
    {
        id: 2,
        theme: "Birinchi HTML sahifa",
        description: `Birinchi HTML sahifasini yaratish uchun oddiy matn muharriridan (masalan, VS Code) foydalaning. Har bir HTML hujjati quyidagi asosiy tuzilishga ega: <!DOCTYPE html>, <html>, <head> va <body>. <head> qismida sahifa haqidagi meta-ma'lumotlar (title, charset va boshqalar) joylashadi, <body> esa foydalanuvchiga ko'rinadigan mazmunni o'z ichiga oladi.`,
        example: `<!DOCTYPE html>
        <html lang="uz">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mening Birinchi Sahifam</title>
        </head>
        <body>
            <h1>Salom, Dunyo!</h1>
            <p>Bu mening birinchi HTML sahifam.</p>
        </body>
        </html>`,
        image: "",
        note: `Faylni .html kengaytmasi bilan saqlang (masalan, index.html) va brauzerda oching.`,
        advice: `Meta viewport tegi responsive dizayn uchun juda muhim — mobil qurilmalarda to'g'ri ko'rinishni ta'minlaydi.`,
    },
    {
        id: 3,
        theme: "Asosiy teglar",
        description: `HTML asosiy teglari sahifaning tuzilishini belgilaydi. Eng muhimlari: <h1>–<h6> (sarlavhalar), <p> (paragraf), <br> (qator uzish), <strong> va <em> (matn ta'kidlash), <div> va <span> (blok va inline konteynerlar). Har bir teg juft bo'ladi: ochilish <tag> va yopilish </tag>.`,
        example: `<h1>Bu eng katta sarlavha</h1>
<p>Bu oddiy paragraf. <strong>Bu qalin matn</strong> va <em>bu kursiv matn</em>.</p>
<br>
<div>Bu blok elementi</div>`,
        image: "",
        note: `Sarlavhalar faqat ierarxiya uchun ishlatiladi, dizayn uchun emas (CSS bilan boshqaring).`,
        advice: `Har doim to'g'ri nesting (ichma-ich joylashuv) ga rioya qiling — masalan, <p> ichida <div> qo'ymaslik kerak.`,
    },
    {
        id: 4,
        theme: "Matn formatlash",
        description: `Matnni formatlash uchun <b> yoki <strong> (qalin), <i> yoki <em> (kursiv), <u> (tagiga chizilgan), <mark> (belgilangan), <small> (kichik matn) va boshqa teglar ishlatiladi. Bundan tashqari, <pre> (formatni saqlash), <code> (kod uchun) va <blockquote> (iqtibos) mavjud.`,
        example: `<p>Oddiy matn. <strong>Bu muhim matn</strong>. <em>Bu ta'kidlangan matn</em>.</p>
<mark>Bu belgilangan matn</mark>
<blockquote>Bu iqtibos.</blockquote>`,
        image: "",
        note: `Semantik teglarni (<strong>, <em>) afzal ko'ring, chunki ular accessibility (qulaylik) va SEO uchun yaxshiroq.`,
        advice: `Matn formatlashda CSSdan foydalaning — HTML faqat mazmun uchun.`,
    },
    {
        id: 5,
        theme: "Ro'yxatlar",
        description: `HTMLda ikki turdagi ro'yxat mavjud: tartibsiz (<ul> — bulletlar bilan) va tartibli (<ol> — raqamlar bilan). Har bir element <li> tegi bilan belgilanadi. Ro'yxatlar menyular, bosqichlar yoki elementlar ro'yxati uchun ideal.`,
        example: `<ul>
    <li>Olma</li>
    <li>Banana</li>
</ul>
<ol>
    <li>Birinchi qadam</li>
    <li>Ikkinchi qadam</li>
</ol>`,
        image: "",
        note: `Ichma-ich ro'yxatlar (nested lists) ham mumkin.`,
        advice: `Ro'yxatlarni navigatsiya yoki kontentni tashkil qilish uchun ishlating.`,
    },
    {
        id: 6,
        theme: "Havolalar va Rasmlar",
        description: `Havolalar <a href="..."> teg bilan yaratiladi. Rasmlar <img src="..." alt="..."> bilan qo'shiladi. Alt atributi accessibility va SEO uchun majburiy. Havolalar ichki (relative) yoki tashqi (absolute) bo'lishi mumkin.`,
        example: `<a href="https://example.com" target="_blank">Bu havola</a>
<img src="rasm.jpg" alt="Mening rasim" width="300" height="200">`,
        image: "",
        note: `target="_blank" yangi oynada ochadi. Rasmlar uchun max-width: 100% CSS qo'shing (responsive uchun).`,
        advice: `Har doim alt matnini to'ldiring — ko'r foydalanuvchilar uchun ekran o'quvchilar ishlatadi.`,
    },
    {
        id: 7,
        theme: "Semantik HTML",
        description: `Semantik HTML5 elementlari sahifa mazmuniga ma'no beradi (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>). Bu brauzerlar, qidiruv tizimlari va ekran o'quvchilar uchun yaxshiroq tushunishni ta'minlaydi. Non-semantik <div> o'rniga semantik teglarni ishlating.`,
        example: `<header>
    <h1>Sayt Sarlavhasi</h1>
</header>
<nav>
    <a href="/">Bosh sahifa</a>
</nav>
<main>
    <article>
        <h2>Maqola sarlavhasi</h2>
    </article>
</main>
<footer>© 2026 Mening saytim</footer>`,
        image: "",
        note: `Semantik HTML accessibility va SEO ni yaxshilaydi.`,
        advice: `Har bir sahifada bitta <main> bo'lishi kerak.`,
    },
    {
        id: 8,
        theme: "Header, Nav, Main, Footer",
        description: `Header — sahifa yoki bo'limning yuqori qismi (logo, navigatsiya). Nav — navigatsiya menyusi. Main — asosiy kontent. Footer — pastki qism (muallif, havolalar). Bu elementlar sahifani mantiqiy bo'limlarga ajratadi.`,
        example: `<header><nav>...</nav></header>
<main>...</main>
<footer>...</footer>`,
        image: "",
        note: ``,
        advice: `Header va footer ni bir necha marta ishlatish mumkin (bo'lim ichida ham).`,
    },
    {
        id: 9,
        theme: "Article va Section",
        description: `<article> — mustaqil, o'z-o'zidan to'liq kontent (blog posti, yangilik). <section> — tematik guruhlangan kontent (bob yoki bo'lim). Ikkalasi ham ichida heading (<h2> va h.k.) bo'lishi tavsiya etiladi.`,
        example: `<section>
    <h2>Bo'lim sarlavhasi</h2>
    <article>
        <h3>Maqola</h3>
        <p>Matn...</p>
    </article>
</section>`,
        image: "",
        note: ``,
        advice: `Section ichida bir nechta article bo'lishi mumkin.`,
    },
    {
        id: 10,
        theme: "Form elementlari",
        description: `Forma elementlari foydalanuvchi ma'lumotlarini yig'ish uchun: <form>, <input> (text, email, password, checkbox, radio), <textarea>, <select>, <button>. Label tegi bilan bog'lash accessibility ni oshiradi.`,
        example: `<form>
    <label for="name">Ism:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Yuborish</button>
</form>`,
        image: "",
        note: `action va method atributlari backend bilan ishlash uchun kerak.`,
        advice: `Har bir input uchun <label> ishlatishni unutmang.`,
    },
    {
        id: 11,
        theme: "Jadvallar",
        description: `Jadvallar <table>, <tr> (qator), <th> (sarlavha ustuni), <td> (oddiy katak) bilan yaratiladi. Semantik uchun <thead>, <tbody>, <tfoot> qo'shing. CSS bilan dizayn qiling.`,
        example: `<table>
    <thead>
        <tr><th>Ism</th><th>Yosh</th></tr>
    </thead>
    <tbody>
        <tr><td>Ali</td><td>25</td></tr>
    </tbody>
</table>`,
        image: "",
        note: `Jadvallarni layout uchun emas, ma'lumotlar uchun ishlating.`,
        advice: `Responsive jadvallar uchun CSS overflow yoki scroll qo'shing.`,
    },
    {
        id: 12,
        theme: "CSS nima?",
        description: `CSS (Cascading Style Sheets) — HTML elementlarini stilizatsiya qilish tili. U ranglar, shriftlar, joylashuv va animatsiyalarni boshqaradi. "Cascading" — uslublar meros bo'lib o'tishi va ustunlik tartibiga asoslangan.`,
        example: `p { color: blue; font-size: 16px; }`,
        image: "",
        note: `CSS HTMLdan alohida faylda (style.css) saqlash tavsiya etiladi.`,
        advice: `Inline, internal va external CSS usullaridan external ni afzal ko'ring.`,
    },
    {
        id: 13,
        theme: "CSS qo'llash usullari",
        description: `1. Inline (element ichida style atributi) — kamdan-kam. 2. Internal (<style> tegi head ichida). 3. External (alohida .css fayl, <link> orqali bog'lanadi). External eng yaxshisi — kodni toza saqlaydi va bir nechta sahifalarda qayta ishlatiladi.`,
        example: `<!-- External -->
<link rel="stylesheet" href="styles.css">`,
        image: "",
        note: ``,
        advice: `Specificity (ustunlik) ni tushuning: ID > Class > Element.`,
    },
    {
        id: 14,
        theme: "Selektorlar",
        description: `Selektorlar — qaysi elementlarga stil qo'llashni belgilaydi. Tur selektori (p {}), class (.sinf {}), ID (#id {}), universal (* {}), atribut, pseudo-class (:hover) va boshqalar. Kombinatorlar (bo'shliq, >, +) ham mavjud.`,
        example: `h1 { color: red; }
.katta { font-size: 24px; }
#asosiy { background: white; }`,
        image: "",
        note: ``,
        advice: `Class larni ko'proq ishlating, ID larni faqat noyob elementlar uchun.`,
    },
    {
        id: 15,
        theme: "Ranglar va Fontlar",
        description: `Ranglar: hex (#ff0000), rgb(255,0,0), hsl(), rgba() (shaffoflik). Fontlar: font-family (Arial, sans-serif), font-size, font-weight, line-height. Google Fonts yoki system fontlaridan foydalaning.`,
        example: `body { 
    color: #333; 
    font-family: 'Roboto', sans-serif; 
    font-size: 16px; 
}`,
        image: "",
        note: `Rang kontrasti accessibility uchun muhim (WCAG).`,
        advice: `Web-safe fontlar yoki font-stack ishlatishni unutmang.`,
    },
    {
        id: 16,
        theme: "Box Model",
        description: `Har bir HTML elementi "quti" (box) dan iborat: content (mazmun), padding (ichki bo'shliq), border (chegara), margin (tashqi bo'shliq). box-sizing: border-box; ni qo'shish tavsiya etiladi — bu o'lchamlarni soddalashtiradi.`,
        example: `.box {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    box-sizing: border-box;
}`,
        image: "",
        note: `Box modelni brauzer devtools da ko'rish mumkin.`,
        advice: `Global * { box-sizing: border-box; } qo'llang.`,
    },
    {
        id: 17,
        theme: "Display xususiyati",
        description: `display: block (to'liq kenglik, yangi qator), inline (faqat mazmun kengligi), inline-block, none (yashirish), flex, grid va boshqalar. Bu elementning joylashuv turini belgilaydi.`,
        example: `span { display: block; } /* inline ni block ga o'zgartirish */`,
        image: "",
        note: ``,
        advice: `display: none va visibility: hidden farqini tushuning (joy egallash/egallamaslik).`,
    },
    {
        id: 18,
        theme: "Flexbox",
        description: `Flexbox — bir o'lchovli (1D) layout tizimi. Konteynerga display: flex; qo'yiladi. justify-content (gorizontal), align-items (vertikal), flex-direction, flex-wrap va boshqa xususiyatlar bilan elementlarni osongina joylashtirish mumkin.`,
        example: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`,
        image: "",
        note: `Flexbox mobil va desktop layoutlar uchun ideal.`,
        advice: `Flex item larda flex: 1; (o‘sish) ni sinab ko'ring.`,
    },
    {
        id: 19,
        theme: "CSS Grid",
        description: `CSS Grid — ikki o'lchovli (2D) layout tizimi. Konteynerga display: grid; qo'yiladi. grid-template-columns, grid-template-rows, gap va grid-area bilan murakkab gridlar yaratiladi.`,
        example: `.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}`,
        image: "",
        note: `Grid va Flexbox birgalikda ishlatiladi (Grid — umumiy tuzilish, Flexbox — ichki).`,
        advice: `Fr (fraction) birligi grid uchun juda qulay.`,
    },
    {
        id: 20,
        theme: "Position",
        description: `position: static (default), relative (o'z joyidan siljish), absolute (eng yaqin positioned ancestor ga nisbatan), fixed (ekranga nisbatan), sticky (scroll paytida yopishib qolish). Top, right, bottom, left bilan birga ishlatiladi.`,
        example: `.fixed {
    position: fixed;
    top: 0;
    left: 0;
}`,
        image: "",
        note: `Absolute va fixed z-index bilan birga ishlatilganda qatlamlar hosil qiladi.`,
        advice: `Position ni faqat kerak bo'lganda ishlating — flex/grid afzal.`,
    },
    {
        id: 21,
        theme: "Float",
        description: `Float: left/right — elementni chap/o'ngga surish va atrofidagi matnni o'rash uchun. Eski usul, lekin ba'zi holatlarda (rasmlar atrofida matn) hali ham ishlatiladi. Clearfix yoki modern layoutlar bilan almashtirilmoqda.`,
        example: `img { float: left; margin-right: 20px; }`,
        image: "",
        note: `Float dan keyin container ga clearfix qo'shish kerak bo'lishi mumkin.`,
        advice: `Zamonaviy loyihalarda flex/grid ni afzal ko'ring.`,
    },
    {
        id: 22,
        theme: "Tipografiya",
        description: `Tipografiya — shrift tanlash, o'lcham, vazn, interval, alignment. Yaxshi tipografiya o'qish qulayligini oshiradi. Rem/em birliklari, line-height (1.5-1.8 tavsiya), letter-spacing ni boshqaring.`,
        example: `h1 { 
    font-size: 2.5rem; 
    line-height: 1.2; 
    font-weight: 700; 
}`,
        image: "",
        note: ``,
        advice: `Bir-ikki shrift oilasidan oshmang — dizaynni toza saqlang.`,
    },
    {
        id: 23,
        theme: "Ranglar va gradientlar",
        description: `Ranglar palitrasi (primary, secondary, accent). Gradientlar: linear-gradient (chiziqli), radial-gradient (doiraviy). Background-image orqali qo'llaniladi. Kontrastni tekshiring.`,
        example: `background: linear-gradient(to right, #ff0000, #00ff00);`,
        image: "",
        note: ``,
        advice: `Ranglar uchun CSS custom properties (--primary-color) ishlatishni o'rganing.`,
    },
    {
        id: 24,
        theme: "Border va Border-radius",
        description: `Border: qalinligi, turi (solid, dashed), rangi. border-radius elementlarga yumaloq burchaklar beradi (px, %, em). Barcha tomonlarni alohida yoki shorthand bilan belgilash mumkin.`,
        example: `.card {
    border: 2px solid #ccc;
    border-radius: 12px;
}`,
        image: "",
        note: `Border-radius: 50%; doira hosil qiladi.`,
        advice: `Subtle radius dizaynni zamonaviy ko'rsatadi.`,
    },
    {
        id: 25,
        theme: "Shadow effektlari",
        description: `box-shadow: x-offset, y-offset, blur, spread, color. Text-shadow matn uchun. Bir nechta shadow qo'shish mumkin. Chuqurlik va elevation hissi beradi.`,
        example: `.card {
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}`,
        image: "",
        note: ``,
        advice: `Katta loyihalarda soft shadows ni ishlating — haddan oshirmang.`,
    },
    {
        id: 26,
        theme: "Transitions",
        description: `transition: property duration timing-function; — element holati o'zgarganda (hover, focus) silliq o'tish hosil qiladi. Hover effektlari uchun ideal.`,
        example: `button {
    transition: all 0.3s ease;
}
button:hover { background: blue; }`,
        image: "",
        note: ``,
        advice: `Faqat kerakli property larni transition qiling (performance uchun).`,
    },
    {
        id: 27,
        theme: "Mobile-first yondashuv",
        description: `Mobile-first — avval mobil uchun dizayn qilish, keyin katta ekranlar uchun media queries orqali qo'shish. Bu yondashuv tezroq yuklanish va yaxshi UX beradi.`,
        example: `/* Mobile first */
.container { width: 100%; }
/* Katta ekranlar uchun */
@media (min-width: 768px) {
    .container { width: 750px; }
}`,
        image: "",
        note: ``,
        advice: `Mobile-first bilan boshlash loyihani soddalashtiradi.`,
    },
    {
        id: 28,
        theme: "Media queries",
        description: `@media (max-width: 600px) { ... } — ekran o'lchamiga qarab stil o'zgartirish. Min-width/max-width, orientation va boshqa features mavjud. Breakpoints ni o'ylab tanlang (sm, md, lg).`,
        example: `@media (max-width: 768px) {
    .navbar { flex-direction: column; }
}`,
        image: "",
        note: ``,
        advice: `Mobile-first da min-width ishlatish odatiy.`,
    },
    {
        id: 29,
        theme: "Viewport",
        description: `<meta name="viewport" content="width=device-width, initial-scale=1.0"> — brauzerga sahifani qurilma kengligiga moslashtirishni aytadi.Responsive dizaynning asosiy qismi.`,
        example: ``,
        image: "",
        note: `Bu meta tegsiz sahifalar mobil da zoom qilinadi yoki noto'g'ri ko'rinadi.`,
        advice: `Har bir HTML faylda viewport meta tegi bo'lishi shart.`,
    },
    {
        id: 30,
        theme: "Flexible images",
        description: `Rasmlar moslashuvchan bo'lishi uchun img { max-width: 100%; height: auto; } qo'llang. <picture> va srcset bilan turli o'lchamdagi rasmlarni taqdim eting (performance uchun).`,
        example: `img {
    max-width: 100%;
    height: auto;
}`,
        image: "",
        note: ``,
        advice: `Lazy loading (loading="lazy") ni qo'shing.`,
    },
    {
        id: 31,
        theme: "Vizitka sahifa",
        description: `Oddiy vizitka (business card) loyihasi: markazda foto, ism, lavozim, kontaktlar va ijtimoiy havolalar. Flexbox yoki Grid bilan markazlashtirilgan kartochka yaratiladi. Shadow va border-radius bilan chiroyli dizayn.`,
        example: `<!-- Oddiy struktura: div.card ichida img, h1, p, ul (havolalar) -->`,
        image: "",
        note: `Bu loyiha CSS box model, flex va hover effektlarini mashq qilish uchun ideal.`,
        advice: `Responsive qiling — mobil da yaxshi ko'rinsin.`,
    },
    {
        id: 32,
        theme: "Portfolio layout",
        description: `Portfolio sahifasi: header (nav), hero section, loyihalar gridi (CSS Grid), about, contact. Har bir loyiha kartasi hover da scale va shadow o'zgartirsin. Responsive grid ishlatiladi.`,
        example: `.projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }`,
        image: "",
        note: ``,
        advice: `Real loyihalar uchun filter yoki kategoriyalar qo'shing.`,
    },
    {
        id: 33,
        theme: "Forma dizayni",
        description: `Chiroyli forma: input va button larni stilizatsiya qilish (focus holati, border-radius, transitions). Label lar bilan yaxshi alignment. Validation uchun :invalid pseudo-class ishlatish mumkin.`,
        example: `input:focus { border-color: blue; outline: none; }`,
        image: "",
        note: ``,
        advice: `Forma accessibility ni unutmang (aria-label, required).`,
    },
    {
        id: 34,
        theme: "Navbar komponenti",
        description: `Navbar: logo, menu havolalari, mobil uchun hamburger menu (JS bilan toggle). Flexbox bilan gorizontal joylashuv, sticky position. Hover va active holatlari.`,
        example: `.navbar { display: flex; justify-content: space-between; }`,
        image: "",
        note: `Mobil da media query bilan menu vertical bo'lsin.`,
        advice: `Hamburger animatsiyasi uchun CSS transition qo'shing.`,
    },
    {
        id: 35,
        theme: "Kod yozish standartlari",
        description: `Toza kod: to'g'ri indentatsiya (2 yoki 4 bo'shliq), izohlar, semantic teglar, class nomlari (BEM yoki kebab-case), fayllarni ajratish (HTML, CSS alohida). Validatorlardan foydalaning (W3C).`,
        example: ``,
        image: "",
        note: `Consistent kod — jamoaviy ishlashda muhim.`,
        advice: `Prettier va ESLint kabi tool larni o'rnating.`,
    },
    {
        id: 36,
        theme: "Performance",
        description: `Sahifa tezligi: rasmlarni optimallashtirish (WebP, compression), CSS/JS ni minify qilish, keraksiz kodni olib tashlash, lazy loading, critical CSS. Lighthouse bilan tekshiring.`,
        example: `<!-- loading="lazy" rasmlar uchun -->`,
        image: "",
        note: ``,
        advice: `Birinchi ekran (above the fold) kontentini tez yuklang.`,
    },
    {
        id: 37,
        theme: "Accessibility",
        description: `Accessibility (a11y): semantic HTML, alt matnlar, ARIA atributlari, rang kontrasti (4.5:1), keyboard navigatsiya, focus indicator lar. WCAG standartlariga rioya qiling.`,
        example: `<img src="photo.jpg" alt="Mening portretim">`,
        image: "",
        note: `Yaxshi a11y SEO ni ham yaxshilaydi.`,
        advice: `Screen reader (NVDA yoki VoiceOver) bilan test qiling.`,
    },
    {
        id: 38,
        theme: "Keyingi qadamlar",
        description: `HTML va CSS ni o'rgangandan keyin: JavaScript (interaktivlik), Tailwind yoki Bootstrap (tez dizayn), Git va GitHub, backend asoslari (Node.js yoki PHP), loyihalarni portfolio ga qo'shish va real saytlar yaratish. Doimiy o'rganing — MDN, freeCodeCamp, YouTube va amaliyot orqali.`,
        example: ``,
        image: "",
        note: `Keyingi bosqich: JavaScript va frontend framework lar (React).`,
        advice: `Har kuni kichik loyiha qiling va GitHub ga yuklang.`,
    },
];

export interface CourseJSLesson {
    id: number;
    theme: string;
    description: string;
    example: string;
    image?: string;
    note?: string;
    advice?: string;
    duration?: string;       
}

export const JAVASCRIPT_COURSE: CourseJSLesson[] = [
    {
        id: 1,
        theme: "JavaScript nima?",
        description: `JavaScript (JS) — veb-sahifalarni interaktiv qilish uchun ishlatiladigan yuqori darajadagi, dinamik dasturlash tili. U brauzerda ishlaydi va foydalanuvchi bilan real vaqt rejimida muloqot qilish imkonini beradi. JavaScript HTML va CSS bilan birgalikda zamonaviy veb-ilovalarning asosiy qismidir. Hozirgi kunda server tomonida (Node.js) ham keng qo'llaniladi.`,
        example: `console.log("Salom, Dunyo!");`,
        note: `JavaScript dasturlash tili bo'lib, HTML sahifani "jonlantiradi".`,
        advice: `JavaScript ni o'rganishdan oldin HTML va CSS ni yaxshi bilish tavsiya etiladi.`,
        duration: "10 daqiqa"
    },
    {
        id: 2,
        theme: "JavaScript ni qayerda ishlatamiz?",
        description: `JavaScript brauzerda (frontend), serverda (Node.js), mobil ilovalarda (React Native), desktop dasturlarda va hatto IoT qurilmalarida ishlatiladi. Brauzerda DOM bilan ishlash, foydalanuvchi hodisalarini boshqarish va ma'lumotlar bilan ishlash asosiy vazifalardir.`,
        example: `// Brauzerda
  alert("Bu JavaScript ishlayapti!");
  
  // Node.js da
  console.log("Server tomonida JavaScript");`,
        note: `Bir til bilan frontend va backend ni qamrab olish mumkin.`,
        advice: `Brauzer konsolini (F12) ochib, oddiy kodlarni sinab ko'ring.`,
        duration: "15 daqiqa"
    },
    {
        id: 3,
        theme: "Variables (let, const, var)",
        description: `JavaScriptda ma'lumotlarni saqlash uchun o'zgaruvchilar ishlatiladi. ES6 dan keyin let va const tavsiya etiladi. var eski usul bo'lib, function scope ga ega. let va const block scope ga ega. const ni qiymatini o'zgartirib bo'lmaydi (lekin object/array ichidagi qiymatni o'zgartirsa bo'ladi).`,
        example: `let ism = "Ali";
  const yosh = 25;
  var eski = "eski usul"; // tavsiya etilmaydi
  
  ism = "Vali";        // mumkin
  // yosh = 30;        // xato!`,
        note: `const ni default qilib ishlating. Faqat qiymatni o'zgartirish kerak bo'lganda let dan foydalaning.`,
        advice: `var dan butunlay voz keching — hoisting va scope muammolari bor.`,
        duration: "18 daqiqa"
    },
    {
        id: 4,
        theme: "Data Types va Type Coercion",
        description: `JavaScriptda 7 ta primitive data type mavjud: string, number, boolean, undefined, null, symbol, bigint. Object — murakkab tur. JavaScript dinamik tipli til bo'lgani uchun type coercion (avtomatik tur o'zgartirish) tez-tez sodir bo'ladi.`,
        example: `let matn = "25";           // string
  let son = 25;               // number
  console.log(matn + son);    // "2525" (coercion)
  console.log(Number(matn) + son); // 50`,
        note: `typeof operatori turini tekshirish uchun ishlatiladi.`,
        advice: `=== (strict equality) dan foydalaning, == emas.`,
        duration: "20 daqiqa"
    },
    {
        id: 5,
        theme: "Operators va Expressions",
        description: `JavaScriptda turli operatorlar mavjud: 
        • Arifmetik operatorlar: +, -, *, /, % (qoldiq)
        • Taqqoslash operatorlari: ==, ===, !=, !==, >, <, >=, <=
        • Mantiqiy operatorlar: && (AND), || (OR), ! (NOT)
        Zamonaviy operatorlar: Template literals (\`\`), Nullish Coalescing (??) va Optional Chaining (?.).`,
        example: `let a = 10;
      let b = 5;
      
      console.log(a + b);                    // 15
      console.log(a === b);                  // false
      console.log(\`Yig'indisi: \${a + b}\`);   // "Yig'indisi: 15"
      
      const ism = null;
      console.log(ism ?? "Noma'lum");        // "Noma'lum"`,
        note: `=== va !== ni ishlatishni odat qiling (strict equality).`,
        advice: `Template literals va ?? operatorlarini har doim qo'llang — kodni ancha toza qiladi.`,
        duration: "20 daqiqa"
    },
    {
        id: 6,
        theme: "Control Flow (if, switch, ternary)",
        description: `Shartli bajarish: if...else, switch...case, ternary operator (? :). Bu dastur oqimini boshqarishning asosiy vositalari.`,
        example: `let yosh = 18;
  if (yosh >= 18) {
    console.log("Kirishga ruxsat");
  } else {
    console.log("Mumkin emas");
  }
  
  const natija = yosh >= 18 ? "Katta" : "Kichik";`,
        note: ``,
        advice: `Murakkab shartlarda switch yoki early return dan foydalaning.`,
        duration: "12 daqiqa"
    },
    {
        id: 7,
        theme: "Loops (for, while, for...of, for...in)",
        description: `Takrorlash uchun for, while, do...while, for...of (iterable uchun) va for...in (object kalitlari uchun) looplar mavjud. Array methodlari (forEach, map) ko'pincha loop o'rniga ishlatiladi.`,
        example: `for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  const mevalar = ["olma", "banan"];
  for (let meva of mevalar) {
    console.log(meva);
  }`,
        note: `for...of array va stringlar uchun qulay.`,
        advice: `Infinite looplardan ehtiyot bo'ling.`,
        duration: "18 daqiqa"
    },
    {
        id: 8,
        theme: "Functions (Declaration, Expression, Arrow)",
        description: `Funksiyalar kodni qayta ishlatish uchun ishlatiladi. Function declaration, function expression va arrow function (=>) turlari bor. Arrow function this ni o'zida saqlamaydi.`,
        example: `function salom(ism) {
    return \`Salom, \${ism}!\`;
  }
  
  const salomArrow = (ism) => \`Salom, \${ism}!\`;`,
        note: `Arrow function bir qatorli bo'lsa return yozish shart emas.`,
        advice: `Callback va higher-order functions ni keyinroq chuqur o'rganing.`,
        duration: "22 daqiqa"
    },
    {
        id: 9,
        theme: "Arrays va Array Methods",
        description: `Array — ro'yxat saqlash uchun. Eng muhim methodlar: push/pop, shift/unshift, map, filter, reduce, find, forEach, some/every.`,
        example: `const sonlar = [1, 2, 3, 4];
  const kvadrat = sonlar.map(n => n * n);           // [1,4,9,16]
  const juft = sonlar.filter(n => n % 2 === 0);     // [2,4]
  const yigindi = sonlar.reduce((acc, cur) => acc + cur, 0);`,
        note: `map, filter, reduce — functional programmingning asosi.`,
        advice: `Original arrayni o'zgartirmaydigan methodlarni afzal ko'ring.`,
        duration: "25 daqiqa"
    },
    {
        id: 10,
        theme: "Objects va Object Methods",
        description: `Object — kalit-qiymat juftliklaridan iborat. Property access (dot va bracket notation), Object.keys(), Object.values(), Object.entries(), destructuring.`,
        example: `const talaba = {
    ism: "Ali",
    yosh: 20,
    kurs: "2-kurs"
  };
  
  const { ism, yosh } = talaba; // destructuring`,
        note: ``,
        advice: `Computed property names va shorthand properties ni o'rganing.`,
        duration: "20 daqiqa"
    },
    // ... Davomi (to'liq 40+ ta mavzu)

    {
        id: 11,
        theme: "DOM Manipulation",
        description: `Document Object Model (DOM) — HTML strukturasini JavaScript orqali boshqarish. querySelector, getElementById, createElement, append, innerHTML va boshqalar.`,
        example: `const title = document.querySelector('h1');
  title.textContent = "Yangi sarlavha";
  
  const btn = document.createElement('button');
  btn.textContent = "Bos";
  document.body.append(btn);`,
        note: `DOM manipulyatsiyasi sahifani dinamik qiladi.`,
        advice: `Ko'p elementlar bilan ishlashda document fragment dan foydalaning (performance uchun).`,
        duration: "25 daqiqa"
    },
    {
        id: 12,
        theme: "Events va Event Handling",
        description: `addEventListener orqali foydalanuvchi hodisalarini (click, input, submit, keydown va h.k.) ushlash. Event delegation — samarali usul.`,
        example: `button.addEventListener('click', () => {
    alert("Tugma bosildi!");
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") console.log("Enter bosildi");
  });`,
        note: ``,
        advice: `Event bubbling va capturing ni tushuning.`,
        duration: "22 daqiqa"
    },
    {
        id: 13,
        theme: "ES6+ Modern Features (Destructuring, Spread, Rest)",
        description: `Destructuring, spread (...), rest (...), default parameters, template literals va boshqa ES6+ xususiyatlari kodni toza va qisqa qiladi.`,
        example: `const [bir, ikki, ...qolgan] = [1, 2, 3, 4, 5];
  const yangi = { ...eskiObject, yangiKalit: 100 };`,
        note: ``,
        advice: `Bu xususiyatlarni har kuni ishlatishni odat qiling.`,
        duration: "20 daqiqa"
    },
    {
        id: 14,
        theme: "Closures",
        description: `Closure — ichki funksiya tashqi funksiyaning o'zgaruvchilariga kirish huquqiga ega bo'lishi. Bu private variable lar va data encapsulation uchun ishlatiladi.`,
        example: `function counter() {
    let count = 0;
    return () => ++count;
  }
  const myCounter = counter();
  console.log(myCounter()); // 1`,
        note: `JavaScriptning eng muhim va qiyin tushunchalaridan biri.`,
        advice: `Module pattern va private method lar uchun closures dan foydalaning.`,
        duration: "18 daqiqa"
    },
    {
        id: 15,
        theme: "Asynchronous JavaScript (Callbacks)",
        description: `JavaScript single-threaded til. Asinxron operatsiyalar (setTimeout, API so'rovlar) callback orqali boshqariladi. Callback hell muammosi mavjud.`,
        example: `setTimeout(() => {
    console.log("3 soniya o'tdi");
  }, 3000);`,
        note: `Callback hell dan qochish uchun Promise va async/await ishlatiladi.`,
        advice: ``,
        duration: "15 daqiqa"
    },
    {
        id: 16,
        theme: "Promises",
        description: `Promise — kelajakdagi qiymatni ifodalovchi object. .then(), .catch(), .finally(). Pending, fulfilled yoki rejected holatlari bor.`,
        example: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Muvaffaqiyat"), 2000);
  });
  
  promise.then(result => console.log(result));`,
        note: ``,
        advice: `Promise.all(), Promise.race() ni ham o'rganing.`,
        duration: "25 daqiqa"
    },
    {
        id: 17,
        theme: "Async/Await",
        description: `Async/await — Promise larni sinxron uslubda yozish imkonini beradi. Kod o'qilishi osonlashadi. Har doim try...catch bilan birga ishlatiladi.`,
        example: `async function fetchData() {
    try {
      const res = await fetch('https://api.example.com');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }`,
        note: `Async funksiya har doim Promise qaytaradi.`,
        advice: `Top-level await (ES2022) ni zamonaviy loyihalarda sinab ko'ring.`,
        duration: "22 daqiqa"
    },
    {
        id: 18,
        theme: "Fetch API va AJAX",
        description: `Fetch — zamonaviy API so'rovlar yuborish usuli. JSON bilan ishlash, POST so'rovlar, headers va error handling.`,
        example: `fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));`,
        note: ``,
        advice: `Axios yoki TanStack Query kabi kutubxonalarni keyinroq ko'rib chiqing.`,
        duration: "20 daqiqa"
    },
    {
        id: 19,
        theme: "Error Handling (try...catch)",
        description: `Xatolarni ushlash va boshqarish. Custom error lar yaratish, finally bloki.`,
        example: `try {
    const x = JSON.parse("bu yaroqsiz JSON");
  } catch (e) {
    console.error("Xato:", e.message);
  } finally {
    console.log("Har doim bajariladi");
  }`,
        note: ``,
        advice: `Production da foydalanuvchiga xatolik haqida aniq ma'lumot bermang.`,
        duration: "15 daqiqa"
    },
    {
        id: 20,
        theme: "Modules (import/export)",
        description: `Kodni modullarga ajratish. ES Modules (import/export), default va named export.`,
        example: `// math.js
  export const add = (a, b) => a + b;
  export default function multiply(a, b) { return a * b; }
  
  // main.js
  import multiply, { add } from './math.js';`,
        note: `Zamonaviy loyihalarda modullar majburiy.`,
        advice: `Vite yoki webpack bilan ishlashni o'rganing.`,
        duration: "18 daqiqa"
    },
    // Qo'shimcha mavzular (to'liq kurs uchun 40+ ta)
    {
        id: 21,
        theme: "Object Oriented Programming in JS",
        description: `Class, constructor, inheritance (extends), super, private fields (#), getters/setters.`,
        example: `class Talaba {
    constructor(ism) { this.ism = ism; }
    salomBer() { console.log(\`Salom, men \${this.ism}\`); }
  }`,
        note: `JavaScript prototype-based OOP ga asoslangan, lekin class sintaksisi qulay.`,
        advice: ``,
        duration: "25 daqiqa"
    },
    {
        id: 22,
        theme: "This Keyword va Binding",
        description: `this ning qiymati kontekstga bog'liq. call, apply, bind methodlari.`,
        example: ``,
        note: `Arrow function this ni lexical scope dan oladi.`,
        advice: ``,
        duration: "20 daqiqa"
    },
    {
        id: 23,
        theme: "Higher Order Functions va Functional Programming",
        description: `map, filter, reduce, forEach kabi funksiyalar. Pure functions, immutability.`,
        example: ``,
        note: ``,
        advice: `Functional uslub kodni toza va test qilish oson qiladi.`,
        duration: "22 daqiqa"
    },
    {
        id: 24,
        theme: "LocalStorage, SessionStorage va Cookies",
        description: `Brauzerda ma'lumot saqlash usullari.`,
        example: `localStorage.setItem('user', JSON.stringify({name: "Ali"}));`,
        note: ``,
        advice: `Katta hajmdagi ma'lumot uchun IndexedDB ni ko'rib chiqing.`,
        duration: "15 daqiqa"
    },
    {
        id: 25,
        theme: "Amaliy Loyihalar",
        description: `Todo List, Weather App, Quiz App, Form Validation, Drag & Drop va boshqa loyihalar orqali bilimlarni mustahkamlash.`,
        example: `// Todo List loyihasi misoli`,
        note: `Har bir mavzudan keyin kichik loyiha qiling.`,
        advice: `Loyihalarni GitHub ga yuklang — portfolio uchun muhim.`,
        duration: "30 daqiqa"
    },
    {
        id: 26,
        theme: "Yaxshi Amaliyotlar va Performance",
        description: `Kod tozaligi, debugging (console, debugger), performance optimizatsiyasi, memory leak dan saqlanish.`,
        example: ``,
        note: `Lighthouse va DevTools dan foydalaning.`,
        advice: `Doimiy ravishda LeetCode yoki Codewars da mashq qiling.`,
        duration: "20 daqiqa"
    },
    // ... Kerak bo'lsa yana 10-15 ta mavzu qo'shish mumkin (Event Loop, Prototypes, Generators, Symbols, TypeScript intro va h.k.)
];