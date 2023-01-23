const mongoose = require('mongoose')

const propertySchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        Property_type:{
            type : String,
            required: [true, 'Please add type of property']
        },
        Location: {
            type: String,
            required: [true, 'Please add location of property']
        },
        developer_name:{
            type: String,
            required:[true, 'Please add developer name of property']
        },
        name_of_property:{
            type: String,
        },
        Bedrooms:{
            type: Number,
            required: [true, 'Please add number of Bedrooms in property']
        },
        Bathrooms:{
            type: Number,
            required: [true, 'Please add number of Bathrooms in property']
        },
        Balcony:{
            type: Number,
            required: [true, 'Please add number of Balcony in property']
        },
        Three_link:{
            type: String,
        },
        price:{
            type: Number,
            required:[true,'please add price of the property']
        },
        // photos:{
        //     type: Array
        // }

    },{
        timestamps: true
    })

module.exports = mongoose.model('Property',propertySchema)