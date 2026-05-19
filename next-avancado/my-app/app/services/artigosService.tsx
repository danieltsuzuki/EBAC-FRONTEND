import artigos from '../data/artigos.json';
import { Artigo } from '../types/artigoType';

export function getAllArtigos(): Artigo[] {
    return artigos;
}

export function getArtigoBySlug(slug: string): Artigo  {
    return artigos.filter(artigo => artigo.slug === slug)[0];
}