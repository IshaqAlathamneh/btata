const peapleSchema = require('./people-schema');

exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items; 
        if (id) {
            // get a specific record
            items = await peapleSchema.query('id').eq(id).exec();
            items = items[0];

        } else {
            // get all records
            items = await peapleSchema.scan().exec();
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}