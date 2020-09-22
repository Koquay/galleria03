export const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const initialState = {
  homeStaticData: {
    homeCarousel: [
      {
        image: "slider-1.jpg",
        text1: "BIGGEST SALE",
        text2: "ON",
        text3: "SUMMER COLLECTION",
      },
      // {
      //   image: "slider-1.jpg",
      //   text1: "NEXT BIGGEST SALE",
      //   text2: "ON",
      //   text3: "SUMMER COLLECTION",
      // },
    ],

    collections: [
      {
        image: "product-1.jpg",
        title: "MEN'S",
        url: "collection",
        description: "SUMMER COLLECTION",
      },
      {
        image: "product-2.jpg",
        title: "NEW ARRIVALS",
        url: "collection",
        description: "WOMENS COLLECTION",
      },
      {
        image: "product-3.jpg",
        title: "FASHIONABLE",
        url: "collection",
        description: "BAG COLLECTION",
      },
      {
        image: "product-4.jpg",
        title: "WOMEN'S",
        url: "collection",
        description: "TRENDY COLLECTION",
      },
    ],
    featuredItems: {
      recent: [
        {
          image: ["product-5.jpg", "product-9.jpg"],
          designer: "Lorem ipsum",
          listPrice: "110",
          price: 100,
          rating: 5,
        },
        {
          image: ["product-6.jpg", "axfddsasda.jpg"],
          designer: "consectetur",
          listPrice: 150,
          price: 125,
          rating: 4,
        },
        {
          image: ["product-7.jpg", "afadfdds.jpg"],
          designer: "magna aliqua",
          listPrice: 105,
          price: 99,
          rating: 3,
        },
        {
          image: ["product-8.jpg", "aassad.jpg"],
          designer: "Convallis",
          listPrice: "102",
          price: 89.99,
          rating: 5,
        },
        {
          image: ["areadfa.jpg", "product-9.jpg"],
          designer: "Tempus egestas",
          listPrice: "130.99",
          price: "110",
          rating: 4,
        },
      ],
      featured: [
        {
          image: ["areadfa.jpg", "product-9.jpg"],
          designer: "Lorem ipsum",
          listPrice: "110",
          price: 100,
          rating: 5,
        },
        {
          image: ["product-8.jpg", "axfddsasda.jpg"],
          designer: "consectetur",
          listPrice: 150,
          price: 125,
          rating: 4,
        },
        {
          image: ["product-5.jpg", "afadfdds.jpg"],
          designer: "magna aliqua",
          listPrice: 105,
          price: 99,
          rating: 3,
        },
        {
          image: ["product-9.jpg", "afadfdds.jpg"],
          designer: "Convallis",
          listPrice: "102",
          price: 89.99,
          rating: 5,
        },
        {
          image: ["product-7.jpg", "aassad.jpg"],
          designer: "Tempus egestas",
          listPrice: "130.99",
          price: "110",
          rating: 4,
        },
      ],
      special: [
        {
          image: "product-6.jpg",
          designer: "Lorem ipsum",
          listPrice: "110",
          price: 100,
          rating: 5,
        },
        {
          image: "product-8.jpg",
          designer: "consectetur",
          listPrice: 150,
          price: 125,
          rating: 4,
        },
        {
          image: "product-5.jpg",
          designer: "magna aliqua",
          listPrice: 105,
          price: 99,
          rating: 3,
        },
        {
          image: "product-9.jpg",
          designer: "Convallis",
          listPrice: "102",
          price: 89.99,
          rating: 5,
        },
        {
          image: "product-7.jpg",
          designer: "Tempus egestas",
          listPrice: "130.99",
          price: "110",
          rating: 4,
        },
      ],
    },

    blog: {
      featuredBlogs: [
        {
          image: "blog-1.jpg",
          title: "Lorem ispam doler",
          excerpt:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accustium doloremque laudantium...",
          author: "John",
          month: "Nov",
          day: "12",
          numberOfComments: 12,
          numberOfDaysAgo: "3",
        },
        {
          image: "blog-2.jpg",
          title: "Omnis iste natus",
          excerpt:
            "Voluptatem accustium doloremque Sed ut perspiciatis unde omnis iste natus error sit laudantium...",
          author: "John",
          month: "Oct",
          day: "28",
          numberOfComments: 12,
          numberOfDaysAgo: "5",
        },
      ],
    },
    brands: [
      { image: "brand-1.png", url: "" },
      { image: "brand-2.png", url: "" },
      { image: "brand-3.png", url: "" },
      { image: "brand-4.png", url: "" },
      { image: "brand-5.png", url: "" },
      { image: "brand-6.png", url: "" },
      { image: "brand-7.png", url: "" },
      { image: "brand-8.png", url: "" },
      { image: "brand-9.png", url: "" },
    ],
    sales: [
      {
        image: "product-banner-1.jpg",
        text1: "BIGGEST SALE",
        text2: "OF THE YEAR",
      },
      { image: "product-banner-2.jpg", text1: "SALE UP TO", text2: "35% OFF" },
    ],
    services: [
      {
        image: "serv-1.1.png",
        title: "High quality",
        description: "Lorem ipsum dolor sit amet, conseetur adipiscing elit",
      },
      {
        image: "serv-2.png",
        title: "Fast delivery",
        description: "Lorem ipsum dolor sit amet, conseetur adipiscing elit",
      },
      {
        image: "serv-3.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, conseetur adipiscing elit",
      },
      {
        image: "serv-4.png",
        title: "14 - day returns",
        description: "Lorem ipsum dolor sit amet, conseetur adipiscing elit",
      },
      {
        image: "serv-5.png",
        title: "Secure checkout",
        description: "Lorem ipsum dolor sit amet, conseetur adipiscing elit",
      },
    ],
  },
};
