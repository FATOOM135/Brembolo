function toggleCartPopup() {
    const popup = document.getElementById('cartPopup');
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";  
    } else {
        popup.style.display = "none"; 
    }
}


function changeLanguage(language) {
    // تغيير النصوص بناءً على اللغة المختارة
    if (language === 'en') {
        // تغيير النصوص الإنجليزية
        document.getElementById('text').innerHTML = "Hello, welcome to the site!";
    } else if (language === 'ar') {
        // تغيير النصوص العربية
        document.getElementById('text').innerHTML = "مرحباً، مرحباً بك في الموقع!";
    }

    // لتغيير النص في العنوان المنسدل بعد التحديد
    document.getElementById('languageDropdown').innerText = language === 'en' ? 'Language' : 'اللغة';
}



function changeLanguage(language) {
    // حفظ اللغة في localStorage
    localStorage.setItem('language', language);

    // تحديث النصوص بناءً على اللغة المختارة
    if (language === 'en') {
        document.getElementById('homeLink').innerText = "Home";
        document.getElementById('productLink').innerText = "Product";
        document.getElementById('contactLink').innerText = "Contact Us";
        document.getElementById('text').innerText = "Hello, welcome to the site!";
        document.getElementById('languageDropdown').innerText = "Language";
    } else if (language === 'ar') {
        document.getElementById('homeLink').innerText = "الرئيسية";
        document.getElementById('productLink').innerText = "المنتج";
        document.getElementById('contactLink').innerText = "اتصل بنا";
        document.getElementById('text').innerText = "مرحباً، مرحباً بك في الموقع!";
        document.getElementById('languageDropdown').innerText = "اللغة";
    }
}

// عند تحميل الصفحة، استرجاع اللغة المخزنة في localStorage
window.onload = function() {
    let savedLanguage = localStorage.getItem('language') || 'en';  // استرجاع اللغة المخزنة أو تعيين الإنجليزية كافتراضي
    changeLanguage(savedLanguage);  // تطبيق اللغة المخزنة
}