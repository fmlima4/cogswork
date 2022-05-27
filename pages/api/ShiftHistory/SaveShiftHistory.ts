// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../src/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.body)
    await prisma.$connect()
    const shift = await prisma.shifts.create({ 
       data: req.body
    })
    
    res.status(200).json('shift created')
}

export default handler