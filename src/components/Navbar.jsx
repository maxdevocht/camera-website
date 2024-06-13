import { webcam } from "../assets";
import { navList } from "../constants";

const Navbar = () => {
  // const pathname = useLocation();
  // const [openNavigation, setOpenNavigation] = useState(false);

  // const toggleNavigation = () => {
  //   if (openNavigation) {
  //     setOpenNavigation(false);
  //     enablePageScroll();
  //   } else {
  //     setOpenNavigation(true);
  //     disablePageScroll();
  //   }
  // };

  // const handleClick = () => {
  //   if (!openNavigation) return;
  //   // enablePageScroll();
  //   setOpenNavigation(false);
  // };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <a href="#">
          <img
            src={webcam}
            alt="logo"
            width={30}
            height={30}
            className="ml-3"
          />
        </a>

        <div className="flex flex-1 items-center justify-center max-sm:hidden">
          {navList.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <button className="text-sm max-sm:hidden text-gray hover:text-white border border-gray hover:border-white transition-all rounded-full px-3 py-1 ">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
