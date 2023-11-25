const apiPaths = {
  login: "/auth/Login",
  signup: "/auth/register",
  "check-login-status": "/auth/checkLoginStatus",

  // create-group
  "get-cities": "/member/city",
  "get-all-game-types": "/member/gameType",
  "get-city-stores": "/search/search/stores",
  "get-games": "/storeinfo/gamelist",
  "get-remaining-seats": "/group/checkability",
  "submit-create-group": "/group/create",

  "get-my-profile": "/member/memberDetails",
  "my-groups-list": "/member/usergrouplist",
  "check-group-rating": "/member/checkgroupratings",
  "get-manage-group": "/group/detail",

  "leave-group": "/group/leavegroup",

  // group management
  "get-group-info": "/group/easydetail/",
  "get-group-all-member": "/group/joinList",
  "get-store-games": "/storeinfo/gamelist",
  "submit-reserve": "/group/reservegroup",
  "review-group-member": "/group/reviewGroup",
  "check-member-attended": "/group/rollcall",
  "edit-group-Info": "/group/edit",

  // landing page
  "get-newest-rating": "/storeinfo/getnewestrating",
  "search-store": "/search/search/storesearch",
  "search-group": "/search/search/groups",
  "get-preference-group": "/search/search/groupsinterest",
};

export default apiPaths;
