import Button from "./Button";
import Modal from "./Modal";

interface DeletePostModalProps {
  id: number | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onDelete: (id: number | null) => void;
}

export function DeletePostModal(props: DeletePostModalProps) {
  const { id, isOpen, setIsOpen, onDelete } = props;

  return (
    <Modal
      className="max-w-[400px] text-center"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <h1 className="text-text mb-6 text-xl font-semibold">
        Please confirm if you wish to <br /> delete the post
      </h1>

      <p className="text-search">
        Are you sure you want to delete the post? Once deleted, it cannot be
        recovered.
      </p>

      <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:gap-4">
        <Button
          className="h-10 w-full"
          color="default"
          variant="outline"
          rounded="sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="h-10 w-full"
          color="critical"
          variant="solid"
          rounded="sm"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}
