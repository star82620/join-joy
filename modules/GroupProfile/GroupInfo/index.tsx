import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/components/GeneralButton";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { checkMemberStatus } from "@/common/helpers/checkMemberStatus";
import { groupStatusIndex } from "@/constants/wordIndexes";
import { AuthContext } from "@/common/contexts/AuthProvider";
import { MemberStatusType } from "@/constants/globalTypes";
import { GroupDataContext } from "../index";
import StoreLocation from "./StoreLocation";
import Title from "./Title";
import TagItem from "./TagItem";
import GameItem from "./GameItem";
import { GameItemType } from "../data";

export default function GroupInfo() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;

  const { groupId, groupData, currentMemberNum } = useContext(GroupDataContext);
  const {
    groupName,
    groupStatus,
    date,
    store,
    startTime,
    endTime,
    cost,
    place,
    totalMemberNum,
    games,
    description,
    tags,
  } = groupData;

  const [myMemberStatus, setMyMemberStatus] = useState<MemberStatusType | null>(
    null
  );

  const fetchIsLeaderAuth = async () => {
    const memberStatus = await checkMemberStatus(authData, groupId);

    setMyMemberStatus(memberStatus);
  };

  useEffect(() => {
    fetchIsLeaderAuth();
  }, [authData, groupId]);

  const isLeader = myMemberStatus === "leader";
  const isMember = myMemberStatus !== null;

  const isPlace = place !== null;

  const groupStatusText = groupStatusIndex[groupStatus];

  const remainingNum = totalMemberNum - currentMemberNum;

  const isFull = remainingNum <= 0;

  const NumOptions = () => {
    if (isFull) return null;
    return [...Array(remainingNum)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1}
      </option>
    ));
  };

  const JoinForm = () => (
    <form
      className="flex flex-wrap gap-10 md:flex-col md:items-start md:gap-4 mt-8 md:mt-6"
      onSubmit={handleJoinSubmit}
    >
      <div className="flex items-center">
        <span className="text-lg md:text-md font-semibold whitespace-nowrap">
          人數：
        </span>
        <select
          className="w-22 px-3 py-2 md:text-xs grow"
          onChange={(e) => {
            setApplyNum(Number(e.target.value));
          }}
        >
          <NumOptions />
        </select>
      </div>
      <Button type="submit" appearance="orange" className="grow md:w-full">
        加入揪團
      </Button>
    </form>
  );

  const [applyNum, setApplyNum] = useState<number>(1);

  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!authData?.userId) {
      router.push("/login");
    }

    const data = {
      groupId: groupId,
      initNum: applyNum,
    };

    const apiParams: apiParamsType = {
      apiPath: apiPaths["apply-join-group"],
      method: "POST",
      data: data,
    };

    const res = await fetchApi(apiParams);
    if (!res.status) return;

    alert("成功送出入團申請");
  };

  const pushToGroupManagementPage = () => {
    router.push(`/user-center/group/${groupId}`);
  };

  return (
    <section className="px-12 py-8 md:px-3 md:py-4">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl md:text-2xl">{groupName}</h1>
        <span className="grow before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-green-light before:inline-block before:mr-1">
          {groupStatusText}
        </span>
        {isLeader && (
          <Button
            type="button"
            appearance="yellow-dark"
            rounded
            onClick={pushToGroupManagementPage}
          >
            管理揪團
          </Button>
        )}
      </div>
      <ul className="flex flex-col gap-6 mt-6">
        <li>
          <Title content="location" />
          {isPlace ? place : <StoreLocation store={store} />}
        </li>
        <li>
          <Title content="date" />
          {date}
        </li>
        <li>
          <Title content="time" />
          {startTime}-{endTime}
        </li>
        {!isPlace && (
          <li>
            <Title content="cost" />
            {cost}
          </li>
        )}
        <li>
          <Title content="totalMembers" />
          {totalMemberNum} 人
        </li>

        {!isPlace && (
          <li>
            <Title content="games" />
            <ul className="flex flex-col gap-4 md:gap-2">
              {games.map((game: GameItemType) => (
                <GameItem key={game.gameId} game={game} />
              ))}
            </ul>
          </li>
        )}
        <li>
          <Title content="description" />
          <span className="whitespace-pre-wrap text-sm">{description}</span>
        </li>
      </ul>
      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
      {!isFull && !isMember && <JoinForm />}
    </section>
  );
}