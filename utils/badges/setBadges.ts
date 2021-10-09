import asyncForEach from "utils/asyncForeach";
import { NODE_API_URL } from "utils/constant";

export default async (badges: {data: []}, setBadgesImage: (arg: string[]) => void) => {
    let badgesInt: string[] = [];
    asyncForEach(badges.data, async (b: {nftId: String}) => {
        const response = await fetch(`${NODE_API_URL}/api/NFTs/${b.nftId}`);
        const result = await response.json();
        badgesInt.push(result.media.url)
    }).then(() => {
        setBadgesImage(badgesInt)
    })
}