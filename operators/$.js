                            
// {
//     _id: 1,
//     itemDetails: [{ name: "ab", code: 380 }],
//     quantity: 15,
//     itemtags: ["A", "B", "C"]
// } ,{
//     _id: 2,
//     itemDetails: [{ name: "cd", code: 300 }],
//     quantity: 20,
//     itemtags: ["B"]
// }, {
//     _id: 3,
//     itemDetails: [{ name: "ij", code: 456 }],
//     quantity: 25,
//     itemtags: ["A", "B"]
// } ,{
//     _id: 4,
//     itemDetails: [{ name: "xy", code: 456 }],
//     quantity: 30,
//     itemtags: ["B", "A"]
// } ,{
//     _id: 5,
//     itemDetails: [{ name: "mn", code: 600 }],
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// }, {
//     _id: 6,
//     itemDetails: [{ name: "mn1", code: 111 }, { name: "mn2", code: 222 }],
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// }
                            
                            
 // Consider the following example:

                            
db.getCollection('product').find({
    "itemDetails.code": {
        $gte: 400
    }
}, {
    "itemDetails.$": 1
})         
                            
                            
// This output will be.

                            
// {
//     _id: 3,
//     itemDetails: [{ name: "ij", code: 456 }],
//     quantity: 25,
//     itemtags: ["A", "B"]
// } ,{
//     _id: 4,
//     itemDetails: [{ name: "xy", code: 456 }],
//     quantity: 30,
//     itemtags: ["B", "A"]
// }, {
//     _id: 5,
//     itemDetails: [{ name: "mn", code: 600 }],
//     quantity: 20,
//     itemtags: [ ["A", "B"], "C" ]
// }
                     
                            
//  Consider the following example:

                            
db.getCollection('product').update({
    "_id": 1,
    "itemDetails.name": "ab"
}, {
    $set: {
        "itemDetails.$.code": 20
    }
})
                            
                            
// The result will be.

                            
// {
//     _id: 1,
//     itemDetails: [{ name: "ab", code: 20 }],
//     quantity: 15,
//     itemtags: ["A", "B", "C"]
// }