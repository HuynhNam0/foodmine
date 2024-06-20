import { connect, ConnectOptions } from 'mongoose';

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}

// import { connect, ConnectOptions } from 'mongoose';

// export const dbConnect = () => {
//     const mongoUri = process.env.MONGODB_URI;
//     if (!mongoUri) {
//         console.error('MONGODB_URI không được định nghĩa trong file .env');
//         process.exit(1);
//     }
//     connect(mongoUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("Kết nối thành công"),
//         (error) => console.log(error)
//     );
// }