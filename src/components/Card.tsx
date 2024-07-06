import React from "react";
import { Link } from "react-router-dom";
import { image_url } from "../../api/image";

interface CardProps {
  id: number;
  img: string[];
  title: string;
  text: string;
  cat: string;
  date: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ img, title, text, cat, date, id, onEdit, onDelete }: CardProps) => {
  const imageUrl = img ? `${image_url}/${img}` : 'path/to/placeholder/image.jpg'; // Use placeholder if img is empty
  console.log('Image URL:', imageUrl); // Debugging line

  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden w-[25rem]">
      <img src={imageUrl} alt="image" className="z-10 w-[25rem] h-auto object-cover" />
      <div className="p-4">
        <Link to={`/blogs/${id}`}>
          <h2 className="text-white text-xl font-bold cursor-pointer">{title}</h2>
        </Link>
        <p className="text-gray-400 mt-2">{text}</p>
        <div className="flex items-center justify-between my-[0.75rem]">
          <p className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">{cat}</p>
          <p className="text-sm font-semibold">{date}</p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEdit(id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
        <Link to={`/blogs/${id}`} className="text-read font-semibold text-md mt-4 inline-block">Read more</Link>
      </div>
    </div>
  );
};

export default Card;
