const apiPaths = {
  login: "/auth/Login",
  signup: "/auth/register",
  checkLoginStatus: "/auth/checkLoginStatus",
  "get-my-profile": "/member/memberDetails",
  "my-groups-list": "/member/usergrouplist",
  "check-group-rating": "/member/checkgroupratings",

  getCities: "/member/city",
  "leave-group": "/group/leavegroup",
  // landing page
  "get-newest-rating": "/storeinfo/getnewestrating",
  "search-store": "/search/search/storesearch",
  "search-group": "/search/search/groups",
};

export default apiPaths;
