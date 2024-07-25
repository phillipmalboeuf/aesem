
import type { TypeFormSkeleton, TypePageSkeleton } from '$lib/clients/content_types'
import { content } from '$lib/clients/contentful'



export const load = async ({ request, cookies }) => {

  const [page, form] = await Promise.all([
    content.getEntry<TypePageSkeleton>('6alCb7ePvcjP4sCJ80deup'),
    content.getEntry<TypeFormSkeleton>('wX1lMjWif0HHw1UVekifp'),
    // content.getEntries<TypePageSkeleton>({ content_type: 'page', include: 2, "fields.id": "home", locale: 'en-US' }),
  ])

  return {
    // page: page.items[0],
    page,
    form,
  }
}