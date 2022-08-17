const S3 = require('aws-sdk/clients/s3');
require('dotenv').config()
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
});


// upload file to bucket

const uploadImage = (img) => {
    const fileStream = fs.createReadStream(img.path);

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: img.filename
    };

    return s3.upload(uploadParams).promise();
}


// download file from bucket

const getImage = (fileKey) => {
    try {
        const downloadParams = {
            Bucket: bucketName,
            Key: fileKey
        };
        return s3.getObject(downloadParams).createReadStream();
    }
    catch {
        console.log("image not found")
    }
}



module.exports = { uploadImage, getImage }