# Zasady Stylizacji

Ten dokument określa kluczowe zasady i dobre praktyki dotyczące stylizacji komponentów i stron w tym projekcie. Celem jest utrzymanie spójności wizualnej, ułatwienie zarządzania stylami oraz zapewnienie łatwej rozbudowy.

## 1. Zarządzanie Kolorami (Color Management)

**Reguła:** Wszystkie kolory używane w projekcie muszą być zdefiniowane jako zmienne CSS w pliku [`src/styles/global.css`](src/styles/global.css). Należy unikać hardkodowania wartości kolorów (np. `color: #FFFFFF`) bezpośrednio w komponentach lub klasach Tailwind.

### Implementacja:

-   **Definicja Zmiennych:** Kolory są zdefiniowane w bloku `:root` dla domyślnego motywu (dark mode) oraz w bloku `html[data-theme='light']` dla jasnego motywu.
-   **Nazewnictwo:** Używaj semantycznych nazw zmiennych, które opisują ich funkcję, a nie konkretny kolor (np. `--color-bg`, `--color-fg`, `--color-link-hover-bg`).
-   **Użycie w CSS:** W pliku `global.css` odwołuj się do kolorów za pomocą `var(--nazwa-zmiennej)`.
-   **Użycie z Tailwind CSS:** Aby używać zmiennych kolorów z klasami Tailwind, należy je zmapować w pliku [`tailwind.config.mjs`](tailwind.config.mjs) w sekcji `theme.extend.colors`.

    *Przykład konfiguracji w `tailwind.config.mjs`:*
    ```javascript
    theme: {
      extend: {
        colors: {
          'background': 'var(--color-bg)',
          'foreground': 'var(--color-fg)',
          'menu-bg': 'var(--color-menu-bg)',
        }
      }
    }
    ```
    Dzięki temu można używać klas takich jak `bg-background` czy `text-foreground`.

## 2. Globalne Klasy vs. Klasy Tailwind

**Reguła:** Zawsze w pierwszej kolejności staraj się używać istniejących, globalnych klas zdefiniowanych w [`src/styles/global.css`](src/styles/global.css). Jeśli styl, którego potrzebujesz, jest unikalny i nie ma odpowiednika w globalnych klasach, użyj klas Tailwind. Jeśli zauważysz, że dany zestaw klas Tailwind powtarza się w wielu miejscach, rozważ stworzenie nowej, globalnej klasy.

### Hierarchia Postępowania:

1.  **Użyj globalnej klasy:** Sprawdź, czy w `global.css` istnieje już klasa, która realizuje potrzebny styl (np. `.h1-global`, `.cv-button`).
2.  **Użyj klas Tailwind:** Jeśli nie ma odpowiedniej klasy globalnej, skomponuj styl za pomocą klas `utility` od Tailwind.
3.  **Stwórz nową klasę globalną:** Jeśli dany wzorzec stylów (złożony z wielu klas Tailwind) zaczyna się powtarzać w co najmniej 2-3 miejscach, przenieś go do `global.css` jako nową, reużywalną klasę. To centralizuje logikę i ułatwia przyszłe zmiany.

## 3. Komponenty Reużywalne

**Reguła:** Dąż do maksymalnego wykorzystania reużywalnych komponentów. Zamiast powielać kod HTML i logikę stylizacji, twórz komponenty, które hermetyzują dany element interfejsu.

### Wskazówki:

-   **Identyfikacja Kandydatów:** Jeśli zauważysz powtarzający się fragment UI (np. przycisk, kafelek, link z ikoną), jest to idealny kandydat na osobny komponent w katalogu [`src/components/`](src/components/).
-   **Propsy do Konfiguracji:** Projektuj komponenty tak, aby można je było konfigurować za pomocą propsów (np. tekst, URL, wariant wyglądu), co zwiększa ich elastyczność.
-   **Stylizacja w Komponentach:** Stylizacja powinna odbywać się wewnątrz komponentu, z wykorzystaniem wcześniej opisanych zasad (globalne klasy i klasy Tailwind). Unikaj stylów, które "wyciekają" i wpływają na inne elementy strony.
