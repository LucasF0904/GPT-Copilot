// src/database/CreateConnection.ts
import { AppDataSource } from '@config/database';

class CreateConnection {
  static async execute(): Promise<void> {
    try {
      await AppDataSource.initialize();
      console.log("Database connection established successfully.");
    } catch (error) {
      console.error("Error during Data Source initialization", error);
    }
  }
}

export default CreateConnection;
