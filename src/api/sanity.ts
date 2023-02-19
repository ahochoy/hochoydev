import { useSanityClient } from 'astro-sanity';
import type { Sanity } from '../../typings/sanity-dotcom';


export async function getProfileHero(): Promise<Sanity.ProfileHero> {
    return await useSanityClient().fetch(`*[_type == 'homepageContent' && _id == 'homepageContent'][0]`)
}
