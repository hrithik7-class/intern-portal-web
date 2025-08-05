function Card({ children, className = '' }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children }) {
  return <h3 className="text-3xl font-bold text-gray-900">{children}</h3>;
}

function CardContent({ children }) {
  return <div className="text-gray-600">{children}</div>;
}

function CartMix({children}){
    return <div className="flex  gap-4">{children}</div>
}

export { Card, CardHeader, CardTitle, CardContent , CartMix };