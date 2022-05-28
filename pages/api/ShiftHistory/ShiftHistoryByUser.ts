// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../src/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await prisma.$connect()
    const { userId } = req.query

    if (userId === undefined){
        res.status(400).json({message: 'Invalid user'})
    }

    const shifts = await prisma.shifts.findMany({ 
        where: {
            userId:  userId,
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