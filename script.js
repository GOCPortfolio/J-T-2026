/* =====================================================================
   WEDDING INVITATION: ALL EDITABLE CONTENT LIVES IN THIS ONE OBJECT.
   Everything below the "APP CODE" line should never need editing.
   ===================================================================== */
const CONFIG = {
  // Your live web address, ending with a slash. Used in the WhatsApp share message.
  // (The link-preview tags in index.html have their own address: see README.)
  siteUrl: "https://gocportfolio.github.io/J-T-2026/",

  couple: {
    bride: {
      title: "Dr",
      given: "Jane Chekwube",
      surname: "Ezema",
      known: "Chekwube",
      parents: "Daughter of Late Chief Josephat Uroko Ezema & Late Mrs Felicia Obochi Ezema"
    },
    groom: {
      title: "Dr",
      given: "Nnamdi Anthony",
      surname: "Alumona",
      known: "Nnamdi",
      parents: "Son of Late Chief Ogbuefi Patrick U. Alumona & Late Chief (Mrs) Maria Nwabuaku Alumona"
    },
    shortNames: "Chekwube & Nnamdi",
    seal: "J & T",
    hashtag: "Dr J & Dr. T, 2026",
    tagline: "Two hearts, one journey"
  },

  event: {
    title: "Traditional Marriage",
    heroDate: "23rd December 2026",
    dateLabel: "Wednesday, 23rd December 2026",
    timeLine: "2:00 PM",
    city: "Nguru-Nsukka",
    startISO: "2026-12-23T14:00:00+01:00",   // exact start, with time zone (Lagos = +01:00)
    durationHours: 6,                         // used for the calendar entry only
    countNote: "Wednesday, 23rd December 2026 \u00b7 2:00 PM"
  },

  // Order of events shown in the "Order of Events" section
  programme: [
    { when: "Monday, 21st December 2026", title: "Legal Nuptial Bond", note: "" },
    { when: "Wednesday, 23rd December \u00b7 2:00 PM", title: "Traditional Marriage Ceremony", note: "" },
    { when: "5:00 PM", title: "Cake Cutting & Exchange of Gifts", note: "" },
    { when: "6:00 PM", title: "Eating & Dancing", note: "Keep eating and dancing" }
  ],

  // Add more venues here (for example one for the Legal Nuptial Bond) and they appear automatically.
  venues: [
    {
      kind: "Traditional Marriage",
      name: "Ogbagu Football Field",
      sub: "Porthacourt, Nguru-Nsukka",
      when: "Wednesday, 23rd December 2026 \u00b7 2:00 PM",
      // Paste the address exactly as Google Maps shows it so the pin lands correctly:
      mapQuery: "Ogbagu Football Field, Porthacourt, Nguru-Nsukka, Enugu State, Nigeria",
      // Optional: paste a Google Maps share link here to override the search above
      mapsUrl: ""
    }
  ],

  colours: [
    { name: "Burgundy", hex: "#5b1a2b" },
    { name: "Olive Green", hex: "#6b7035" },
    { name: "Champagne Gold", hex: "#d9c08f", metallic: true }
  ],

  // Leave name empty to hide this section
  fatherOfDay: { label: "Father of the Day", name: "", role: "" },

  story: {
    heading: "Our Love Story",
    moments: [
      {
        label: "July 2020", title: "How It All Started",
        text: ["In the midst of grief, love found its way in.",
               "A friend shared my late mother's burial invitation with Dr. T \u2014 an invitation that would unknowingly become an invitation to destiny."]
      },
      {
        label: "August 2020", title: "The First Hello",
        text: ["He honoured the invitation.",
               "In that moment of honour, a simple hello was exchanged \u2014 and a connection was born that neither of us knew would change everything."]
      },
      {
        label: "2022", title: "The Journey Began",
        text: ["What started as casual conversation blossomed into something deeper.",
               "It became dedicated discussions on personal growth, wise counsel, humane advice, and keen, intentional attention. He didn't just listen \u2014 he cared, he guided, he stayed."]
      },
      {
        label: "June 10, 2023", title: "Intentions Declared",
        text: ["Dr. T made his intentions known.",
               "Clear, honourable, and sincere, he came to stay.",
               "Henceforth.. the power of intimacy overwhelmed us and greater blessings keep emerging."]
      }
    ],
    closingLead: "And in 2026, the long story was cut short by the nuptial bond.",
    closingLine: "To be continued... forever."
  },

  // The last line is highlighted
  toast: [
    "Walking hand in hand, heart to heart.",
    "Two hearts, one journey, one date to forever",
    "23 / 12 / 26"
  ],

  rsvp: {
    endpoint: "https://script.google.com/macros/s/AKfycbydmwtPakZ5UIiKIqhrR5wsLMZHMW62VaiSjfXDMLDX0Ei27lczNqwk_1AMZRM4g7RJ/exec",                  // paste your Google Apps Script Web App URL here (see README)
    callNumber: "08033521362",     // "Call to RSVP"
    whatsappNumber: "2348033521362", // international format, no +
    maxGuests: 10
  },

  // Gifts section stays hidden until accountNumber is filled in
  gifts: {
    bank: "",
    accountName: "",
    accountNumber: "",
    message: "Your presence is the greatest gift. Should you wish to bless us further, you may use the details below."
  },

  faq: [
    { q: "Dress code", a: "It will be much appreciated if our guests honour the colour codes of the day.", swatches: true },
    { q: "Parking", a: "There is enough secured parking space." },
    { q: "Accommodation", a: "Guests coming from outside Enugu State should make arrangements early enough for comfortable accommodation." },
    { q: "Contact person", a: "Please contact the following numbers for any further enquiry:", phones: ["08033521362", "08038343324"] },
    { q: "Who created this beautiful wedding website?",
      a: "This website was proudly designed by G.O.C | Brand Strategist \u00d7 AI, where we create beautiful, personalized digital wedding experiences.",
      extra: "Planning your wedding? Let's create yours too!",
      link: { text: "Chat with us on WhatsApp", href: "https://wa.me/2348027134537" } }
  ],

  // Only rows with both a role and a name are shown. Add or remove freely.
  vendors: [
    { role: "Rentals", name: "Odogwu Ezema Ventures" },
    { role: "Female Designer", name: "Latino Apparel" },
    { role: "Caterer", name: "Etomchukwu Mobile catering Services"},
    { role: "Makeup", name: "Jasmine makeover"},
    { role: "Decoration", name: "Ugoson events"},
    { role: "Videography and photography", name: "De-Destiny Photography"},
    { role: "Music", name: "DJ smart the hype-man, Ikorodo Orba, G-Love Dance Band"},
    { role: "Security", name: "NPF, FRSC, NA, De rock-base security limited, Ogbagu neighborhood watch"},
    { role: "Website IV", name: "G.O.C | BrandStrategist"}
  ],

  footer: {
    thanks: "Thank you for celebrating with us. Your love and presence mean the world to us."
  },

  share: {
    message: "You are invited to celebrate the union of Chekwube & Nnamdi (Dr J & Dr. T, 2026) on 23rd December 2026."
  },

  music: { src: "assets/music.mp3", volume: 0.5 },   // replace the file with your own licensed MP3

  calendar: {
    title: "Traditional Marriage of Chekwube & Nnamdi",
    fileName: "jane-nnamdi-wedding.ics"
  }
};

