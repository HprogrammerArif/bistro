

const MenuItem = ({item}) => {
  const {name, recipe, image, price} = item;
  return (
    <div className="flex space-x-4">
      <img className=" rounded-b-full rounded-r-full w-[100px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;