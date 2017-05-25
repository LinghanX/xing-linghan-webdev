(function(){
    angular.module('WebAppMaker').factory('UserService', UserService);

    function UserService(){
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        function createUser(user) {
            var newUsers = users.push(user);
            users = newUsers;

            return users;
        }

        function findUserByUsername(username) {
            for(var u in users) {
                if(users[u].username === username){
                    return users[u];
                }
            }

            return null;
        }

        function deleteUser(userId) {
            var userIndex = findUserIndexById(userId);

            if(userIndex === -1){
                console.log('error, unable to find user');
                return;
            }

            users.splice(userIndex, 1);

            return users;
        }

        // return void
        function updateUser(userId, user) {
            var userIndex = findUserIndexById(userId);

            if(userIndex === -1){
                console.log('error, unable to find user');
                return;
            }

            users[userIndex] = user;
        }

        function findUserIndexById(userId) {
            var userIndex = -1;

            for(var u in users){
                if(users[u]._id === userId){
                    userIndex = u;
                    break;
                }
            }

            return userIndex;
        }

        function findUserById(userId) {
            for(var u in users) {
                if(users[u]._id === userId)
                    return users[u];
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];

                if(user.username === username && user.password === password){
                    return user;
                }

                return null;
            }
        }
    }
})();