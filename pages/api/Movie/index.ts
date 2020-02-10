// import { NextApiRequest, NextApiResponse } from 'next'

// export default (_: NextApiRequest, res: NextApiResponse) => {
//   try {
//     if (!Array.isArray(<--- JSON Data from backend --->)) {
//       throw new Error('Cannot find user data')
//     }

//     res.status(200).json(<---JSON   Data from backend --->))
//   } catch (err) {
//     res.status(500).json({ statusCode: 500, message: err.message })
//   }
// }
