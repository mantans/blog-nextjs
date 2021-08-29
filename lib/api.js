
import client from './sanity';
import ImageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`

const builder = ImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many data you want to fetch
export async function getAllBlogs() {
   const results = await client
     .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
   return results;
}


export async function getPaginatedBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
  const results = await client
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`);
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug]{
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => res?.[0])

  return result;

}