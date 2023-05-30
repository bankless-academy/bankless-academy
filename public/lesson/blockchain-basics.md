
__________________________________________________________________________________________________________________________________________________________

$$$$$$$\                      $$\       $$\                                      $$$$$$\                           $$\                                   
$$  __$$\                     $$ |      $$ |                                    $$  __$$\                          $$ |                                  
$$ |  $$ | $$$$$$\  $$$$$$$\  $$ |  $$\ $$ | $$$$$$\   $$$$$$$\  $$$$$$$\       $$ /  $$ | $$$$$$$\ $$$$$$\   $$$$$$$ | $$$$$$\  $$$$$$\$$$$\  $$\   $$\ 
$$$$$$$\ | \____$$\ $$  __$$\ $$ | $$  |$$ |$$  __$$\ $$  _____|$$  _____|      $$$$$$$$ |$$  _____|\____$$\ $$  __$$ |$$  __$$\ $$  _$$  _$$\ $$ |  $$ |
$$  __$$\  $$$$$$$ |$$ |  $$ |$$$$$$  / $$ |$$$$$$$$ |\$$$$$$\  \$$$$$$\        $$  __$$ |$$ /      $$$$$$$ |$$ /  $$ |$$$$$$$$ |$$ / $$ / $$ |$$ |  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$  _$$<  $$ |$$   ____| \____$$\  \____$$\       $$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$   ____|$$ | $$ | $$ |$$ |  $$ |
$$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ | \$$\ $$ |\$$$$$$$\ $$$$$$$  |$$$$$$$  |      $$ |  $$ |\$$$$$$$\\$$$$$$$ |\$$$$$$$ |\$$$$$$$\ $$ | $$ | $$ |\$$$$$$$ |
\_______/  \_______|\__|  \__|\__|  \__|\__| \_______|\_______/ \_______/       \__|  \__| \_______|\_______| \_______| \_______|\__| \__| \__| \____$$ |
                                                                                                                                               $$\   $$ |
                                                                                                                                               \$$$$$$  |
                                                                                                                                                \______/ 
__________________________________________________________________________________________________________________________________________________________
PORTABLE LESSON DATADISK™ COLLECTION
---
LESSON TITLE: BLOCKCHAIN BASICS
DATA LOCATION: https://app.banklessacademy.com/lessons/blockchain-basics.md
PROTOCOL VERSION: 0.001
LAST UPDATED: 30/05/2023
__________________________________________________________________________________________________________________________________________________________

   << LESSON START >>


# Introduction


`Blockchain` technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain `ledger`.


After examining the layers of a blockchain, we will be using a blockchain tool called a `block explorer` to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction.


![blockchain.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec662b2c-45a0-4a6b-968c-e36b24d4ad67/blockchain.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=70db2035e3e5b195adb530d3626f74d293c44a24c70811e5af54a637b060af1e&X-Amz-SignedHeaders=host&x-id=GetObject)


# Blockchain Structure


The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, `blockchain` refers to the entire structure cryptocurrencies are built on.


Zooming in from the outside, there are 3 levels of structure in a blockchain:

1. The overall `blockchain` is made up of blocks that are linked together in order
2. `Blocks` are made up of groups of transactions put together
3. `Transactions` are amounts of money sent between two `addresses` on the network

This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.


