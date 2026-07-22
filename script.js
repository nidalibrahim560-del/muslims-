document.addEventListener("DOMContentLoaded", () => {
    // تحديث سنة الحقوق في التذييل تلقائياً
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});

// نظام تغيير وتخزين الألوان (الثيمات)
function changeTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('site_theme', themeName);
}

// تحميل الثيم واللغة المحفوظة عند فتح أي صفحة
window.onload = function() {
    const savedTheme = localStorage.getItem('site_theme') || 'emerald';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeSelect = document.getElementById('themeSwitch');
    if(themeSelect) themeSelect.value = savedTheme;

    const savedLang = localStorage.getItem('site_lang') || 'ar';
    changeLanguage(savedLang);
    const langSelect = document.getElementById('langSwitch');
    if(langSelect) langSelect.value = savedLang;
};

// قاموس الترجمة الشامل
const translations = {
    ar: {
        site_title: "🌿 واحة الأذكار والأدعية الرقمية 🌿",
        site_subtitle: "قال تعالى: (ألا بذكر الله تطمئن القلوب)",
        login: "تسجيل الدخول",
        nav_home: "الرئيسية",
        nav_morning: "أذكار الصباح",
        nav_evening: "أذكار المساء",
        nav_sleep: "أذكار النوم",
        nav_prayer: "أذكار الصلاة",
        nav_dua: "أدعية متنوعة",
        nav_order: "تنسيق وحجز الطلب",
        nav_contact: "تواصل معنا",
        welcome_h2: "مرحباً بكم في الصرح الرقمي المبارك",
        welcome_p: "منصة متكاملة لتحصين النفس بالذكر الحكيم والأدعية النبوية الشريفة مع واجهات عصرية.",
        card_m_title: "أذكار الصباح",
        card_m_desc: "نور يومك بذكر الله وحصنه الحصين منذ الإشراقة.",
        card_e_title: "أذكار المساء",
        card_e_desc: "اختم يومك بالاستغفار والسكينة واطلب الحفظ.",
        card_s_title: "أذكار النوم",
        card_s_desc: "نم قرير العين تحت حماية آية الكرسي والمعوذات.",
        card_p_title: "أذكار الصلاة",
        card_p_desc: "الصلوات والواردات النبوية الثابتة بعد التسليم.",
        card_d_title: "أدعية متنوعة",
        card_d_desc: "باقة واسعة من أدعية الرزق، الشفاء، والتوفيق.",
        card_o_title: "نظام الطلبات المخصص",
        card_o_desc: "أدخل تفاصيل خدمتك أو مشروعك الخاص بكل دقة.",
        enter: "دخول القسم",
        footer_rights: "جميع الحقوق محفوظة للموقع الشامل ©"
    },
    en: {
        site_title: "🌿 Digital Azkar & Dua Oasis 🌿",
        site_subtitle: "Verily, in the remembrance of Allah do hearts find rest",
        login: "Login",
        nav_home: "Home",
        nav_morning: "Morning Azkar",
        nav_evening: "Evening Azkar",
        nav_sleep: "Sleep Azkar",
        nav_prayer: "Prayer Azkar",
        nav_dua: "Various Duas",
        nav_order: "Order & Service Form",
        nav_contact: "Contact Us",
        welcome_h2: "Welcome to the Blessed Digital Portal",
        welcome_p: "An integrated platform to fortify yourself with wise remembrance and prophetic supplications.",
        card_m_title: "Morning Azkar",
        card_m_desc: "Illuminate your day with the remembrance of Allah.",
        card_e_title: "Evening Azkar",
        card_e_desc: "End your day with seeking forgiveness and peace.",
        card_s_title: "Sleep Azkar",
        card_s_desc: "Sleep soundly under the protection of Ayat Al-Kursi.",
        card_p_title: "Prayer Azkar",
        card_p_desc: "The fixed prophetic remembrances after prayers.",
        card_d_title: "Various Duas",
        card_d_desc: "A wide collection of supplications for sustenance & healing.",
        card_o_title: "Custom Order System",
        card_o_desc: "Enter your service or custom project details precisely.",
        enter: "Enter Section",
        footer_rights: "All rights reserved ©"
    }
};

function changeLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('site_lang', lang);
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}