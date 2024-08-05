import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useSwrPost } from "@/src/utils/hooks/swr";
import { findExistingQuestion } from "./apis";
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

  const handleFindAnswer = () => {
    if (searchValue.length > 3) {
      setLoading(true);
      findExistingQuestion({ question: searchValue }).then((r) => {
        setLoading(false);
        if (r?.status === 404) {
          router.push(`/ask?question=${searchValue}`);
        } else if (r?.status === 200) {
          router.push(`/answers/${r?.data?.data?._id}`);
        } else {
          toast.error("Oops! An error occured");
        }
      });
    } else {
      toast.warning("Enter a valid question");
    }
  };

  return {
    loading,
    searchValue,
    searchResults: searchResults?.data?.data?.results ?? [],
    handleChange,
    handleFindAnswer,
  };
};

export default useBannerSearch;
