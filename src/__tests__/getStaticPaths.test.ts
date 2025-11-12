import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dla astro:content
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

// Import po mocku
import { getCollection } from 'astro:content';

describe('getStaticPaths function', () => {
  const mockParts = [
    { slug: 'part-1', data: { id: 'part-1', title: 'Part 1' } },
    { slug: 'part-2', data: { id: 'part-2', title: 'Part 2' } },
    { slug: 'part-3', data: { id: 'part-3', title: 'Part 3' } }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (getCollection as any).mockResolvedValue(mockParts);
  });

  it('should return array of path objects', async () => {
    const paths = mockParts.map((entry) => ({ params: { part: entry.slug } }));

    expect(paths).toEqual([
      { params: { part: 'part-1' } },
      { params: { part: 'part-2' } },
      { params: { part: 'part-3' } }
    ]);
  });

  it('should generate paths for all sup_pages', async () => {
    const paths = mockParts.map((entry) => ({ params: { sup_page: entry.slug } }));

    expect(paths.length).toBe(mockParts.length);
    mockParts.forEach((part, index) => {
      expect(paths[index].params.sup_page).toBe(part.slug);
    });
  });

  it('should handle empty sup_pages collection', async () => {
    (getCollection as any).mockResolvedValue([]);

    const paths: any[] = [];

    expect(paths).toEqual([]);
    expect(paths.length).toBe(0);
  });
});