![blockchainStructure.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/efdf57b4-42ed-4b9f-92ac-58ffcfd6e4a3/blockchainStructure.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=ae034fe5eaf097808a12041b8526c52d2e70719dad6dbd56caef161ddbf8b991&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


What is a blockchain?

- [ ] Organized groups of transactions called blocks
- [ ] A list of amounts of money sent between two addresses
- [ ] Blocks linked together in sequence
- [ ] All of the above

# Examining the Ledger


In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.


The `ledger` is the list of ALL transactions ever made on a blockchain, and anyone can see it for `public` blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.


When new transactions are added to the ledger, balances stored at each `address` get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever. 


![ledger-01.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd5cd390-e6d3-4231-a565-1b2a5ea1f4ea/ledger-01.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=9eb28fb168dd1dcca243db1893e346ac46408a31831372dde4db8ecf262b9c57&X-Amz-SignedHeaders=host&x-id=GetObject)


# Transactions on the Ledger


Let’s look at some example transactions:

- Alice sends 5 ETH to Bob
- Bob sends 2 ETH to Charlie

Individual transactions show the _change_ in the amount of cryptocurrency for each address so the total result of all transactions IS the amount of cryptocurrency each address has.


---


⇒ Alice has lost 5 ETH


⇒ Bob has gained 3 ETH total (received 5, sent 2)


⇒ Charlie has gained 2 ETH


![ledgerTransactions.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7cf52138-ed5e-4610-bf4e-3725e45dfd53/ledgerTransactions.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=14b7133e866203ba8f5d8ab5f020fa346b91ec4d658b6ac643f5ba61b6ac406d&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


Which of the following statement(s) is/are true for public blockchain ledgers?

- [ ] All transactions are public and past transactions are unchangeable
- [ ] The ledger tracks how much cryptocurrency each address currently has
- [ ] The ledger grows as new transactions are added to it
- [ ] All of the above

# Decentralization


Not only are transactions included on a `blockchain` ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a `node`, on the network.


This shared data is what makes the blockchain ledger `decentralized`. No single authority or entity controls the data. Blockchains like Ethereum are also `public` because the ledger can be viewed by anyone. 


We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.


# ✅ quiz


What makes a blockchain decentralized?

- [ ] Only one entity can write to the blockchain
- [ ] It meets decentralization requirements set by the government
- [ ] No single authority or entity controls the ledger or access to the ledger data because it is distributed on a large network of computers
- [ ] The ledger is stored on a single secure server

# Block Anatomy


An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique `block hash`, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.


So each `block` is simply a group of transactions put together in one file along with that block’s `block hash`. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block_**chain**_. 


![blockAnatomy.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0d661f7b-31d8-4721-a9d3-c1062ad7520d/blockAnatomy.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=12fdd4ba44965b9a8c08af4ffd47145c63f5727444976595911c02f31050e3df&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


What is the purpose of a block hash?

- [ ] To encrypt block data so no one can read it
- [ ] To link each block to the previous one and ensure past transaction data doesn’t change
- [ ] To ensure transactions are sent to the correct address
- [ ] To ensure the blockchain stays decentralized

# Inside a Block


Remember, `block` data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block. 


From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.

- Alice sends 5 ETH to Bob
- Bob sends 2 ETH to Charlie

Recall that each block must also reference the past block’s `block hash` to link the blockchain together.


![insideBlock.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e76c2cfe-7dfe-487e-9ba2-12d72275cba1/insideBlock.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=f968d4db8f5650ab22662fe04d79187c96297bb1f33b6b1f55e0157a1b657cb4&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


The following information is contained in a block:

- [ ] All information contained in previous blocks, so the blockchain is always current
- [ ] Anything relevant to the blockchain as block size is unlimited
- [ ] Transaction data and a reference to the previous block
- [ ] All transaction data generated within a fixed timeframe

# Individual Transactions


The data on any blockchain is simply a list of `transactions`, records of currency moved between users. Each transaction must be signed by the sender’s `digital signature` to be valid. 


This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.


Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called `smart contracts`.


Finally, each transaction has a unique digital identifier, called its `transaction hash`, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.


![transaction.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18206b48-9a78-46a6-979c-5df66c5dbbbb/transaction.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=ad9dff8254cfa55b079794928de98b0b9c97b53ac712946ae05da67f7de2fad1&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


Data on a blockchain is simply a list of transactions grouped into blocks. Examples of such transactions might include:

- [ ] Sending or receiving crypto assets
- [ ] Changing the size of the block
- [ ] Editing past blockchain data
- [ ] All of the above

# User Addresses


An `address` is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the `private key` can unlock and use the funds at that address.


On Ethereum, an address always starts with _0x__________ and is 42 characters of numbers and letters derived from the `public key` of that address.


When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the _people_ are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.


![userAddresses.svg](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/846fda29-cab4-44fa-a65d-1b52b111ef4d/userAddresses.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230530T191650Z&X-Amz-Expires=3600&X-Amz-Signature=db1f7b010fcaf44381aeabab5e4f4f2197156758ccd8a54c410ed955582d8d7e&X-Amz-SignedHeaders=host&x-id=GetObject)


# ✅ quiz


What is true about blockchain addresses?

- [ ] They are the public identifiers of different entities on a blockchain
- [ ] They always start with _0x_ on Ethereum
- [ ] Whoever controls the private key for an address can use the funds at that address
- [ ] All of the above