/* =====================================================================
   APP CODE: no need to edit below this line
   ===================================================================== */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var params = new URLSearchParams(location.search);
  function get(path) { return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, CONFIG); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function enc(s) { return encodeURIComponent(s); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  var guest = (params.get('guest') || '').trim().slice(0, 60);
  var startDate = new Date(CONFIG.event.startISO);
  var endDate = new Date(startDate.getTime() + CONFIG.event.durationHours * 3600000);
  var venue0 = CONFIG.venues[0];
  var siteUrl = CONFIG.siteUrl || (location.origin + location.pathname.replace(/index\.html$/, ''));

  /* ---------- fill data-cfg text ---------- */
  $$('[data-cfg]').forEach(function (n) { var v = get(n.getAttribute('data-cfg')); if (v != null) n.textContent = v; });
  document.title = CONFIG.couple.shortNames + ' | ' + CONFIG.couple.hashtag;

  /* ---------- guest greeting ---------- */
  if (guest) {
    var eg = $('#envGuest'); eg.textContent = 'Dear ' + guest; eg.hidden = false;
    var cg = $('#cardGuest'); cg.textContent = 'Dear ' + guest; cg.hidden = false;
    $('#f-name').value = guest;
  }

  /* ---------- swatches ---------- */
  var sw = $('#cardSwatches');
  CONFIG.colours.forEach(function (c) {
    var li = el('li'), dot = el('span', 'sw' + (c.metallic ? ' metal' : ''));
    dot.style.background = c.hex; li.appendChild(dot); li.appendChild(el('span', '', c.name)); sw.appendChild(li);
  });

  /* ---------- programme ---------- */
  CONFIG.programme.forEach(function (p) {
    var li = el('li'); li.appendChild(el('p', 'when', p.when)); li.appendChild(el('p', 'what', p.title));
    if (p.note) li.appendChild(el('p', 'note', p.note)); $('#progList').appendChild(li);
  });

  /* ---------- venues + map links ---------- */
  function mapOpen(v) { return v.mapsUrl || ('https://www.google.com/maps/search/?api=1&query=' + enc(v.mapQuery)); }
  function mapDir(v) { return 'https://www.google.com/maps/dir/?api=1&destination=' + enc(v.mapQuery); }
  CONFIG.venues.forEach(function (v) {
    var c = el('article', 'vcard');
    c.appendChild(el('p', 'v-kind', v.kind)); c.appendChild(el('h3', 'v-name', v.name)); c.appendChild(el('p', 'v-sub', v.sub));
    if (v.when) c.appendChild(el('p', 'v-time', v.when));
    var b = el('div', 'v-btns');
    var a1 = el('a', 'btn btn-burg', 'Open in Google Maps'); a1.href = mapOpen(v); a1.target = '_blank'; a1.rel = 'noopener';
    var a2 = el('a', 'btn btn-ghost-dk', 'Get directions'); a2.href = mapDir(v); a2.target = '_blank'; a2.rel = 'noopener';
    b.appendChild(a1); b.appendChild(a2); c.appendChild(b); $('#venueList').appendChild(c);
  });

  /* ---------- father of the day ---------- */
  if (CONFIG.fatherOfDay && CONFIG.fatherOfDay.name) $('#fod').hidden = false;

  /* ---------- story ---------- */
  CONFIG.story.moments.forEach(function (m) {
    var d = el('article', 'moment'); d.appendChild(el('p', 'm-label', m.label)); d.appendChild(el('h3', 'm-title', m.title));
    var t = el('div', 'm-text'); m.text.forEach(function (s) { t.appendChild(el('p', '', s)); }); d.appendChild(t); $('#timeline').appendChild(d);
  });

  /* ---------- toast lines ---------- */
  CONFIG.toast.forEach(function (l, i, arr) { $('#toastLines').appendChild(el('p', i === arr.length - 1 ? 'last' : '', l)); });

  /* ---------- guests select ---------- */
  var gs = $('#f-guests');
  for (var i = 1; i <= CONFIG.rsvp.maxGuests; i++) { var o = el('option', '', String(i)); o.value = String(i); gs.appendChild(o); }

  /* ---------- gifts (hidden until filled) ---------- */
  var gifts = CONFIG.gifts;
  if (gifts.accountNumber) {
    $('#gifts').hidden = false;
    $('#copyAcct').addEventListener('click', function () {
      var n = gifts.accountNumber;
      function ok() { showToast('Account number copied'); }
      if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(n).then(ok, fallback); } else { fallback(); }
      function fallback() {
        var ta = document.createElement('textarea'); ta.value = n; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { showToast('Please copy the number manually'); } document.body.removeChild(ta);
      }
    });
  }

  /* ---------- FAQ accordion ---------- */
  CONFIG.faq.forEach(function (f, i) {
    var item = el('div', 'faq-item'), h = el('h3'), btn = el('button', 'faq-q', f.q);
    btn.type = 'button'; btn.id = 'faq-q' + i; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'faq-a' + i);
    h.appendChild(btn);
    var panel = el('div', 'faq-a'); panel.id = 'faq-a' + i; panel.setAttribute('role', 'region'); panel.setAttribute('aria-labelledby', btn.id);
    var wrap = el('div'), inner = el('div', 'in'); inner.appendChild(el('p', '', f.a));
    if (f.extra) { var ex = el('p', '', f.extra); ex.style.marginTop = '8px'; inner.appendChild(ex); }
    if (f.link) { var lp = el('p'); lp.style.marginTop = '8px'; var la = el('a', '', f.link.text); la.href = f.link.href; la.target = '_blank'; la.rel = 'noopener'; lp.appendChild(la); inner.appendChild(lp); }
    if (f.swatches) { var ul = el('ul', 'faq-sw'); CONFIG.colours.forEach(function (c) { var li = el('li'), d = el('span', 'sw' + (c.metallic ? ' metal' : '')); d.style.background = c.hex; li.appendChild(d); li.appendChild(el('span', '', c.name)); ul.appendChild(li); }); inner.appendChild(ul); }
    if (f.phones) {
      var pp = el('p'); pp.style.marginTop = '8px';
      f.phones.forEach(function (ph, k) { if (k) pp.appendChild(document.createTextNode(' \u00b7 ')); var a = el('a', '', ph); a.href = 'tel:' + ph.replace(/\s+/g, ''); pp.appendChild(a); });
      inner.appendChild(pp);
      if (CONFIG.rsvp.whatsappNumber) { var wp = el('p'); wp.style.marginTop = '8px'; wp.appendChild(document.createTextNode('WhatsApp: ')); var wa = el('a', '', '+' + CONFIG.rsvp.whatsappNumber); wa.href = 'https://wa.me/' + CONFIG.rsvp.whatsappNumber; wa.target = '_blank'; wa.rel = 'noopener'; wp.appendChild(wa); inner.appendChild(wp); }
    }
    wrap.appendChild(inner); panel.appendChild(wrap); item.appendChild(h); item.appendChild(panel); $('#faqList').appendChild(item);
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      $$('.faq-q').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); b.parentNode.nextElementSibling.classList.remove('open'); });
      if (!open) { btn.setAttribute('aria-expanded', 'true'); panel.classList.add('open'); }
    });
  });

  /* ---------- vendors ---------- */
  var vend = (CONFIG.vendors || []).filter(function (v) { return v.role && v.name; });
  if (vend.length) { $('#vendors').hidden = false; vend.forEach(function (v) { var li = el('li'); li.appendChild(el('span', 'v-role', v.role)); li.appendChild(el('span', 'v-who', v.name)); $('#vendorList').appendChild(li); }); }

  /* ---------- toast ---------- */
  var toastT;
  function showToast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, 2400); }

  /* ---------- countdown ---------- */
  var last = {};
  function setNum(id, v) {
    var n = $('#' + id), s = String(v).padStart(2, '0'); if (last[id] === s) return;
    n.textContent = s; if (last[id] !== undefined && !reduce) { n.classList.remove('flip'); void n.offsetWidth; n.classList.add('flip'); } last[id] = s;
  }
  function tick() {
    var diff = startDate.getTime() - Date.now();
    if (diff <= 0) { $('#count').hidden = true; $('#married').hidden = false; return false; }
    var s = Math.floor(diff / 1000);
    setNum('cd-d', Math.floor(s / 86400)); setNum('cd-h', Math.floor(s % 86400 / 3600)); setNum('cd-m', Math.floor(s % 3600 / 60)); setNum('cd-s', s % 60);
    return true;
  }
  if (tick()) { var cdT = setInterval(function () { if (!tick()) clearInterval(cdT); }, 1000); }

  /* ---------- calendar ---------- */
  function fmtUTC(d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }
  var venueText = venue0.name + ', ' + venue0.sub;
  var calDesc = CONFIG.event.title + ': ' + CONFIG.couple.shortNames + ' (' + CONFIG.couple.hashtag + '). ' +
    CONFIG.programme.map(function (p) { return p.when + ': ' + p.title; }).join('. ') + '.';
  $('#gcal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + enc(CONFIG.calendar.title) +
    '&dates=' + fmtUTC(startDate) + '/' + fmtUTC(endDate) + '&details=' + enc(calDesc) + '&location=' + enc(venueText);
  function icsEsc(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
  function fold(line) { var out = [], i = 0; while (line.length - i > 73) { out.push(line.substr(i, 73)); i += 73; } out.push(line.substr(i)); return out.join('\r\n '); }
  $('#icsBtn').addEventListener('click', function () {
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      'UID:' + fmtUTC(startDate) + '-wedding@invitation', 'DTSTAMP:' + fmtUTC(new Date()), 'DTSTART:' + fmtUTC(startDate), 'DTEND:' + fmtUTC(endDate),
      'SUMMARY:' + icsEsc(CONFIG.calendar.title), 'LOCATION:' + icsEsc(venueText), 'DESCRIPTION:' + icsEsc(calDesc), 'STATUS:CONFIRMED',
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Wedding tomorrow', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'];
    var blob = new Blob([lines.map(fold).join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    var url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = CONFIG.calendar.fileName;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  });

  /* ---------- RSVP ---------- */
  var form = $('#rsvpForm'), call = CONFIG.rsvp.callNumber;
  $('#callRsvp').href = 'tel:' + call.replace(/\s+/g, '');
  function waText() {
    var n = $('#f-name').value.trim(), a = (form.attending.value || ''), g = $('#f-guests').value;
    var t = 'Hello, this is ' + (n || '[my name]') + '. RSVP for the wedding of ' + CONFIG.couple.shortNames + ' (' + CONFIG.event.heroDate + ').';
    if (a) t += ' I ' + (a === 'Joyfully accept' ? 'joyfully accept' : 'regretfully decline') + '.';
    if (a === 'Joyfully accept') t += ' Number of guests: ' + g + '.';
    return t;
  }
  function refreshWa() { $('#waRsvp').href = 'https://wa.me/' + CONFIG.rsvp.whatsappNumber + '?text=' + enc(waText()); }
  form.addEventListener('input', refreshWa); form.addEventListener('change', function () {
    refreshWa(); var dec = form.attending.value === 'Regretfully decline'; $('#guestsField').hidden = dec;
  }); refreshWa();
  $('#waRsvp').addEventListener('click', refreshWa);

  function setErr(id, field, msg) { var e = $('#' + id); e.textContent = msg; if (field) { field.classList.toggle('invalid', !!msg); field.setAttribute('aria-invalid', msg ? 'true' : 'false'); } return !msg; }
  function validate() {
    var n = $('#f-name'), p = $('#f-phone'), ok = true, first = null;
    function mark(good, f) { if (!good) { ok = false; if (!first) first = f; } }
    mark(setErr('e-name', n, n.value.trim().length < 2 ? 'Please enter your full name.' : ''), n);
    var digits = p.value.replace(/[^\d]/g, '');
    mark(setErr('e-phone', p, (digits.length < 7 || digits.length > 15 || /[^\d+\s()-]/.test(p.value)) ? 'Please enter a valid phone number.' : ''), p);
    var att = form.attending.value; var radios = $$('input[name=attending]');
    mark(setErr('e-att', null, att ? '' : 'Please choose one option.'), radios[0]);
    if (att === 'Joyfully accept') { var g = $('#f-guests'); mark(setErr('e-guests', g, (+g.value >= 1) ? '' : 'Please choose the number of guests.'), g); }
    if (first) first.focus();
    return ok;
  }
  form.addEventListener('submit', function (ev) {
    ev.preventDefault(); if (!validate()) return;
    var data = {
      name: $('#f-name').value.trim(), phone: $('#f-phone').value.trim(), attending: form.attending.value,
      guests: form.attending.value === 'Joyfully accept' ? $('#f-guests').value : '0', message: $('#f-msg').value.trim(),
      invitedAs: guest, submittedAt: new Date().toISOString()
    };
    var done = function (title, text) {
      form.hidden = true; var r = $('#rsvpResult'); $('#resTitle').textContent = title; $('#resText').textContent = text; r.hidden = false; r.focus();
    };
    var thanks = data.attending === 'Joyfully accept' ? ['Thank you, ' + data.name.split(' ')[0] + '!', 'We cannot wait to celebrate with you.'] : ['Thank you, ' + data.name.split(' ')[0], 'We will miss you, and we are grateful you let us know.'];
    if ($('input[name=website]').value) { done(thanks[0], thanks[1]); return; }  // honeypot
    var endpoint = CONFIG.rsvp.endpoint;
    if (!endpoint) { done('Almost there', 'Online RSVP is not switched on yet. Please tap "RSVP on WhatsApp" or "Call to RSVP" below so we receive your reply.'); return; }
    var btn = $('#rsvpSubmit'); btn.disabled = true; btn.textContent = 'Sending...';
    fetch(endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) })
      .then(function () { done(thanks[0], thanks[1]); })
      .catch(function () { btn.disabled = false; btn.textContent = 'Send my RSVP'; showToast('Could not send. Please try again or use WhatsApp.'); });
  });

  /* ---------- share ---------- */
  $('#shareWa').addEventListener('click', function () {
    var t = CONFIG.share.message + ' ' + siteUrl;
    window.open('https://wa.me/?text=' + enc(t), '_blank', 'noopener');
  });

  /* ---------- reveal + lazy florals ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.reveal').forEach(function (n) { if (io && !reduce) io.observe(n); else n.classList.add('in'); });
  var fio = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); fio.unobserve(e.target); } }); }, { rootMargin: '300px' }) : null;
  $$('[data-lazy]').forEach(function (n) { if (fio) fio.observe(n); else n.classList.add('on'); });

  /* ---------- music ---------- */
  var audio = null, muted = store('wedding-muted') === '1', fadeT, started = false;
  var sBtn = $('#soundBtn');
  function syncSound() { sBtn.setAttribute('aria-pressed', muted ? 'true' : 'false'); sBtn.setAttribute('aria-label', muted ? 'Turn music on' : 'Turn music off'); }
  function fadeTo(v, ms) {
    clearInterval(fadeT); if (!audio) return; var from = audio.volume, t0 = Date.now();
    fadeT = setInterval(function () { var k = Math.min(1, (Date.now() - t0) / ms); audio.volume = Math.max(0, Math.min(1, from + (v - from) * k)); if (k >= 1) { clearInterval(fadeT); if (v === 0) audio.pause(); } }, 50);
  }
  function startMusic() {
    sBtn.hidden = false; syncSound(); if (started) return; started = true;
    if (!CONFIG.music.src) { sBtn.hidden = true; return; }
    audio = new Audio(CONFIG.music.src); audio.loop = true; audio.volume = 0; audio.preload = 'auto';
    audio.addEventListener('error', function () { sBtn.hidden = true; });
    if (!muted) { var p = audio.play(); if (p && p.catch) p.catch(function () { }); fadeTo(CONFIG.music.volume, 2200); }
  }
  sBtn.addEventListener('click', function () {
    muted = !muted; store('wedding-muted', muted ? '1' : '0'); syncSound();
    if (!audio) return;   // before the envelope is opened: just remember the choice
    if (muted) fadeTo(0, 500); else { var p = audio.play(); if (p && p.catch) p.catch(function () { }); fadeTo(CONFIG.music.volume, 800); }
  });
  sBtn.hidden = false; syncSound();

  /* ---------- envelope intro ---------- */
  var intro = $('#intro'), page = $('#page'), env = $('#env'), seal = $('#sealBtn'), flap = $('#flap'), card = $('#envCard'), orn = $('#envOrn');
  var opened = false, timers = [], anims = [], flyEl = null;
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function anim(node, kf, opt) { var a = node.animate(kf, opt); anims.push(a); return a; }

  function lockPage(on) { document.body.classList.toggle('lock', on); if (on) page.setAttribute('inert', ''); else page.removeAttribute('inert'); }
  function finishIntro() {
    timers.forEach(clearTimeout); timers = []; anims.forEach(function (a) { try { a.cancel(); } catch (e) { } }); anims = [];
    if (flyEl && flyEl.parentNode) flyEl.parentNode.removeChild(flyEl);
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    lockPage(false); window.scrollTo(0, 0);
    var h = $('.hero-names'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }
  function simpleFade() {
    lockPage(false); var a = anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: 450, fill: 'forwards' }); a.onfinish = finishIntro; later(finishIntro, 700);
  }
  function open() {
    if (opened) return; opened = true; startMusic();
    $('#skipBtn').hidden = true;
    if (reduce || !intro.animate) { simpleFade(); return; }
    var W = env.offsetWidth, H = env.offsetHeight;
    // 1. seal presses in, cracks in two, sparkle burst
    anim(seal, [{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.9)' }], { duration: 160, fill: 'forwards' });
    later(function () {
      seal.style.visibility = 'hidden'; seal.style.animation = 'none';
      [['l', 'inset(0 50% 0 0)', 'translate(-80%,40%) rotate(-26deg)'], ['r', 'inset(0 0 0 50%)', 'translate(-20%,40%) rotate(26deg)']].forEach(function (h) {
        var d = el('div', 'seal-half'); d.style.clipPath = h[1]; d.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-art"/></svg>'; env.appendChild(d);
        anim(d, [{ transform: 'translate(-50%,-50%) rotate(0)', opacity: 1 }, { transform: h[2], opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.4,0,.8,.6)', fill: 'forwards' });
      });
      for (var i = 0; i < 16; i++) {
        var s = el('i', 'spark'); env.appendChild(s); var ang = (Math.PI * 2 * i / 16) + Math.random() * .3, dist = W * (.16 + Math.random() * .2);
        anim(s, [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: 'translate(' + Math.cos(ang) * dist + 'px,' + Math.sin(ang) * dist + 'px) scale(0)', opacity: 0 }], { duration: 650 + Math.random() * 250, easing: 'ease-out', fill: 'forwards' });
      }
      anim(orn, [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(' + H * .05 + 'px)' }], { duration: 500, fill: 'forwards' });
      anim($('#envHint'), [{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: 'forwards' });
    }, 170);
    // 2. flap opens in 3D
    later(function () {
      var a = anim(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 800, easing: 'cubic-bezier(.45,.05,.3,1)', fill: 'forwards' });
      a.onfinish = function () { flap.style.transform = 'rotateX(-180deg)'; };
      later(function () { flap.style.zIndex = '2'; }, 380);
    }, 420);
    // 3. photo card slides up out of the envelope
    later(function () {
      anim(card, [{ transform: 'translateY(0)' }, { transform: 'translateY(' + (-H * .48) + 'px)' }], { duration: 850, easing: 'cubic-bezier(.3,.7,.2,1)', fill: 'forwards' });
    }, 1150);
    // 4. card flies up to fill the screen (aspect-ratio aware), envelope drops away
    later(function () {
      var r = card.getBoundingClientRect(), w = r.width, h = r.height;
      var s = Math.min(innerWidth * 0.94 / w, innerHeight * 0.8 / h);
      var dx = innerWidth / 2 - (r.left + w / 2), dy = innerHeight / 2 - (r.top + h / 2);
      flyEl = card.cloneNode(true); flyEl.removeAttribute('id'); flyEl.className = 'env-card fly';
      flyEl.style.cssText = 'position:fixed;left:' + r.left + 'px;top:' + r.top + 'px;width:' + w + 'px;height:' + h + 'px;margin:0;aspect-ratio:auto';
      // the part still tucked inside the pocket is clipped, then revealed as the card flies out
      var vis = 'polygon(0 0,100% 0,100% 71%,59.6% 100%,40.4% 100%,0 71%)', full = 'polygon(0 0,100% 0,100% 100%,59.6% 100%,40.4% 100%,0 100%)';
      document.body.appendChild(flyEl); card.style.visibility = 'hidden';
      anim(flyEl, [{ transform: 'translate(0,0) scale(1)', clipPath: vis }, { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')', clipPath: full }], { duration: 950, easing: 'cubic-bezier(.5,0,.15,1)', fill: 'forwards' });
      later(function () { anim(env, [{ transform: 'translateY(0)' }, { transform: 'translateY(' + (innerHeight * 1.1) + 'px) rotate(3deg)' }], { duration: 800, easing: 'cubic-bezier(.5,0,.9,.4)', fill: 'forwards' }); }, 150);
    }, 1950);
    // 5. cross-fade into the page
    later(function () {
      lockPage(false);
      anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'ease', fill: 'forwards' });
      anim(flyEl, [{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'ease', fill: 'forwards' });
    }, 2950);
    later(finishIntro, 3600);
  }
  seal.addEventListener('click', open);
  $('#skipBtn').addEventListener('click', function () { if (opened) return; opened = true; startMusic(); finishIntro(); });

  if (params.has('nointro')) { opened = true; finishIntro(); }
  else { lockPage(true); if (params.has('og')) document.documentElement.classList.add('og'); }
  if (params.has('og')) document.documentElement.classList.add('og');
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !opened && intro.parentNode) { /* Esc skips */ opened = true; startMusic(); finishIntro(); } });
})();
