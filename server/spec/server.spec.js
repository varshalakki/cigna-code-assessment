var request = require('request')



describe('get data', ()=>{
    it('should return 200 OK',(done)=>{
        request.get('http://localhost:3001/specialty', (err, res)=>{
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})

it('should return a list, thats not empty', (done)=>{
    
        request.get('http://localhost:3001/specialty', (err, res)=>{
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })  
})

