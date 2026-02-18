import { useEffect } from "react";
import { useLocation, useSearch } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();
  const [search] = useSearch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [search, location]);

  return null;
}
