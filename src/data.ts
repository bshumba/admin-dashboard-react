export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Home",
                url: "/",
                icon: "home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            }
        ]
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg"
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg"
            },
            {
                id: 3,
                title: "Oders",
                url: "/orders",
                icon: "order.svg"
            },
            {
                id: 4,
                title: "Posts",
                url: "/pots",
                icon: "post.svg"
            }
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg"
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg"
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg"
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg"
            }
        ]
    },
    {
        id: 4,
        title: "maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg"
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg"
            }
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg"
            }
        ]
    }
]

export const topDealUsers = [
    {
        id: 1,
        img: "noavatar.png",
        username: "Jane Doe",
        email: "jdoe@example.com",
        amount: "16.8"
    },
    {
        id: 2,
        img: "noavatar.png",
        username: "John Doe",
        email: "johnd@example.com",
        amount: "5.7"
    },
    {
        id: 3,
        img: "noavatar.png",
        username: "Eve Doe",
        email: "eve@example.com",
        amount: "49.2"
    },
    {
        id: 4,
        img: "noavatar.png",
        username: "Sir Brian",
        email: "sirb@example.com",
        amount: "10.1"
    },
    {
        id: 5,
        img: "noavatar.png",
        username: "John Doe",
        email: "johnd@example.com",
        amount: "2.8"
    },
    {
        id: 6,
        img: "noavatar.png",
        username: "Eve Doe",
        email: "eve@example.com",
        amount: "49.2"
    },
    {
        id: 7,
        img: "noavatar.png",
        username: "Sir Brian",
        email: "sirb@example.com",
        amount: "4.6"
    }
]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    dataKey: "users",
    number: "11.238",
    percentage: 45,
    chartData: [
        {name: "Sun", users: 400 },
        {name: "Mon", users: 600 },
        {name: "Tue", users: 500 },
        {name: "Wed", users: 700 },
        {name: "Thu", users: 400 },
        {name: "Fri", users: 500 },
        {name: "Sat", users: 450 }
    ]
}

export const chartBoxPrduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    dataKey: "products",
    number: "238",
    percentage: 21,
    chartData: [
        {name: "Sun", products: 400 },
        {name: "Mon", products: 600 },
        {name: "Tue", products: 500 },
        {name: "Wed", products: 700 },
        {name: "Thu", products: 400 },
        {name: "Fri", products: 500 },
        {name: "Sat", products: 450 }
    ]
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    dataKey: "revenue",
    number: "56.432",
    percentage: -12,
    chartData: [
        {name: "Sun", revenue: 400 },
        {name: "Mon", revenue: 600 },
        {name: "Tue", revenue: 500 },
        {name: "Wed", revenue: 700 },
        {name: "Thu", revenue: 400 },
        {name: "Fri", revenue: 500 },
        {name: "Sat", revenue: 450 }
    ]
}

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    dataKey: "ratio",
    number: "2.6",
    percentage: 12,
    chartData: [
        {name: "Sun", ratio: 400 },
        {name: "Mon", ratio: 600 },
        {name: "Tue", ratio: 500 },
        {name: "Wed", ratio: 700 },
        {name: "Thu", ratio: 400 },
        {name: "Fri", ratio: 500 },
        {name: "Sat", ratio: 450 }
    ]
}

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {name: "Sun", profit: 4000 },
        {name: "Mon", profit: 3000 },
        {name: "Tue", profit: 2000 },
        {name: "Wed", profit: 2780 },
        {name: "Thu", profit: 1890 },
        {name: "Fri", profit: 2390 },
        {name: "Sat", profit: 3490 }
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {name: "Sun", visit: 4000 },
        {name: "Mon", visit: 3000 },
        {name: "Tue", visit: 2000 },
        {name: "Wed", visit: 2780 },
        {name: "Thu", visit: 1890 },
        {name: "Fri", visit: 2390 },
        {name: "Sat", visit: 3490 }
    ]
}

