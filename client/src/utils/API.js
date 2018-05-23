import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: function (id) {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
    return axios.get(`/user/${id}`);
  },

//   getSpaceXData: () => {
//     return axios.get(`https://api.spacexdata.com/v2/launches/latest`);
//   }
// };

  getSpacexAll: () => {
    return axios.get("https://api.spacexdata.com/v2/launches/all")
  }
};

//https://api.spacexdata.com/v2/launches/all - all launches past and present 