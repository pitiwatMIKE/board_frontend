import Modal from "./Modal";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import InputField from "./InputField";

interface PostFormProps {
  type: "create" | "edit";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function PostForm(props: PostFormProps) {
  const { isOpen, setIsOpen, type } = props;

  return (
    <Modal className="max-w-2xl" isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="text-text mb-6 text-xl font-semibold">
        {type === "create" ? "Create Post" : "Edit Post"}
      </h1>
      <InputField placeholder="Title" />
      <TextAreaField placeholder="What’s on your mind..." rows={10} />

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
        >
          {type === "create" ? "Post" : "Confirm"}
        </Button>
      </div>
    </Modal>
  );
}
