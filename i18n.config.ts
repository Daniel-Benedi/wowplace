export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            listingNotFoundError: 'Unfortunately, the listing you were trying to open is not longer active or does not exist.'
        },
        es: {
            listingNotFoundError: 'El producto que estaba tratando de ver no está disponible o no existe.'
        }
    }
}))