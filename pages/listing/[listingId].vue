<script setup>
    let listingInformation = useState('listingInformation');
    if (import.meta.server) {
        const listingId = useRoute().params.listingId;
        listingInformation.value = await getListingById(listingId);
        if (!listingInformation.value) {
            throw createError({
                statusCode: 404,
                message: useI18n().t('listingNotFoundError')
            });
        }
    }
</script>
<template>
</template>