import { Context } from 'aws-lambda'


exports.myHandler = function (event: any, context: Context, callback: any) {
    console.log("value1 ----------->= " + event.key1);
    console.log("value2 = " + event.key2);
    callback(null, "some success message");
    // or 
    // callback("some error type"); 
}


exports.webHandler = function (event: any, context: Context, callback: any) {
    console.log('"Hello":"World"');
    callback(null, { "Value 1": event.key1 });  // SUCCESS with message
};


exports.webHandler2 = function (event: any, context: Context, callback: any) {
    console.log('"Mehendra":"Munasinghe"');
    callback(null, { "Mehendra": "Munasinghe" });  // SUCCESS with message
};