export const NFTAddress = '0xB2dB4578069550fb6D1E37BE9cB4c5C43d633e56'

export const nftABI = [
  {
    inputs: [
      { internalType: 'address', name: '_receiver', type: 'address' },
      { internalType: 'uint256', name: '_quantity', type: 'uint256' },
      { internalType: 'address', name: '_currency', type: 'address' },
      { internalType: 'uint256', name: '_pricePerToken', type: 'uint256' },
      {
        components: [
          { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
          {
            internalType: 'uint256',
            name: 'quantityLimitPerWallet',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'pricePerToken',
            type: 'uint256',
          },
          { internalType: 'address', name: 'currency', type: 'address' },
        ],
        internalType: 'struct IDrop.AllowlistProof',
        name: '_allowlistProof',
        type: 'tuple',
      },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]
