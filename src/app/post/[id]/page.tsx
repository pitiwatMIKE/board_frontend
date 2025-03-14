"use client";
import { useParams, useRouter } from "next/navigation";
import BackCicle from "../../components/BackCicle";
import Avatar from "../../components/Avatar";
import Badge from "../../components/Badge";
import CommentBadge from "../../components/CommentBadge";
import CommentCard from "../../components/CommentCard";
import CommentForm from "../../components/CommentForm";
import useSWR from "swr";
import { fetcher } from "@/app/services/apiClient";
import { Post } from "@/app/interfaces/post";
import { Comment } from "@/app/interfaces/comment";

export default function OurBlogPage() {
  const params = useParams<{ id: string }>();
  const {
    data: post,
    error: postError,
    isLoading: postLoading,
  } = useSWR<Post>(`/post/${params.id}`, fetcher);

  const {
    data: comments,
    error: commentError,
    isLoading: commentLoading,
  } = useSWR<Comment[]>(`/comment/by-post/${params.id}`, fetcher);

  if (postLoading || commentLoading) return <div>Loading...</div>;
  if (postError || commentError) return <div>Error: {postError.message}</div>;

  if (!post || !comments) return <div>Post not found</div>;

  return (
    <div className="bg-white px-4 pb-10 lg:max-w-[800px] lg:pr-4">
      <div className="mt-7 mb-12">
        <BackCicle />
      </div>

      <div className="flex items-center gap-2">
        <Avatar
          src={post.user.avatar}
          alt="avatar"
          isOnline={true}
          className="!h-12 !w-12"
        />
        <div className="test text-text text-sm">{post.user.username}</div>
        <div className="text-grey-300 text-xs">{post.user.createdAt}</div>
      </div>
      <Badge className="my-4" text="TV" />

      <div>
        <h1 className="text-text text-[28px] font-semibold">{post.title}</h1>
        <p className="text-text mt-3 text-sm">{post.content}</p>
      </div>

      <CommentBadge className="my-6" count={32} />

      <div>
        <CommentForm />
      </div>

      <div className="mt-10 flex flex-col gap-7">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentCard
              username={comment.user.username}
              avatar={comment.user.avatar}
              date={comment.createdAt}
              comment={comment.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
