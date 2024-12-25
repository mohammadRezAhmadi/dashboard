let XAxisChartData = [
    {
        "name": "Jan",
        "Sale": 42_000
    },
    {
        "name": "Feb",
        "Sale": 50_000
    },
    {
        "name": "Mar",
        "Sale": 39_000
    },
    {
        "name": "Apr",
        "Sale": 46_000
    },
    {
        "name": "May",
        "Sale": 33_000
    },
    {
        "name": "Jun",
        "Sale": 26_000
    },
    {
        "name": "Jul",
        "Sale": 48_000
    },
    {
        "name": "Agu",
        "Sale": 60_000
    },
    {
        "name": "Sep",
        "Sale": 39_000
    },
    {
        "name": "Oct",
        "Sale": 50_000
    },
    {
        "name": "Nev",
        "Sale": 26_000
    },
    {
        "name": "Des",
        "Sale": 20_000
    },
]

let widgetListUser = [
    {
            id:1,
            username: "MohammadReza Ahmadi",
            title: "Developer",
            img:'./images/ahmadi.jpg'
    },
    {
            id:2,
            username: "Reza Reafiee",
            title: "Hacker",
            img:'./images/ahmadi.jpg'
    },
    {
            id:3,
            username: "Mohammad Naseri",
            title: "Seo",
            img:'./images/ahmadi.jpg'
    },
    {
            id:4,
            username: "Amin Nekonam",
            title: "Back End Developer",
            img:'./images/ahmadi.jpg'
    },
    {
            id:5,
            username: "Sajad sayedi",
            title: "Blockchain Developer",
            img:'./images/ahmadi.jpg'
    },
    {
            id:6,
            username: "Sajad sayedi",
            title: "Blockchain Developer",
            img:'./images/ahmadi.jpg'
    },
   
]
 let transactions = [
    {
        id:1,
        customer: "MohammadAhmadi",
        date: "18 Agu 2024",
        amount: 123,
        status: "Declined",
        img: "./images/ahmadi.jpg"
    },
    {
        id:2,
        customer: "MahdiKazemi",
        date: "4 Apr 2024",
        amount: 417,
        status: "Approved",
        img: "./images/ahmadi.jpg"
    },
    {
        id:3,
        customer: "AhmadJafari",
        date: "28 Jua 2023",
        amount: 543,
        status: "Pending",
        img: "./images/ahmadi.jpg"
    },
    {
        id:4,
        customer: "YasinMolaee",
        date: "18 Agu 2024",
        amount: 123,
        status: "Declined",
        img: "./images/ahmadi.jpg"
    },
    {
        id:5,
        customer: "RezaMohammadi",
        date: "18 Agu 2024",
        amount: 123,
        status: "Pending",
        img: "./images/ahmadi.jpg"
    },
    {
        id:6,
        customer: "AliJavadi",
        date: "1 Feb 2024",
        amount: 1133,
        status: "Approved",
        img: "./images/ahmadi.jpg"
    },
 ]

let userRows = [
    {
        id: 1 , 
        username: "Ahmad Rezaee",
        status: "Active",
        transactions: "$123",
        avatar: "./images/ahmadi.jpg",
        email: "mohammad2gmail.com"
    },
    {
        id: 2 , 
        username: "Zahra Ahmadi",
        status: "non-active",
        transactions: "$423.41",
        avatar: "./images/ahmadi.jpg",
        email: "mohammad2gmail.com"
    },
    {
        id: 3 , 
        username: "Ali Motevali",
        status: "Active",
        transactions: "$427.21",
        avatar: "./images/ahmadi.jpg",
        email: "mohammad2gmail.com"
    },
    {
        id: 4 , 
        username: "Kianoush Razavi",
        status: "Active",
        transactions: "$951.56",
        avatar: "images/ahmadi.jpg",
        email: "mohammad2gmail.com"
    },
    {
        id: 5 , 
        username: "Farhad Jafari",
        status: "non-active",
        transactions: "$14312.32",
        avatar: "./images/ahmadi.jpg",
        email: "mohammad2gmail.com"
    },
]

let products = [
    {
        id: 1 , 
        title: "Asus" , 
        price: "345$",
        avatar: "/images/Asus.jpg"
    },
    {
        id: 2 , 
        title: "Dell" , 
        price: "485$",
        avatar: "/images/Dell.jpg"
    },
    {
        id: 3 , 
        title: "Lenovo" , 
        price: "839$",
        avatar: "/images/Lenovo.jpg"
    },
    {
        id: 4 , 
        title: "HP" , 
        price: "490$",
        avatar: "/images/Hp.jpg"
    },
]


const productDataChart =[
    {
        id: 1 ,
        dataChart:[
            {
                name: "Jun",
                sales: 6300
            },
            {
                name: "Feb",
                sales: 1800
            },
            {
                name: "Mar",
                sales: 5900
            },
        ]
    },
    {
        id: 2 ,
        dataChart:[
            {
                name: "Jun",
                sales: 1300
            },
            {
                name: "Feb",
                sales: 2400
            },
            {
                name: "Mar",
                sales: 7900
            },
        ]
    },
    {
        id: 3 ,
        dataChart:[
            {
                name: "Jun",
                sales: 400
            },
            {
                name: "Feb",
                sales: 7800
            },
            {
                name: "Mar",
                sales: 2000
            },
        ]
    },
    {
        id: 4 ,
        dataChart:[
            {
                name: "Jun",
                sales: 2300
            },
            {
                name: "Feb",
                sales: 1800
            },
            {
                name: "Mar",
                sales: 5900
            },
        ]
    },
]
export {XAxisChartData , widgetListUser , transactions , userRows , products , productDataChart}
