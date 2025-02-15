import dbClientInit from './db';

export const getListingById = async function (listingId) {
    let listing;
    let dbClient;
    try{
        dbClient = dbClientInit(useRuntimeConfig().DB_USER,useRuntimeConfig().DB_PASSWORD);
        await dbClient.connect();
        listing = await dbClient.db('wowplace').collection('listings').findOne({listingId:listingId});
    }catch(e){
        console.error(e);
    }finally {
        if (dbClient){
            await dbClient.close(true);
        }
    }
    return listing;
}