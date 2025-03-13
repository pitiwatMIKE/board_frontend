import Modal from "./Modal";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import InputField from "./InputField";
import DropDown, { DropDownItem } from "./Dropdown";

interface PostFormProps {
  type: "create" | "edit";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  content: string;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  categoryItems: DropDownItem[];
  category: DropDownItem | null;
  setCategory: (category: DropDownItem | null) => void;
  onSubmit: () => void;
}

export default function PostForm(props: PostFormProps) {
  const {
    isOpen,
    setIsOpen,
    type,
    title,
    content,
    setTitle,
    setContent,
    onSubmit,
    setCategory,
    category,
    categoryItems,
  } = props;

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Modal className="max-w-2xl" isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="text-text mb-6 text-xl font-semibold">
        {type === "create" ? "Create Post" : "Edit Post"}
      </h1>
      <div className="mb-3">
        <DropDown
          type={"onModal"}
          item={category}
          items={categoryItems}
          onSelect={setCategory}
        />
      </div>
      <InputField
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextAreaField
        placeholder="What’s on your mind..."
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:justify-end lg:gap-4">
        <Button
          className="h-10 w-full lg:w-[105px]"
          color="success"
          variant="outline"
          rounded="sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="h-10 w-full lg:w-[105px]"
          color="success"
          variant="solid"
          rounded="sm"
          disabled={!title?.trim() || !content?.trim() || !category}
          onClick={handleSubmit}
        >
          {type === "create" ? "Post" : "Confirm"}
        </Button>
      </div>
    </Modal>
  );
}
