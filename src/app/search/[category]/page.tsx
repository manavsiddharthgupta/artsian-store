export default function Category({ params }: { params: { category: string } }) {
  return <p>{params.category}</p>;
}
