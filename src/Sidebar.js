import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
import Card1 from "./images/Card1.png";
import Card2 from "./images/Card2.png";
import Card3 from "./images/Card3.png";
import Card4 from "./images/Card4.png";
import Card5 from "./images/Card5.png";
import Card6 from "./images/Card6.png";

import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({isOpen});

  return (
    <React.Fragment>
      <button
        {...getToggleProps({
          onClick: () => setOpen(oldOpen => !oldOpen),
        })}
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}><div>
        <div className="container">
    <div className="gallery-wrap">
    <div className="item item-1"></div>
    <div className="item item-2"></div>
    <div className="item item-3"></div>
    <div className="item item-4"></div>
    <div className="item item-5"></div>
    <div className="item item-6"></div>

  </div>
 </div>
      </div></section>
    </React.Fragment>
  );
}


export default Sidebar;