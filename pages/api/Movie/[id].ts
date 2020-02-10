// import { NextApiRequest, NextApiResponse } from 'next'

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { id } = req.query;
//     const selected = <--- JSON data from backend -->;

//     if (!selected) {
//       throw new Error('Cannot find user')
//     }

//     res.status(200).json(selected)
//   } catch (err) {
//     res.status(404).json({ statusCode: 404, message: err.message });
//   }
// };
