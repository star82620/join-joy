const apiPaths = {
  login: "/auth/Login",
  signup: "/auth/register",
  "check-login-status": "/auth/checkLoginStatus",

  // create-group
  "get-cities": "/member/city",
  "get-city-stores": "/search/search/stores",
  "get-games": "/storeinfo/gamelist",
  "get-remaining-seats": "/group/checkability",
  "submit-create-group": "/group/create",

  "get-my-profile": "/member/memberDetails",
  "my-groups-list": "/member/usergrouplist",
  "check-group-rating": "/member/checkgroupratings",

  getCities: "/member/city",
  "leave-group": "/group/leavegroup",
  // landing page
  "get-newest-rating": "/storeinfo/getnewestrating",
  "search-store": "/search/search/storesearch",
  "search-group": "/search/search/groups",
  "get-preference-group": "/search/search/groupsinterest",
};

export default apiPaths;
