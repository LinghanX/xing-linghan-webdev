describe('UserServiceTest', function(){
    beforeEach(module('WebAppMaker'));

    it('finds user by id', inject(function(UserService){
        expect(UserService.findUserById('123')._id).toBe('123');
    }));
});