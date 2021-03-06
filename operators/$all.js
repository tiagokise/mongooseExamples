$all

//  The following examples query against the product collection with the following documents:
                     
// {
//     _id: 1,
//     itemDetails: { name: "ab", code: 123 },
//     quantity: 15,
//     itemtags: ["A", "B", "C"]
// } {
//     _id: 2,
//     itemDetails: { name: "cd", code: 300 },
//     quantity: 20,
//     itemtags: ["B"]
// } {
//     _id: 3,
//     itemDetails: { name: "ij", code: 456 },
//     quantity: 25,
//     itemtags: ["A", "B"]
// } {
//     _id: 4,
//     itemDetails: { name: "xy", code: 456 },
//     quantity: 30,
//     itemtags: ["B", "A"]
// } {
//     _id: 5,
//     itemDetails: { name: "mn", code: 600 },
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// } {
//     _id: 6,
//     itemDetails: [{ name: "mn1", code: 111 }, { name: "mn2", code: 222 }],
//     quantity: 200,
//     itemtags: [ ["A", "B"], "C" ]
// }                                



//  Consider the following example:
                     
db.product.find({ itemtags: { $all: ["A", "B"]} })
         (or)         
db.product.find({ $and: [{ itemtags: "A" }, { itemtags: "B" }] })  




// This query will select all documents in the product collection where the itemtags field contains value A and B .
                     
// {
//     _id: 1,
//     itemDetails: { name: "ab", code: 123 },
//     quantity: 15,
//     itemtags: ["A", "B", "C"]
// } {
//     _id: 3,
//     itemDetails: { name: "ij", code: 456 },
//     quantity: 25,
//     itemtags: ["A", "B"]
// } {
//     _id: 4,
//     itemDetails: { name: "xy", code: 456 },
//     quantity: 30,
//     itemtags: ["B", "A"]
// }