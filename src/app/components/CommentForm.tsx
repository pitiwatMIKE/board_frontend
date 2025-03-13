import { useState } from "react";
import Button from "./Button";
import TextAreaField from "./TextAreaField";
import Modal from "./Modal";

export default function FormComment() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCancel = () => {
    setIsOpenForm(false);
  };

  const handlePost = () => {
    setIsOpenForm(false);
  };

  return (
    <>
      {isOpenForm ? null : (
        <div className="hidden lg:block">
          <AddCommentButton onClick={() => setIsOpenForm(true)} />
        </div>
      )}
      {isOpenForm && (
        <div className="hidden lg:block">
          <TextAreaField placeholder="What’s on your mind..." rows={4} />
          <div className="mt-4 flex items-center justify-end gap-2">
            <Button
              className="h-10 w-28"
              color="success"
              variant="outline"
              rounded="sm"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="h-10 w-28"
              color="success"
              variant="solid"
              rounded="sm"
              onClick={handlePost}
            >
              Post
            </Button>
          </div>
        </div>
      )}

      {/* Modal Form */}
      <div className="block lg:hidden">
        <AddCommentButton onClick={() => setIsOpenModal(true)} />
      </div>
      <Modal
        className="max-w-2xl"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      >
        <h1 className="text-text mb-4 text-xl">Add Comments</h1>
        <TextAreaField placeholder="What’s on your mind..." rows={4} />

        <div className="mt-6 flex flex-col gap-2">
          <Button
            className="h-10 w-full"
            color="success"
            variant="outline"
            rounded="sm"
          >
            Cancel
          </Button>
          <Button
            className="h-10 w-full"
            color="success"
            variant="solid"
            rounded="sm"
          >
            Post
          </Button>
        </div>
      </Modal>
    </>
  );
}

function AddCommentButton(props: { onClick: () => void }) {
  return (
    <Button
      className="h-10 w-36"
      color="success"
      variant="outline"
      rounded="sm"
      onClick={props.onClick}
    >
      Add Comments
    </Button>
  );
}
