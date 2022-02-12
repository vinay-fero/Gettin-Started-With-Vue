import { createApp } from 'vue';
import rootRouter from '@/router';
import App from '@/App';

const app = createApp(App);
app.use(rootRouter);
app.mount('#app');
