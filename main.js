(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav: borde al scrollear + menú mobile
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav__links a').forEach(a =>
    a.addEventListener('click', () => { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); })
  );

  // Aparición al scrollear
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.report, .timeline').forEach(el => el.classList.add('in'));
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .report, .timeline').forEach(el => io.observe(el));
  document.querySelectorAll('.report__row').forEach((r, i) => r.style.transitionDelay = `${i * 110}ms`);

  // Hero: ciclo documento → prueba de vida → verificado
  const stages = document.querySelectorAll('#heroPhone .stage');
  const bars = document.querySelectorAll('#heroPhone .sdk-steps i');
  let step = 0;
  const show = n => {
    stages.forEach((s, i) => s.classList.toggle('is-active', i === n));
    bars.forEach((b, i) => b.classList.toggle('on', i <= n));
  };
  if (reduced) show(2);
  else setInterval(() => { step = (step + 1) % stages.length; show(step); }, 2800);

  // SDK studio: presets + controles → teléfono + SdkConfig
  const PRESETS = {
    verde:   { color: '#12904F', theme: 'light', shape: 'LARGE', font: 'jakarta', brand: 'tuapp' },
    oro:     { color: '#F0B90B', theme: 'dark',  shape: 'SMALL', font: 'grotesk', brand: 'nova' },
    azul:    { color: '#3D6BFF', theme: 'dark',  shape: 'LARGE', font: 'jakarta', brand: 'vertex' },
    violeta: { color: '#5B3BD6', theme: 'light', shape: 'LARGE', font: 'jakarta', brand: 'lumen' },
    coral:   { color: '#FF5A36', theme: 'light', shape: 'FULL',  font: 'grotesk', brand: 'plata' },
  };
  const THEMES = {
    light: { bg: '#FFFFFF', sf: '#F3F5F3', tx: '#0E120F', mt: '#6A716B', ln: '#E3E6E3' },
    dark:  { bg: '#0B0E11', sf: '#1A1E23', tx: '#EAECEF', mt: '#8B939C', ln: '#2A2F36' },
  };
  const SHAPES = { NONE: [0, 0], SMALL: [8, 10], LARGE: [14, 18], FULL: [999, 26] };
  const FONTS = {
    jakarta: ['"Plus Jakarta Sans", system-ui, sans-serif', 'PlusJakartaSans'],
    grotesk: ['"Space Grotesk", system-ui, sans-serif', 'SpaceGrotesk'],
    serif:   ['Georgia, "Times New Roman", serif', 'FontFamily.Serif'],
  };
  const T = {
    es: { w_title: '{b} necesita verificar tu identidad', w_sub: 'Te lleva menos de un minuto.', w_1: 'Tené tu documento a mano', w_2: 'Buscá un lugar con buena luz', w_3: 'Vamos a usar tu cámara', w_btn: 'Comenzar', powered: 'verificado por chmod',
          d_title: 'Foto de tu documento', d_sub: 'Frente · buena luz, sin reflejos', d_hint: 'Ubicalo dentro del marco', d_btn: 'Sacar foto',
          r_title: '¡Listo! Ya verificamos tu identidad', r_sub: 'Ya podés seguir usando {b}.', r_1: 'Documento', r_2: 'Prueba de vida', r_btn: 'Continuar' },
    pt: { w_title: '{b} precisa verificar sua identidade', w_sub: 'Leva menos de um minuto.', w_1: 'Tenha seu documento em mãos', w_2: 'Procure um lugar bem iluminado', w_3: 'Vamos usar sua câmera', w_btn: 'Começar', powered: 'verificado por chmod',
          d_title: 'Foto do seu documento', d_sub: 'Frente · boa luz, sem reflexos', d_hint: 'Posicione dentro da moldura', d_btn: 'Tirar foto',
          r_title: 'Pronto! Sua identidade foi verificada', r_sub: 'Você já pode continuar usando {b}.', r_1: 'Documento', r_2: 'Prova de vida', r_btn: 'Continuar' },
    en: { w_title: '{b} needs to verify your identity', w_sub: 'It takes less than a minute.', w_1: 'Have your ID at hand', w_2: 'Find a well-lit place', w_3: 'We’ll use your camera', w_btn: 'Get started', powered: 'verified by chmod',
          d_title: 'Photo of your ID', d_sub: 'Front · good light, no glare', d_hint: 'Fit it inside the frame', d_btn: 'Take photo',
          r_title: 'Done! Your identity is verified', r_sub: 'You can keep using {b}.', r_1: 'ID document', r_2: 'Liveness check', r_btn: 'Continue' },
  };

  const studio = document.querySelector('.studio');
  if (studio) {
    const sdk = document.getElementById('sdkPhone');
    const code = document.getElementById('liveCode');
    const brandInput = document.getElementById('brandInput');
    const colorPick = document.getElementById('colorPick');
    const optWelcome = document.getElementById('optWelcome');
    const optResult = document.getElementById('optResult');
    const t = s => (window.i18n ? window.i18n.t(s) : s);
    const st = { ...PRESETS.verde, lang: (window.i18n && window.i18n.lang) || 'es', welcome: true, result: true, screen: 'welcome' };
    let prevCode = {};

    const onColor = hex => {
      const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
        .map(c => c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4 ? '#0B0E11' : '#FFFFFF';
    };
    const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    const renderCode = () => {
      const vals = {
        theme: `ThemeMode.${st.theme.toUpperCase()}`,
        color: `"${st.color.toUpperCase()}"`,
        font: FONTS[st.font][1],
        shape: `ShapePreset.${st.shape}`,
        lang: `Language.${st.lang}`,
        welcome: String(st.welcome),
        result: String(st.result),
      };
      const v = k => `<span class="v${prevCode[k] !== undefined && prevCode[k] !== vals[k] ? ' flash' : ''}">${esc(vals[k])}</span>`;
      code.innerHTML =
`<span class="t">SdkConfig</span>(
  appearance = <span class="t">Appearance</span>(
    theme = ${v('theme')},
    ${st.theme} = <span class="t">ThemeColors</span>(primary = ${v('color')}),
    typography = <span class="t">Typography</span>(
      fontFamily = ${v('font')}
    ),
    shapes = <span class="t">Shapes</span>(${v('shape')})
  ),
  locale = <span class="t">Locale</span>(defaultLanguage = ${v('lang')}),
  showWelcomeScreen = ${v('welcome')},
  showResultScreen = ${v('result')}
)
<span class="c">${esc(t('// + tus textos: locale.texts'))}</span>`;
      prevCode = vals;
    };

    const setSeg = (name, value) => studio.querySelectorAll(`[data-ctl="${name}"] button`)
      .forEach(b => b.classList.toggle('is-on', b.dataset.v === value));

    const render = () => {
      const th = THEMES[st.theme], [rb, rc] = SHAPES[st.shape];
      const vars = { '--p': st.color, '--onp': onColor(st.color), '--bg': th.bg, '--sf': th.sf, '--tx': th.tx, '--mt': th.mt, '--ln': th.ln,
                     '--rb': `${rb}px`, '--rc': `${rc}px`, '--ff': FONTS[st.font][0] };
      Object.entries(vars).forEach(([k, val]) => sdk.style.setProperty(k, val));

      const brand = brandInput.value.trim() || 'tuapp';
      sdk.querySelectorAll('[data-t]').forEach(el => { el.textContent = T[st.lang][el.dataset.t].replace('{b}', brand); });

      // Pantallas apagadas: se deshabilita su pestaña
      const allowed = { welcome: st.welcome, doc: true, result: st.result };
      if (!allowed[st.screen]) st.screen = 'doc';
      studio.querySelectorAll('[data-ctl="screen"] button').forEach(b => { b.disabled = !allowed[b.dataset.v]; });
      sdk.querySelectorAll('.sdk-screen').forEach(s => s.classList.toggle('is-on', s.dataset.s === st.screen));

      ['theme', 'lang', 'shape', 'font', 'screen'].forEach(k => setSeg(k, st[k]));
      studio.querySelectorAll('.swatch[data-color]').forEach(s => s.classList.toggle('is-active', s.dataset.color.toLowerCase() === st.color.toLowerCase()));
      colorPick.value = st.color;
      studio.querySelectorAll('.preset').forEach(p => {
        const pr = PRESETS[p.dataset.preset];
        p.classList.toggle('is-active', ['color', 'theme', 'shape', 'font'].every(k => pr[k].toLowerCase() === st[k].toLowerCase()));
      });
      renderCode();
    };

    studio.querySelectorAll('.preset').forEach(p => p.addEventListener('click', () => {
      const pr = PRESETS[p.dataset.preset];
      Object.assign(st, pr);
      brandInput.value = pr.brand;
      render();
    }));
    studio.querySelectorAll('.seg[data-ctl]').forEach(seg => seg.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      st[seg.dataset.ctl] = b.dataset.v;
      render();
    }));
    studio.querySelectorAll('.swatch[data-color]').forEach(s => s.addEventListener('click', () => { st.color = s.dataset.color; render(); }));
    colorPick.addEventListener('input', () => { st.color = colorPick.value; render(); });
    brandInput.addEventListener('input', render);
    optWelcome.addEventListener('change', () => { st.welcome = optWelcome.checked; render(); });
    optResult.addEventListener('change', () => { st.result = optResult.checked; render(); });

    document.getElementById('copyCode').addEventListener('click', async e => {
      try { await navigator.clipboard.writeText(code.textContent); e.target.textContent = t('copiado ✓'); }
      catch { e.target.textContent = t('no se pudo copiar'); }
      setTimeout(() => { e.target.textContent = t('copiar'); }, 1600);
    });

    // El idioma de la página arrastra al del teléfono (después se puede cambiar por separado)
    addEventListener('langchange', e => { st.lang = e.detail; render(); });

    render();
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
