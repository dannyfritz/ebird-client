import dotenv from "dotenv";
import EbirdClient from "../src";

dotenv.config();

if (process.env.API_KEY === undefined) {
    console.error("Please specify an API_KEY in your .env or ENV");
    process.exit(1);
}

const apiKey = process.env.API_KEY!;

const ebirdClient = new EbirdClient(apiKey);

ebirdClient.recentObservationsInARegion({
    latitude: 39.742043,
    longitude: -104.991531,
})
    .then((data) => console.log(data));
