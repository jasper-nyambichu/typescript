class User
{
    static userCount = 0;
    static users = [];
    static university;

    constructor (username, university, residence, course)
    {
        this.username = username;
        this.university = university;
        this.residence = residence
        this.course = course
        User.users.push(this);
        User.userCount++;
    }
}
let loggidIn = false;
let university;
let residence;
let course;

while(!loggidIn)
{
    if(User.userCount >=3)
    {
        let Userlist = "Registered Users in this Platform\n"
        User.users.forEach((user, index) =>
        {
            Userlist += `${index +1}. ${user.username } joined ${user.university}, undertaking ${user.course} and stays at ${user.residence}\n`
        });
        window.alert(Userlist)
        window.alert(`The User Registartion Portal is Now Closed and no more Users can Register`);
        break;
    }

    let username = window.prompt(`Enter in your username`)
    let university = window.prompt(`Enter the name of your Institution: `)
    let residence = window.prompt(`Where do you stay ? `)
    let course = window.prompt(`Which is your Career Course?`)

    if(username === "" || university === "" || residence === "" || course === "")
    {
        window.alert(`Please Enter all the  Required credentials for you to proceed with Registration!`)
        if(User.userCount === 0)
        {
            window.alert(`No Registered delegates have signed in yet!`)
        }
    }
    else
    {
        let newUser = new User(username, university, residence, course)
        {
            window.alert(`Thank you the Successiful Registration made. Welcome ${newUser.username}!. 
                          Glad to know you study in ${newUser.university}. 
                          I'll plan to make a visit to ${newUser.residence}. 
                          Congratulation! for choosing ${newUser.course} as your area of occupation. My best wishes to you!`)
        }
        if(User.userCount === 1)
        {
            window.alert(`So far only ${User.userCount} delegate has registered in!`)
        }
        else
        {
            window.alert(`${User.userCount} delegates are registerd in the system at the moment`)
        }
    }

}
