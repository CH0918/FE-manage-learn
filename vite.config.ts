import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// 自动导入
import Components from 'unplugin-vue-components/vite';
// 自动导入vant
import { VantResolver } from 'unplugin-vue-components/resolvers';
// 原子化css
import Unocss from 'unocss/vite';
// 原子化预设，包含tailwindcss widicss 等预设
import presetUno from '@unocss/preset-uno';
// css样式不用写class
import presetAttributify from '@unocss/preset-attributify';
// icon
import ICons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify({
          /* options */
        }),
      ],
      rules: [
        ['p-10', { padding: '10px' }],
        ['border-1', { border: '1px solid #ccc' }],
      ],
    }),
    Components({
      resolvers: [VantResolver(), IconsResolver()],
    }),
    ICons(),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      // 全局引入样式
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    https: false,
    proxy: {},
  },
});
