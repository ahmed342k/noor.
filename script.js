document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const fileInput = document.getElementById("imageInput");
  const formatSelect = document.getElementById("formatSelect");
  const statusText = document.getElementById("status");
  const fileNameText = document.getElementById("fileName");
  const downloadBtn = document.getElementById("downloadBtn");
  const themeToggle = document.getElementById("themeToggle");
  const languageSelect = document.getElementById("languageSelect");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");
  const aboutLink = document.getElementById("aboutLink");
  const privacyLink = document.getElementById("privacyLink");
  const contactLink = document.getElementById("contactLink");

  let currentDownloadUrl = null;

  const translations = {
    ar: {
      dir: "rtl",
      uploadLabel: "الصورة المختارة",
      uploadTitle: "اختر صورة من جهازك",
      uploadHint: "PNG, JPG, WEBP",
      noFile: "لم يتم اختيار صورة بعد",
      formatLabel: "الصيغة المطلوبة",
      statusLabel: "الحالة",
      initialStatus: "اختر صورة وحدد الصيغة المطلوبة.",
      converting: "جاري التحويل...",
      preparing: "تم تجهيز الملف المحول للتحميل.",
      pickImage: "يرجى اختيار صورة أولاً.",
      pickFormat: "يرجى اختيار الصيغة المطلوبة.",
      fileReadError: "حدث خطأ أثناء قراءة الصورة.",
      imageLoadError: "تعذر تحميل الصورة.",
      unsupported: "الصيغة غير مدعومة.",
      failedBlob: "فشل إنشاء الملف المحول.",
      downloadText: "تحميل الملف المحول",
      about: "من نحن",
      privacy: "سياسة الخصوصية",
      contact: "اتصل بنا",
      aboutBody: "noor.com موقع بسيط لتحويل الصور داخل المتصفح بسرعة وسهولة، بدون تعقيد وبواجهة مريحة للموبايل والكمبيوتر.",
      privacyBody: "نحن لا نرفع صورك إلى خادم خارجي. التحويل يتم داخل المتصفح على جهازك قدر الإمكان.",
      contactBody: "للتواصل يمكنك إضافة وسائل التواصل الخاصة بك داخل هذا الصندوق لاحقاً مثل تلجرام أو إنستغرام أو البريد الإلكتروني.",
      themeLabelLight: "الوضع النهاري",
      themeLabelDark: "الوضع الليلي"
    },
    en: {
      dir: "ltr",
      uploadLabel: "Selected image",
      uploadTitle: "Choose an image from your device",
      uploadHint: "PNG, JPG, WEBP",
      noFile: "No image selected yet",
      formatLabel: "Output format",
      statusLabel: "Status",
      initialStatus: "Choose an image and select the format.",
      converting: "Converting...",
      preparing: "Your converted file is ready to download.",
      pickImage: "Please choose an image first.",
      pickFormat: "Please choose an output format.",
      fileReadError: "An error occurred while reading the image.",
      imageLoadError: "Unable to load the image.",
      unsupported: "This format is not supported.",
      failedBlob: "Failed to create the converted file.",
      downloadText: "Download converted file",
      about: "About us",
      privacy: "Privacy Policy",
      contact: "Contact us",
      aboutBody: "noor.com is a simple image conversion website built for speed, ease, and a clean mobile-friendly interface.",
      privacyBody: "Your images are not uploaded to an external server. Conversion is handled in the browser whenever possible.",
      contactBody: "You can place your own Telegram, Instagram, or email contact details here later.",
      themeLabelLight: "Light mode",
      themeLabelDark: "Dark mode"
    }
  };

  function currentLang() {
    return languageSelect.value === "en" ? "en" : "ar";
  }

  function t(key) {
    return translations[currentLang()][key];
  }

  function setStatus(message) {
    statusText.textContent = message;
  }

  function updateThemeButtonState() {
    const isDark = body.classList.contains("theme-dark");
    themeToggle.classList.toggle("dark", isDark);
    themeToggle.classList.toggle("light", !isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? t("themeLabelDark") : t("themeLabelLight"));
  }

  function setTheme(theme) {
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    localStorage.setItem("noor-theme", theme === "dark" ? "dark" : "light");
    updateThemeButtonState();
  }

  function disableDownload() {
    if (currentDownloadUrl) {
      URL.revokeObjectURL(currentDownloadUrl);
      currentDownloadUrl = null;
    }

    downloadBtn.removeAttribute("href");
    downloadBtn.removeAttribute("download");
    downloadBtn.classList.add("disabled");
  }

  function enableDownload(blob, fileName) {
    if (currentDownloadUrl) {
      URL.revokeObjectURL(currentDownloadUrl);
    }

    currentDownloadUrl = URL.createObjectURL(blob);
    downloadBtn.href = currentDownloadUrl;
    downloadBtn.download = fileName;
    downloadBtn.classList.remove("disabled");
  }

  function baseName(fileName) {
    if (!fileName) return "converted-image";
    const dotIndex = fileName.lastIndexOf(".");
    return dotIndex > 0 ? fileName.slice(0, dotIndex) : fileName;
  }

  function applyLanguage() {
    const lang = currentLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;

    document.getElementById("uploadLabel").textContent = t("uploadLabel");
    document.getElementById("uploadTitle").textContent = t("uploadTitle");
    document.getElementById("uploadHint").textContent = t("uploadHint");
    document.getElementById("formatLabel").textContent = t("formatLabel");
    document.getElementById("statusLabel").textContent = t("statusLabel");
    document.getElementById("downloadLabel").textContent = t("downloadText");
    document.getElementById("downloadBtnText").textContent = t("downloadText");
    aboutLink.textContent = t("about");
    privacyLink.textContent = t("privacy");
    contactLink.textContent = t("contact");

    if (!fileInput.files || !fileInput.files.length) {
      fileNameText.textContent = t("noFile");
      setStatus(t("initialStatus"));
    }

    updateThemeButtonState();
  }

  async function convertToPdf(imageElement, originalName) {
    const { jsPDF } = window.jspdf;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imageElement.naturalWidth || imageElement.width;
    canvas.height = imageElement.naturalHeight || imageElement.height;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageElement, 0, 0);

    const imageData = canvas.toDataURL("image/jpeg", 0.98);
    const orientation = canvas.width > canvas.height ? "l" : "p";
    const pdf = new jsPDF({
      orientation,
      unit: "px",
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imageData, "JPEG", 0, 0, canvas.width, canvas.height);
    const blob = pdf.output("blob");
    enableDownload(blob, `${baseName(originalName)}.pdf`);
  }

  function convertImage() {
    disableDownload();

    const file = fileInput.files && fileInput.files[0];
    const format = (formatSelect.value || "").toLowerCase();

    if (!file) {
      setStatus(t("pickImage"));
      fileNameText.textContent = t("noFile");
      return;
    }

    if (!format) {
      setStatus(t("pickFormat"));
      return;
    }

    fileNameText.textContent = file.name;
    setStatus(t("converting"));

    const reader = new FileReader();

    reader.onerror = () => {
      setStatus(t("fileReadError"));
    };

    reader.onload = (event) => {
      const image = new Image();

      image.onerror = () => {
        setStatus(t("imageLoadError"));
      };

      image.onload = async () => {
        try {
          if (format === "pdf") {
            await convertToPdf(image, file.name);
            setStatus(t("preparing"));
            return;
          }

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = image.naturalWidth || image.width;
          canvas.height = image.naturalHeight || image.height;

          if (format === "jpg" || format === "jpeg") {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          ctx.drawImage(image, 0, 0);

          let mimeType = "image/png";
          let extension = "png";

          if (format === "jpg" || format === "jpeg") {
            mimeType = "image/jpeg";
            extension = "jpg";
          } else if (format === "png") {
            mimeType = "image/png";
            extension = "png";
          } else if (format === "webp") {
            mimeType = "image/webp";
            extension = "webp";
          } else {
            setStatus(t("unsupported"));
            return;
          }

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                setStatus(t("failedBlob"));
                return;
              }

              enableDownload(blob, `${baseName(file.name)}.${extension}`);
              setStatus(t("preparing"));
            },
            mimeType,
            0.95
          );
        } catch (error) {
          console.error(error);
          setStatus(t("failedBlob"));
        }
      };

      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function openModal(title, bodyText) {
    modalTitle.textContent = title;
    modalBody.textContent = bodyText;
    modalBackdrop.hidden = false;
  }

  function closeModalBox() {
    modalBackdrop.hidden = true;
  }

  const savedTheme = localStorage.getItem("noor-theme");
  setTheme(savedTheme === "dark" ? "dark" : "light");
  applyLanguage();
  disableDownload();

  themeToggle.addEventListener("click", () => {
    setTheme(body.classList.contains("theme-dark") ? "light" : "dark");
  });

  languageSelect.addEventListener("change", applyLanguage);
  fileInput.addEventListener("change", convertImage);
  formatSelect.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length) {
      convertImage();
    }
  });

  downloadBtn.addEventListener("click", (event) => {
    if (!downloadBtn.getAttribute("href")) {
      event.preventDefault();
      setStatus(t("pickImage"));
    }
  });

  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(t("about"), t("aboutBody"));
  });

  privacyLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(t("privacy"), t("privacyBody"));
  });

  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(t("contact"), t("contactBody"));
  });

  closeModal.addEventListener("click", closeModalBox);
  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModalBox();
    }
  });
});
