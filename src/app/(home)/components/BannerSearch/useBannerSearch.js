import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useSwrPost } from "@/src/utils/hooks/swr";
import { createQuestion } from "./apis";
import { toast } from "sonner";

const useBannerSearch = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef(null);

  const { data: searchResults } = useSwrPost(
    searchValue?.length > 3 ? "/questions/search" : null,
    { search: searchValue }
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (controllerRef.current) {
      controllerRef.current?.abort();
    }
  };

  const handleCreateQuestion = () => {
    setLoading(true);
    createQuestion({ question: searchValue }).then((r) => {
      setLoading(false);
      if (r?.status === 200) {
        router.push(`/ask/${r?.data?.data?._id}`);
      } else if (r?.status === 409) {
        router.push(`/answers/${r?.data?.data?._id}`);
      } else {
        toast.error("Oops! An error occured");
      }
    });
  };

  return {
    loading,
    searchValue,
    searchResults: searchResults?.data?.data?.results ?? [],
    handleChange,
    handleCreateQuestion,
  };
};

export default useBannerSearch;
