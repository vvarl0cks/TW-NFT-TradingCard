import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0x920110d2F97387C1621c86aDa12C5668A981dd52";
    const cardAddress = "0x1bFE74F64BEaf1227037cE9d4B30eB8eC246219a";

    const pack = sdk.getContract(packAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");
    const packImage = "ipfs://QmZCag6z7dXm7L5pVfqzhreBA1SZsdzuuVYYQyVRz2ZgbW/s565765359952659023_p2_i1_w640.png";
    console.log("Creating pack");

    const createPacks = (await pack).create({
        packMetadata: {
            name: "Pack #05",
            description: "The Pokemon Battle Card NFT Trading Collection is an innovative project that merges the beloved world of Pokemon with the growing trend of non-fungible tokens (NFTs). It provides collectors and Pokemon enthusiasts with an immersive digital experience where they can own, trade, and battle with virtual Pokemon cards represented as NFTs.",
            image: packImage,
        },
        erc1155Rewards: [
         
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 5,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 6,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 7,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 8,
                quantityPerReward: 1,
                totalRewards: 5,
            },
            {
                contractAddress: cardAddress,
                tokenId: 9,
                quantityPerReward: 1,
                totalRewards: 5,
            },
         
      
        ],
        rewardsPerPack: 1,

    });

    console.log("Packs created");
})();