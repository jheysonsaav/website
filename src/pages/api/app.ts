import type { NextApiRequest, NextApiResponse } from "next";
import Nodepackage from "../../../package.json";

function App(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Nodepackage);
}

export default App;
