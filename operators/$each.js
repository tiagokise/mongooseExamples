$each 


 //The following examples query against the product collection with the following documents:

                            
// {
//     _id: 1,
//     itemDetails: [{ name: "ab", code: 380 }],
//     quantity: 15,
//     itemtags: ["A", "B"]
// } {
//     _id: 2,
//     itemDetails: [{ name: "cd", code: 300 }],
//     quantity: 20,
//     itemtags: ["B"]
// } {
//     _id: 3,
//     itemDetails: [{ name: "ij", code: 456 }],
//     quantity: 25,
//     itemtags: ["A", "B", "B"]
// } {
//     _id: 4,
//     itemDetails: [{ name: "xy", code: 456 }],
//     quantity: 30,
//     itemtags: ["B", "A", ]
// } {
//     _id: 5,
//     itemDetails: [{ name: "mn", code: 600 }],
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// } {
//     _id: 6,
//     itemDetails: [{ name: "mn1", code: 111 }, {  name: "mn2",  code: 222 }],
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// }
                                                 
// Consider the following example using $push:

                            
db.getCollection('product').update({ _id: 1 }, { $push: { "itemtags": { $each: ["S", "G", "H"] } } }
)
                            
                            
// The result will be:

                            
// {
//     _id: 1,
//     itemDetails: [{ name: "ab", code: 380 }],
//     quantity: 15,
//     itemtags: ["B", "A", "C", "S", "G", "H"]
// }
                                
                            
//  Consider the following example using $addToSet:

                            
db.getCollection('product').update({ _id: 1 }, { $$addToSet: { "itemtags": { $each: ["A", "B"] } } })
                            
                            
// The result will be:

                            
// {
//     _id: 1,
//     itemDetails: [{ name: "ab", code: 380 }],
//     quantity: 15,
//     itemtags: ["A", "B"]
// }
                                
                            
// $addToSet does not insert duplicate values