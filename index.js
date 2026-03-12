document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("imageInput");
  const formatSelect = document.getElementById("formatSelect");
  const statusText = document.getElementById("status");
  const downloadBtn = document.getElementById("downloadBtn");

  let currentDownloadUrl = null;

  function setStatus(message) {
    if (statusText) {
      statusText.textContent = message;
    }
  }

  function disableDownload() {
    if (currentDownloadUrl) {
      URL.revokeObjectURL(currentDownloadUrl);
      currentDownloadUrl = null;
    }

    if (downloadBtn) {
      downloadBtn.removeAttribute("href");
      downloadBtn.removeAttribute("download");
      downloadBtn.style.pointerEvents = "none";
      downloadBtn.style.opacity = "0.6";
    }
  }

  function enableDownload(blob, fileName) {
    if (!downloadBtn) return;

    if (currentDownloadUrl) {
      URL.revokeObjectURL(currentDownloadUrl);
    }

    currentDownloadUrl = URL.createObjectURL(blob);
    downloadBtn.href = currentDownloadUrl;
    downloadBtn.download = fileName;
    downloadBtn.style.pointerEvents = "auto";
    downloadBtn.style.opacity = "1";
  }

  function getBaseName(fileName) {
    if (!fileName) return "converted-image";
    const lastDot = fileName.lastIndexOf(".");
    return lastDot > 0 ? fileName.slice(0, lastDot) : fileName;
  }

  function convertImage() {
    disableDownload();

    if (!fileInput || !formatSelect) {
      setStatus("خطأ: عناصر الصفحة غير مكتملة.");
      return;
    }

    const file = fileInput.files && fileInput.files[0];
    const format = (formatSelect.value || "").toLowerCase();

    if (!file) {
      setStatus("يرجى اختيار صورة أولاً.");
      return;
    }

    if (!format) {
      setStatus("يرجى اختيار الصيغة المطلوبة.");
      return;
    }

    if (format === "pdf") {
      setStatus("صيغة PDF غير مفعلة حالياً بهذا السكربت.");
      return;
    }

    setStatus("جاري التحويل...");

    const reader = new FileReader();

    reader.onerror = () => {
      setStatus("حدث خطأ أثناء قراءة الصورة.");
    };

    reader.onload = (e) => {
      const img = new Image();

      img.onerror = () => {
        setStatus("تعذر تحميل الصورة.");
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          setStatus("المتصفح لا يدعم الرسم على الصورة.");
          return;
        }

        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;

        if (format === "jpg" || format === "jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

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
          setStatus("الصيغة غير مدعومة.");
          return;
        }

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              setStatus("فشل إنشاء الملف المحول.");
              return;
            }

            const outputName = `${getBaseName(file.name)}.${extension}`;
            enableDownload(blob, outputName);
            setStatus("تم تجهيز الملف المحول للتحميل.");

            // تحميل مباشر اختياري
            // downloadBtn.click();
          },
          mimeType,
          0.95
        );
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  if (!fileInput || !formatSelect || !downloadBtn || !statusText) {
    console.error("Missing required elements:", {
      fileInput: !!fileInput,
      formatSelect: !!formatSelect,
      downloadBtn: !!downloadBtn,
      statusText: !!statusText,
    });
    return;
  }

  disableDownload();
  setStatus("اختر صورة وحدد الصيغة.");

  fileInput.addEventListener("change", convertImage);
  formatSelect.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length > 0) {
      convertImage();
    }
  });

  downloadBtn.addEventListener("click", (event) => {
    if (!downloadBtn.getAttribute("href")) {
      event.preventDefault();
      setStatus("لا يوجد ملف جاهز للتحميل بعد.");
    }
  });
});
