const contractABI = [
	{
		"inputs": [],
		"name": "countAdd",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "countGet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress =
    "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B";

export { contractABI, contractAddress }; 