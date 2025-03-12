import { cn } from "@utils/utils";
import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type PageLayoutWithTitleTypes = {
  children: ReactNode;
  showIcon?: boolean;
  navigation?: string;
  title: string;
  className?: string;
};

function PageLayoutWithTitle({
  children,
  showIcon = false,
  navigation,
  title,
  className,
}: PageLayoutWithTitleTypes) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (navigation) {
      navigate(navigation);
    } else {
      navigate(-1);
    }
  };
  return (
    <main className={cn(" min-h-full", className)}>
      <section
        className="flex gap-2 align-center items-center font-bold cursor-pointer"
        onClick={handleNavigate}
      >
        {showIcon && (
          <span>
            <FaArrowLeft />
          </span>
        )}
        <span>{title}</span>
      </section>
      <section>{children}</section>
    </main>
  );
}

export default PageLayoutWithTitle;
