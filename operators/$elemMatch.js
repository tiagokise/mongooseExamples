$elemMatch (query)
//  The following examples query against the product collection with the following documents:
    
// {
//     "_id": 101,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 110 }, { "name": "xyz", "code": 51 }]
// } ,{
//     "_id": 201,
//     "quantity": 20,
//     "itemDetails": [{ "name": "cdj", "code": 120 }, { "name": "asd", "code": 52 }]
// }, {
//     "_id": 301,
//     "quantity": 30,
//     "itemDetails": [{ "name": "ghi", "code": 130 }, { "name": "fdf", "code": 53 }]
// }, {
//     "_id": 401,
//     "quantity": 40,
//     "itemDetails": [{ "name": "jkl", "code": 140 }, { "name": "xzc", "code": 54 }]
// } ,{
//     "_id": 501,
//     "quantity": 50,
//     "itemDetails": [{ "name": "mno", "code": 150 }, { "name": "xvv", "code": 55 }]
// } ,{
//     "_id": 601,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 120 }, { "name": "sxyz", "code": 151 }]
// }
                            
                            
//  Consider the following example:

                            
db.product.find({ itemDetails: { $elemMatch: { code: 110, name: "abc" } } }) 
                            
                            
// This query will select all documents in the product collection where the itemDetails array contains field name with value "abc" and code field value is 110 .

                            
// {
//     "_id": 101,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 110 }, { "name": "xyz", "code": 51 }]
// }
                            
                            
//  Consider the following example With Multiple condition:

                            
db.product.find({ itemDetails: { $elemMatch: { code: { $gte: 110 }, name: "abc" } } }) 
                            
                            
// The result will be.

                            
// {
//     "_id": 101,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 110 }, { "name": "xyz", "code": 51 }]
// }
                            
                            
// $elemMatch (projection)
//  Consider the following example:

                            
db.getCollection('product').find({ quantity: 15 }, { itemDetails: { $elemMatch: { code: { $gte: 110 }, name: "abc" } } })
                            
                            
// The result will be.

                            
// {
//     "_id": 101,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 110 }, { "name": "xyz", "code": 51 }]
// } ,{
//     "_id": 601,
//     "quantity": 15,
//     "itemDetails": [{ "name": "abc", "code": 120 }, { "name": "sxyz", "code": 151 }]
// }