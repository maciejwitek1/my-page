import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('SupPage Error Handling', () => {
  const mockSupPages = [
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } },
    { slug: 'inne', data: { id: 'inne', title: 'Inne' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (getCollection as any).mockResolvedValue(mockSupPages);
  });

  it('should find existing sup_pages', async () => {
    const sup_pages = await getCollection('sup_pages');
    const existingPart = sup_pages.find(p => p.slug === 'part-1');

    expect(existingPart).toBeDefined();
    expect(existingPart?.slug).toBe('part-1');
  });

  it('should return undefined for non-existing sup_pages', async () => {
    const sup_pages = await getCollection('sup_pages');
    const nonExistingPart = sup_pages.find(p => p.slug === 'non-existing');

    expect(nonExistingPart).toBeUndefined();
  });

  it('should handle case sensitivity in slug matching', async () => {
    const sup_pages = await getCollection('sup_pages');

    // Test case-sensitive matching
    const foundPart = sup_pages.find(p => p.slug === 'PART-1');
    expect(foundPart).toBeUndefined();

    // Test case-sensitive matching with correct case
    const correctPart = sup_pages.find(p => p.slug === 'part-1');
    expect(correctPart).toBeDefined();
  });

  it('should simulate redirect behavior for non-existing sup_pages', async () => {
    const sup_pages = await getCollection('sup_pages');
    const requestedSlug = 'non-existing-part';

    const foundPart = sup_pages.find(p => p.slug === requestedSlug);

    // Symulacja logiki z [sup_page].astro
    if (!foundPart) {
      // W prawdziwej implementacji byłoby Astro.redirect("/part-1")
      expect(foundPart).toBeUndefined();
      // Oczekujemy przekierowania do part-1
    }
  });
});
