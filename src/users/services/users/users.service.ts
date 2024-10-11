import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { userName: 'jason', email: 'darelljason3@gmail.com' },
        { userName: 'allison', email: 'allison3@gmail.com' },
        { userName: 'johnson', email: 'johnson3@gmail.com' }
    ];
    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails:CreateUserType){
        this.fakeUsers.push(userDetails);
        return this.fakeUsers; 
    }

    fetchUserById(id:number){
        return id;
    }
}
