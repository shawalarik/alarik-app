import { UserInfo } from "~/types/store";
import { defineStore } from "pinia";
import { store } from '~/stores';
interface UserState {
    userInfo: Nullable<UserInfo>,
    token?: undefined | number;
    [propName: string]: any
}
export const useUserStore = defineStore({
    id: 'app-user',
    persist: true,
    state: (): UserState => ({
        userInfo: null,
        // token
        token: undefined,
    }),
    getters: {
        getUserInfo(): Nullable<UserInfo> {
            return this.userInfo;
        },
        getToken(): string | number {
            return this.token || 0;
        },
    },
    actions: {
        setUserInfo(info: UserInfo) {
            this.userInfo = info;
        },
        setToken(info: undefined | number) {
            this.token = info ? info : 0;
        }
    }
})

export function useAppStoreHook() {
    return useUserStore(store);
}
  