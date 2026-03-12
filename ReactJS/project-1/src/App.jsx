// import Card from "./Components/Card";
import ProductCard from "./Components/ProductCard";

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

  const ProductData = [
    {
      id: 1,
      title: "Nike Dunk Low Retro",
      subtitle: "Street Classic",
      description: "Classic basketball style redesigned for everyday comfort.",
      price: 129,
      tag: "Trending",
      avatar:
        "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
      image:
        "https://i.pinimg.com/736x/12/1c/5a/121c5a52249cf5e6ee098baa09001028.jpg",
    },
    {
      id: 2,
      title: "Nike Airforce1 Premium",
      subtitle: "Own the Airforce",
      
      description:
        "Step back into the classic hoops style with durable leather.",
      price: 111,
      tag: "Best Seller",
      avatar:
        "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
      image:
        "https://i.pinimg.com/1200x/98/45/4c/98454c56b52fed9c78dac62fcd856daa.jpg",
    },
    {
      id: 3,
      title: "Adidas Ultraboost 22",
      subtitle: "Run Further",
      description: "High energy return with breathable primeknit upper.",
      price: 180,
      tag: "Popular",
      avatar:
        "https://i.pinimg.com/736x/aa/60/51/aa60515e9d55dfc442de263d6137a7a2.jpg",
      image:
        "https://i.pinimg.com/736x/8f/da/ce/8fdace04f87872367f6dbd90a0a0c1d3.jpg",
    },
    {
      id: 4,
      title: "Puma RS-X Reinvention",
      subtitle: "Bold Style",
      description: "Chunky design with vibrant colors and modern comfort.",
      price: 140,
      tag: "Hot",
      avatar:
        "https://i.pinimg.com/736x/f2/ff/fd/f2fffddf6fff512b56fd3440735e7ce9.jpg",
      image:
        "https://i.pinimg.com/736x/7c/d2/0e/7cd20eaba7b0362e094787331c819f4e.jpg",
    },
    {
      id: 5,
      title: "Jordan 1 Mid",
      subtitle: "Iconic Heritage",
      description: "Timeless basketball silhouette with premium materials.",
      price: 150,
      tag: "Limited",
      avatar:
        "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
      image:
        "https://i.pinimg.com/736x/08/0a/21/080a21eb53d31a1fcffa029fbc6dcd9f.jpg",
    },
    {
      id: 6,
      title: "New Balance 550",
      subtitle: "Retro Court",
      description: "A classic 80s basketball sneaker making a modern comeback.",
      price: 120,
      tag: "Retro",
      avatar:
        "https://i.pinimg.com/736x/4e/bd/3f/4ebd3f0c61ec02a03ba23d7ee550abcc.jpg",
      image:
        "https://i.pinimg.com/736x/17/ee/34/17ee34279aec8200c01ba02591a242e0.jpg",
    },
    {
      id: 7,
      title: "Nike Air Max 90",
      subtitle: "Maximum Air",
      description: "Legendary cushioning and bold streetwear design.",
      price: 160,
      tag: "Top Rated",
      avatar:
        "https://i.pinimg.com/736x/cb/bc/32/cbbc3211078a77fc8771c76c273ffce9.jpg",
      image:
        "https://i.pinimg.com/1200x/1c/6b/16/1c6b16201ed6a4f6315553de7dc26f21.jpg",
    },
    {
      id: 8,
      title: "Converse Chuck 70",
      subtitle: "Vintage Canvas",
      description: "Upgraded cushioning with classic Converse style.",
      price: 95,
      tag: "Classic",
      avatar:
        "https://i.pinimg.com/1200x/59/3d/40/593d40fbf2fe8e54e8fae1efbb5a1fdf.jpg",
      image:
        "https://i.pinimg.com/1200x/76/ad/dc/76addc15542b9bafb271068f33734b88.jpg",
    },
    {
      id: 9,
      title: "Reebok Club C 85",
      subtitle: "Clean Minimal",
      description: "Soft leather upper with retro tennis style.",
      price: 89,
      tag: "Minimal",
      avatar:
        "https://i.pinimg.com/1200x/7a/04/53/7a045303ae17a5208767e0295bbf979d.jpg",
      image:
        "https://i.pinimg.com/1200x/74/20/21/742021a8fc05221baf6a8a54d36e998d.jpg",
    },
    {
      id: 10,
      title: "Vans Old Skool",
      subtitle: "Skate Culture",
      description: "Durable canvas and suede with iconic side stripe.",
      price: 75,
      tag: "Skate",
      avatar:
        "https://i.pinimg.com/1200x/2a/62/2d/2a622d00790c52ed8afdac4c7590e716.jpg",
      image:
        "https://i.pinimg.com/736x/36/4c/78/364c7858466ea670a9a77efd99f2950b.jpg",
    },
  ];
  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {data.map(function (juice) {
          return <Card data={juice} />;
        })}
      </section> */}

      <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {ProductData.map(function (product) {
          return <ProductCard key={product.id} data={product} />;
        })}
      </section>
    </>
  );
};

export default App;
