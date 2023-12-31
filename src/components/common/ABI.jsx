// contract ID = 0xDc7e8B8a0Bb55Cc24BF843343084a62398b68861

const ABI =  [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_desc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_file_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_file_CID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_post_date",
                "type": "string"
            }
        ],
        "name": "AddNewPost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "my_CID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_user_img_filename",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_DOB",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_desc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "AddProfileDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "Check_if_registered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DisplayPosts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "user_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "desc",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "file_CID",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "file_name",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "like",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "viewers",
                        "type": "int256"
                    },
                    {
                        "internalType": "string",
                        "name": "post_date",
                        "type": "string"
                    }
                ],
                "internalType": "struct user.Post[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_account_to_follow",
                "type": "address"
            }
        ],
        "name": "Follow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "GetIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Get_registered",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_file_CID",
                "type": "string"
            }
        ],
        "name": "Like_post",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "LogOut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user_address",
                "type": "address"
            }
        ],
        "name": "Login",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allUsers",
        "outputs": [
            {
                "internalType": "address",
                "name": "user_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "user_CID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "user_img_filename",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "DOB",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "all_currently_logged_in",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "all_posts",
        "outputs": [
            {
                "internalType": "address",
                "name": "user_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "desc",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "file_CID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "file_name",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "like",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "viewers",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "post_date",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "currently_logged_in",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "followers",
        "outputs": [
            {
                "internalType": "address",
                "name": "follower",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "account_following",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getData",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "user_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "username",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "user_CID",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "user_img_filename",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "DOB",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "desc",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "internalType": "struct user.userData[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "registered_users",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "return_follow",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "follower",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "account_following",
                        "type": "address"
                    }
                ],
                "internalType": "struct user.following_det[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export default ABI;