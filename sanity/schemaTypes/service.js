export default {
  name: 'service',
  title: 'Service',
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
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'description_ar',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle_en',
      title: 'Subtitle (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle_ar',
      title: 'Subtitle (Arabic)',
      type: 'string',
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
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.min(1)
    },

    // 📌 NEW: SEO KEYWORDS FIELDS
    {
      name: 'seo_keywords_en',
      title: 'SEO Keywords (English)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Comma-separated SEO keywords for this service',
      group: 'seo'
    },
    {
      name: 'seo_keywords_ar',
      title: 'SEO Keywords (Arabic)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Comma-separated SEO keywords for this service',
      group: 'seo'
    },

    {
      name: 'features_en',
      title: 'Features (English)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'features_ar',
      title: 'Features (Arabic)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'stats_en',
      title: 'Stats (English)',
      type: 'object',
      fields: [
        { name: 'projects', title: 'Projects', type: 'string' },
        { name: 'varieties', title: 'Varieties', type: 'string' },
        { name: 'origin', title: 'Origin', type: 'string' }
      ]
    },
    {
      name: 'stats_ar',
      title: 'Stats (Arabic)',
      type: 'object',
      fields: [
        { name: 'projects', title: 'Projects', type: 'string' },
        { name: 'varieties', title: 'Varieties', type: 'string' },
        { name: 'origin', title: 'Origin', type: 'string' }
      ]
    },

    {
      name: 'applications_en',
      title: 'Applications (English)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'applications_ar',
      title: 'Applications (Arabic)',
      type: 'array',
      of: [{ type: 'string' }]
    },

    {
      name: 'process_en',
      title: 'Process (English)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'process_ar',
      title: 'Process (Arabic)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' }
          ]
        }
      ]
    },

    {
      name: 'faq_en',
      title: 'FAQ (English)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'faq_ar',
      title: 'FAQ (Arabic)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' }
          ]
        }
      ]
    }
  ],

  groups: [
    { name: 'seo', title: 'SEO Settings' }
  ],

  preview: {
    select: {
      title: 'title_en',
      subtitle: 'slug.current',
      media: 'featuredImage'
    }
  }
}
