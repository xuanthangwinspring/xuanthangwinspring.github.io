document.addEventListener("DOMContentLoaded", () => {
  // 1. Cập nhật số năm thành lập Đoàn động
  const yearDisplay = document.getElementById("dynamic-year");
  const currentYear = new Date().getFullYear();
  const anniversary = currentYear - 1931;
  yearDisplay.innerText = `Chào mừng ${anniversary} năm ngày thành lập Đoàn TNCS Hồ Chí Minh`;

  // 2. Cập nhật ngày tháng năm ở Footer
  const footerDate = document.getElementById("footer-date");
  const today = new Date().toLocaleDateString("vi-VN");
  footerDate.innerText += " " + today;

  // 3. Xử lý Lightbox cho ảnh
  const images = document.querySelectorAll(".img-item, .img-item2");
  const lightbox = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  // Mở lightbox
  const getImageCaption = (img) => {
    const altText = img.getAttribute("alt") || "";
    if (altText.trim()) return altText.trim();
    const titleText = img.getAttribute("title") || "";
    if (titleText.trim()) return titleText.trim();
    const dataCaption = img.dataset.caption || "";
    if (dataCaption.trim()) return dataCaption.trim();
    const filename = (img.src || "").split("/").pop() || "";
    return filename.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").trim();
  };

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const caption = getImageCaption(img);
      lightboxImg.src = img.src;
      lightboxImg.alt = caption;
      lightboxCaption.textContent = caption;
      lightboxCaption.style.display = caption ? "block" : "none";
      lightbox.style.display = "flex";
    });
  });

  // Tắt khi click nút ×
  lightboxClose.addEventListener("click", (e) => {
    e.stopPropagation(); // tránh trigger overlay
    lightbox.style.display = "none";
  });

  // Tắt khi click nền overlay
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Không tắt khi click vào ảnh
  lightboxImg.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 4. Xử lý Form bình luận
  const commentForm = document.getElementById("binh-luan");
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("thong-bao").innerText = "Cảm ơn bạn đã để lại bình luận và góp ý cho Nhóm 4 - Lớp 12A1!";
    commentForm.reset();
  });

  // 5. Hiệu ứng cuộn mượt (Smooth Scroll)
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // 6. Láº­t tháº» theo click (khÃ´ng láº­t khi hover)
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // chỉ chạy 1 lần
        }
      });
    },
    { threshold: 0.02 },
  );

  elements.forEach((el) => observer.observe(el));
});
