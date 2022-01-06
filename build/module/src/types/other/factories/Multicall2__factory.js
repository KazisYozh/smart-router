/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "aggregate",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes[]",
                name: "returnData",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "blockAndAggregate",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "success",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "returnData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockCoinbase",
        outputs: [
            {
                internalType: "address",
                name: "coinbase",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockDifficulty",
        outputs: [
            {
                internalType: "uint256",
                name: "difficulty",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockGasLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "gaslimit",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentBlockTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "getEthBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLastBlockHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "requireSuccess",
                type: "bool",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "tryAggregate",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "success",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "returnData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "requireSuccess",
                type: "bool",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "tryBlockAndAggregate",
        outputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "bool",
                        name: "success",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "returnData",
                        type: "bytes",
                    },
                ],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class Multicall2__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
Multicall2__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGljYWxsMl9fZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90eXBlcy9vdGhlci9mYWN0b3JpZXMvTXVsdGljYWxsMl9fZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUdwQixPQUFPLEVBQUUsUUFBUSxFQUFVLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUdqRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsVUFBVSxFQUFFO29CQUNWO3dCQUNFLFlBQVksRUFBRSxTQUFTO3dCQUN2QixJQUFJLEVBQUUsUUFBUTt3QkFDZCxJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0Q7d0JBQ0UsWUFBWSxFQUFFLE9BQU87d0JBQ3JCLElBQUksRUFBRSxVQUFVO3dCQUNoQixJQUFJLEVBQUUsT0FBTztxQkFDZDtpQkFDRjtnQkFDRCxZQUFZLEVBQUUsMEJBQTBCO2dCQUN4QyxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLFdBQVc7UUFDakIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxVQUFVLEVBQUU7b0JBQ1Y7d0JBQ0UsWUFBWSxFQUFFLFNBQVM7d0JBQ3ZCLElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxT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