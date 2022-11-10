import { useSanityClient } from 'astro-sanity';

export async function getProfileHero() {
    const query = `*[_type == 'homepageContent' && _id == 'homepageContent'][0]`
    const profileHero = await useSanityClient().fetch(query)
    return profileHero
}