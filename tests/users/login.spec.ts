import { DataSource } from "typeorm";
import { AppDataSource } from "../../src/config/data-source";
import request from "supertest";
import app from "../../src/app";
describe("POST /auth/login", () => {
    let connection: DataSource;
    beforeAll(async () => {
        connection = await AppDataSource.initialize();
    });
    beforeEach(async () => {
        //Database Truncate
        await connection.dropDatabase();
        await connection.synchronize();
    });
    afterAll(async () => {
        await connection.destroy();
    });
    describe("Given all fields", () => {
        it("should login the user", async () => {
            //Arrange
            const userData = {
                email: "expamle@gmail.com",
                password: "secretpassword",
            };
            //Act
            const response = await request(app)
                .post("/auth/login")
                .send(userData);
            //Assert
        });
    });
});
