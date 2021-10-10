import asyncForEach from "utils/asyncForeach";
import { NODE_API_URL } from "utils/constant";
import {Comment, FullComment} from "../../interfaces/index"

const setComments = async (nftId: string, setComments: (u: any) => void, page: number = 1, initComments?: FullComment[]): Promise<number> => {
    let response = await fetch(`${NODE_API_URL}/api/NFTs/getComments/${nftId}?page=${page}`);
    if(!response.ok) return 0
    let result = await response.json();
    console.log(result)
    let comments: FullComment[] = initComments && page != 1 ? initComments : [];
    const actualPage = result.data && result.data[0] ? result.page : page - 1;
    await asyncForEach(result.data, async (c:Comment) => {
        response = await fetch(`${NODE_API_URL}/api/users/${c.author}`);
        result = await response.json();
        comments.push({
            _id: c._id,
            nftId: c.nftId,
            author: c.author,
            authorName: result.name,
            authorPicture: result.picture,
            note: c.note,
            text: c.text
        })
    })
    setComments(comments)
    return actualPage
}

export default setComments;