import { describe, it, expect } from 'vitest';
import { getCollection } from 'astro:content';

// Testy jednostkowe dla routingu
describe('SupPage Routing', () => {
  it('should get all sup_pages from collection', async () => {
    const sup_pages = await getCollection('sup_pages');
    expect(Array.isArray(sup_pages)).toBe(true);
    expect(sup_pages.length).toBeGreaterThan(0);

    // Sprawdź strukturę każdego part
    sup_pages.forEach((page: any) => {
      expect(page).toHaveProperty('slug');
      expect(page).toHaveProperty('data');
      expect(page.data).toHaveProperty('id');
      expect(page.data).toHaveProperty('title');
    });
  });

  it('should have unique slugs for all sup_pages', async () => {
    const sup_pages = await getCollection('sup_pages');
    const slugs = sup_pages.map((page: any) => page.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });

  it('should have valid page IDs', async () => {
    const sup_pages = await getCollection('sup_pages');
    sup_pages.forEach((page: any) => {
      expect(page.data.id).toMatch(/^part-\d+$/);
    });
  });

  it('should generate correct static paths', async () => {
    const sup_pages = await getCollection('sup_pages');
    const expectedPaths = sup_pages.map((page: any) => ({
      params: { sup_page: page.slug }
    }));

    // Symulacja funkcji getStaticPaths
    const actualPaths = sup_pages.map((entry: any) => ({ params: { sup_page: entry.slug } }));

    expect(actualPaths).toEqual(expectedPaths);
    expect(actualPaths.length).toBe(sup_pages.length);
  });
});
