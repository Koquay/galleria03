export const FooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const initialState = {
  us: {
    aboutUs: {
      title: "ABOUT US",
      text:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.",
    },
    followUs: {
      title: "FOLLOW US",
      socialIcons: [
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-linkedin",
        "fa fa-google-plus",
        "fa fa-dribbble",
      ],
    },
    newsLetter: {
      title: "NEWSLETTER",
      buttonText: "SUBSCRIBE",
    },
  },

  footerLinks: {
    facilities: {
      image: "bottom-logo.png",
      offices: [
        {
          title: "HEAD OFFICE",
          address: "50 GrandVille, Suite 329, Boston, MA",
          phone: "(617) 908 4434",
          email: "info@galleria.com",
          website: "www.galleria.com",
        },
        {
          title: "WAREHOUSE",
          address: "90 Queens Place, Toronto, ON",
          phone: "(905) 888-9999",
          email: "info@galleria.ca",
          website: "www.galleria.ca",
        },
      ],
    },
    links: [
      {
        title: "MY ACCOUNT",
        link: [
          { label: "My Account" },
          { label: "Shopping cart" },
          { label: "Checkout" },
          { label: "Login" },
          { label: "Register" },
          { label: "Discount" },
        ],
      },
      {
        title: "INFORMATION",
        link: [
          { label: "Shipping & Returns" },
          { label: "Online Order" },
          { label: "About Our Shop" },
          { label: "Secure Shopping" },
          { label: "Privacy & Policy" },
          { label: "Terms & Conditions" },
        ],
      },
      {
        title: "OPENING TIME",
        link: [
          { label: "Monday - Friday 8.00 - 18.00" },
          { label: "Saturday 9.00 - 21.00" },
          { label: "Sunday10.00 - 21.00" },
        ],
      },
    ],
    creditCardImage: "payment.png",
  },
};
