require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./routedup").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://devdominus.in")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();