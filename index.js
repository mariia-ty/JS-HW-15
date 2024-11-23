const users = [
  {
    name: "Stephanie Brown",
    balance: 34567,
    friends: 14,
    skills: ["painting", "drawing", "befrending animals"],
  },
  {
    name: "Bruce Wayne",
    balance: 3450607,
    friends: 4,
    skills: ["skating", "leading", "finding things"],
  },
  {
    name: "Richard Grayson",
    balance: 285369,
    friends: 17,
    skills: ["gymnastics", "befrending animals", "acrobatics"],
  },
  {
    name: "Jason Todd",
    balance: 277,
    friends: 8,
    skills: ["gymnastics", "creative writing", "making rings"],
  },
  {
    name: "Selina Kyle",
    balance: 7083,
    friends: 0,
    skills: ["dancing", "skating", "drawing"],
  },
];

//assign 1 total balance

const totalBalance = users.reduce((total, user) => total + user.balance, 0);
console.log(totalBalance);

//assign 2 names of those who have friends

const haveFriends = users.reduce((list, user) => {
  if (user.friends > 0) {
    list.push(user.name);
  }
  return list;
}, []);

console.log(haveFriends); // ["Stephanie Brown", "Bruce Wayne", "Richard Grayson", "Jason Todd"]

//assign 3 names ordered by num of friends

const sortedFriends = users.sort((a, b) => b.friends - a.friends);
const sortedFriendsNames = users.reduce((names, user) => {
    names.push(user.name);
  return names;
}, []);
console.log(sortedFriends);
console.log(sortedFriendsNames);

//assign 4 list of all skills, no repeats

const skillsList = users.reduce((list, user) => {
  user.skills.forEach(skill => {
    if (!list.includes(skill)) {
      list.push(skill);
    }
  });
  return list; 
}, []);

console.log(skillsList);