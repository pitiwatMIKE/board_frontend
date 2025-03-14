"use client";
import Postcard from "../../components/Postcard";
import { useState } from "react";
import PostForm from "../../components/PostForm";
import ActionPostList from "@/app/components/ActionPostList";
import { DropDownItem } from "@/app/components/Dropdown";
import { useRouter } from "next/navigation";

export default function SharedPostListPage(props: {
  page: "home" | "our-blog";
}) {
  const categoryItems: DropDownItem[] = [
    { id: 1, name: "Trending" },
    { id: 2, name: "New" },
    { id: 3, name: "Top" },
  ];

  const router = useRouter();

  const [type, setType] = useState<"create" | "edit">("create");
  const [selectCategory, setSelectCategory] = useState<DropDownItem | null>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [search, setSearch] = useState<string>("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<DropDownItem | null>(null);

  const handleSubmitForm = () => {
    setIsOpenModal(false);
    handleResetForm();
  };

  const handleResetForm = () => {
    setTitle("");
    setContent("");
    setCategory(null);
  };

  const handleSearch = () => {};

  const handleOpenModalCreate = () => {
    setIsOpenModal(true);
    setType("create");
  };

  const handleOpenModalEdit = () => {
    setIsOpenModal(true);
    setType("edit");
    // set data to form
  };

  const handleDelete = () => {};

  return (
    <div className="bg-grey-100 mx-auto max-w-[798px] p-3 lg:pb-10">
      <div className="mt-6 mb-5">
        <ActionPostList
          categoryItems={categoryItems}
          onSelectCategory={setSelectCategory}
          onSearch={setSearch}
          onOpenModal={handleOpenModalCreate}
        />
      </div>
      <div className="overflow-hidden rounded-2xl">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => router.push(`/post/${index}`)}
          >
            <Postcard
              isShowAction={props.page === "our-blog"}
              search={search}
              username="Wittawat"
              avatarImage="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
              category="TV"
              commentCount={32}
              title="The Beginning of the End of the World"
              content="The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer"
              onEdit={handleOpenModalEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <PostForm
        type={type}
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        categoryItems={categoryItems}
        category={category}
        setCategory={setCategory}
        onSubmit={handleSubmitForm}
      />
    </div>
  );
}
