## Przegląd projektu (Overview)

### Strona wizytówkowa dla Macieja Witka

### Struktura strony

Każda podstrona serwisu posiada wspólny element nawigacyjny - **Menu Bar**, który jest zdefiniowany w komponencie [`src/components/MenuBar.astro`].

Strona dzieli się na 4 podstawowe podstrony:

-   **ABOUT**
    Strona `ABOUT` zawiera:
    1.  Podstawowy opis strony (treść znajduje się w [`src/content/bio/index.mdx`]).
    2.  Linki do innych powiązanych z Maciejem Witkiem serwisów.
    3.  Dane kontaktowe.
    4.  Link do CV [`public/documents/cv.pdf`].

-   **PROJECTS**
    Strona `PROJECTS` zawiera:
    1.  Listę projektów z udziałem Macieja Witka:
        -   projektów *current* (obecnie rozwijanych).
        -   projektów *past* (zakończonych).
    2.  Treść każdego projektu zawiera się w jego dedykowanym pliku MDX w katalogu [`src/content/projects/`].
    3.  Każdy projekt ma własną podstronę, generowaną dynamicznie przez [`src/pages/projects/[project].astro`].
    4.  Powtarzalne elementy struktury projektów są zdefiniowane w [`src/content.config.ts`].

-   **PUBLICATIONS**
    Strona `PUBLICATIONS` zawiera:
    1.  Listę publikacji autorstwa Macieja Witka:
        -   publikacji polskich.
        -   publikacji angielskich.
    2.  Treść każdej publikacji zawiera się w jej dedykowanym pliku MDX w katalogu [`src/content/publications/`](src/content/publications/).
    3.  Każda publikacja ma własną podstronę, generowaną dynamicznie przez [`src/pages/publications/[publication].astro`].
    4.  Powtarzalne elementy struktury publikacji są zdefiniowane w [`src/content.config.ts`].

-   **TEACHING**
    Treść strony `TEACHING` jest zdefiniowana w pliku [`src/content/pages/teaching.mdx`].

---

## Struktura Techniczna Projektu

Ta sekcja opisuje techniczny układ plików i katalogów w projekcie opartym na frameworku Astro.

### Kluczowe Katalogi

-   **`public/`**: Zawiera wszystkie statyczne zasoby (obrazy, dokumenty, fonty), które są kopiowane bezpośrednio do finalnej wersji strony bez przetwarzania.
    -   [`public/documents/`](public/documents/): Przechowuje dokumenty, np. CV.
    -   [`public/images/`](public/images/): Zawiera obrazy i ikony.
-   **`src/`**: Główny katalog z kodem źródłowym aplikacji.
    -   [`src/components/`](src/components/): Reużywalne komponenty interfejsu użytkownika (np. menu, przyciski).
    -   [`src/content/`](src/content/): Katalog, w którym zarządzana jest treść strony (biografia, projekty, publikacje) za pomocą Astro Content Collections.
    -   [`src/layouts/`](src/layouts/): Główne szablony (layouty) stron, [`MainLayout.astro`](src/layouts/MainLayout.astro).
    -   [`src/parts/`](src/parts/): Definiuje routing strony. Pliki w tym katalogu stają się podstronami. Zawiera dynamiczne trasy (`[...].astro`) do generowania stron projektów i publikacji.
    -   [`src/styles/`](src/styles/): Globalne style CSS.
-   **`src/__tests__/`**: Katalog z testami automatycznymi.

### Pliki Konfiguracyjne

-   [`astro.config.mjs`](astro.config.mjs): Główny plik konfiguracyjny Astro.
-   [`tailwind.config.mjs`](tailwind.config.mjs): Konfiguracja frameworka Tailwind CSS.
-   [`tsconfig.json`](tsconfig.json): Konfiguracja TypeScript.
-   [`src/content.config.ts`](src/content.config.ts): Definicja schematów dla kolekcji treści (projekty, publikacje).