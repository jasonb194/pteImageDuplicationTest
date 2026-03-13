import { defineField, defineType } from 'sanity'

export const testDocument = defineType({
  name: 'testDocument',
  title: 'Test Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      description: 'Can replicate the issue here',
      of: [{ type: 'localBlock', name: 'localBlock' }],
    }),
    defineField({
      name: 'singleLocalBlock',
      title: 'Single Local Block',
      type: 'localBlock',
      description: 'Can not replicate the issue here',
    }),
    defineField({
      name: 'documentBlock',
      title: 'Document Block',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageField' }],
      description: 'Can not replicate the issue here',
    })
  ],
})

export const imageField = defineField({
  name: 'imageField',
  title: 'Image Field',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['lqip', 'palette', 'blurhash'],
  },
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
})
export const localBlock = defineType({
  name: 'localBlock',
  title: 'Local Block',
  type: 'object',
  fields: [
    defineField({
      name: 'block',
      title: 'Block',
      type: 'array',
      of: [{ type: 'block', name: 'block' }, { type: 'imageField', name: 'imageField' }],
    }),
    defineField({
      name: 'personalizationConfig',
      title: 'Personalization Config',
      type: 'object',
      fields: [
        defineField({
          name: 'hideFor',
          title: 'Hide For',
          type: 'string',
          options: {
            list: [
              { title: 'All', value: 'all' },
              { title: 'Logged In', value: 'loggedIn' },
              { title: 'Logged Out', value: 'loggedOut' },
            ],
          },
        }),
        defineField({
          name: 'showFor',
          title: 'Show For',
          type: 'string',
          options: {
            list: [
              { title: 'All', value: 'all' },
              { title: 'Logged In', value: 'loggedIn' },
              { title: 'Logged Out', value: 'loggedOut' },
            ],
          },
        }),
      ],
    }),
  ],
})
