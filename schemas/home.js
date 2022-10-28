export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required()
        }
    ]
}