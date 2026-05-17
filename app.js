var products = [
  {
    id: 'nano',
    name: 'XC Nano',
    chip: 'BM1366',
    hashrate: '500 GH/s',
    power: '15W ±10%',
    efficiency: '30 J/TH',
    noise: '<25 dB',
    size: '88 × 62 × 28 mm',
    weight: '120g',
    cooling: 'Cooling Silent Fan + Aluminum Heatsink',
    psu: 'PSU USB-C 5V/3A',
    price: '$49',
    featured: false,
    badge: null,
    img: 'images/nano.svg'
  },
  {
    id: 'one',
    name: 'XC One',
    chip: 'BM1368',
    hashrate: '1.2 TH/s',
    power: '22W ±10%',
    efficiency: '18 J/TH',
    noise: '<28 dB',
    size: '98 × 70 × 30 mm',
    weight: '160g',
    cooling: 'Cooling Silent Fan + Copper Heatsink',
    psu: 'PSU USB-C PD 12V/2A',
    price: '$89',
    featured: true,
    badge: 'hot',
    img: 'images/one.svg'
  },
  {
    id: 'pro',
    name: 'XC Pro',
    chip: 'BM1370',
    hashrate: '2.8 TH/s',
    power: '55W ±8%',
    efficiency: '19.6 J/TH',
    noise: '<32 dB',
    size: '120 × 85 × 35 mm',
    weight: '240g',
    cooling: 'Cooling Dual Silent Fans + Heat Pipe',
    psu: 'PSU DC 12V/5A Adapter',
    price: '$169',
    featured: false,
    badge: 'new',
    img: 'images/pro.svg'
  },
  {
    id: 'ultra',
    name: 'XC Ultra',
    chip: 'BM1372 ×1',
    hashrate: '5.5 TH/s',
    power: '105W ±8%',
    efficiency: '19.1 J/TH',
    noise: '<35 dB',
    size: '155 × 100 × 42 mm',
    weight: '380g',
    cooling: 'Cooling 12cm Silent Fan + Heat Pipe + Large Fin Array',
    psu: 'PSU DC 12V/10A Adapter',
    price: '$289',
    featured: false,
    badge: null,
    img: 'images/ultra.svg'
  },
  {
    id: 'max',
    name: 'XC Max',
    chip: 'BM1372 ×2',
    hashrate: '11 TH/s',
    power: '210W ±8%',
    efficiency: '19.1 J/TH',
    noise: '<38 dB',
    size: '180 × 120 × 55 mm',
    weight: '520g',
    cooling: 'Cooling Dual 12cm Fans + Dual Heat Pipes + Tower Fins',
    psu: 'PSU DC 12V/20A Adapter',
    price: '$499',
    featured: false,
    badge: 'limited',
    img: 'images/max.svg'
  }
];

var features = [
  { icon: 'fa-code', titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: 'fa-volume-off', titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: 'fa-plug', titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: 'fa-microchip', titleKey: 'feature4Title', descKey: 'feature4Desc' }
];

var specKeys = [
  { key: 'hashrate', labelKey: 'compareHashrate' },
  { key: 'chip', labelKey: 'compareChip' },
  { key: 'power', labelKey: 'comparePower' },
  { key: 'efficiency', labelKey: 'compareEfficiency' },
  { key: 'noise', labelKey: 'compareNoise' },
  { key: 'size', labelKey: 'compareSize' },
  { key: 'weight', labelKey: 'compareWeight' },
  { key: 'cooling', labelKey: 'compareCooling' },
  { key: 'psu', labelKey: 'comparePSU' },
  { key: 'price', labelKey: 'comparePrice' }
];

var badges = {
  hot: { cls: 'bg-amber-400 text-amber-900' },
  'new': { cls: 'bg-blue-400 text-blue-900' },
  limited: { cls: 'bg-purple-400 text-purple-900' }
};

function renderProducts() {
  var grid = document.getElementById('productGrid');
  if (!grid) return;
  var html = '';
  products.forEach(function (p) {
    var badgeHtml = '';
    if (p.badge && badges[p.badge]) {
      var b = badges[p.badge];
      badgeHtml = '<span class="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ' + b.cls + '">' + __('badge' + p.badge.charAt(0).toUpperCase() + p.badge.slice(1)) + '</span>';
    }
    html +=
      '<a href="product.html?id=' + p.id + '" class="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden relative flex flex-col group cursor-pointer">' +
        badgeHtml +
        '<div class="relative overflow-hidden bg-gray-900 h-48 flex items-center justify-center">' +
          '<img src="' + p.img + '" alt="' + p.name + '" class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />' +
        '</div>' +
        '<div class="p-5 flex-1">' +
          '<div class="flex items-center justify-between mb-3">' +
            '<div>' +
              '<h3 class="text-lg font-bold">' + p.name + '</h3>' +
              '<p class="text-xs text-gray-400 mt-0.5">' + __(p.id.charAt(0).toUpperCase() + p.id.slice(1)) + '</p>' +
            '</div>' +
            '<div class="flex items-center gap-1.5">' +
              '<span class="glow-dot"></span>' +
              '<span class="text-xs text-green-600 font-medium">' + __('inStock') + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="text-2xl font-extrabold text-gray-900 mb-1">' + p.hashrate + '</div>' +
          '<p class="text-sm text-gray-500 mb-4">' + p.power + ' · ' + p.efficiency + '</p>' +
          '<div class="space-y-2 text-sm text-gray-600">' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('chip') + '</span><span class="font-medium">' + p.chip + '</span></div>' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('noise') + '</span><span class="font-medium">' + p.noise + '</span></div>' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('size') + '</span><span class="font-medium">' + p.size + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="px-5 pb-5 pt-0">' +
          '<div class="flex items-baseline gap-1 mb-3">' +
            '<span class="text-2xl font-extrabold text-brand-600">' + p.price + '</span>' +
            '<span class="text-xs text-gray-400">' + __('starting') + '</span>' +
          '</div>' +
          '<span class="block text-center bg-gray-900 group-hover:bg-brand-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">' +
            __('buyNow') +
          '</span>' +
        '</div>' +
      '</a>';
  });
  grid.innerHTML = html;
}

