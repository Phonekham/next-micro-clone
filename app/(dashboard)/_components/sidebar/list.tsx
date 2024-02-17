"use client";

import { useOrganizationList } from "@clerk/nextjs";
import React from "react";
import { Item } from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;

  return (
    <div className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <Item
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </div>
  );
};

export default List;
