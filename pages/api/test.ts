import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send({
        ip_1: req.socket.remoteAddress,
        ip_2: req.headers['x-forwarded-for'],
    })
}