function renderCompareTable() {
  var table = document.getElementById('compareTable');
  if (!table) return;
  var html = '<thead><tr class="border-b border-gray-200 bg-gray-50">';
  html += '<th class="px-5 py-4 text-sm font-semibold text-gray-500 sticky left-0 bg-gray-50">' + __('compareParam') + '</th>';
  products.forEach(function (p) {
    html += '<th class="px-5 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">' + p.name + '</th>';
  });
  html += '</tr></thead><tbody>';

  specKeys.forEach(function (sk, idx) {
    var rowClass = idx % 2 === 0 ? 'spec-row' : '';
    html += '<tr class="border-b border-gray-100 ' + rowClass + '">';
    html += '<td class="px-5 py-3.5 text-sm font-medium text-gray-500 sticky left-0 ' + (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50') + '">' + __(sk.labelKey) + '</td>';
    products.forEach(function (p) {
      var val = p[sk.key];
      if (sk.key === 'cooling' || sk.key === 'psu') {
        val = __(val) || val;
      }
      html += '<td class="px-5 py-3.5 text-sm font-semibold text-gray-900 whitespace-nowrap">' + val + '</td>';
    });
    html += '</tr>';
  });

  html += '</tbody>';
  table.innerHTML = html;
}

function renderFeatures() {
  var grid = document.getElementById('featuresGrid');
  if (!grid) return;
  var html = '';
  features.forEach(function (f) {
    html +=
      '<div class="feature-card text-center">' +
        '<div class="feature-icon-wrap w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">' +
          '<i class="fa-solid ' + f.icon + ' text-brand-600 text-xl"></i>' +
        '</div>' +
        '<h4 class="font-semibold text-gray-900 mb-2">' + __(f.titleKey) + '</h4>' +
        '<p class="text-sm text-gray-500 leading-relaxed">' + __(f.descKey) + '</p>' +
      '</div>';
  });
  grid.innerHTML = html;
}

function populateModelSelect() {
  var selects = document.querySelectorAll('select[name="model"]');
  selects.forEach(function (sel) {
    var html = '<option value="">' + __('formModelPlaceholder') + '</option>';
    products.forEach(function (p) {
      html += '<option value="' + p.name + '">' + p.name + ' — ' + p.hashrate + ' (' + p.price + ')</option>';
    });
    sel.innerHTML = html;
  });
}

function renderI18nText() {
  document.title = __('siteTitle');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', __('siteDesc'));

  var elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var placeholder = el.getAttribute('data-i18n-placeholder');
    if (placeholder) {
      el.setAttribute('placeholder', __(placeholder));
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    el.innerHTML = __(key);
  });

  var attrs = document.querySelectorAll('[data-i18n-attr]');
  attrs.forEach(function (el) {
    var parts = el.getAttribute('data-i18n-attr').split(':');
    if (parts.length === 2) {
      el.setAttribute(parts[0], __(parts[1]));
    }
  });
}

function updateLangSwitcher() {
  var lang = getLang();
  var btns = document.querySelectorAll('[data-lang-switch]');
  btns.forEach(function (btn) {
    btn.innerHTML = lang === 'en' ? '中文' : 'EN';
    btn.setAttribute('title', lang === 'en' ? '切换到中文' : 'Switch to English');
  });
}

function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });
}

function initMobileMenu() {
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.add('hidden');
    });
  });
}

function initLangSwitcher() {
  var btns = document.querySelectorAll('[data-lang-switch]');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var newLang = getLang() === 'en' ? 'zh' : 'en';
      setLang(newLang);
      renderAll();
    });
  });
}

function initForm() {
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {
      name: form.name.value.trim(),
      contact: form.contact.value.trim(),
      model: form.model.value,
      message: form.message.value.trim()
    };
    if (!data.name || !data.contact) {
      alert(__('formError'));
      return;
    }
    console.log('Form submitted:', data);
    form.reset();
    if (success) {
      success.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i>' + __('formSuccess');
      success.classList.remove('hidden');
      setTimeout(function () {
        success.classList.add('hidden');
      }, 5000);
    }
  });
}

function initScrollReveal() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.product-card, .feature-card').forEach(function (el) {
    observer.observe(el);
  });
}

function renderAll() {
  renderI18nText();
  renderProducts();
  renderCompareTable();
  renderFeatures();
  populateModelSelect();
  updateLangSwitcher();
}

window.addEventListener('xclangchange', renderAll);

renderAll();
initNavbar();
initMobileMenu();
initLangSwitcher();
initForm();
initScrollReveal();
