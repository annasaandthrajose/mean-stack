isl=
[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hydeabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"bengaluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},

]
isl.map(emp=>emp.team.toUpperCase()).forEach(emp=>console.log(emp))
isl.sort((emp1,emp2)=>emp1.played>emp2.played?-1:1).forEach(emp=>console.log(emp.team,emp.played))
var max=isl.reduce((emp1,emp2)=>emp1.pts>emp2.pts?emp1:emp2);
console.log(max);
var lo=isl.reduce((t1,t2)=>t1.los>t2.los?t1:t2)
console.log(lo);
isl.filter(emp=>emp.pts>32?emp["status"]= "qualified":emp["status"]="dis qualified")
console.log(isl);



