import { api } from "@/convex/_generated/api";
import React from "react";
import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  //   const data = useQuery(api.boards.get, {
  //     orgId,
  //     ...query,
  //   });
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>BoardList</div>;
};

export default BoardList;
