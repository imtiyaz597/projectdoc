import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb style={{marginLeft:"15px", marginTop:"12px"}}>
      
      {pathnames.map((name, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb.Item key={index} active={index === pathnames.length - 1}>
            <Link to={to}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
