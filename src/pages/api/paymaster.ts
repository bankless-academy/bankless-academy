/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { paymasterClient, willSponsor } from "utils/paymaster";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const method = req.body.method;
  const [userOp, entrypoint, chainId] = req.body.params;
  console.log('req.body', req.body)
  console.log('chainId', chainId)
  console.log('entrypoint', entrypoint)
  console.log('userOp', userOp)
  if (!willSponsor({ chainId: parseInt(chainId), entrypoint, userOp })) {
    console.log("Not a sponsorable operation")
    return res.status(200).send({ error: "Not a sponsorable operation" });
  }

  try {
    if (method === "pm_getPaymasterStubData") {
      const result = await paymasterClient.getPaymasterStubData({
        userOperation: userOp,
      });
      console.log('result getPaymasterStubData', result)
      return res.status(200).send({ result });
    } else if (method === "pm_getPaymasterData") {
      const result = await paymasterClient.getPaymasterData({
        userOperation: userOp,
      });
      console.log('result getPaymasterData', result)
      return res.status(200).send({ result });
    }
  } catch (error) {
    console.log(error)
    return res.status(200).send({ error: error?.details })
  }

  console.log("Method not found")
  return res.status(404).send({ error: "Method not found" })
}