export const userRows = [
    { 
        id: 1, imageName: "/noavatar.png", lastName: 'Snow', firstName: 'Jon', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: true 
    },
    { 
        id: 2, imageName: "/noavatar.png", lastName: 'Lannister', firstName: 'Cersei', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: false 
    },
    { 
        id: 3, imageName: "/noavatar.png", lastName: 'Lannister', firstName: 'Jaime', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: false 
    },
    { 
        id: 4, imageName: "/noavatar.png", lastName: 'Stark', firstName: 'Arya', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: true  
    },
    { 
        id: 5, imageName: "/noavatar.png", lastName: 'Targaryen', firstName: 'Daenerys', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: false 
    },
    { 
        id: 6, imageName: "/noavatar.png", lastName: 'Melisandre', firstName: null, email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: true 
    },
    { 
        id: 7, imageName: "/noavatar.png", lastName: 'Clifford', firstName: 'Ferrara', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: true  
    },
    { 
        id: 8, imageName: "/noavatar.png", lastName: 'Frances', firstName: 'Rossini', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: false 
    },
    { 
        id: 9, imageName: "/noavatar.png", lastName: 'Roxie', firstName: 'Harvey', email: "snow@gmail.com", phone: "0776606749", createdAt: "07.20.2023", status: true  
    },
  ];

  export const products = [
    { 
        id: 1, imageName: "/noavatar.png", title: 'Dell Vostro core i5', color: 'black', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: true 
    },
    { 
        id: 2, imageName: "/noavatar.png", title: 'Hp core i7', color: 'white', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: false 
    },
    { 
        id: 3, imageName: "/noavatar.png", title: 'Lenovo Thinkpad core i3', color: 'siler', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: false 
    },
    { 
        id: 4, imageName: "/noavatar.png", title: 'Dell Vostro core i5', color: 'red', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: true  
    },
    { 
        id: 5, imageName: "/noavatar.png", title: 'Hp pavilion core i7', color: 'white', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: false 
    },
    { 
        id: 6, imageName: "/noavatar.png", title: 'Lenovo Thinkpad core i3', color: "grey", price: "280.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: true 
    },
    { 
        id: 7, imageName: "/noavatar.png", title: 'Dell Vostro core i5', color: 'Ferrara', price: "560.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: true  
    },
    { 
        id: 8, imageName: "/noavatar.png", title: 'Hp pavilion core i7', color: 'Rossini', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: false 
    },
    { 
        id: 9, imageName: "/noavatar.png", title: 'Acer dual core', color: 'orange', price: "12.20", producer: "Sir Brian", createdAt: "07.20.2023", inStock: true  
    },
  ];

  export const singleUser = {
    id: 1,
    img: "/noavatar.png",
    title: "John Doe",
    info: {
        username: "JohnDoe123",
        fullname: "John Doe",
        email: "doe@example.com",
        phone: "123 456 789",
        status: "verified"
    },
    chart: {
        dataKeys: [
            {name: "visits", color: "#82ca9d"},
            {name: "clicks", color: "#8884d8"}
        ],
        data: [
            { name: "Sun", visits: 4000, orders: 2400 },
            { name: "Mon", visits: 3000, orders: 1398 },
            { name: "Tue", visits: 2000, orders: 3800 },
            { name: "Wed", visits: 2780, orders: 3908 },
            { name: "Thu", visits: 1890, orders: 4800 },
            { name: "Fri", visits: 4000, orders: 2400 },
            { name: "Sat", visits: 4000, orders: 2400 },
        ]
    },
    activities: [
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
    ]
}

  export const singleProduct = {
    id: 1,
    img: "/productIcon.svg",
    title: "PlayStation 5 Digital Edition",
    info: {
        productId: "prod001",
        color: "white",
        price: "25.89",
        producer: "Sony",
        eport: "Japan"
    },
    chart: {
        dataKeys: [
            {name: "visits", color: "#82ca9d"},
            {name: "orders", color: "#8884d8"}
        ],
        data: [
            { name: "Sun", visits: 4000, orders: 2400 },
            { name: "Mon", visits: 3000, orders: 1398 },
            { name: "Tue", visits: 2000, orders: 3800 },
            { name: "Wed", visits: 2780, orders: 3908 },
            { name: "Thu", visits: 1890, orders: 4800 },
            { name: "Fri", visits: 4000, orders: 2400 },
            { name: "Sat", visits: 4000, orders: 2400 },
        ]
    },
    activities: [
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
        {text: "John Doe Purchased Playstation 5 Digital Edition", time: "3 days ago"},
    ]
}
