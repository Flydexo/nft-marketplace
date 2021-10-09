import asyncForEach from "utils/asyncForeach";
import { NODE_API_URL } from "utils/constant";

const setBadges =  async (badges: {data: any[]}, setBadgesImage: (arg: string[]) => void) => {
    let badgesInt: string[] = [];
    await asyncForEach(badges.data, async (b: {nftId: String}) => {
        const response = await fetch(`${NODE_API_URL}/api/NFTs/${b.nftId}`);
        const result = await response.json();
        badgesInt.push(result.media.url)
    }).then(() => {
        console.log(badgesInt)
        setBadgesImage(badgesInt)
    })
}

export default setBadges