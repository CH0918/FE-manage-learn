import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno()],
      rules: [
        ['p-10', { padding: '10px' }],
        ['border-1', { border: '1px solid #ccc' }],
      ],
    }),
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
