# chmod-landing

Landing estática de chmod. HTML + CSS + JS sin build.

- `index.html` — contenido (el logo está inline como `<symbol id="chmod-logo">`)
- `styles.css` — tokens de marca en `:root`
- `main.js` — animación del hero, configurador del SDK, reveal al scrollear
- `i18n.js` — traducciones EN/PT. La clave es el texto en español del HTML: **si cambiás un texto, cambiá su clave**, o queda en español en EN/PT.
  Idioma: `?lang=en|pt` → última elección → idioma del navegador → español.

## Ver local
```bash
python3 -m http.server 8765
```

## Publicar en GitHub Pages
Settings → Pages → Deploy from a branch → `main` / root. `.nojekyll` ya está.

## Pendiente
- Dominio propio (`chmodlab.com`): archivo `CNAME` + registro DNS.
