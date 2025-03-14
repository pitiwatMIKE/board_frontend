import { Post } from "../post";
import { Pagination } from "./pagination";

export interface SearchPostResponse {
  data: SearchPost[];
  meta: Pagination;
}

export interface SearchPost extends Post {
  commentCount: number;
}
