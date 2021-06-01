const peopleSchema = require('./people-schema')

exports.handler = async (event) => {
    // code goes here
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name, age} = JSON.parse(event.body);
        let items = await peopleSchema.update({id},{name, age})
        // let record = new People({id, name, age});
        // let newRecord = await record.save();
        return {
            statusCode: 201,
            body: JSON.stringify(items)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}