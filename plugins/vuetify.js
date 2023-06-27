import {createVuetify} from 'vuetify';
import {aliases as allAliases, mdi} from 'vuetify/iconsets/mdi-svg';

const aliases = allAliases;

export default defineNuxtPlugin((nuxtApp) => {


    const vuetify = createVuetify({
        ssr: false,
        // add theme
        theme: {
            defaultTheme: "light",
        },
        // Add the custom iconset
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: { mdi }
        }
    });

    nuxtApp.vueApp.use(vuetify);

    if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
});
