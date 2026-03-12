document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("imageInput");
  const formatSelect = document.getElementById("formatSelect");
  const statusText = document.getElementById("status");
  const downloadBtn = document.getElementById("downloadBtn");

  let currentDownloadUrl = null;

  function setStatus(message) {
    if (statusText) statusText.textContent = message;
  }

  function resetDownload() {
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

  function enableDownload(url, fileName) {
    if (!downloadBtn) return;
    currentDownloadUrl = url;
    downloadBtn.href = url;
    downloadBtn.download = fileName;
    downloadBtn.style.pointerEvents = "auto";
    downloadBtn.style.opacity = "1";
  }

  function getBaseFileName(fileName) {
    if (!fileName) return "converted-file";
    const lastDot = fileName.lastIndexOf(".");
    return lastDot > 0 ? fileName.slice(0, lastDot) : fileName;
  }

  async function convertImage() {
    resetDownload();

    const file = fileInput?.files?.[0];
    const selectedFormat = formatSelect?.value?.toLowerCase();

    if (!file) {
      setStatus("يرجى اختيار صورة أولاً.");
      return;
    }

    if (!selectedFormat) {
      setStatus("يرجى اختيار الصيغة المطلوبة.");
      return;
    }

    if (selectedFormat === "pdf") {
      setStatus("صيغة PDF تحتاج مكتبة خاصة حتى تعمل بشكل صحيح.");
      return;
    }

    setStatus("جاري التحويل...");

    const baseName = getBaseFileName(file.name);

    const reader = new FileReader();

    reader.onerror = () => {
      setStatus("حدث خطأ أثناء قراءة الملف.");
    };

    reader.onload = (event) => {
      const img = new Image();

      img.onerror = () => {
        setStatus("تعذر تحميل الصورة.");
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        if (selectedFormat === "jpg" || selectedFormat === "jpeg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        let mimeType = "image/png";
        let extension = "png";

        switch (selectedFormat) {
          case "jpg":
          case "jpeg":
            mimeType = "image/jpeg";
            extension = "jpg";
            break;
          case "png":
            mimeType = "image/png";
            extension = "png";
            break;
          case "webp":
            mimeType = "image/webp";
            extension = "webp";
            break;
        }

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              setStatus("فشل إنشاء الملف المحول.");
              return;
            }

            const url = URL.createObjectURL(blob);
            enableDownload(url, `${baseName}.${extension}`);
            setStatus("تم تجهيز الملف المحول للتحميل.");
          },
          mimeType,
          0.95
        );
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  if (downloadBtn) {
    downloadBtn.style.pointerEvents = "none";
    downloadBtn.style.opacity = "0.6";

    downloadBtn.addEventListener("click", (event) => {
      if (!downloadBtn.getAttribute("href")) {
        event.preventDefault();
        setStatus("لا يوجد ملف جاهز للتحميل بعد.");
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", convertImage);
  }

  if (formatSelect) {
    formatSelect.addEventListener("change", () => {
      if (fileInput?.files?.length) {
        convertImage();
      }
    });
  }
});
