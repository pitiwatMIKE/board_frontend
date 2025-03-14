"use client";
import Postcard from "../../components/Postcard";
import { useState } from "react";
import PostForm from "../../components/PostForm";
import ActionPostList from "@/app/components/ActionPostList";
import { DropDownItem } from "@/app/components/Dropdown";
import { redirect, useRouter } from "next/navigation";
import { DeletePostModal } from "@/app/components/DeletePostModal";
import { useSearchPosts } from "@/app/services/hooks/useSearchPosts";
import clsx from "clsx";
import { SearchPost } from "@/app/interfaces/response/postResponse";
import Pagination from "@/app/components/Pagination";
import { createPost } from "@/app/services/hooks/createPost";
import useUserTokenStore from "@/app/store/userToken";

export default function SharedPostListPage(props: {
  page: "home" | "our-blog";
}) {
  const { user } = useUserTokenStore();

  if (props.page === "our-blog" && !user?.id) {
    redirect("/sign-in?redirect=/our-blog");
  }

  const categoryItems: DropDownItem[] = [
    { id: 1, name: "Trending" },
    { id: 2, name: "New" },
    { id: 3, name: "Top" },
  ];

  const router = useRouter();
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
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { search, setSearch, data, error, isLoading } = useSearchPosts({
    params: {
      page,
      limit: 10,
      userId: props.page === "our-blog" ? user?.id : undefined,
      categoryId: selectCategory?.id ? selectCategory.id : undefined,
    },
  });

  const handleResetForm = () => {
    setTitle("");
    setContent("");
    setCategory(null);
  };

  const handleSubmitForm = () => {
    setIsOpenPostFormModal(false);
    handleResetForm();

    createPost({
      title,
      content,
      categoryId: category!.id,
    });
  };

  const handleSubmitDelete = (id: number | null) => {
    setIsOpenDeleteModal(false);
    if (!id) return;
    // delete post
  };

  const handleSearch = () => {};

  const handleOpenModalCreate = () => {
    setIsOpenPostFormModal(true);
    setType("create");
  };

  const handleOpenModalEdit = () => {
    setIsOpenPostFormModal(true);
    setType("edit");
    // set data to form
  };

  const handleOpenModalDelete = (id: number) => {
    setIsOpenDeleteModal(true);
    setDeleteId(id);
  };

  return (
    <div className="mx-auto max-w-[798px] p-3 lg:pb-10">
      <div className="mt-6 mb-5">
        <ActionPostList
          categoryItems={categoryItems}
          onSelectCategory={setSelectCategory}
          onSearch={setSearch}
          onOpenModal={handleOpenModalCreate}
        />
      </div>
      <div className="overflow-hidden rounded-2xl">
        {!isLoading && data?.posts.length === 0 && (
          <div className="text-text text-lg font-semibold">No posts found</div>
        )}
        {isLoading && error && (
          <div className="text-text text-lg font-semibold">{error}</div>
        )}

        {data.posts.map((post) => (
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
              onEdit={handleOpenModalEdit}
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
        categoryItems={categoryItems}
        category={category}
        setCategory={setCategory}
        onSubmit={handleSubmitForm}
      />

      <DeletePostModal
        id={deleteId}
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        onDelete={handleSubmitDelete}
      />
    </div>
  );
}
