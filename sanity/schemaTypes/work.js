export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' }
        ]
      },
      validation: Rule => Rule.required()
    },
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
      name: 'location_en',
      title: 'Location (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location_ar',
      title: 'Location (Arabic)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
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
      of: [
        {
          type: 'image',
          options: {
            accept: 'image/*'
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ]
}