export default {
    name: 'project',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'name',
            tite: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'sr_no',
            title: 'Sr. No.',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'client',
            tite: 'Client',
            type: 'string',
        },
        {
            name: 'area',
            tite: 'Area',
            type: 'string',
        },
        {
            name: 'location',
            tite: 'Location',
            type: 'string',
        },
        {
            name: 'previewImage',
            title: 'Preview Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            validation: Rule => Rule.required().min(1)
        }
    ]
}