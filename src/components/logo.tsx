import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Logo() {
  return (
    <div className="bg-[rgb(233,247,243)] w-[200px] rounded-br-[50px] rounded-tl-[50px] pl-5">
      <a
        href="#home"
        className="font-serif text-[1.8rem] font-bold text-primary no-underline flex items-center gap-2 relative group"
      >
        <FontAwesomeIcon
          icon={faDraftingCompass}
          className="text-accent text-[1.4rem]"
        />
        Alcaazaar
        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-400 group-hover:w-full"></span>
      </a>
    </div>
  );
}

