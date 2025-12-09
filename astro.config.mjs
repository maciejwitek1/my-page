import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// Uzupełnij 'site' docelowym adresem produkcyjnym (wymagane m.in. dla sitemap)
export default defineConfig({
  site: 'https://maciejwitek1.github.io',
  base: '/my-page',
  integrations: [mdx(), sitemap(), icon(), tailwind()],
  image: {
    // Dodaj dozwolone hosty dla zdalnych obrazów, kiedy będą potrzebne
    remotePatterns: []
  },
  markdown: {
    // Miejsce na remark/rehype plugins, jeśli będą wymagane
  },
  experimental: { staticImportMetaEnv: true },
  env: {
    schema: {
      // Przykład klucza publicznego dostępnego w kliencie
      PUBLIC_CONTACT_FORM_URL: envField.string({ context: 'client', access: 'public', optional: true })
    }
  }
})
