$and

//  The following examples query against the product collection with the following documents:

                            
// {
//     _id: 1,
//     itemDetails: { name: "ab", code: 123 },
//     quantity: 15,
//     itemtags: 10
// } {
//     _id: 2,
//     itemDetails: { name: "cd", code: 123 },
//     quantity: 20,
//     itemtags: 20
// } {
//     _id: 3,
//     itemDetails: { name: "ij", code: 456 },
//     quantity: 25,
//     itemtags: 30
// } {
//     _id: 4,
//     itemDetails: { name: "xy", code: 456 },
//     quantity: 30,
//     itemtags: 40
// } {
//     _id: 5,
//     itemDetails: { name: "mn", code: 000 },
//     quantity: 20,
//     itemtags: 50
// }
                            
                            
//  Consider the following example:

                            
db.product.find({
    $and: [{ quantity: { $lt: 20 } }, { itemtags: 10 }]
})    
                            
                            
// This query will select all documents in the product collection where the itemtags field value 10 and quantity field value is less than 20 .

                            
// {
//     _id: 1,
//     itemDetails: { name: "ab", code: 123 },
//     quantity: 15,
//     itemtags: 10
// }
                            
                            
//  Consider the following example With Multiple Expressions:

                            
db.product.find({
    $and: [
        { $or: [{ quantity: 15 }, { itemtags: 10 }] }, 
        { $or: [{ _id: 1 }, { quantity: { $lt: 20 }}] }
    ]
})
                            
                            
// The result will be.

                            
// {
//     _id: 1,
//     itemDetails: { name: "ab", code: 123 },
//     quantity: 15,
//     itemtags: 10
// }