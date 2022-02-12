import { createApp } from 'vue';
import App from '@/App';
import rootRouter from '@/router';
import rootStore from '@/store/index';

const app = createApp(App);
app.use(rootRouter);
app.use(rootStore);
app.mount('#app');
