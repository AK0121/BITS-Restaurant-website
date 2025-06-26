const menuItems = [
  {
    category: 'Starters',
    items: [
      { name: 'Paneer Tikka', price: '₹199', desc: 'Grilled cottage cheese with spices' },
      { name: 'Veg Manchurian', price: '₹179', desc: 'Fried balls in tangy sauce' },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Dal Makhani', price: '₹249', desc: 'Creamy black lentils slow-cooked' },
      { name: 'Shahi Paneer', price: '₹269', desc: 'Paneer in rich creamy gravy' },
    ],
  },
  {
    category: 'Breads',
    items: [
      { name: 'Butter Naan', price: '₹39', desc: 'Soft naan with butter' },
      { name: 'Garlic Naan', price: '₹49', desc: 'Naan topped with garlic & herbs' },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

      {menuItems.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4">{section.category}</h2>
          <ul className="space-y-4">
            {section.items.map((item, i) => (
              <li key={i} className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <span className="text-lg font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
