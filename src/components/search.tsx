import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <div className="bg-[rgb(233,247,243)] w-[200px] rounded-br-[50px] rounded-tl-[50px] pl-5">
      <a
        href="#home"
        className="font-serif text-[1.8rem] font-bold text-primary no-underline flex items-center gap-2 relative group"
      >
        <FontAwesomeIcon
          icon={"magnifying-glass"}
          className="text-accent text-[1.4rem]"
        />
      </a>
    </div>
  );
}
