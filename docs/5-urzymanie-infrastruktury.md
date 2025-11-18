# Krok 5: Utrzymanie infrastruktury – dlaczego to rozwiązanie jest dla Ciebie wygodne?

W poprzednich krokach zobaczyłeś, jak **edytować treść**, **dodawać nowe pliki** i **publikować zmiany**. Ten rozdział odpowiada na pytanie:

> Co dzieje się „pod spodem” i dlaczego ta strona jest łatwa, tania i bezpieczna w utrzymaniu?

Nie musisz znać technicznych szczegółów. Wystarczy, że zrozumiesz główną różnicę między tym projektem a typową stroną opartą na WordPressie.

---

### 5.1. Co to znaczy, że strona jest „statyczna” (Astro)?

Twoja strona została zbudowana w technologii **Astro**. W praktyce oznacza to, że:

- gdy publikujesz zmiany, serwer **buduje gotowy zestaw stron** (jak wydrukowana książka),
- każdy odwiedzający widzi **gotowe pliki**, bez dodatkowych obliczeń po stronie serwera,
- na serwerze **nie działa panel logowania, baza danych ani system wtyczek**.

Możesz myśleć o tym tak:

- **Astro / strona statyczna** – jak elegancko wydrukowana książka: raz przygotowana, może leżeć na półce latami, nic się „w środku” nie psuje.
- **WordPress** – jak skomplikowany program: ma panel, logowanie, wtyczki, bazę danych. Działa cały czas, więc trzeba go **regularnie aktualizować i pilnować**, aby się nie zepsuł.

Im mniej ruchomych części, tym:

- **mniej rzeczy może się popsuć**,
- **mniejsza szansa na włamanie**,
- **mniejsze koszty utrzymania**.

---

### 5.2. Astro vs WordPress – prosty przegląd

**Twoja strona (Astro, statyczna):**

- nie ma panelu administracyjnego dostępnego z internetu,
- nie korzysta z bazy danych ani wtyczek,
- działa na prostym, niezawodnym hostingu (np. GitHub Pages),
- wszystkie zmiany treści robisz **lokalnie w plikach** i wysyłasz na GitHub, jak opisano w [Krok 4: Publikacja Zmian](4-publikacja-zmian.md),
- jeśli coś pójdzie nie tak, zawsze można łatwo **wrócić do poprzedniej wersji** dzięki historii zmian w GitHub.

**Typowa strona na WordPressie:**

- ma panel logowania (login/hasło) dostępny z internetu,
- korzysta z bazy danych i wielu wtyczek (kalendarze, formularze, galerie),
- wymaga **ciągłych aktualizacji** (WordPress + wtyczki + motyw),
- po aktualizacjach zdarza się, że coś przestaje działać (np. formularz, menu, szablon),
- jest częstym celem ataków automatów próbujących zgadnąć hasło lub wykorzystać luki we wtyczkach.

W efekcie WordPress często wymaga stałej opieki technicznej, podczas gdy Twoja strona oparta na Astro może przez długi czas działać **bez żadnej interwencji serwisowej**.

---

### 5.3. Tabela porównawcza – orientacyjne koszty utrzymania

Poniższa tabela pokazuje **przykładowe, orientacyjne** koszty utrzymania typowej strony opartej na WordPressie w porównaniu z Twoją stroną opartą na Astro. Kwoty mogą się różnić w zależności od dostawcy usług, ale dobrze pokazują **różnicę skali**.

| Obszar                            | Twoja strona (Astro, GitHub Pages lub podobny hosting) | Typowa strona na WordPressie                                   |
| --------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------- |
| Miesięczny koszt hostingu         | 0–20 zł (często 0 zł przy hostingu typu GitHub Pages)  | 20–60 zł za serwer z PHP i bazą danych                         |
| Aktualizacje systemu i wtyczek    | 0 zł – brak wtyczek, aktualizacje są bardzo rzadkie    | 50–200 zł/mies. (czas specjalisty lub abonament serwisowy)     |
| Ryzyko awarii po aktualizacjach   | bardzo niskie – mało elementów, które mogą się zepsuć  | średnie/wysokie – każda aktualizacja może „rozsypać” stronę    |
| Zabezpieczenia przed włamaniami   | w praktyce brak panelu do „zhakowania”                 | typowy cel ataków automatów; wymagane dodatkowe zabezpieczenia |
| Przywracanie poprzedniej wersji   | proste – GitHub przechowuje historię zmian             | często wymaga kopii zapasowej i pomocy technicznej             |
| Roczny koszt opieki technicznej\* | 0–500 zł (w zależności od tego, czy zlecasz wsparcie)  | 600–3000 zł przy stałej umowie serwisowej                      |

\*Kwoty są **orientacyjne** i mają pokazać jedynie różnicę między prostą stroną statyczną a rozbudowanym systemem typu WordPress.

---

### 5.4. Co w praktyce oznacza utrzymanie Twojej strony?

W praktyce Twoje obowiązki sprowadzają się do trzech prostych rzeczy:

1.  **Opłacenie domeny** – np. raz w roku w firmie, w której kupiłeś adres internetowy (np. `twojadomena.pl`).
2.  **Okazjonalna edycja treści** – gdy chcesz dodać nowy projekt lub publikację, robisz to zgodnie z instrukcją z [Krok 2](2-zarzadzanie-trescia.md) i [Krok 3](3-przewodnik-po-tresciach.md).
3.  **Wysłanie zmian na GitHub** – czyli publikacja zgodnie z [Krok 4](4-publikacja-zmian.md).

Nie musisz:

- logować się do paneli administracyjnych na serwerze,
- pilnować aktualizacji dziesiątek wtyczek,
- martwić się, że po jednej aktualizacji nagle przestanie działać cała strona.

---

### 5.5. Kiedy możesz potrzebować wsparcia technicznego?

Choć bieżąca obsługa strony jest prosta, mogą pojawić się sytuacje, w których warto poprosić o pomoc specjalistę, na przykład gdy:

- chcesz **zmienić wygląd strony** (nowy układ, nowe sekcje),
- chcesz dodać **zupełnie nowy typ treści** (np. blog z komentarzami),
- planujesz **migrację strony** na inny adres lub inny typ hostingu,
- pojawi się nietypowy błąd, którego nie możesz sam zidentyfikować.

Są to jednak sytuacje **sporadyczne**, a nie stały, comiesięczny obowiązek, jak w przypadku opieki nad rozbudowaną stroną na WordPressie.
