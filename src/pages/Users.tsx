import React, { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { observer } from "mobx-react-lite";

import logo from "../assets/logo.svg";
import { getLogo } from "../utils/leadUtils";
import { NavigationRoutesEnum, UserType } from "../types";
import dataStore from "../store/DataStore";
import Loader from "../components/Loader";

const Users: React.FC = observer(() => {
  const navigate: NavigateFunction = useNavigate();

  const fetchUserData: () => void = () => {
    try {
      dataStore.setLeadDataStore();
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleClick: (id: string) => void = (id) => {
    navigate(NavigationRoutesEnum.leadViewPagePath + "/" + id);
  };

  const renderUser: (user: UserType) => React.ReactElement = (user) => {
    const stage = user.stage;
    return (
      <li
        onClick={() => handleClick(user.leadId)}
        key={user.leadId}
        className="mt-4 hover:bg-slate-50 flex gap-2 items-center cursor-pointer bg-white py-2 px-2 rounded-2xl relative"
      >
        <div className="bg-sky rounded-full p-2 w-[40px] h-[40px] flex items-center justify-center">
          <p className="text-sky font-medium text-sm">{getLogo(user.name)}</p>
        </div>
        <p className="flex-grow font-semibold text-sm text-slate-800 ">
          {user.name}
        </p>

        <div
          className="flex items-center gap-1 rounded-2xl px-2 text-white py-2 pl-2 pr-[6px]"
          style={{ backgroundColor: `${stage.bgColor}` }}
        >
          <p style={{ color: stage.color }} className="text-xs font-medium">
            {stage.name}
          </p>
          <FaChevronDown
            style={{ color: stage.color }}
            className="text-xs ml-1"
          />
        </div>
      </li>
    );
  };

  const renderUsersData = () => {
    const usersDataMap = dataStore.getUsersData;
    const usersDataMapKeys = Array.from(usersDataMap.keys());
    let userDataKeys: string[] = [...usersDataMapKeys];
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center gap-2 bg-slate-100">
        <img src={logo} className="h-6" />
        <h1 className="font-semibold text-slate-600 text-xl">CRM Users</h1>
        <ul className="min-w-[200px] w-[400px]">
          {userDataKeys.map((userId: string) => {
            return renderUser(dataStore.getUsersData.get(userId)!);
          })}
        </ul>
      </div>
    );
  };

  if (!dataStore.dataLoading) {
    return (
      <div className="flex items-center justify-center h-dvh">
        <Loader />
      </div>
    );
  }
  return renderUsersData();
});

export default Users;
