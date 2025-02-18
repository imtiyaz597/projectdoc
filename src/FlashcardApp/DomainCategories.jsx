const DomainCategories = ({ categories, onSelectCategory, setCurrentCardIndex }) => {
    const handleCategorySelect = (category) => {
      onSelectCategory(category);
      setCurrentCardIndex(0);  // ✅ Added
    };
  
    return (
      <div className="container text-center mt-4">
   
        <div className="row justify-content-center gap-3 mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card shadow-sm col-md-3 col-sm-6"
              style={{
                minWidth: "350px",
                height: "140px",
                backgroundColor: "#ffffff",
                color: "#000000",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onClick={() => handleCategorySelect(category)}  // ✅ Updated
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-xl">{category}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DomainCategories;
  