const { Deta } = require('deta'); // import Deta


export default async function handler(req, res) {
  const deta = Deta(process.env.DETA_PROJECT_KEY);
  const db = deta.Base("humans")
  // get item from deta base
  const item = await db.get('0x12163bd8e70cdCd45325aE511f080B46A471E5EF');

  res.status(200).json(item)
}
