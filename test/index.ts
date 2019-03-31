import dotenv from "dotenv";
import EbirdClient from "../src";
import { Category } from "../src/constants/Category";
import { Format } from "../src/constants/Format";

dotenv.config();

if (process.env.API_KEY === undefined) {
  console.error("Please specify an API_KEY in your .env or ENV");
  process.exit(1);
}

const apiKey = process.env.API_KEY!;
// tslint:disable-next-line:no-unused-variable
const denver = {
  latitude: 39.742043,
  longitude: -104.991531,
};

const ebirdClient = new EbirdClient(apiKey);

ebirdClient.taxonomy({
  cat: [Category.SPECIES],
  fmt: Format.JSON,
})
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
