import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

export const documentation = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Users - Documentación",
            description: "Documentación del módulo Usuario",
            version: "1.0.0",
        },
        servers: [
            { url: "http://localhost:8080" },
            { url: "https://api.vercel.com" },
        ],
    },
    apis: ["./src/docs/*.yml"],
};

export const specs = swaggerJSDoc(documentation);
export const swaggerUi = swaggerUiExpress;
