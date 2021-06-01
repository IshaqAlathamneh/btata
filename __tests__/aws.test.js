// const { tsImportEqualsDeclaration } = require('@babel/types');
const { expect } = require('@jest/globals');
// const { it } = require('jest-circus')
const suAg = require('superagent')
let id = '';

describe('api requests', () => {
    it('post a new record', async function (){
        let data = await suAg.post('https://celimhvmx1.execute-api.us-east-1.amazonaws.com/people').send({
            "name" : "test",
            "age" : 100
        })
            console.log('post------------',data.readable);
            id = data.body.id;
            expect(data.statusCode).toEqual(201)
        
    })
    it('delete a new record', async function (){
        let data = await suAg.delete(`https://celimhvmx1.execute-api.us-east-1.amazonaws.com/people/${id}`)
            
            expect(data.statusCode).toEqual(201)
    })
})