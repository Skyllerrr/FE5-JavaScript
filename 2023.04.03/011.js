// json generator
// https://json-generator.com/
// json

let 회원정보 = [
    {
        "_id": "642a623a51edf19a49cd1060",
        "index": 0,
        "age": 21,
        "eyeColor": "green",
        "name": "Rios Barnes",
        "gender": "male",
        "company": "LETPRO"
    },
    {
        "_id": "642a623a48e00167dbef7824",
        "index": 1,
        "age": 21,
        "eyeColor": "brown",
        "name": "Mcneil Becker",
        "gender": "male",
        "company": "ILLUMITY"
    },
    {
        "_id": "642a623aa9d8834e1581cd78",
        "index": 2,
        "age": 26,
        "eyeColor": "green",
        "name": "Baird Witt",
        "gender": "male",
        "company": "COMSTAR"
    },
    {
        "_id": "642a623a7d0c129ad5a3edc5",
        "index": 3,
        "age": 28,
        "eyeColor": "green",
        "name": "Michael Mcgowan",
        "gender": "male",
        "company": "NETROPIC"
    },
    {
        "_id": "642a623a34797bfc7b983072",
        "index": 4,
        "age": 30,
        "eyeColor": "blue",
        "name": "Regina Cunningham",
        "gender": "female",
        "company": "CEMENTION"
    },
    {
        "_id": "642a623a41dfb63d1069bae3",
        "index": 5,
        "age": 25,
        "eyeColor": "green",
        "name": "Odom Walls",
        "gender": "male",
        "company": "EDECINE"
    }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']

let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6;
console.log(나이평균)