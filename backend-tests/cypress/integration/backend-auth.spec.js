import * as clientHelpers from '../helpers/clientHelpers'


describe('testing auth', function(){
    it('Create a new client', function(){
       clientHelpers.createClientRequest(cy)
    })

    it('Get all clients', function(){
        clientHelpers.getAllClientsRequest(cy)
     })

    it('Create and delete client', function(){
       clientHelpers.createClientRequestAndDelete(cy)
    })
})