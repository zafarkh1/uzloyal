const navs = [
  {
    id: 1,
    title: "News",
    link: "/news",
  },
  {
    id: 2,
    title: "Legal library",
    link: "/library",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Document samples",
    link: "/resources",
  },
];

function BottomNavbar(props) {
  return (
    <div className="bg-primary text-white pl-36">
      <div className="myContainer">
        <ul className="flex justify-between w-2/3">
          {navs.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="lg:text-xl">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BottomNavbar;
