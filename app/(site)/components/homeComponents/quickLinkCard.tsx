// interface QuickLinkCardProps {
//   imageSrc: string;
//   header: string;
//   subheader: string;
//   content: string;
//   cta?: string;
// }


// const QuickLinkCard: <QuickLinkCardProps> = ({ imageSrc, header, subheader, content, cta }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//       <img className="w-full h-48 object-cover" src={imageSrc} alt="Card image" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-700">{header}</h2>
//         <h3 className="text-lg text-gray-500 mt-2">{subheader}</h3>
//         <p className="text-gray-600 mt-4">{content}</p>
//         {cta && (
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">
//             {cta}
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default QuickLinkCard

import React from 'react';

interface QuickLinkCardProps {
  imageSrc: string;
  header: string;
  subheader: string;
  content: string;
  cta?: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ imageSrc, header, subheader, content, cta }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageSrc} alt="Card image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-700">{header}</h2>
        <h3 className="text-lg text-gray-500 mt-2">{subheader}</h3>
        <p className="text-gray-600 mt-4">{content}</p>
        {cta && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">
            {cta}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuickLinkCard;