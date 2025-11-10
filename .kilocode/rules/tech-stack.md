# Stos Technologiczny i Założenia

## Założenia Architektoniczne
- **Generator Stron Statycznych**: Strona jest generowana jako zbiór statycznych plików HTML, CSS i JS przez Astro. To podejście zapewnia maksymalną wydajność, bezpieczeństwo i prostotę hostingu. Należy utrzymać tę strategię.
- **Zarządzanie Treścią**: Cała treść merytoryczna (biografia, projekty, publikacje) jest zarządzana w plikach `.mdx`. Pozwala to na łatwą edycję treści bez potrzeby modyfikacji kodu komponentów.
    - Główny katalog treści: [`src/content/`](src/content/)
    - Podkatalogi: [`bio/`](src/content/bio/), [`projects/`](src/content/projects/), [`publications/`](src/content/publications/)

## Technologie Główne
- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Treść**: MDX (Markdown z komponentami Astro)
- **Język**: TypeScript
- **Testowanie**: Vitest

## Kluczowe Pakiety
- **`@astrojs/mdx`**: Obsługa plików `.mdx`.
- **`@astrojs/sitemap`**: Generowanie mapy strony.
- **`astro-icon`**: Komponenty ikon SVG.
- **`zod`**: Walidacja schematów dla kolekcji treści.

## Pliki Konfiguracyjne
- **`astro.config.mjs`**: Główna konfiguracja Astro (integracje, output).
- **`tailwind.config.mjs`**: Konfiguracja Tailwind CSS.
- **`tsconfig.json`**: Konfiguracja TypeScript.
- **`vitest.config.ts`**: Konfiguracja testów Vitest.
- **`src/content.config.ts`**: Definicje schematów dla treści (projekty, publikacje).
