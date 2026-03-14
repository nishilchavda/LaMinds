// import Card from "./Components/Card";
// import ProductCard from "./Components/ProductCard";

import ApplyCard from "./Components/ApplyCard";

const App = () => {
  // const data = [
  //   {
  //     juice_name: "Orange Juice",
  //     ingredients: ["Orange", "Water", "Sugar"],
  //     price: 90,
  //     photo:
  //       "https://i.pinimg.com/1200x/0d/1c/f4/0d1cf4ad7af8e402daba6454bbe9a115.jpg",
  //   },
  //   {
  //     juice_name: "Mango Juice",
  //     ingredients: ["Mango", "Milk", "Sugar"],
  //     price: 120,
  //     photo:
  //       "https://i.pinimg.com/736x/fd/6c/1e/fd6c1ee5b59575e1ae092fc744926cad.jpg",
  //   },
  //   {
  //     juice_name: "Watermelon Juice",
  //     ingredients: ["Watermelon", "Mint", "Lime"],
  //     price: 80,
  //     photo:
  //       "https://i.pinimg.com/736x/01/81/f1/0181f1a6c35dfb278704ae73610ac925.jpg",
  //   },
  //   {
  //     juice_name: "Pomegranate Juice",
  //     ingredients: ["Pomegranate", "Water", "Sugar"],
  //     price: 130,
  //     photo:
  //       "https://i.pinimg.com/736x/66/43/d8/6643d82bbab3d071d58f424a669257db.jpg",
  //   },
  //   {
  //     juice_name: "Pineapple Juice",
  //     ingredients: ["Pineapple", "Water", "Sugar"],
  //     price: 100,
  //     photo:
  //       "https://i.pinimg.com/1200x/4c/c4/9d/4cc49d102bf1d2a2d3590d5dea3ef19f.jpg",
  //   },
  //   {
  //     juice_name: "Strawberry Juice",
  //     ingredients: ["Strawberry", "Water", "Sugar"],
  //     price: 140,
  //     photo:
  //       "https://i.pinimg.com/736x/10/f0/3d/10f03d1c6ee484234a8ef0ae6476d401.jpg",
  //   },
  //   {
  //     juice_name: "Carrot Juice",
  //     ingredients: ["Carrot", "Apple", "Ginger"],
  //     price: 70,
  //     photo:
  //       "https://i.pinimg.com/1200x/b8/7f/42/b87f42e581b8bb44a91c4b93f4bb9789.jpg",
  //   },
  //   {
  //     juice_name: "Green Detox Juice",
  //     ingredients: ["Spinach", "Apple", "Cucumber"],
  //     price: 90,
  //     photo:
  //       "https://i.pinimg.com/1200x/0a/eb/8a/0aeb8a1977b69abb00d004660045780f.jpg",
  //   },
  //   {
  //     juice_name: "Apple Juice",
  //     ingredients: ["Apple", "Water", "Sugar"],
  //     price: 85,
  //     photo:
  //       "https://i.pinimg.com/1200x/4c/12/a6/4c12a6adaa09fbe76ff115613477238d.jpg",
  //   },
  //   {
  //     juice_name: "Beetroot Juice",
  //     ingredients: ["Beetroot", "Apple", "Lemon"],
  //     price: 95,
  //     photo:
  //       "https://i.pinimg.com/736x/14/5d/a7/145da73f7efd54a9a3798d29c2f76bfb.jpg",
  //   },
  // ];

  // const ProductData = [
  //   {
  //     id: 1,
  //     title: "Nike Dunk Low Retro",
  //     subtitle: "Street Classic",
  //     description: "Classic basketball style redesigned for everyday comfort.",
  //     price: 129,
  //     tag: "Trending",
  //     avatar:
  //       "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/12/1c/5a/121c5a52249cf5e6ee098baa09001028.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Nike Airforce1 Premium",
  //     subtitle: "Own the Airforce",

  //     description:
  //       "Step back into the classic hoops style with durable leather.",
  //     price: 111,
  //     tag: "Best Seller",
  //     avatar:
  //       "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
  //     image:
  //       "https://i.pinimg.com/1200x/98/45/4c/98454c56b52fed9c78dac62fcd856daa.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Adidas Ultraboost 22",
  //     subtitle: "Run Further",
  //     description: "High energy return with breathable primeknit upper.",
  //     price: 180,
  //     tag: "Popular",
  //     avatar:
  //       "https://i.pinimg.com/736x/aa/60/51/aa60515e9d55dfc442de263d6137a7a2.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/8f/da/ce/8fdace04f87872367f6dbd90a0a0c1d3.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Puma RS-X Reinvention",
  //     subtitle: "Bold Style",
  //     description: "Chunky design with vibrant colors and modern comfort.",
  //     price: 140,
  //     tag: "Hot",
  //     avatar:
  //       "https://i.pinimg.com/736x/f2/ff/fd/f2fffddf6fff512b56fd3440735e7ce9.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/7c/d2/0e/7cd20eaba7b0362e094787331c819f4e.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Jordan 1 Mid",
  //     subtitle: "Iconic Heritage",
  //     description: "Timeless basketball silhouette with premium materials.",
  //     price: 150,
  //     tag: "Limited",
  //     avatar:
  //       "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/4d/e4/34/4de43475284deb2d50363f41e6352c5a.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "New Balance 550",
  //     subtitle: "Retro Court",
  //     description: "A classic 80s basketball sneaker making a modern comeback.",
  //     price: 120,
  //     tag: "Retro",
  //     avatar:
  //       "https://i.pinimg.com/736x/4e/bd/3f/4ebd3f0c61ec02a03ba23d7ee550abcc.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/17/ee/34/17ee34279aec8200c01ba02591a242e0.jpg",
  //   },
  //   {
  //     id: 7,
  //     title: "Nike Air Max 90",
  //     subtitle: "Maximum Air",
  //     description: "Legendary cushioning and bold streetwear design.",
  //     price: 160,
  //     tag: "Top Rated",
  //     avatar:
  //       "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
  //     image:
  //       "https://i.pinimg.com/1200x/1c/6b/16/1c6b16201ed6a4f6315553de7dc26f21.jpg",
  //   },
  //   {
  //     id: 8,
  //     title: "Converse Chuck 70",
  //     subtitle: "Vintage Canvas",
  //     description: "Upgraded cushioning with classic Converse style.",
  //     price: 95,
  //     tag: "Classic",
  //     avatar:
  //       "https://i.pinimg.com/1200x/59/3d/40/593d40fbf2fe8e54e8fae1efbb5a1fdf.jpg",
  //     image:
  //       "https://i.pinimg.com/1200x/76/ad/dc/76addc15542b9bafb271068f33734b88.jpg",
  //   },
  //   {
  //     id: 9,
  //     title: "Reebok Club C 85",
  //     subtitle: "Clean Minimal",
  //     description: "Soft leather upper with retro tennis style.",
  //     price: 89,
  //     tag: "Minimal",
  //     avatar:
  //       "https://i.pinimg.com/1200x/7a/04/53/7a045303ae17a5208767e0295bbf979d.jpg",
  //     image:
  //       "https://i.pinimg.com/1200x/74/20/21/742021a8fc05221baf6a8a54d36e998d.jpg",
  //   },
  //   {
  //     id: 10,
  //     title: "Vans Old Skool",
  //     subtitle: "Skate Culture",
  //     description: "Durable canvas and suede with iconic side stripe.",
  //     price: 75,
  //     tag: "Skate",
  //     avatar:
  //       "https://i.pinimg.com/1200x/2a/62/2d/2a622d00790c52ed8afdac4c7590e716.jpg",
  //     image:
  //       "https://i.pinimg.com/736x/36/4c/78/364c7858466ea670a9a77efd99f2950b.jpg",
  //   },
  // ];

  const JobData = [
    {
      company: "Google",
      logo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
      posted: "5 Days ago",
      position: "Senior UI/UX Designer",
      jobType: "Part-time",
      level: "Senior Level",
      salary: "$200 - $250k",
      location: "New York, NY",
    },
    {
      company: "Microsoft",
      logo: "https://i.pinimg.com/736x/fa/76/9b/fa769ba2fd25c9bdd269a736e0942218.jpg",
      posted: "2 Days ago",
      position: "Frontend Developer",
      jobType: "Full-time",
      level: "Mid Level",
      salary: "$120 - $150k",
      location: "Seattle, WA",
    },
    {
      company: "Apple",
      logo: "https://i.pinimg.com/736x/53/d4/30/53d4300e331e9260beb70d77e6d8b2ed.jpg",
      posted: "1 Week ago",
      position: "Product Designer",
      jobType: "Full-time",
      level: "Senior Level",
      salary: "$180 - $210k",
      location: "Cupertino, CA",
    },
    {
      company: "Amazon",
      logo: "https://i.pinimg.com/1200x/3a/b5/92/3ab592044ca880f91e97773f739d8398.jpg",
      posted: "3 Days ago",
      position: "UI Engineer",
      jobType: "Full-time",
      level: "Mid Level",
      salary: "$130 - $170k",
      location: "Austin, TX",
    },
    {
      company: "Meta",
      logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      posted: "6 Days ago",
      position: "UX Researcher",
      jobType: "Contract",
      level: "Senior Level",
      salary: "$150 - $190k",
      location: "Menlo Park, CA",
    },
    {
      company: "Netflix",
      logo: "https://i.pinimg.com/1200x/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.jpg",
      posted: "4 Days ago",
      position: "Product UI Designer",
      jobType: "Full-time",
      level: "Senior Level",
      salary: "$190 - $230k",
      location: "Los Angeles, CA",
    },
    {
      company: "Airbnb",
      logo: "https://i.pinimg.com/1200x/c6/63/40/c66340522fbafb9de6a1b4423060ecde.jpg",
      posted: "2 Weeks ago",
      position: "Interaction Designer",
      jobType: "Remote",
      level: "Mid Level",
      salary: "$140 - $180k",
      location: "Remote",
    },
    {
      company: "Spotify",
      logo: "https://i.pinimg.com/736x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg",
      posted: "3 Days ago",
      position: "Design System Engineer",
      jobType: "Full-time",
      level: "Senior Level",
      salary: "$160 - $200k",
      location: "Stockholm, Sweden",
    },
    {
      company: "Adobe",
      logo: "https://i.pinimg.com/1200x/a7/28/46/a72846b8e86d910b5a901f35f58b7491.jpg",
      posted: "1 Day ago",
      position: "Visual Designer",
      jobType: "Part-time",
      level: "Junior Level",
      salary: "$90 - $120k",
      location: "San Jose, CA",
    },
    {
      company: "Tesla",
      logo: "https://i.pinimg.com/1200x/13/6c/c6/136cc6856f5666bbe48a32197c19b098.jpg",
      posted: "5 Days ago",
      position: "UI Designer",
      jobType: "Full-time",
      level: "Mid Level",
      salary: "$110 - $150k",
      location: "Palo Alto, CA",
    }
  ];

  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {data.map(function (juice) {
          return <Card data={juice} />;
        })}
      </section> */}
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {ProductData.map(function (product) {
          return <ProductCard key={product.id} data={product} />;
        })}
      </section> */}
      <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {JobData.map(function (job,index) {
          return <ApplyCard key={index}  data={job} />
        })}
      </section>
    </>
  );
};

export default App;
