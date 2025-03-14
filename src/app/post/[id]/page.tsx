"use client";
import { useParams } from "next/navigation";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/services/apiClient";
import { Post } from "@/interfaces/post";
import { Comment } from "@/interfaces/comment";
import { useState } from "react";
import { createComment } from "@/services/createComment";
import BackCicle from "@/components/BackCicle";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import CommentBadge from "@/components/CommentBadge";
import CommentForm from "@/components/CommentForm";
import CommentCard from "@/components/CommentCard";
import { coverDateformat } from "@/utils/coverDateformat";

export default function OurBlogPage() {
  const params = useParams<{ id: string }>();
  const [comment, setComment] = useState<string>("");

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

  if (postLoading || commentLoading)
    return <div className="text-text mt-4 text-2xl">Loading...</div>;
  if (postError || commentError)
    return <div className="text-text mt-4 text-2xl">{postError.message}</div>;
  if (!post || !comments)
    return <div className="text-text mt-4 text-2xl">Post not found</div>;

  const handleSubmit = async () => {
    const data = await createComment({
      postId: post.id,
      content: comment,
    });

    if (data) {
      setComment("");
      mutate(`/post/${params.id}`);
      mutate(`/comment/by-post/${params.id}`);
    }
  };

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
        <div className="text-grey-300 text-xs">{coverDateformat(post.user.createdAt)}</div>
      </div>
      <Badge className="my-4" text="TV" />

      <div>
        <h1 className="text-text text-[28px] font-semibold">{post.title}</h1>
        <p className="text-text mt-3 text-sm">{post.content}</p>
      </div>

      <CommentBadge className="my-6" count={post.commentCount} />

      <div>
        <CommentForm
          postId={post.id}
          comment={comment}
          setComment={setComment}
          onPost={handleSubmit}
        />
      </div>

      <div className="mt-10 flex flex-col gap-7">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentCard
              username={comment.user.username}
              avatar={comment.user.avatar}
              date={coverDateformat(comment.createdAt)}
              comment={comment.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
