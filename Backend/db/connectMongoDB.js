import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		
    } catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;