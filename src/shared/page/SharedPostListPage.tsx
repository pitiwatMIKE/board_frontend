"use client";

import { useEffect, useState } from "react";

import { redirect, useRouter } from "next/navigation";

import { useSearchPosts } from "@/services/hooks/useSearchPosts";
import clsx from "clsx";
import { SearchPost } from "@/interfaces/response/postResponse";
import { createPost } from "@/services/createPost";
import useUserTokenStore from "@/store/userToken";
import { Post } from "@/interfaces/post";
import { updatePost } from "@/services/updatePost";
import { deletePost } from "@/services/deletePost";
import { DropDownItem } from "@/components/Dropdown";
import PostForm from "@/components/PostForm";
import Pagination from "@/components/Pagination";
import { DeletePostModal } from "@/components/DeletePostModal";
import ActionPostList from "@/components/ActionPostList";
import Postcard from "@/components/Postcard";
import useCategoryStore from "@/store/category";

export default function SharedPostListPage(props: {
  page: "home" | "our-blog";
}) {
  const router = useRouter();
  const { categories } = useCategoryStore();
  const [userId, setUserId] = useState<number | null>(null);
  const [posts, setPosts] = useState<SearchPost[]>([]);
  const [type, setType] = useState<"create" | "edit">("create");
  const [selectCategory, setSelectCategory] = useState<DropDownItem | null>();
  const [isOpenPostFormModal, setIsOpenPostFormModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [page, setPage] = useState(1);

  // Form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<DropDownItem | null>(null);
  const [postId, setPostId] = useState<number | null>(null);

  useEffect(() => {
    const userId = useUserTokenStore.getState().user?.id;
    if (!userId) {
      if (props.page === "our-blog") redirect("/sign-in?redirect=/our-blog");
    } else {
      setUserId(userId);
    }
  }, [props.page]);

  const { search, setSearch, data, error, isLoading } = useSearchPosts({
    params: {
      page,
      limit: -1,
      userId: props.page === "our-blog" ? userId! : undefined,
      categoryId: selectCategory?.id ? selectCategory.id : undefined,
    },
  });

  useEffect(() => {
    setPosts(data.posts);
  }, [data.posts]);

  const handleResetForm = async () => {
    setTitle("");
    setContent("");
    setCategory(null);
  };

  const handleSubmitForm = async () => {
    setIsOpenPostFormModal(false);
    handleResetForm();

    if (type === "create") {
      const post = await createPost({
        title,
        content,
        categoryId: category!.id,
      });
      setPosts((prev) => [post, ...prev]);
    } else {
      if (postId === null) return;
      const data = await updatePost(postId, {
        title: title,
        content: content,
        categoryId: category!.id,
      });

      setPosts((prev) => {
        const index = prev.findIndex((p) => p.id === postId);
        if (index === -1) return prev;
        prev[index] = data;
        return [...prev];
      });
    }
  };

  const handleSubmitDelete = (id: number | null) => {
    setIsOpenDeleteModal(false);
    if (!id) return;
    deletePost(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleOpenModalCreate = () => {
    setIsOpenPostFormModal(true);
    setType("create");
  };

  const handleOpenModalEdit = async (post: Post) => {
    setType("edit");
    setPostId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setCategory({
      id: post.category.id,
      name: post.category.name,
    });
    setIsOpenPostFormModal(true);
  };

  const handleOpenModalDelete = (id: number) => {
    setIsOpenDeleteModal(true);
    setPostId(id);
  };

  return (
    <div className="mx-auto max-w-[798px] p-3 lg:pb-10">
      <div className="mt-6 mb-5">
        <ActionPostList
          categoryItems={categories}
          onSelectCategory={setSelectCategory}
          onSearch={setSearch}
          onOpenModal={handleOpenModalCreate}
        />
      </div>
      <div className="overflow-hidden rounded-2xl">
        {!isLoading && posts.length === 0 && (
          <div className="text-text text-lg font-semibold">No posts found</div>
        )}
        {isLoading && error && (
          <div className="text-text text-lg font-semibold">{error}</div>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer"
            onClick={() => router.push(`/post/${post.id}`)}
          >
            <Postcard
              isShowAction={props.page === "our-blog"}
              search={search}
              username={post.user.username}
              avatarImage={post.user.avatar}
              category={post.category.name}
              commentCount={post.commentCount}
              title={post.title}
              content={post.content}
              onEdit={() => handleOpenModalEdit(post)}
              onDelete={() => handleOpenModalDelete(post.id)}
            />
          </div>
        ))}
      </div>

      {!data?.meta?.totalPage ? null : (
        <div className={clsx("mt-5 flex justify-end pr-4")}>
          <Pagination
            page={page}
            totalPage={data?.meta?.totalPage}
            setPage={setPage}
          />
        </div>
      )}

      {/* Modal */}
      <PostForm
        type={type}
        isOpen={isOpenPostFormModal}
        setIsOpen={setIsOpenPostFormModal}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        categoryItems={categories}
        category={category}
        setCategory={setCategory}
        onSubmit={handleSubmitForm}
      />

      <DeletePostModal
        id={postId}
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        onDelete={handleSubmitDelete}
      />
    </div>
  );
}
