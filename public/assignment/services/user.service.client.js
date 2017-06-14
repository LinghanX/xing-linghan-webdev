(function(){
    angular.module('WebAppMaker').factory('UserService', UserService);

    function UserService($http){
        var api = {
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser,
            login: login,
            logout: logout,
            register: register
        };

        return api;

        function register(user) {
            return $http.post('/api/register', user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function login(user) {
            return $http.post("/api/login", user);
        }

        function createUser(user) {
            const url = "/api/assignment/user";
            return $http.post(url, user)
                .then(function(response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            const url = "/api/assignment/user/" + userId;

            return $http.delete(url)
                .then(function(response) {
                    return response.data;
                })
        }

        // return void
        function updateUser(userId, user) {
            const url = "/api/assignment/user/" + userId;

            return $http.put(url, user)
                .then(function(response){
                    return response.data;
                });
        }

        function findUserById(userId) {
            const url = "/api/assignment/user/" + userId;
            return $http.get(url)
                .then(function(response) {
                    return response.data;
                })
        }

        function findUserByCredentials(username, password) {
            const url = "/api/assignment/user?userName=" + username
                + "&password" + password;
            return $http.get(url)
                .then(function (response) {
                    const user = response.data;
                    if(user.password === password){
                        return user;
                    } else {
                        console.log('User not found');
                    }
                });
        }

        function findUserByUsername(username) {
            const url = "/api/assignment/user?userName=" + username;
            return $http.get(url)
                .then(function (response) {
                    const user = response.data;
                    if(user !== undefined){
                        return user;
                    } else {
                        console.log('User not found');
                    }
                });
        }
    }
})();
