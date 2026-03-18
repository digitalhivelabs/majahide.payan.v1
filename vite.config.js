import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    // GitHub Pages serves sites from a repo subpath (e.g. https://digitalhivelabs.github.io/majahide.payan.v1/)
    base: '/majahide.payan.v1/',
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
            },
        },
    }
})