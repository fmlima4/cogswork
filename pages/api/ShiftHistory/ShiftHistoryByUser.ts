// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../src/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await prisma.$connect()
    const shifts = await prisma.shifts.findMany({ 
        where: {
            userId:  "9fe993e7-a56a-4ad0-8659-dc6a9b5924a9" ,
        } 
    })
    const data = shifts.map(shift => ({
        startTime: shift.startTime,
        endTime: shift.endTime,
        location: shift.location,
    }))
    res.status(200).json(data)
}

export default handler