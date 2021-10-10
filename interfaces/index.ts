export type UserType = {
  _id: string;
  name: string;
  banner?: string;
  bio?: string;
  verified: boolean;
  viewsCount?: number;
  walletId: string;
  picture?: string;
  twitterName?: string;
  twitterVerified?: boolean;
  customUrl?: string;
  personalUrl?: string;
  capsAmount?: string;
  tiimeAmount?: string;
  reviewRequested?:boolean
  likedNFTs?: { serieId: string, nftId: string }[];
  badges?: {_id: string, walletId: string, emotes: {nftId: string, _id: string}[]}
};

export type NftType = {
  id: string;
  owner: string;
  creator: string;
  listed: number;
  timestampList?: string;
  uri?: string;
  price: string;
  priceTiime: string;
  name?: string;
  description?: string;
  media: { url: string };
  cryptedMedia?: { url: string };
  ownerData: UserType;
  creatorData: UserType;
  serieId: string;
  itemTotal: string;
  serieData?: NftType[];
  totalListedNft?: number;
  totalNft?: number;
  itemId: string;
  categories: CategoryType[];
  viewsCount?: number;
  marketplaceId?: string;
};

export type CategoryType = {
  _id: string;
  code: string;
  name: string;
  description?: string;
}

export type FollowType = {
  _id: string;
  followed: UserType;
  follower: UserType;
}

export type CustomResponse<DataType> = {
  totalCount?: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: DataType[]
}

export type Comment = {
  _id: string;
  nftId: string;
  author: string;
  note: number;
  text: string;
}

export type FullComment = {
  _id: string;
  nftId: string;
  author: string;
  note: number;
  text: string;
  authorName: string;
  authorPicture: string;
}