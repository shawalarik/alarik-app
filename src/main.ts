import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './stores';

async function bootstrap() {
    const app = createApp(App);

    setupStore(app);
    
    app.mount('#app');
}
bootstrap();
