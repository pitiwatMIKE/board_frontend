import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import clsx from "clsx";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
}

export default function Modal(props: ModalProps) {
  const { children, setIsOpen, isOpen } = props;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className={clsx("bg-opacity-50 fixed inset-0 bg-black opacity-50")}
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            className={clsx(
              "relative w-full rounded-xl bg-white px-4 py-8 lg:px-9",
              props.className,
            )}
          >
            <Image
              className="absolute top-5 right-5 cursor-pointer"
              src="/close-icon.svg"
              width={10}
              height={10}
              alt="close-icon"
              onClick={() => setIsOpen(false)}
            />
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
