import { useNavigate } from "react-router-dom";

function MenuCard({ menu }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${menu.id}`);
  };

  return (
    <article onClick={handleClick} className="group cursor-pointer">
      {/* Image Card */}
      <div className="relative overflow-hidden rounded-[12px] border-2 border-[#d92d06] bg-[#fff7ef] p-2">
        <div className="overflow-hidden rounded-[8px]">
          <img
            src={menu.image}
            alt={menu.name}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <h3 className="text-sm font-medium text-black">{menu.name}</h3>

        <span className="text-sm font-medium text-black whitespace-nowrap">
          ¥ {menu.price.toFixed(2)}
        </span>
      </div>

      {/* Add to Cart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          // Cart functionality will be added later
        }}
        className="mt-3 w-full rounded-full bg-[#d92d06] px-4 py-2 text-xs font-semibold uppercase text-white transition hover:bg-[#b92504]"
      >
        Add to Cart
      </button>
    </article>
  );
}

export default MenuCard;
