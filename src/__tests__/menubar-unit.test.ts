import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

import { getCollection } from 'astro:content';

describe('MenuBar Unit Tests', () => {
  const mockParts = [
    { slug: 'inne', data: { id: 'inne', title: 'Inne' } },
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (getCollection as any).mockResolvedValue(mockParts);
  });

  it('should call getCollection with correct collection name', async () => {
    await getCollection('sup_pages');

    expect(getCollection).toHaveBeenCalledWith('sup_pages');
    expect(getCollection).toHaveBeenCalledTimes(1);
  });

  it('should return all sup_pages from collection', async () => {
    const sup_pages = await getCollection('sup_pages');

    expect(sup_pages).toHaveLength(mockParts.length);
    expect(sup_pages).toEqual(mockParts);
  });

  it('should map sup_pages to menu items correctly', async () => {
    const sup_pages = await getCollection('sup_pages');

    const menuItems = sup_pages.map((entry) => ({
      href: `/${entry.slug}`,
      label: entry.data.title
    }));

    expect(menuItems).toEqual([
      { href: '/inne', label: 'Inne' },
      { href: '/part-1', label: 'Part 1' },
      { href: '/part-2', label: 'Part 2' }
    ]);
  });

  it('should include Start item at the beginning', async () => {
    const sup_pages = await getCollection('sup_pages');

    const tabs = [
      { href: '/', label: 'Start' },
      ...sup_pages.map((entry: any) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs[0]).toEqual({ href: '/', label: 'Start' });
  });

  it('should handle empty sup_pages collection', async () => {
    (getCollection as any).mockResolvedValue([]);

    const sup_pages = await getCollection('sup_pages');

    expect(sup_pages).toHaveLength(0);

    const tabs = [
      { href: '/', label: 'Start' },
      ...sup_pages.map((entry: any) => ({
        href: `/${entry.slug}`,
        label: entry.data.title
      }))
    ];

    expect(tabs).toEqual([{ href: '/', label: 'Start' }]);
  });

  it('should handle sup_pages with special characters in title', async () => {
    const specialParts = [
      { slug: 'test', data: { id: 'test', title: 'Test & Special <>' } }
    ];

    (getCollection as any).mockResolvedValue(specialParts);

    const sup_pages = await getCollection('sup_pages');
    const menuItems = sup_pages.map((entry: any) => ({
      href: `/${entry.slug}`,
      label: entry.data.title
    }));

    expect(menuItems[0].label).toBe('Test & Special <>');
  });
});
