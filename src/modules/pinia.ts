import { UserModule } from '~/types';
import { createPinia } from 'pinia';
export const install: UserModule = ({ isClient, initialState, app }) => {
    const pinia = createPinia();
    app.use(pinia);

    // Refer to
    // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
    // for other serialization strategies.
    if (isClient) {
        pinia.state.value = (initialState) || {}
    } else {
        initialState.pinia = pinia.state.value
    }
}