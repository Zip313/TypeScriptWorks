import {usersArray,IUser} from "./users";
import {usersInfoArray,IUsersInfo,IOrganization} from "./userInfo";
interface IUserPosition {
    name:string;
    position:string;
    age:number;
    gender:string;
}
function getUsersJobPositions(usersArray:IUser[]):IUserPosition[] {
    return (usersArray
        .map((u)=>
        {
            const ui:IUsersInfo|undefined = usersInfoArray.find((ui)=>ui.userid===u.userid);
            return ({name:u.name,position:ui?.organization.position,age:ui?.age,gender:u?.gender} as IUserPosition)
        }))
}

const usersPositions:IUserPosition[] = getUsersJobPositions(usersArray);

console.log(usersPositions);