# Ikigai Afribusiness — Site statique

Site de capture autonome (HTML/CSS/JS pur, sans build).

## Lancer en local

- Option 1 : double-clique sur `index.html`
- Option 2 (recommandé) : ouvre le dossier dans VS Code et lance **Live Server** sur `index.html`

## Structure

```
ikigai-site/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── projet-zero-book.jpg
```

## Personnaliser les couleurs

Toutes les couleurs sont des variables CSS définies dans `:root` au début de `styles.css`.
Modifie par exemple `--color-primary`, `--color-cta`, `--color-accent` pour changer la charte.

## Lien WhatsApp

Le numéro est défini dans `script.js` (variable `whatsappUrl`).
