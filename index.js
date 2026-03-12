document.addEventListener("DOMContentLoaded", () => {
  const STORAGE = {
    theme: "noor_theme",
    lang: "noor_lang"
  };

  const translations = {
    ar: {
      currentLang: "العربية",
      heroTitle: "منصة أدوات ذكية ومفيدة",
      heroText: "قراءة الملفات وتحويل الصيغ بواجهة أنيقة وسريعة تساعد الزائر على فهم الملفات وتحويلها بسهولة.",
      filesTitle: "قراءة الملفات",
      filesText: "عرض الملف، معرفة نوعه، تحليل محتواه، واقتراح التطبيقات المناسبة لفتحه.",
      convertTitle: "تحويل الصيغ",
      convertText: "تحويل الصور بين صيغ متعددة مثل JPG وPNG وWEBP وPDF بطريقة بسيطة.",
      back: "العودة للرئيسية",

      filesSubtitle: "ارفع الملف لعرضه وتحليل نوعه ومحتواه بشكل أوضح.",
      uploadFileTitle: "رفع الملف",
      uploadFileText: "يمكنك رفع صورة أو نص أو ملف كود، وسيظهر عرض وتحليل أولي للمحتوى.",
      chooseFile: "اختيار ملف",
      clearResult: "مسح النتيجة",
      emptyPreview: "ماكو معاينة بعد.",
      fileNameLabel: "اسم الملف",
      fileTypeLabel: "نوع الملف",
      fileExtLabel: "الامتداد",
      fileSizeLabel: "الحجم",
      fileTopicLabel: "الموضوع أو المحتوى",
      fileAppsLabel: "التطبيقات المناسبة",

      convertSubtitle: "تحويل الصور بين صيغ متعددة مثل JPG وPNG وWEBP وPDF.",
      convertUploadTitle: "رفع ملف للتحويل",
      convertUploadText: "اختر صورة ثم حدد الصيغة المطلوبة، وبعد التحويل يظهر زر تحميل داخل نفس الواجهة.",
      fromFormat: "من الصيغة",
      toFormat: "إلى الصيغة",
      startConvert: "ابدأ التحويل",
      noConvertedPreview: "ماكو معاينة بعد.",
      selectedFile: "الملف المختار",
      currentFormat: "الصيغة الحالية",
      targetFormatLabel: "الصيغة المطلوبة",
      convertedStatus: "الحالة",
      downloadReadyTitle: "الملف المحول",
      downloadConverted: "تحميل الملف المحول",

      privacyTitle: "سياسة الخصوصية",
      privacyText: "الملفات والصور تُعالج محلياً داخل المتصفح في هذه النسخة، ولا يتم رفعها لخادم خارجي.",
      aboutTitle: "من نحن",
      aboutText: "noor.com منصة أدوات عملية بواجهة ناعمة وسريعة تساعد المستخدم في قراءة الملفات وتحويل الصيغ بسهولة.",
      contactTitle: "اتصل بنا",
      copyEmail: "نسخ الإيميل",
      openEmail: "فتح البريد",

      emailCopied: "تم نسخ الإيميل بنجاح.",
      fileUploaded: "تم رفع الملف وتحليله في الأسفل.",
      convertReady: "تم اختيار الملف. اختر الصيغة المطلوبة ثم اضغط ابدأ التحويل.",
      convertDone: "تم تجهيز الملف المحول للتحميل.",
      convertNeedFile: "اختر ملفاً أولاً.",
      convertNeedType: "اختر الصيغة المطلوبة أولاً."
    },

    en: {
      currentLang: "English",
      heroTitle: "Smart and Useful Tools Platform",
      heroText: "File reading and format conversion with a smooth, elegant interface that helps visitors understand and convert files easily.",
      filesTitle: "File Reader",
      filesText: "Preview the file, know its type, analyze its content, and suggest apps to open it.",
      convertTitle: "Format Conversion",
      convertText: "Convert images between multiple formats like JPG, PNG, WEBP, and PDF in a simple way.",
      back: "Back to Home",

      filesSubtitle: "Upload a file to preview it and analyze its type and content more clearly.",
      uploadFileTitle: "Upload File",
      uploadFileText: "You can upload an image, text, or code file and get an initial preview and analysis.",
      chooseFile: "Choose File",
      clearResult: "Clear Result",
      emptyPreview: "No preview yet.",
      fileNameLabel: "File Name",
      fileTypeLabel: "File Type",
      fileExtLabel: "Extension",
      fileSizeLabel: "Size",
      fileTopicLabel: "Topic or Content",
      fileAppsLabel: "Suitable Apps",

      convertSubtitle: "Convert images between multiple formats like JPG, PNG, WEBP, and PDF.",
      convertUploadTitle: "Upload File to Convert",
      convertUploadText: "Choose an image, select the desired format, then a download button appears inside the same interface.",
      fromFormat: "From Format",
      toFormat: "To Format",
      startConvert: "Start Conversion",
      noConvertedPreview: "No preview yet.",
      selectedFile: "Selected File",
      currentFormat: "Current Format",
      targetFormatLabel: "Target Format",
      convertedStatus: "Status",
      downloadReadyTitle: "Converted File",
      downloadConverted: "Download Converted File",

      privacyTitle: "Privacy Policy",
      privacyText: "Files and images are processed locally in the browser in this version and are not uploaded to an external server.",
      aboutTitle: "About Us",
      aboutText: "noor.com is a practical tools platform with a smooth and fast interface for file reading and format conversion.",
      contactTitle: "Contact Us",
      copyEmail: "Copy Email",
      openEmail: "Open Email",

      emailCopied: "Email copied successfully.",
      fileUploaded: "File uploaded and analyzed below.",
      convertReady: "File selected. Choose the target format then press Start Conversion.",
      convertDone: "Converted file is ready to download.",
      convertNeedFile: "Choose a file first.",
      convertNeedType: "Choose the target format first."
    },

    es: {
      currentLang: "Español",
      heroTitle: "Plataforma de herramientas inteligentes y útiles",
      heroText: "Lectura de archivos y conversión de formatos con una interfaz elegante y fluida.",
      filesTitle: "Lector de archivos",
      filesText: "Muestra el archivo, conoce su tipo, analiza su contenido y sugiere aplicaciones para abrirlo.",
      convertTitle: "Conversión de formatos",
      convertText: "Convierte imágenes entre formatos como JPG, PNG, WEBP y PDF de forma sencilla.",
      back: "Volver al inicio",

      filesSubtitle: "Sube un archivo para verlo y analizar su tipo y contenido.",
      uploadFileTitle: "Subir archivo",
      uploadFileText: "Puedes subir una imagen, texto o archivo de código.",
      chooseFile: "Elegir archivo",
      clearResult: "Borrar resultado",
      emptyPreview: "Aún no hay vista previa.",
      fileNameLabel: "Nombre del archivo",
      fileTypeLabel: "Tipo de archivo",
      fileExtLabel: "Extensión",
      fileSizeLabel: "Tamaño",
      fileTopicLabel: "Tema o contenido",
      fileAppsLabel: "Aplicaciones adecuadas",

      convertSubtitle: "Convierte imágenes entre varios formatos como JPG, PNG, WEBP y PDF.",
      convertUploadTitle: "Subir archivo para convertir",
      convertUploadText: "Elige una imagen, selecciona el formato deseado y luego descarga el archivo convertido.",
      fromFormat: "Desde formato",
      toFormat: "A formato",
      startConvert: "Iniciar conversión",
      noConvertedPreview: "Aún no hay vista previa.",
      selectedFile: "Archivo seleccionado",
      currentFormat: "Formato actual",
      targetFormatLabel: "Formato deseado",
      convertedStatus: "Estado",
      downloadReadyTitle: "Archivo convertido",
      downloadConverted: "Descargar archivo convertido",

      privacyTitle: "Política de privacidad",
      privacyText: "Los archivos e imágenes se procesan localmente en el navegador y no se suben a un servidor externo.",
      aboutTitle: "Quiénes somos",
      aboutText: "noor.com es una plataforma práctica con una interfaz rápida y fluida para leer archivos y convertir formatos.",
      contactTitle: "Contáctanos",
      copyEmail: "Copiar correo",
      openEmail: "Abrir correo",

      emailCopied: "Correo copiado correctamente.",
      fileUploaded: "Archivo subido y analizado abajo.",
      convertReady: "Archivo seleccionado. Elige el formato deseado y pulsa iniciar conversión.",
      convertDone: "El archivo convertido está listo para descargar.",
      convertNeedFile: "Elige primero un archivo.",
      convertNeedType: "Elige primero el formato de salida."
    },

    fr: {
      currentLang: "Français",
      heroTitle: "Plateforme d’outils intelligents et utiles",
      heroText: "Lecture de fichiers et conversion de formats avec une interface élégante et fluide.",
      filesTitle: "Lecteur de fichiers",
      filesText: "Affichez le fichier, connaissez son type, analysez son contenu et proposez des applications pour l’ouvrir.",
      convertTitle: "Conversion de formats",
      convertText: "Convertissez les images entre JPG, PNG, WEBP et PDF simplement.",
      back: "Retour à l’accueil",

      filesSubtitle: "Téléversez un fichier pour afficher et analyser son type et son contenu.",
      uploadFileTitle: "Téléverser un fichier",
      uploadFileText: "Vous pouvez téléverser une image, un texte ou un fichier de code.",
      chooseFile: "Choisir un fichier",
      clearResult: "Effacer le résultat",
      emptyPreview: "Aucun aperçu pour le moment.",
      fileNameLabel: "Nom du fichier",
      fileTypeLabel: "Type de fichier",
      fileExtLabel: "Extension",
      fileSizeLabel: "Taille",
      fileTopicLabel: "Sujet ou contenu",
      fileAppsLabel: "Applications adaptées",

      convertSubtitle: "Convertissez les images entre plusieurs formats comme JPG, PNG, WEBP et PDF.",
      convertUploadTitle: "Téléverser un fichier à convertir",
      convertUploadText: "Choisissez une image, sélectionnez le format voulu, puis téléchargez le fichier converti.",
      fromFormat: "Depuis",
      toFormat: "Vers",
      startConvert: "Démarrer la conversion",
      noConvertedPreview: "Aucun aperçu pour le moment.",
      selectedFile: "Fichier sélectionné",
      currentFormat: "Format actuel",
      targetFormatLabel: "Format cible",
      convertedStatus: "État",
      downloadReadyTitle: "Fichier converti",
      downloadConverted: "Télécharger le fichier converti",

      privacyTitle: "Politique de confidentialité",
      privacyText: "Les fichiers et images sont traités localement dans le navigateur et ne sont pas envoyés à un serveur externe.",
      aboutTitle: "À propos",
      aboutText: "noor.com est une plateforme pratique avec une interface fluide pour lire des fichiers et convertir des formats.",
      contactTitle: "Contact",
      copyEmail: "Copier l’e-mail",
      openEmail: "Ouvrir l’e-mail",

      emailCopied: "E-mail copié avec succès.",
      fileUploaded: "Fichier téléversé et analysé ci-dessous.",
      convertReady: "Fichier sélectionné. Choisissez le format cible puis lancez la conversion.",
      convertDone: "Le fichier converti est prêt à être téléchargé.",
      convertNeedFile: "Choisissez d’abord un fichier.",
      convertNeedType: "Choisissez d’abord le format cible."
    },

    de: {
      currentLang: "Deutsch",
      heroTitle: "Plattform für intelligente und nützliche Werkzeuge",
      heroText: "Dateilesen und Formatumwandlung mit einer eleganten und flüssigen Oberfläche.",
      filesTitle: "Dateileser",
      filesText: "Datei anzeigen, Typ erkennen, Inhalt analysieren und passende Apps zum Öffnen vorschlagen.",
      convertTitle: "Formatumwandlung",
      convertText: "Bilder einfach zwischen JPG, PNG, WEBP und PDF umwandeln.",
      back: "Zurück zur Startseite",

      filesSubtitle: "Lade eine Datei hoch, um Typ und Inhalt besser anzuzeigen und zu analysieren.",
      uploadFileTitle: "Datei hochladen",
      uploadFileText: "Du kannst ein Bild, einen Text oder eine Codedatei hochladen.",
      chooseFile: "Datei wählen",
      clearResult: "Ergebnis löschen",
      emptyPreview: "Noch keine Vorschau.",
      fileNameLabel: "Dateiname",
      fileTypeLabel: "Dateityp",
      fileExtLabel: "Erweiterung",
      fileSizeLabel: "Größe",
      fileTopicLabel: "Thema oder Inhalt",
      fileAppsLabel: "Passende Apps",

      convertSubtitle: "Wandle Bilder zwischen Formaten wie JPG, PNG, WEBP und PDF um.",
      convertUploadTitle: "Datei zum Umwandeln hochladen",
      convertUploadText: "Wähle ein Bild, wähle das Zielformat und lade danach die konvertierte Datei herunter.",
      fromFormat: "Von Format",
      toFormat: "Zu Format",
      startConvert: "Umwandlung starten",
      noConvertedPreview: "Noch keine Vorschau.",
      selectedFile: "Gewählte Datei",
      currentFormat: "Aktuelles Format",
      targetFormatLabel: "Zielformat",
      convertedStatus: "Status",
      downloadReadyTitle: "Konvertierte Datei",
      downloadConverted: "Konvertierte Datei herunterladen",

      privacyTitle: "Datenschutz",
      privacyText: "Dateien und Bilder werden lokal im Browser verarbeitet und nicht an einen externen Server gesendet.",
      aboutTitle: "Über uns",
      aboutText: "noor.com ist eine praktische Plattform mit einer schnellen und eleganten Oberfläche für Dateilesen und Formatumwandlung.",
      contactTitle: "Kontakt",
      copyEmail: "E-Mail kopieren",
      openEmail: "E-Mail öffnen",

      emailCopied: "E-Mail erfolgreich kopiert.",
      fileUploaded: "Datei hochgeladen und unten analysiert.",
      convertReady: "Datei ausgewählt. Wähle das Zielformat und starte dann die Umwandlung.",
      convertDone: "Die konvertierte Datei ist zum Download bereit.",
      convertNeedFile: "Wähle zuerst eine Datei.",
      convertNeedType: "Wähle zuerst das Zielformat."
    },

    tr: {
      currentLang: "Türkçe",
      heroTitle: "Akıllı ve kullanışlı araç platformu",
      heroText: "Dosya okuma ve format dönüştürme için şık ve akıcı bir arayüz.",
      filesTitle: "Dosya Okuyucu",
      filesText: "Dosyayı görüntüle, türünü öğren, içeriğini analiz et ve açmak için uygun uygulamaları öner.",
      convertTitle: "Format Dönüştürme",
      convertText: "Görüntüleri JPG, PNG, WEBP ve PDF arasında kolayca dönüştür.",
      back: "Ana sayfaya dön",

      filesSubtitle: "Dosyayı yükleyerek türünü ve içeriğini daha net analiz et.",
      uploadFileTitle: "Dosya yükle",
      uploadFileText: "Bir görsel, metin veya kod dosyası yükleyebilirsin.",
      chooseFile: "Dosya seç",
      clearResult: "Sonucu temizle",
      emptyPreview: "Henüz önizleme yok.",
      fileNameLabel: "Dosya adı",
      fileTypeLabel: "Dosya türü",
      fileExtLabel: "Uzantı",
      fileSizeLabel: "Boyut",
      fileTopicLabel: "Konu veya içerik",
      fileAppsLabel: "Uygun uygulamalar",

      convertSubtitle: "Görselleri JPG, PNG, WEBP ve PDF gibi formatlar arasında dönüştür.",
      convertUploadTitle: "Dönüştürmek için dosya yükle",
      convertUploadText: "Bir görsel seç, hedef formatı belirle ve dönüştürülen dosyayı indir.",
      fromFormat: "Kaynak format",
      toFormat: "Hedef format",
      startConvert: "Dönüştürmeyi başlat",
      noConvertedPreview: "Henüz önizleme yok.",
      selectedFile: "Seçilen dosya",
      currentFormat: "Mevcut format",
      targetFormatLabel: "Hedef format",
      convertedStatus: "Durum",
      downloadReadyTitle: "Dönüştürülen dosya",
      downloadConverted: "Dönüştürülen dosyayı indir",

      privacyTitle: "Gizlilik Politikası",
      privacyText: "Dosyalar ve görseller bu sürümde tarayıcı içinde yerel olarak işlenir ve harici sunucuya yüklenmez.",
      aboutTitle: "Hakkımızda",
      aboutText: "noor.com, dosya okuma ve format dönüştürme için hızlı ve akıcı bir arayüze sahip pratik bir platformdur.",
      contactTitle: "İletişim",
      copyEmail: "E-postayı kopyala",
      openEmail: "E-postayı aç",

      emailCopied: "E-posta başarıyla kopyalandı.",
      fileUploaded: "Dosya yüklendi ve aşağıda analiz edildi.",
      convertReady: "Dosya seçildi. Hedef formatı seçip dönüştürmeyi başlat.",
      convertDone: "Dönüştürülen dosya indirilmeye hazır.",
      convertNeedFile: "Önce bir dosya seç.",
      convertNeedType: "Önce hedef formatı seç."
    }
  };

  const body = document.body;
  const langBox = document.getElementById("langBox");
  const langBtn = document.getElementById("langBtn");
  const currentLang = document.getElementById("currentLang");
  const langItems = document.querySelectorAll(".lang-item");
  const themeToggle = document.getElementById("themeToggle");
  const goHomeBtn = document.getElementById("goHomeBtn");

  const views = document.querySelectorAll(".view");
  const openViewButtons = document.querySelectorAll("[data-open-view]");
  const backHomeButtons = document.querySelectorAll("[data-back-home]");

  const fileInput = document.getElementById("fileInput");
  const fileChooseBtn = document.getElementById("fileChooseBtn");
  const fileClearBtn = document.getElementById("fileClearBtn");
  const fileStatusBox = document.getElementById("fileStatusBox");
  const fileResult = document.getElementById("fileResult");
  const filePreviewBox = document.getElementById("filePreviewBox");
  const fileNameValue = document.getElementById("fileNameValue");
  const fileTypeValue = document.getElementById("fileTypeValue");
  const fileExtValue = document.getElementById("fileExtValue");
  const fileSizeValue = document.getElementById("fileSizeValue");
  const fileTopicValue = document.getElementById("fileTopicValue");
  const fileAppsList = document.getElementById("fileAppsList");

  const convertInput = document.getElementById("convertInput");
  const convertChooseBtn = document.getElementById("convertChooseBtn");
  const convertTypeCustom = document.getElementById("convertTypeCustom");
  const convertTypeBtn = document.getElementById("convertTypeBtn");
  const convertTypeMenu = document.getElementById("convertTypeMenu");
  const convertTypeText = document.getElementById("convertTypeText");
  const convertToSelect = document.getElementById("convertToSelect");
  const convertRunBtn = document.getElementById("convertRunBtn");
  const convertStatusBox = document.getElementById("convertStatusBox");
  const convertResult = document.getElementById("convertResult");
  const convertPreviewBox = document.getElementById("convertPreviewBox");
  const convertFileName = document.getElementById("convertFileName");
  const convertCurrentFormat = document.getElementById("convertCurrentFormat");
  const convertTargetFormat = document.getElementById("convertTargetFormat");
  const convertDoneText = document.getElementById("convertDoneText");
  const convertedDownloadBox = document.getElementById("convertedDownloadBox");
  const convertedDownloadLink = document.getElementById("convertedDownloadLink");

  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const emailStatusBox = document.getElementById("emailStatusBox");

  const footerOpenButtons = document.querySelectorAll("[data-footer-open]");
  const footerCloseButtons = document.querySelectorAll("[data-footer-close]");
  const footerPanels = document.querySelectorAll(".footer-panel-box");

  let currentConvertFile = null;
  let currentDownloadUrl = null;

  function getLang() {
    return localStorage.getItem(STORAGE.lang) || "ar";
  }

  function getDict(lang = getLang()) {
    return translations[lang] || translations.ar;
  }

  function applyTheme() {
    const saved = localStorage.getItem(STORAGE.theme) || "dark";
    body.classList.toggle("light", saved === "light");
  }

  function setLangActive(lang) {
    langItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.lang === lang);
    });
  }

  function applyTranslations(lang) {
    const dict = getDict(lang);
    localStorage.setItem(STORAGE.lang, lang);
    document.documentElement.lang = lang === "ar" ? "ar" : lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    currentLang.textContent = dict.currentLang;
    setLangActive(lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    if (!convertToSelect.value) {
      convertTypeText.textContent = dict.toFormat;
    }
  }

  function showView(viewId) {
    views.forEach((view) => view.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setStatus(box, text, type = "info") {
    if (!box) return;
    box.textContent = text;
    box.className = `status-box show ${type}`;
  }

  function clearStatus(box) {
    if (!box) return;
    box.textContent = "";
    box.className = "status-box";
  }

  function formatBytes(bytes) {
    if (!bytes) return "0 B";
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const num = bytes / Math.pow(1024, i);
    return num.toFixed(num >= 10 ? 0 : 2) + " " + sizes[i];
  }

  function getExtension(filename) {
    const parts = filename.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "";
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function fileTypeFromExt(ext) {
    const map = {
      jpg: "Image",
      jpeg: "Image",
      png: "Image",
      webp: "Image",
      gif: "Image",
      bmp: "Image",
      txt: "Text",
      md: "Text",
      html: "Code",
      css: "Code",
      js: "Code",
      json: "Code",
      xml: "Code",
      py: "Code",
      java: "Code",
      cpp: "Code",
      c: "Code",
      pdf: "PDF",
      doc: "Document",
      docx: "Document",
      xls: "Spreadsheet",
      xlsx: "Spreadsheet",
      ppt: "Presentation",
      pptx: "Presentation",
      mp4: "Video",
      mp3: "Audio"
    };
    return map[ext] || "Unknown";
  }

  function appsByExt(ext) {
    const map = {
      jpg: ["Google Photos", "Gallery", "Photoshop"],
      jpeg: ["Google Photos", "Gallery", "Photoshop"],
      png: ["Google Photos", "Gallery", "Photoshop"],
      webp: ["Google Photos", "Gallery", "Photo Editor"],
      gif: ["Gallery", "Google Photos", "Image Viewer"],
      bmp: ["Gallery", "Image Viewer", "Photoshop"],
      txt: ["QuickEdit", "Google Docs", "Word"],
      md: ["QuickEdit", "Notepad", "Code Editor"],
      html: ["Acode", "VS Code", "Code Editor"],
      css: ["Acode", "VS Code", "Code Editor"],
      js: ["Acode", "VS Code", "Code Editor"],
      json: ["Acode", "VS Code", "Code Editor"],
      py: ["Pydroid 3", "Acode", "VS Code"],
      pdf: ["Adobe Acrobat", "Xodo", "WPS Office"],
      docx: ["Word", "Google Docs", "WPS Office"],
      doc: ["Word", "Google Docs", "WPS Office"],
      xlsx: ["Excel", "Google Sheets", "WPS Office"],
      xls: ["Excel", "Google Sheets", "WPS Office"],
      pptx: ["PowerPoint", "WPS Office", "Google Slides"],
      ppt: ["PowerPoint", "WPS Office", "Google Slides"],
      mp4: ["VLC", "MX Player", "Gallery"],
      mp3: ["VLC", "YouTube Music", "Music Player"]
    };
    return map[ext] || ["Files", "File Manager"];
  }

  function guessTextTopic(text) {
    const sample = text.toLowerCase();

    if (sample.includes("html") || sample.includes("<div") || sample.includes("css") || sample.includes("function")) {
      return getLang() === "ar"
        ? "يبدو أنه نص برمجي أو واجهة أو كود تقني."
        : "It looks like code, interface markup, or technical text.";
    }

    if (sample.includes("الله") || sample.includes("القرآن") || sample.includes("سورة") || sample.includes("الصلاة")) {
      return getLang() === "ar"
        ? "يبدو أن النص يتحدث عن موضوع ديني أو إسلامي."
        : "It appears to be about a religious or Islamic topic.";
    }

    if (sample.includes("design") || sample.includes("logo") || sample.includes("ui") || sample.includes("ux")) {
      return getLang() === "ar"
        ? "يبدو أن النص يتحدث عن التصميم أو واجهات المستخدم."
        : "It seems to discuss design or user interfaces.";
    }

    return getLang() === "ar"
      ? "تم اكتشاف نص عادي، ويظهر أنه محتوى كتابي أو معلومات عامة."
      : "Plain text detected. It appears to contain general written content or information.";
  }

  function resetFileResult() {
    filePreviewBox.innerHTML = `<p class="empty-preview">${getDict().emptyPreview}</p>`;
    fileNameValue.textContent = "-";
    fileTypeValue.textContent = "-";
    fileExtValue.textContent = "-";
    fileSizeValue.textContent = "-";
    fileTopicValue.textContent = "-";
    fileAppsList.innerHTML = "";
    fileResult.classList.remove("show");
    clearStatus(fileStatusBox);
    if (fileInput) fileInput.value = "";
  }

  function renderImagePreview(file) {
    const url = URL.createObjectURL(file);
    filePreviewBox.innerHTML = `<img src="${url}" alt="preview">`;
    fileTopicValue.textContent =
      getLang() === "ar"
        ? "تم عرض صورة مرفوعة من الزائر. يمكن معرفة نوعها وحجمها، أما فهم موضوع الصورة بدقة فيحتاج تحليل صور متقدم."
        : "The uploaded image is displayed. Its type and size can be identified, but deeper image understanding needs advanced analysis.";
  }

  function renderTextPreview(file, ext) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || "");
      const shortText = text.slice(0, 1800);
      const escaped = escapeHtml(shortText);
      const isCode = ["html", "css", "js", "json", "xml", "py", "java", "cpp", "c"].includes(ext);

      filePreviewBox.innerHTML = isCode
        ? `<pre style="width:100%;white-space:pre-wrap;text-align:left;direction:ltr;margin:0;color:var(--text)">${escaped}</pre>`
        : `<div style="width:100%;text-align:${getLang() === "ar" ? "right" : "left"};line-height:1.9;color:var(--text)">${escaped.replace(/\n/g, "<br>")}</div>`;

      fileTopicValue.textContent = guessTextTopic(text);
    };
    reader.readAsText(file);
  }

  function analyzeFile(file) {
    const dict = getDict();
    const ext = getExtension(file.name);
    const type = fileTypeFromExt(ext);
    const apps = appsByExt(ext);

    fileNameValue.textContent = file.name;
    fileTypeValue.textContent = type;
    fileExtValue.textContent = ext ? "." + ext : "-";
    fileSizeValue.textContent = formatBytes(file.size);
    fileAppsList.innerHTML = apps.map((app) => `<span class="tag">${app}</span>`).join("");

    if (type === "Image") {
      renderImagePreview(file);
    } else if (type === "Text" || type === "Code") {
      renderTextPreview(file, ext);
    } else {
      filePreviewBox.innerHTML = `<p class="empty-preview">${
        getLang() === "ar"
          ? "تم رفع الملف، لكن لا توجد معاينة مباشرة لهذا النوع حالياً."
          : "The file was uploaded, but no direct preview is available for this type yet."
      }</p>`;

      fileTopicValue.textContent =
        getLang() === "ar"
          ? "تم تحديد النوع الأساسي للملف مع التطبيقات المناسبة لفتحه."
          : "The basic file type was identified with suitable apps to open it.";
    }

    fileResult.classList.add("show");
    setStatus(fileStatusBox, dict.fileUploaded, "success");
  }

  function resetConvertResult() {
    currentConvertFile = null;

    if (currentDownloadUrl) {
      URL.revokeObjectURL(currentDownloadUrl);
      currentDownloadUrl = null;
    }

    if (convertInput) convertInput.value = "";
    convertToSelect.value = "";
    convertTypeText.textContent = getDict().toFormat;
    convertPreviewBox.innerHTML = `<p class="empty-preview">${getDict().noConvertedPreview}</p>`;
    convertFileName.textContent = "-";
    convertCurrentFormat.textContent = "-";
    convertTargetFormat.textContent = "-";
    convertDoneText.textContent = "-";
    convertResult.classList.remove("show");
    convertedDownloadBox.classList.remove("show");
    convertedDownloadLink.removeAttribute("href");
    clearStatus(convertStatusBox);
  }

  function showConvertPreview(file) {
    const url = URL.createObjectURL(file);
    convertPreviewBox.innerHTML = `<img src="${url}" alt="convert-preview" style="max-width:100%;max-height:280px;border-radius:16px;">`;
  }

  function dataURLtoBlob(dataurl) {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], { type: mime });
  }

  function createSimplePdfBlob(imageDataUrl) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>Converted PDF</title></head>
      <body style="margin:0;background:#fff;display:flex;align-items:center;justify-content:center;">
        <img src="${imageDataUrl}" style="max-width:100%;height:auto;" />
      </body>
      </html>
    `;
    return new Blob([html], { type: "application/pdf" });
  }

  function runConversion() {
    const dict = getDict();

    if (!currentConvertFile) {
      setStatus(convertStatusBox, dict.convertNeedFile, "warn");
      return;
    }

    const target = convertToSelect.value;
    if (!target) {
      setStatus(convertStatusBox, dict.convertNeedType, "warn");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (target === "image/jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        const baseName = currentConvertFile.name.replace(/\.[^.]+$/, "") || "converted";
        let blob;
        let ext;

        if (currentDownloadUrl) {
          URL.revokeObjectURL(currentDownloadUrl);
          currentDownloadUrl = null;
        }

        if (target === "application/pdf") {
          const imageData = canvas.toDataURL("image/jpeg", 0.92);
          blob = createSimplePdfBlob(imageData);
          ext = "pdf";
        } else {
          const dataUrl = canvas.toDataURL(target, 0.95);
          blob = dataURLtoBlob(dataUrl);
          ext = target === "image/png" ? "png" : target === "image/webp" ? "webp" : "jpg";
        }

        currentDownloadUrl = URL.createObjectURL(blob);
        convertedDownloadLink.href = currentDownloadUrl;
        convertedDownloadLink.download = `${baseName}.${ext}`;
        convertedDownloadBox.classList.add("show");

        convertDoneText.textContent = dict.convertDone;
        setStatus(convertStatusBox, dict.convertDone, "success");
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(currentConvertFile);
  }

  function openFooterPanel(id) {
    footerPanels.forEach((panel) => panel.classList.remove("show"));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("show");
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function closeFooterPanel(id) {
    const target = document.getElementById(id);
    if (target) target.classList.remove("show");
  }

  function copyEmail() {
    const dict = getDict();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("ohkvchnjvbnb@gmail.com")
        .then(() => setStatus(emailStatusBox, dict.emailCopied, "success"))
        .catch(() => fallbackCopyEmail(dict));
    } else {
      fallbackCopyEmail(dict);
    }
  }

  function fallbackCopyEmail(dict) {
    const temp = document.createElement("textarea");
    temp.value = "ohkvchnjvbnb@gmail.com";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    setStatus(emailStatusBox, dict.emailCopied, "success");
  }

  function setupCustomSelect(selectRoot, btn) {
    if (!selectRoot || !btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".custom-select.open").forEach((s) => {
        if (s !== selectRoot) s.classList.remove("open");
      });
      selectRoot.classList.toggle("open");
    });
  }

  applyTheme();
  applyTranslations(getLang());
  resetFileResult();
  resetConvertResult();

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem(STORAGE.theme, body.classList.contains("light") ? "light" : "dark");
  });

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langBox.classList.toggle("open");
  });

  langItems.forEach((item) => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang;
      applyTranslations(lang);
      langBox.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!langBox.contains(e.target)) langBox.classList.remove("open");

    document.querySelectorAll(".custom-select.open").forEach((s) => {
      if (!s.contains(e.target)) s.classList.remove("open");
    });
  });

  goHomeBtn.addEventListener("click", () => showView("homeView"));

  openViewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showView(btn.dataset.openView);
    });
  });

  backHomeButtons.forEach((btn) => {
    btn.addEventListener("click", () => showView("homeView"));
  });

  fileChooseBtn.addEventListener("click", () => fileInput.click());
  fileClearBtn.addEventListener("click", resetFileResult);

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) analyzeFile(file);
  });

  setupCustomSelect(convertTypeCustom, convertTypeBtn);

  convertTypeMenu.querySelectorAll(".custom-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.value;
      convertToSelect.value = value;
      convertTypeText.textContent = btn.textContent.trim();
      convertTargetFormat.textContent = btn.textContent.trim();
      convertTypeCustom.classList.remove("open");
    });
  });

  convertChooseBtn.addEventListener("click", () => convertInput.click());

  convertInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    currentConvertFile = file;
    const ext = getExtension(file.name);

    showConvertPreview(file);
    convertFileName.textContent = file.name;
    convertCurrentFormat.textContent = ext ? ext.toUpperCase() : "-";
    convertDoneText.textContent = "-";
    convertResult.classList.add("show");
    convertedDownloadBox.classList.remove("show");

    setStatus(convertStatusBox, getDict().convertReady, "info");
  });

  convertRunBtn.addEventListener("click", runConversion);

  footerOpenButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openFooterPanel(btn.dataset.footerOpen);
    });
  });

  footerCloseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeFooterPanel(btn.dataset.footerClose);
    });
  });

  copyEmailBtn.addEventListener("click", copyEmail);
});