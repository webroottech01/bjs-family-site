import Receive from "public/images/about/our-technology/Graphics/Technology_Receive.svg";
import WeReceive from "../onboard-showcase/Anim/WeReceive";
type Props = {
  id: number;
  desc: Array<string>;
  name: string;
};
export const OnBoardingOptions: Array<any> = [
  {
    name: "Our Technology",
    id: 1,
  },
  {
    name: "Tracking Services",
    id: 2,
  },
  {
    name: "Integrations",
    id: 3,
  },
];
export const PartnersKeys: Array<string> = [
  "Aptean WMS",
  "Route Genie",
  "Mintsoft",
  "Despatch Cloud",
  "Netsuite",
  "Brightpearl",
  "Orderwise",
  "Parcel Perform",
  "Aftership",
  "ItinSell",
];
export const OnBoardingKeys: Array<Props> = [
  {
    name: "Inbound",
    id: 1,
    desc: [
      "Thanks to our convenient integrations and real time updates which can be delivered directly to your systems, we provide complete visibility of your logistics operation and product movements. BJS will give you end to end peace of mind and get you up and running fast. Our warehouse technology allows us to store, pick and dispatch your goods with an audit of product condition and product movement throughout our network.",
    ],
  },
  {
    name: "Scheduling",
    id: 2,
    desc: [
      "We think your customers will value seamless controls for managing their orders, clear communications and visbility around what's happening. We schedule deliveries or collections directly with your customers, keeping them informed and letting them manage or update their orders through text messages, email or via our web tracking platform, alternatively, the traditional way by speaking to our friendly customer service teams over the phone.",
    ],
  },
  {
    name: "Planning",
    id: 3,
    desc: [
      "With hundreds of vehicle routes planned one business day prior to the order schedule date we agree with your customer, our systems generate a three hour delivery window for each customer and send it across to them via their preferred communication channels. Failed deliveries are no fun, we try to empower your customer through transparent communication and put order management controls at their fingertips to deliver success and satisfaction.",
    ],
  },
  {
    name: "we deliver",
    id: 4,
    desc: [
      "Whether it's a simple drop to the door or a complicated exchange and install. Our technology helps our delivery service teams carry out the exact service you've specified on your customer’s order. We obtain confirmation of service completion through our sign on glass technology, generate a delivery or collection note to reflect what we've done in order to keep you fully informed and send it straight through to you and your customers.",
    ],
  },
  {
    name: "Storage",
    id: 5,
    desc: [
      "Need a helping hand storing your stock? We’ve got you covered. BJS can offer a full 3PL model from storing, picking, packing and dispatching your items directly to your customers. Streamlining your product touch-points often results in lower damages, claims and happier customers.",
      "Let us take care of handling your products whilst you take care of sales, growth and happy customers.",
    ],
  },
  {
    name: "retailer tracking",
    id: 6,
    desc: [
      "We understand keeping an eye on your operation is an important part of delivering the best customer journey possible. BJS offers ready to go APIs to get data out of our systems and into yours to make sure you’re always up-to-date with what's happening and so is your customer.",
      "We’re aligned with leading tracking and shipping platforms such as Parcel Perform, Aftership and  Amazon for the latest in industry efficiency and carrier management.",
    ],
  },
  {
    name: "customer tracking",
    id: 7,
    desc: [
      "We love nothing more than happy customers, enjoying their shiny new products and feeling satisfied with their purchase and their experience. Each consignment can be tracked by both our retail partners (via our systems or yours) and homeowners.",
      "We aim to provide an exceptional tracking experience for homeowners, offering the very latest in delivery controls such as accepting what3words for precise delivery locations.",
      "We recognise the importance of accessible communication and our first class customer experience is as flexible as it is reliable. Let us show you how we do things the BJS way.",
    ],
  },
  {
    name: "integrations",
    id: 8,
    desc: [
      "Moving data within a complex supply chain can be challenging and integrations can be both complex and expensive but we don’t think getting up and running with a delivery partner should be tedious. We provide a number of ready to go integrations with leading WMS, ERP and Order Management Systems. If you love APIs as much as we do, we have a comprehensive suite of order management APIs which can get our partners up and running quickly and efficiently.",
    ],
  },
];
