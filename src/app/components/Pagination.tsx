import clsx from "clsx";
import Image from "next/image";

interface PaginationProps {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const { page, totalPage, setPage } = props;
  const style = clsx(
    "bg-golden flex cursor-pointer items-center justify-center rounded-full",
  );

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };
  return (
    <div className="flex gap-3">
      <div className="flex space-x-3">
        <Image
          className={clsx("rotate-90", style, { "opacity-60": page === 1 })}
          src="/chevron-down.svg"
          alt="chevron-down"
          width={25}
          height={25}
          onClick={handlePrevPage}
        />
        <Image
          className={clsx("rotate-[270deg]", style, {
            "opacity-60": page === totalPage,
          })}
          src="/chevron-down.svg"
          alt="chevron-down"
          width={25}
          height={25}
          onClick={handleNextPage}
        />
      </div>

      <span className="text-text">
        {page} of {totalPage}
      </span>
    </div>
  );
}
