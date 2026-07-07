// Mobil menü aç/kapat
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // menüden bir linke tıklayınca kapansın (mobil)
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // basit kaydırma animasyonu
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(el);
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- WhatsApp yüzen buton (tüm sayfalarda) ----
  var wa = document.createElement('a');
  wa.className = 'wa-float';
  wa.href = 'https://wa.me/905325224005?text=' + encodeURIComponent('Merhaba, web siteniz üzerinden ulaşıyorum.');
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'WhatsApp ile yazın');
  wa.innerHTML = '<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.488-.915zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>';
  document.body.appendChild(wa);

  // ---- Instagram (yüzen buton + footer) ----
  var igPath = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.62c-3.15 0-3.52.01-4.76.07-.97.04-1.5.21-1.85.34-.46.18-.8.4-1.15.74-.34.34-.56.69-.74 1.15-.13.35-.3.88-.34 1.85-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.97.21 1.5.34 1.85.18.46.4.8.74 1.15.34.34.69.56 1.15.74.35.13.88.3 1.85.34 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.97-.04 1.5-.21 1.85-.34.46-.18.8-.4 1.15-.74.34-.34.56-.69.74-1.15.13-.35.3-.88.34-1.85.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.97-.21-1.5-.34-1.85-.18-.46-.4-.8-.74-1.15-.34-.34-.69-.56-1.15-.74-.35-.13-.88-.3-1.85-.34-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.46 5.46 0 1 0 0 10.92 5.46 5.46 0 0 0 0-10.92zm0 9a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08zm5.68-9.23a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z"/></svg>';
  var ig = document.createElement('a');
  ig.className = 'ig-float';
  ig.href = 'https://www.instagram.com/kibarogluyapi';
  ig.target = '_blank';
  ig.rel = 'noopener';
  ig.setAttribute('aria-label', 'Instagram: kibarogluyapi');
  ig.style.color = '#fff';
  ig.innerHTML = igPath;
  document.body.appendChild(ig);

  var footBrand = document.querySelector('.foot-brand');
  if (footBrand) {
    var soc = document.createElement('div');
    soc.className = 'foot-social';
    var iga = document.createElement('a');
    iga.href = 'https://www.instagram.com/kibarogluyapi';
    iga.target = '_blank';
    iga.rel = 'noopener';
    iga.setAttribute('aria-label', 'Instagram: kibarogluyapi');
    iga.innerHTML = igPath;
    soc.appendChild(iga);
    footBrand.appendChild(soc);
  }

  // ---- Mobil sabit CTA şeridi (Ara / WhatsApp) ----
  var mcta = document.createElement('div');
  mcta.className = 'mobile-cta';
  mcta.innerHTML =
    '<a class="c-call" href="tel:+905325224005"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Hemen Ara</a>' +
    '<a class="c-wa" href="https://wa.me/905325224005" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.488-.915z"/></svg>WhatsApp</a>';
  document.body.appendChild(mcta);

  // ---- Yukarı çık butonu ----
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Sayfa başına dön');
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) { toTop.classList.add('show'); } else { toTop.classList.remove('show'); }
  });

  // ---- Hero istatistik sayaç animasyonu ----
  function runCount(el) {
    var m = el.textContent.trim().match(/^(\d+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1], 10), suffix = m[2] || '';
    if (target === 0) return;
    var dur = 1800, start = null;
    el.textContent = '0' + suffix;
    requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // yumuşak yavaşlama (easeOutCubic)
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    });
  }
  var stats = document.querySelectorAll('.hero-stats .stat b');
  if (stats.length && !reduce) {
    var statObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    stats.forEach(function (b) { statObs.observe(b); });
  }

  // ---- SSS aç/kapat ----
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.toggle('open');
      ans.style.maxHeight = isOpen ? ans.scrollHeight + 'px' : null;
    });
  });

  // ---- Galeriler + lightbox (ilan galerisi + saha galerisi) ----
  var galleries = document.querySelectorAll('.feat-gallery');
  var workGalleries = document.querySelectorAll('.work-gallery');
  if (galleries.length || workGalleries.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button class="lb-btn lb-close" aria-label="Kapat">&times;</button>' +
      '<button class="lb-btn lb-prev" aria-label="Önceki">&#8249;</button>' +
      '<img alt="">' +
      '<button class="lb-btn lb-next" aria-label="Sonraki">&#8250;</button>' +
      '<div class="lb-count"></div>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img');
    var lbCount = lb.querySelector('.lb-count');
    var lbSrcs = [], lbAlts = [], lbCur = 0;
    function lbShow(i) {
      lbCur = (i + lbSrcs.length) % lbSrcs.length;
      lbImg.src = lbSrcs[lbCur]; lbImg.alt = lbAlts[lbCur];
      lbCount.textContent = (lbCur + 1) + ' / ' + lbSrcs.length;
    }
    function lbClose() { lb.classList.remove('open'); }
    lb.querySelector('.lb-close').addEventListener('click', lbClose);
    lb.querySelector('.lb-prev').addEventListener('click', function () { lbShow(lbCur - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function () { lbShow(lbCur + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft') lbShow(lbCur - 1);
      else if (e.key === 'ArrowRight') lbShow(lbCur + 1);
    });

    Array.prototype.forEach.call(galleries, function (gal) {
      var main = gal.querySelector('.feat-main');
      var thumbs = Array.prototype.slice.call(gal.querySelectorAll('.feat-thumbs img'));
      if (!main || !thumbs.length) return;
      var srcs = thumbs.map(function (im) { return im.getAttribute('src'); });
      var alts = thumbs.map(function (im) { return im.getAttribute('alt') || ''; });
      var idx = 0;
      function setActive(i) {
        idx = i;
        main.src = srcs[i]; main.alt = alts[i];
        thumbs.forEach(function (im, k) { im.classList.toggle('active', k === i); });
      }
      thumbs.forEach(function (im, i) { im.addEventListener('click', function () { setActive(i); }); });
      thumbs[0].classList.add('active');
      main.addEventListener('click', function () {
        lbSrcs = srcs; lbAlts = alts;
        lb.classList.add('open'); lbShow(idx);
      });
    });

    Array.prototype.forEach.call(workGalleries, function (gal) {
      var items = Array.prototype.slice.call(gal.querySelectorAll('img'));
      if (!items.length) return;
      var srcs = items.map(function (im) { return im.getAttribute('src'); });
      var alts = items.map(function (im) { return im.getAttribute('alt') || ''; });
      items.forEach(function (im, i) {
        var trigger = im.closest('.work-item') || im;
        trigger.addEventListener('click', function () {
          lbSrcs = srcs; lbAlts = alts;
          lb.classList.add('open'); lbShow(i);
        });
      });
    });
  }
});
