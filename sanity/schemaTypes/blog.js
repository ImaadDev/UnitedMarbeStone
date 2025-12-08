export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title_ar',
      title: 'Title (Arabic)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt_en',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt_ar',
      title: 'Excerpt (Arabic)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'content_en',
      title: 'Content (English)',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            accept: 'image/*'
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'content_ar',
      title: 'Content (Arabic)',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            accept: 'image/*'
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        accept: 'image/*'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title_en',
      subtitle: 'publishedAt',
      media: 'featuredImage'
    }
  }
}