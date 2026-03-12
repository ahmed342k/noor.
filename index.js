document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("imageInput");
  const formatSelect = document.getElementById("formatSelect");
  const statusText = document.getElementById("status");
  const downloadBtn = document.getElementById("downloadBtn");

  let currentDownloadUrl = null;
  let currentFileName = "converted-file";

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

  async function imageToPdf(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(new Error("فشل في قراءة الصورة."));
      reader.onload = () => {
        const img = new Image();

        img.onerror = () => reject(new Error("تعذر تحميل الصورة."));
        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);

            const imageData = canvas.toDataURL("image/jpeg", 1.0);

            const pdfWidth = canvas.width;
            const pdfHeight = canvas.height;

            const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Count 1 /Kids [3 0 R] >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pdfWidth} ${pdfHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length 0 >>
stream
endstream
endobj
5 0 obj
<< /Length 35 >>
stream
q
${pdfWidth} 0 0 ${pdfHeight} 0 0 cm
/Im0 Do
Q
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000063 00000 n 
0000000122 00000 n 
0000000260 00000 n 
0000000401 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
486
%%EOF`;

            const blob = new Blob([pdfContent], { type: "application/pdf" });
            resolve(blob);
          } catch (error) {
            reject(new Error("فشل إنشاء ملف PDF."));
          }
        };

        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    });
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

    setStatus("جاري التحويل...");

    const baseName = getBaseFileName(file.name);
    currentFileName = `${baseName}.${selectedFormat === "jpg" ? "jpg" : selectedFormat}`;

    try {
      if (selectedFormat === "pdf") {
        const pdfBlob = await imageToPdf(file);
        const pdfUrl = URL.createObjectURL(pdfBlob);
        enableDownload(pdfUrl, `${baseName}.pdf`);
        setStatus("تم تجهيز الملف المحول للتحميل.");
        return;
      }

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
            default:
              mimeType = "image/png";
              extension = "png";
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
    } catch (error) {
      setStatus(error.message || "حدث خطأ أثناء التحويل.");
    }
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