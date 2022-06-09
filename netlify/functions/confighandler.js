




let decodeb64 = x => Buffer.from(x, 'base64')

let fbconfigencoded = process.env.firebaseconfigencoded;

const firebaseConfig = JSON.parse(decodeb64(fbconfigencoded));


exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(firebaseConfig)
    }
}