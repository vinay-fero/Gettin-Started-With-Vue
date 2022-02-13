import { createApp } from 'vue';
import App from '@/App';
import rootRouter from '@/router';
import rootStore from '@/store/index';

import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';

const app = createApp(App);
app.use(rootRouter);
app.use(rootStore);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.mount('#app');
